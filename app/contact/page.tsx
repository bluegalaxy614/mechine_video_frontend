import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import { Input, Textarea } from '@nextui-org/input';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <>
      <section className="h-[calc(100vh-90px)] flex flex-col">
        <div className="w-[958px] h-[628px] rounded-[36px] divider shadow-lg mx-auto bg-[#FFFFFF] my-[auto]">
          <div className="flex flex-col pt-[51px] px-[65px] mx-auto gap-[25px]">
            <h1 className="text-[32px] text-[#4291EF] font-bold">
              プロフィール編集
            </h1>
            <Divider className="bg-[#4291EF]" />
            <div>
              <p className="mb-2">お名前</p>
              <Input
                required
                width={798}
                height={41}
                placeholder="入力してください..."
                labelPlacement="outside"
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
              />
            </div>
            <div>
              <p className="mb-2">お問い合わせ内容</p>
              <Textarea
                required
                width={798}
                height={112}
                placeholder="入力してください..."
              />
            </div>
            <Button className="w-[141px] h-[26px] bg-[#4291EF] mt-[40px] mb-[71px] mx-auto">
              <p className=" text-[#FFFFFF] text-[20px]">提出</p>
              <Image width={28} height={28} src="/icons/icon-store.png" alt="" />
            </Button>
          </div>
        </div>
        <footer className="w-full flex items-center justify-center py-3 bg-[#4291EF]">
          <p className="text-white text-[20px]"> All rights reserved.</p>
        </footer>
      </section>
    </>
  );
}
