'use client';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import Image from 'next/image';

export default function PostPage() {
  return (
    <div className="min-h-[calc(100vh-90px)] flex flex-col lg:w-full xsm:w-fit justify-between">
      <section className="max-w-[1280px] mx-auto flex flex-col lg:mt-[85px] md:mt-[55px] sm:mt-[45px] xsm:mt-[35px]">
        <div className="flex flex-col">
          <div className="flex flex-col lg:px-[0px] md:px-[80px] sm:px-[60px] xsm:px-[40px]">
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

              <div className="flex flex-col gap-6 my-[40px] mx-auto">
                <div className="min-w-[320px] h-[41px]">
                  <p className="mb-2">ユーザー名</p>
                  <Input
                    fullWidth
                    placeholder="田中 太郎"
                    labelPlacement="outside"
                  />
                </div>

                <div className="max-w-[320px] h-[41px]">
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
              <Image
                width={28}
                height={28}
                src="/icons/icon-store.png"
                alt=""
              />
            </Button>
          </div>
        </div>
        <Divider />
        <div className="flex mt-[91px]">
          <div className="w-full flex flex-col lg:px-[0px] md:px-[80px] sm:px-[60px] xsm:px-[40px]">
            <h1 className="text-[32px] text-[#4291EF] font-bold">
              プロフィール編集
            </h1>

            <div className="w-full flex flex-wrap mt-[30px] gap-[30px]">
              <div className="w-[554px] h-[370px] my-[20px] rounded-[24px] bg-[#F4F4F4] pt-[49px] pb-[46px] pl-[55px] pr-[59px] mx-auto">
                <h1 className="text-[24px] text-[#4291EF] font-bold mb-[13px]">
                  無料プラン
                </h1>
                <Divider className="bg-[#4291EF]" />
                <p className="w-[440px] h-[140px] text-[#999999] text-[20px] mt-[25px]">
                  すべての動画を視聴可能ですが、各動画の視聴時間は10秒に制限されています。ただし、2025年12月末まで、無料プランでも全動画を制限なしで視聴できます。
                </p>
                <Button className="w-[185px] h-[31px] bg-[#4291EF] mt-[40px] mb-[71px]">
                  <p className="text-[#FFFFFF] text-[20px]">アップデート</p>
                  <Image
                    width={28}
                    height={28}
                    src="/icons/icon-store.png"
                    alt=""
                  />
                </Button>
              </div>

              <div className="w-[554px] h-[370px] my-[20px] rounded-[24px] bg-[#E4F1FF] pt-[49px] pb-[46px] pl-[55px] pr-[59px] border border-[#4291EF] border-[6px] mx-auto">
                <h1 className="text-[24px] text-[#4291EF] font-bold mb-[13px]">
                  有料プラン
                </h1>
                <Divider className="bg-[#4291EF]" />
                <p className="w-[440px] h-[140px] text-[#999999] text-[20px] mt-[25px]">
                  月額8,000円で、すべての動画をフルで視聴可能。制限なくコンテンツを楽しむことができ、修理技術を学ぶには最適なプランです。
                </p>
                <Button className="w-[185px] h-[31px] bg-[#4291EF] mt-[40px] mb-[71px]">
                  <p className="text-[#FFFFFF] text-[20px]">アップデート</p>
                  <Image
                    width={28}
                    height={28}
                    src="/icons/icon-store.png"
                    alt=""
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full flex items-center justify-center py-3 bg-[#4291EF]">
        <p className="text-white text-[20px]"> All rights reserved.</p>
      </footer>
    </div>
  );
}
