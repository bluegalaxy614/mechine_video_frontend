'use client';
import { sendAskMessage } from '@/lib/api';
import { useStore } from '@/store/store';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:5000';

const ChatInput = ({ addNewMessage }) => {
  const [chat, setChat] = useState('');
  const user = useStore((state) => state.user);
  const setErrorMessage = useStore((state) => state.setErrorMessage);
  const setMessage = useStore((state) => state.setMessage);
  const router = useRouter();
  useEffect(() => {
    if(!user){
      router.push('/login');
    }
  },[user]);
  const token = user?.token;

  // const askMessage = async (chat) => {
  //   try {
  //     const res = await sendAskMessage({
  //       content: chat,
  //     });
  //     setMessage(res.message);
  //   } catch (error) {
  //     setErrorMessage(error);
  //   }
  // };
  // const handleCheckout = async (chat) => {
  //   // setLoading(true);
  //   const stripe = await stripePromise;

  //   try {
  //     const response = await fetch(`${API_URL}/api/payment/stripe`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`,
  //       },
  //     });

  //     if (!response.ok) {
  //       setErrorMessage('Failed to create checkout session');
  //       return;
  //     }

  //     const { id } = await response.json();

  //     const { error } = await stripe.redirectToCheckout({ sessionId: id });
  //     if (error) {
  //       setErrorMessage('Stripe checkout failed');
  //     } else {
  //       setMessage('Success');
  //       askMessage(chat);
  //     }
  //   } catch (err) {
  //     setErrorMessage('Failed to initiate checkout');
  //   } finally {
  //     // setLoading(false);
  //   }
  // };

  const askMessage = async (chat) => {
    try {
      const res = await sendAskMessage({
        content: chat,
      });

      // New message is added to the list
      const newMessage = {
        from: 'user', // Assuming the user is sending the message
        content: chat,
        date: new Date().toISOString(), // Use current timestamp
      };

      addNewMessage(newMessage); // Call parent function to update messages
      setMessage(res.message);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const handleSendMessage = () => {
    if (chat.trim()) {
      askMessage(chat);
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
            className="flex justify-center items-center rounded-full w-[80px] bg-[#4291EF]"
            onClick={handleSendMessage}
            isDisabled={chat ? false : true}
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

export default ChatInput;