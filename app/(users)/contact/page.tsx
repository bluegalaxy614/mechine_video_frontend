'use client';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import { Input, Textarea } from '@nextui-org/input';
import Image from 'next/image';
import emailjs from 'emailjs-com';  // Import EmailJS
import { useState } from 'react';
import { useStore } from '@/store/store';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const setMessage = useStore((state) => state.setMessage);
  const setErrorMessage = useStore((state) => state.setErrorMessage);

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS integration
    const templateParams = {
      from_name: name,
      from_email: email,
      message: content,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EmailJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EmailJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EmailJS_USER_ID,
      )
      .then(
        (response) => {
          setMessage("Email sent successfully!")
        },
        (err) => {
          console.error('FAILED...', err);
          setErrorMessage("Failed to send email.")
        }
      );
  };

  return (
    <section className="h-[calc(100vh-90px)] flex flex-col justify-between">
      <div className="lg:w-[958px] md:w-[850px] sm:w-[740px] h-[628px] rounded-[36px] divider shadow-lg mx-auto bg-[#FFFFFF] my-[auto]">
        <form onSubmit={handleSubmit} className="flex flex-col pt-[51px] px-[65px] mx-auto gap-[25px]">
          <h1 className="text-[32px] text-[#4291EF] font-bold">プロフィール編集</h1>
          <Divider className="bg-[#4291EF]" />
          <div>
            <p className="mb-2">お名前</p>
            <Input
              required
              width={798}
              height={41}
              placeholder="入力してください..."
              labelPlacement="outside"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <p className="mb-2">メールアドレス</p>
            <Input
              required
              width={798}
              height={41}
              placeholder="入力してください..."
              labelPlacement="outside"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p className="mb-2">お問い合わせ内容</p>
            <Textarea
              required
              width={798}
              height={112}
              placeholder="入力してください..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-[141px] h-[26px] bg-[#4291EF] mt-[40px] mb-[71px] mx-auto">
            <p className="text-[#FFFFFF] text-[20px]">提出</p>
            <Image width={28} height={28} src="/icons/icon-store.png" alt="" />
          </Button>
        </form>
      </div>
      <footer className="w-full flex items-center justify-center py-3 bg-[#4291EF]">
        <p className="text-white text-[20px]"> All rights reserved.</p>
      </footer>
    </section>
  );
}