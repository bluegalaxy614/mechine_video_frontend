'use client';
import AdminChat from '@/components/adminChat';
import { DeleteIcon } from '@/components/icons';
import { deleteAllChats, getAllMessage, viewMessages } from '@/lib/api';
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { useEffect, useState } from 'react';
import { useStore } from '@/store/store';
import { Message } from '@/types';
import { Badge } from "@nextui-org/badge";

export default function MessagePage() {
  const [allMessage, setAllMessage] = useState<Message[] | null>(null);
  const [userId, setUserId] = useState<string>('');
  const [chats, setChats] = useState<Message | null>(null);
  const user = useStore((state) => state.user);

  const fetchData = async () => {
    try {
      const { messages } = await getAllMessage();
      setAllMessage(messages);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (userId && allMessage) {
      const userChats =
        allMessage.find((item) => item.userId === userId) || null;
      setChats(userChats);
    }
  }, [userId, allMessage]);

  const handleClick = (id) => {
    setUserId(id);
    setAllMessage((prevMessages) => {
      return prevMessages.map((item) =>
        item.userId === id ? { ...item, unread: 0 } : item
      );
    });
    const viewMsg = async (id) => {
      try {
        const res = await viewMessages({ userId: id });

      } catch (error) {
        console.log(error);
      }
    };
    viewMsg(id);
  };

  const handleDeleteChats = async () => {
    try {
      const res = await deleteAllChats({ userId: userId });
      fetchData()
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full h-[calc(100vh-90px)] flex">
      <div className="fit-content px-[10px] border-r-2">
        <div className="flex flex-col justify-start align-center p-[10px] gap-4">
          {allMessage?.map((item) => (
            <div
              onClick={() => handleClick(item.userId)}
              key={item.userId}
              className={`cursor-pointer hover:bg-[#E4F1FF] shadow-md fit-content h-[81px] mx-auto rounded-lg flex justify-start items-center px-[5px] gap-2 ${item.userId === userId ? 'bg-[#E4F1FF]' : ''}`}
            >
              <Badge content={item.unread} isInvisible={item.unread > 0 ? false : true} color="danger">
                <Avatar
                  src={item.userAvatar || '/profile/user.png'}
                  name={item.userName}
                  size="lg"
                  alt="user"
                  className="flex-none w-[60px] h-[60px]"
                />
              </Badge>
              <p className="hidden sm:block text-[20px] min-w-[100px] text-center text-pretty">
                {item.userName}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grow">
        <div className="flex flex-col">
          <div className="w-full h-[71px] border-b-2">
            <div className="flex h-full justify-end items-center gap-6 px-[30px]">
              <p className="text-[20px] text-[#ED1C24]">会話を削除しますか？</p>
              <Button
                onClick={handleDeleteChats}
                isDisabled={userId ? false : true}
                className="flex justify-center items-center rounded-md w-[30px] h-[30px] bg-red-300"
              >
                <DeleteIcon />
              </Button>
            </div>
          </div>

          <div className="w-full h-[calc(100vh-90px-71px-98px)] overflow-y-scroll grow px-[56px] py-[34px]">
            {chats?.messages?.map((item, index) => (
              <div key={index} className="flex flex-col min-w-[370px] gap-[20px] py-[25px]">
                <div className="flex justify-start items-center rounded-full min-w-[191px] h-[59px] p-1 hover:pointer gap-3">
                  <Avatar
                    src={
                      item.from === 'admin'
                        ? user.avatar || '/profile/avatar3.png'
                        : chats.userAvatar || '/profile/user.png'
                    }
                    name={chats.userName}
                    size="lg"
                    alt="user"
                    className="flex-none w-[60px] h-[60px]"
                  />
                  <span className="text-[20px] text-[#1F2B3E]">
                    {item.from === 'admin' ? '管理チーム' : chats.userName}
                  </span>
                </div>

                <div
                  className={`relative w-full p-[28px] gap-[20px] rounded-lg ${item.from === 'admin' ? 'bg-[#E4F1FF]' : 'bg-[#F4F4F4]'}`}
                >
                  <p className="text-[14px]">
                    {item.content || 'No message content'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-[98px] flex-none border-t-2">
            <div className="flex h-full justify-end items-center gap-6 px-[30px]">
              <AdminChat userId={userId} setChats={setChats} />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-[300px] flex-none border-l-2 py-[5px]">
        <div className="flex flex-col max-w-md mx-auto p-4 rounded-lg gap-8">
          <h1 className="text-xl font-bold text-center mb-4 text-[#4291EF]">
            お問い合わせ内容
          </h1>
          <div className="mb-2">
            <span className="font-semibold">修理したい機械名:</span>
            <p>Komatsu PC210</p>
          </div>
          <div className="mb-2">
            <span className="font-semibold">型式:</span>
            <p>PC210-10</p>
          </div>
          <div className="mb-2">
            <span className="font-semibold">メーカー:</span>
            <p>Komatsu</p>
          </div>
          <div>
            <span className="font-semibold">内容:</span>
            <p>
              動画「コマツPC210の油圧ポンプ交換手順」を見ましたが、交換中にネジが固くて外れません。動画では特別な工具を使っているようですが、詳細な工具名と、どのようにネジを外せば良いのかを教えていただけますか？
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
}
