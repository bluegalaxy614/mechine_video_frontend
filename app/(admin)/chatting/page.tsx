'use client';
import { DeleteIcon } from '@/components/icons';
import { getAllMessage, sendMessages } from '@/lib/api';
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import { Input } from '@nextui-org/input';
import { useEffect, useState } from 'react';

interface Message {
  userId: string;
  userName: string;
  userAvatar: string;
  message: {
    from: string;
    content: string;
    date: string;
  }[];
  unread: number;
}

export default function ChattingPage() {
  const [allMessage, setAllMessage] = useState<Message[] | null>(null);
  const [userId, setUserId] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSendClick = () => {
    console.log(inputValue);
    const sendMessage = async () => {
      const data = {
        userId: userId,
        from: "admin",
        content: inputValue,
      }
      try {
        const res = await sendMessages(data);
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    sendMessage();
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllMessage();
        const { messages } = res.data;
        setAllMessage(messages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (userId && allMessage) {
      const userMessages = allMessage.filter(item => item.userId === userId);
      setMessages(userMessages);
    }
  }, [userId, allMessage]);

  return (
    <section className="w-full h-[calc(100vh-90px)] flex">
      <div className="w-[240px] flex-none border-r-2">
        <div className="flex flex-col p-[10px] gap-4">
          {allMessage?.map(item => (
            <Button
              onClick={() => {
                setUserId(item.userId)
              }}
              key={item.userId}
              className="w-[223px] h-[81px] mx-auto bg-[#E4F1FF] rounded-md flex justify-start items-center px-[5px] gap-6"
            >
              <Avatar
                src={item.userAvatar || '/default-avatar.png'}  // Fallback image
                name={item.userName}
                size="lg"
                alt="user"
              />
              <p className="text-[20px] text-center">{item.userName}</p>
              {item.unread > 0 && (
                <span className="bg-[#ED1C24] rounded-full w-[21px] h-[21px] text-white flex justify-center items-center">
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

          <div className="w-full h-[calc(100vh-90px-71px-98px)] overflow-y-scroll grow px-[56px] pt-[34px]">
            {messages?.map(item => (
              <div key={item.userId}>
                <div className="flex justify-center items-center rounded-full w-[191px] h-[59px] p-1 hover:pointer my-[20px]">
                  <Image
                    width={59}
                    height={59}
                    className="h-[59px] w-[59px] bg-white rounded-full p-[8px] border-2 border-[#4291EF]"
                    src={item.message[0]?.from === 'admin' ? '/icons/icon-ask.png' : item.userAvatar}
                    alt="profile"
                  />
                  <span className="mx-auto text-[20px] text-[#1F2B3E]">
                    {item.message[0]?.from === 'admin' ? '管理チーム' : item.userName}
                  </span>
                </div>

                <div className="relative bg-[#E4F1FF] w-full p-[28px] gap-[20px]">
                  <p className="text-[14px]">{item.message[0]?.content || 'No message content'}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-[98px] flex-none border-t-2">
            <div className="flex h-full justify-end items-center gap-6 px-[30px]">
              <Input
                className="max-w-[1130px] h-[54px] rounded-md"
                value={inputValue}
                onChange={handleInputChange}
                isDisabled={userId === '' ? true : false}
              />
              <Button
                className="flex justify-center items-center rounded-full w-[80px] h-[54px] bg-[#4291EF]"
                onClick={handleSendClick}
                isDisabled={userId === '' ? true : false}
              >
                <Image width={28} height={28} src="/icons/icon-send.png" alt="send" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[300px] flex-none border-l-2"></div>
    </section>
  );
}