'use client';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import Image from 'next/image';

export default function PostPage() {
  return (
    <div className="h-[calc(100vh-90px)]">
      <div className="w-full flex mt-[85px] flex-col w-[1440px]">
        <div className="flex mx-auto">
          {/* Left side content */}
          <div className="flex flex-col">
            <h1 className="text-[32px] text-[#4291EF] font-bold">
              プロフィール編集
            </h1>

            <div className="flex mt-[40px] space-x-12">
              {/* Left form inputs */}
              <div className="w-[554px] flex flex-col gap-6">
                <div>
                  <Image width={248} height={248} src="/profile/3.png" alt="" />
                  <p className='text-[#FFFFFF] text-[20px] bg-[#4291EF] w-[248px] h-[51px] rounded-b-[21px]'>アバターアップロード</p>
                </div> 
              </div>

              {/* Image upload + Youtube Link */}
              <div className="w-[554px] flex flex-col gap-6">
                <div>
                  <p className="mb-2">ユーザー名</p>
                  <Input
                    width={387}
                    height={41}
                    placeholder="田中 太郎"
                    labelPlacement="outside"
                  />
                </div>

                <div>
                  <p className="mb-2">メール</p>
                  <Input
                    width={387}
                    height={41}
                    placeholder="taro.tanaka@example.com"
                    labelPlacement="outside"
                  />
                </div>
              </div>
            </div>
            <Button className="w-[185px] h-[31px] bg-[#4291EF] mt-[40px] mb-[71px]">
              <p className=" text-[#FFFFFF] text-[20px]">アップデート</p>
              <Image width={28} height={28} src="/icons/icon-store.png" alt="" />
            </Button>
          </div>
        </div>
        <Divider />
        <div className="flex mt-[91px] mx-auto">
          {/* Left side content */}
          <div className="w-full flex flex-col">
            <h1 className="text-[32px] text-[#4291EF] font-bold">
              プロフィール編集
            </h1>

            <div className="flex mt-[40px] space-x-12">
              {/* Left form inputs */}
              <div className="w-[554px] h-[370px] rounded-[24px] bg-[#F4F4F4] pt-[49px] pb-[46px] pl-[55px] pr-[59px]">
                <h1 className="text-[24px] text-[#4291EF] font-bold mb-[13px]">
                  無料プラン
                </h1>
                <Divider className="bg-[#4291EF]" />
                <p className="w-[440px] h-[140px] text-[#999999] text-[20px] mt-[25px]">
                  すべての動画を視聴可能ですが、各動画の視聴時間は10秒に制限されています。ただし、2025年12月末まで、無料プランでも全動画を制限なしで視聴できます。
                </p>
                <Button className="w-[185px] h-[31px] bg-[#4291EF] mt-[40px] mb-[71px]">
                  <p className="text-[#FFFFFF] text-[20px]">アップデート</p>
                  <Image width={28} height={28} src="/icons/icon-store.png" alt="" />
                </Button>
              </div>

              {/* Image upload + Youtube Link */}
              <div className="w-[554px] h-[370px] rounded-[24px] bg-[#F4F4F4] pt-[49px] pb-[46px] pl-[55px] pr-[59px] border border-[#4291EF] border-[6px]">
                <h1 className="text-[24px] text-[#4291EF] font-bold mb-[13px]">
                  無料プラン
                </h1>
                <Divider className="bg-[#4291EF]" />
                <p className="w-[440px] h-[140px] text-[#999999] text-[20px] mt-[25px]">
                  すべての動画を視聴可能ですが、各動画の視聴時間は10秒に制限されています。ただし、2025年12月末まで、無料プランでも全動画を制限なしで視聴できます。
                </p>
                <Button className="w-[185px] h-[31px] bg-[#4291EF] mt-[40px] mb-[71px]">
                  <p className="text-[#FFFFFF] text-[20px]">アップデート</p>
                  <Image width={28} height={28} src="/icons/icon-store.png" alt="" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full flex items-center justify-center py-3 bg-[#4291EF]">
        <p className="text-white text-[20px]"> All rights reserved.</p>
      </footer>
    </div>
  );
}
