'use client';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import Image from 'next/image';

export default function PostPage() {
  return (
    <div className="min-h-[calc(100vh-90px)] flex flex-col justify-between">
      <section className="max-w-[1280px] mx-auto flex justify-center items-center lg:mt-[85px] md:mt-[55px] sm:mt-[45px] xsm:mt-[35px]">
        <div className="flex flex-col lg:w-[1280px] lg:px-[0px] md:px-[80px] sm:px-[60px] xsm:px-[40px]">
          <h1 className="text-[30px] text-[#4291EF] font-bold">
            プロフィール編集
          </h1>

          <div className="w-full flex grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 gap-3">
            <div className="flex my-[40px] mx-auto">
              <div className="relative rounded-[21px] border border-[#4291EF] border-[4px] flex justify-center items-center">
                <Image width={248} height={248} src="/profile/3.png" alt="" />
                <p className="absolute bottom-[0px] text-[#FFFFFF] text-[20px] bg-[#4291EF] w-[248px] h-[51px] rounded-b-[12px] flex justify-center items-center mt-[-21px] z-[1000]">
                  アバターアップロード
                </p>
              </div>
            </div>

            <div className="flex flex-col my-[40px] mx-auto gap-10">
              <div className="min-w-[320px] h-[41px] gap-6">
                <p className="mb-2">ユーザー名</p>
                <Input
                  fullWidth
                  placeholder="田中 太郎"
                  labelPlacement="outside"
                />
              </div>

              <div className="max-w-[320px] h-[41px] gap-6">
                <p className="mb-2">メール</p>
                <Input
                  fullWidth
                  placeholder="taro.tanaka@example.com"
                  labelPlacement="outside"
                />
              </div>
            </div>
          </div>
          <Button className="w-[185px] h-[31px] bg-[#4291EF] mt-[40px] mb-[71px] mx-auto">
            <p className="text-[#FFFFFF] text-[20px]">アップデート</p>
            <Image width={28} height={28} src="/icons/icon-store.png" alt="" />
          </Button>
        </div>
      </section>
      <footer className="w-full flex items-center justify-center py-3 bg-[#4291EF]">
        <p className="text-white text-[20px]"> All rights reserved.</p>
      </footer>
    </div>
  );
}
