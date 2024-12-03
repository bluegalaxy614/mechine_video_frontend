'use client';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import { Input, Textarea } from '@nextui-org/input';
import Image from 'next/image';
import emailjs, { send } from 'emailjs-com'; // Import EmailJS
import { useState } from 'react';
import { useStore } from '@/store/store';
import { useRouter } from 'next/navigation';

export default function ContactSuccessPage({
    params,
  }: {
    params: { slug: string[] }
  }){
    const [name, content] = params.slug; 
    const sender = decodeURIComponent(name);
    const message = decodeURIComponent(content);
    const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/contact');
  };

  return (
    <section className="h-[calc(100vh-90px)] flex flex-col justify-between">
      <div className="lg:w-[958px] md:w-[850px] sm:w-[740px] h-[628px] rounded-[36px] divider shadow-lg mx-auto bg-[#FFFFFF] my-[auto]">
        <div
          className="flex flex-col pt-[51px] px-[65px] mx-auto gap-[25px]"
        >
          <h1 className="text-[32px] text-[#4291EF] font-bold">
            お問い合わせが正常に完了しました。
          </h1>
          <Divider className="bg-[#4291EF]" />
          <div>
            <p className="mb-2">お名前 : <strong>{sender}</strong></p>
          </div>
          <div>
            <p className="mb-2">お問い合わせ内容</p>
            <p
              className="bg-[#F4F4F4] w-full rounded-[20px] p-[20px] h-[225px]"
            >
                {message}
            </p>
          </div>
          <Button
            onClick={handleSubmit}
            className="w-[141px] h-[26px] bg-[#4291EF] mt-[40px] mb-[71px] mx-auto"
          >
            <p className="text-[#FFFFFF] text-[20px]">後退</p>
            <Image width={28} height={28} src="/icons/icon-store.png" alt="storeIcon" />
          </Button>
        </div>
      </div>
      <footer className="w-full flex items-center justify-center py-3 bg-[#4291EF]">
        <p className="text-white text-[20px]"> All rights reserved.</p>
      </footer>
    </section>
  );
}
