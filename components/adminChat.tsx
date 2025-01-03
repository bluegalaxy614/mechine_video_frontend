'use client';
import { sendAnswerMessage } from '@/lib/api';
import { useStore } from '@/store/store';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import { useState } from 'react';
import { Message } from '@/types';
interface AdminChatProps {
  userId: string;
  setChats: React.Dispatch<React.SetStateAction<Message | null>>;
}

const AdminChat = ({ userId, setChats }: AdminChatProps) => {
  const [chat, setChat] = useState('');

  const setErrorMessage = useStore((state) => state.setErrorMessage);
  const setMessage = useStore((state) => state.setMessage);

  const askMessage = async (chat) => {
    try {
      const res = await sendAnswerMessage({
        userId: userId,
        content: chat,
      });
      setMessage(res.message);
    } catch (error) {
      setErrorMessage(error);
    }
  };
  const handleSendMessage = () => {
    if (chat.trim()) {
      askMessage(chat);
      setChats((prevState) => {
        if (!prevState) return prevState; // Return the previous state if it's null or undefined

        // Copy the object
        const updatedChats = { ...prevState };
        updatedChats.messages = updatedChats.messages
          ? [...updatedChats.messages]
          : [];

        updatedChats.messages.push({
          from: 'admin',
          content: chat,
          date: new Date().toISOString(),
        });

        return updatedChats;
      });
      setChat('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors bg-[#f4f4f4] dark:bg-token-main-surface-secondary">
      <div className="flex items-end gap-1.5 pl-4 md:gap-2">
        {/* Message Input Field */}
        <div className="flex min-w-0 flex-1 flex-col">
          <textarea
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            className="block h-10 w-full resize-none border-0 focus-visible:outline-none bg-transparent px-0 py-2 text-token-text-primary placeholder:text-token-text-secondary"
            placeholder="Message to Admin"
            rows={1}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* Send Button */}
        <div className="min-w-8">
          <Button
            className="flex justify-center items-center cursor-pointer rounded-full w-[80px] bg-[#4291EF]"
            onClick={handleSendMessage}
            isDisabled={userId ? false : true}
          >
            <Image
              width={28}
              height={28}
              src="/icons/icon-send.png"
              alt="send"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminChat;
