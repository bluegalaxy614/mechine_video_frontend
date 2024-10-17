'use client';
import ChatInput from '@/components/chatInput';
import { getUserMessage } from '@/lib/api';
import { Avatar } from '@nextui-org/avatar';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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

export default function AskPage() {
  const [messages, setMessages] = useState<Message>(null);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await getUserMessage();
        const { chats } = res;
        setMessages(chats);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMessage()
  })
  return (
    <div className="h-[calc(100vh-90px)] max-w-[1280px] flex flex-col mx-auto lg:px-[5px] md:px-[30px] sm:px-[40px] xsm:px-[30px]">
      <div className="w-full">
        <h1 className="text-[32px] text-[#4291EF] font-bold my-[39px]">
          問題解決サポート申請
        </h1>
        <p className="text-[20px]">
          動画で解決しない場合、管理チームにお問い合わせください。1件の問題ごとに50,000円の料金が発生します。詳細を入力し、確認ボタンを押してサポートを開始してください。
        </p>
      </div>
      <div className="flex flex-col">
        <div className="h-[516px] shadow-md bg-[#F4F4F4] mt-[30px] overflow-y-scroll p-[28px] rounded-lg">
          {
            messages?.messages.map((item, index) => (
              <div key={index}>
                <div className="flex justify-start items-center rounded-full min-w-[191px] h-[59px] p-1 hover:pointer my-[20px] gap-6">
                  <Avatar
                    size="md"
                    className="flex-none w-[60px] h-[60px]"
                    src={item.from === 'admin' ? '/icons/icon-ask.png' : (messages.userAvatar || '/profile/user.png')}
                    alt="avatar"
                  />
                  <span className="text-[20px] text-[#1F2B3E]">
                    {item.from === 'admin' ? "管理チーム" : messages.userName}
                  </span>
                </div>
                <div className={`relative w-full p-[28px] gap-[20px] rounded-lg ${item.from === "admin" ? "bg-[#E4F1FF]" : "bg-[#daebee]"}`}>
                  <p className="text-[14px]">
                    {item.content}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
        <div className="h-[98px] border-t-2 w-full">
          <div className="flex h-full justify-end items-center gap-6">
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  );
}
