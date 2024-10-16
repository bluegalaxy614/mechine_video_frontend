'use client';
import AdminChat from '@/components/adminChat';
import { DeleteIcon } from '@/components/icons';
import { getAllMessage } from '@/lib/api';
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { useEffect, useState } from 'react';
import { useStore } from '@/store/store';

interface Message {
  userId: string;
  userName: string;
  userAvatar: string;
  messages: {
    from: string;
    content: string;
    date: string;
  }[];
  unread: number;
}

export default function MessagePage() {
  const [allMessage, setAllMessage] = useState<Message[] | null>(null);
  const [userId, setUserId] = useState<string>('');
  const [chats, setChats] = useState<Message | null>(null);
  const user = useStore((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { messages } = await getAllMessage();
        setAllMessage(messages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (userId && allMessage) {
      const userChats = allMessage.find((item) => item.userId === userId) || null;
      setChats(userChats);
    }
  }, [userId, allMessage]);


  return (
    <section className="w-full h-[calc(100vh-90px)] flex">
      <div className="w-[240px] flex-none border-r-2">
        <div className="flex flex-col p-[10px] gap-4">
          {allMessage?.map((item) => (
            <Button
              onClick={() => setUserId(item.userId)}
              key={item.userId}
              className="w-[223px] h-[81px] mx-auto bg-[#E4F1FF] rounded-lg flex justify-start items-center px-[5px] gap-2"
            >
              <Avatar
                src={item.userAvatar || '/profile/user.png'}
                name={item.userName}
                size="lg"
                alt="user"
                className="flex-none w-[60px] h-[60px]"
              />
              <p className="grow text-[20px] text-center text-pretty">{item.userName}</p>
              {item.unread > 0 && (
                <span className="flex-none bg-[#ED1C24] rounded-full w-[21px] h-[21px] text-white flex justify-center items-center">
                  {item.unread}
                </span>
              )}
            </Button>
          ))}
        </div>
      </div>

      <div className="grow">
        <div className="flex flex-col">
          <div className="w-full h-[71px] border-b-2">
            <div className="flex h-full justify-end items-center gap-6 px-[30px]">
              <p className="text-[20px] text-[#ED1C24]">会話を削除しますか？</p>
              <div className="!w-[30px] !h-[30px] bg-red-300 flex justify-center items-center rounded-md">
                <DeleteIcon />
              </div>
            </div>
          </div>

          <div className="w-full h-[calc(100vh-90px-71px-98px)] overflow-y-scroll grow px-[56px] py-[34px]">
            {chats?.messages?.map((item, index) =>
            (
              <div key={index} className="flex flex-col gap-[20px] py-[25px]">
                <div className="flex justify-start items-center rounded-full min-w-[191px] h-[59px] p-1 hover:pointer gap-3">
                  <Avatar
                    src={item.from === 'admin' ? (user.avatar || '/profile/avatar3.png') : (chats.userAvatar || '/profile/user.png')}
                    name={chats.userName}
                    size="lg"
                    alt="user"
                    className="flex-none w-[60px] h-[60px]"
                  />
                  <span className="text-[20px] text-[#1F2B3E]">
                    {item.from === 'admin' ? '管理チーム' : chats.userName}
                  </span>
                </div>

                <div className={`relative w-full p-[28px] gap-[20px] rounded-lg ${item.from === "admin" ? "bg-[#E4F1FF]" : "bg-[#F4F4F4]"}`}>
                  <p className="text-[14px]">{item.content || 'No message content'}</p>
                </div>
              </div>
            )
            )}
          </div>

          <div className="w-full h-[98px] flex-none border-t-2">
            <div className="flex h-full justify-end items-center gap-6 px-[30px]">
              <AdminChat userId={userId}/>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[300px] flex-none border-l-2"></div>
    </section>
  );
}