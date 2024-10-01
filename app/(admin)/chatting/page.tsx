'use client';
import { DeleteIcon } from '@/components/icons';
import { Avatar } from '@nextui-org/avatar';
import { Badge } from '@nextui-org/badge';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import { Image } from '@nextui-org/image';
import { Input } from '@nextui-org/input';

export default function ChattingPage() {
  return (
    <section className="w-full h-[calc(100vh-90px)] flex">
      <div className="w-[240px] flex-none border-r-2">
        <div className="flex flex-col p-[10px] gap-4">
          <div className="w-[223px] h-[81px] mx-auto bg-[#E4F1FF] rounded-md flex justify-start items-center px-[5px] gap-6">
            <Avatar src="/profile/1.png" name="高橋 文哉" size="lg" />
            <p className="text-[20px] text-center">高橋 文哉</p>
            <span className="bg-[#ED1C24] rounded-full w-[21px] h-[21px] text-white flex justify-center items-center">
              4
            </span>
          </div>
          <div className="w-[223px] h-[81px] mx-auto bg-[#E4F1FF] rounded-md flex justify-start items-center px-[5px] gap-6">
            <Avatar src="/profile/1.png" name="高橋 文哉" size="lg" />
            <p className="text-[20px] text-center">高橋 文哉</p>
            <span className="bg-[#ED1C24] rounded-full w-[21px] h-[21px] text-white flex justify-center items-center">
              4
            </span>
          </div>
          <div className="w-[223px] h-[81px] mx-auto bg-[#E4F1FF] rounded-md flex justify-start items-center px-[5px] gap-6">
            <Avatar src="/profile/1.png" name="高橋 文哉" size="lg" />
            <p className="text-[20px] text-center">高橋 文哉</p>
            <span className="bg-[#ED1C24] rounded-full w-[21px] h-[21px] text-white flex justify-center items-center">
              4
            </span>
          </div>
          <div className="w-[223px] h-[81px] mx-auto bg-[#E4F1FF] rounded-md flex justify-start items-center px-[5px] gap-6">
            <Avatar src="/profile/1.png" name="高橋 文哉" size="lg" />
            <p className="text-[20px] text-center">高橋 文哉</p>
            <span className="bg-[#ED1C24] rounded-full w-[21px] h-[21px] text-white flex justify-center items-center">
              4
            </span>
          </div>
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
            <div>
              <div className="flex justify-center items-center rounded-full w-[191px] h-[59px] p-1 hover:pointer my-[20px]">
                <Image
                  width={59}
                  height={59}
                  className="h-[59px] w-[59px]  bg-white rounded-full p-[8px] border-2 border-[#4291EF]"
                  src="/icons/icon-ask.png"
                  alt=""
                />
                <span className="mx-auto text-[20px] text-[#1F2B3E]">
                  管理チーム
                </span>
              </div>
              <div className="relative bg-[#E4F1FF] w-full p-[28px] gap-[20px]">
                {/* <p className="alsolute right-0 top-[-20px] text-[14px]">2024-9-24 09:21</p> */}
                <p className="text-[14px]">
                  お問い合わせありがとうございます。ネジが固い場合、トルクレンチやインパクトドライバーの使用を推奨します。動画で使用しているのは「KTC
                  トルクレンチ」です。詳しい使用方法については別途動画を用意しておりますので、ご参照ください。
                  お問い合わせありがとうございます。ネジが固い場合、トルクレンチやインパクトドライバーの使用を推奨します。動画で使用しているのは「KTC
                  トルクレンチ」です。詳しい使用方法については別途動画を用意しておりますので、ご参照ください。
                  お問い合わせありがとうございます。ネジが固い場合、トルクレンチやインパクトドライバーの使用を推奨します。動画で使用しているのは「KTC
                  トルクレンチ」です。詳しい使用方法については別途動画を用意しておりますので、ご参照ください。
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center rounded-full w-[191px] h-[59px] p-1 hover:pointer my-[20px]">
                <Image
                  width={59}
                  height={59}
                  className="h-[59px] w-[59px]  bg-white rounded-full p-[8px] border-2 border-[#4291EF]"
                  src="/profile/3.png"
                  alt=""
                />
                <span className="mx-auto text-[20px] text-[#1F2B3E]">
                  管理チーム
                </span>
              </div>
              <div className="bg-[#E4F1FF] w-full p-[28px] gap-[20px]">
                {/* <p className="alsolute right-0 top-[-20px] text-[14px]">2024-9-24 09:21</p> */}
                <p className="text-[14px]">
                  お問い合わせありがとうございます。ネジが固い場合、トルクレンチやインパクトドライバーの使用を推奨します。動画で使用しているのは「KTC
                  トルクレンチ」です。詳しい使用方法については別途動画を用意しておりますので、ご参照ください。
                  お問い合わせありがとうございます。ネジが固い場合、トルクレンチやインパクトドライバーの使用を推奨します。動画で使用しているのは「KTC
                  トルクレンチ」です。詳しい使用方法については別途動画を用意しておりますので、ご参照ください。
                  お問い合わせありがとうございます。ネジが固い場合、トルクレンチやインパクトドライバーの使用を推奨します。動画で使用しているのは「KTC
                  トルクレンチ」です。詳しい使用方法については別途動画を用意しておりますので、ご参照ください。
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center rounded-full w-[191px] h-[59px] p-1 hover:pointer my-[20px]">
                <Image
                  width={59}
                  height={59}
                  className="h-[59px] w-[59px]  bg-white rounded-full p-[8px] border-2 border-[#4291EF]"
                  src="/icons/icon-ask.png"
                  alt=""
                />
                <span className="mx-auto text-[20px] text-[#1F2B3E]">
                  管理チーム
                </span>
              </div>
              <div className="relative bg-[#E4F1FF] w-full p-[28px] gap-[20px]">
                {/* <p className="alsolute right-0 top-[-20px] text-[14px]">2024-9-24 09:21</p> */}
                <p className="text-[14px]">
                  お問い合わせありがとうございます。ネジが固い場合、トルクレンチやインパクトドライバーの使用を推奨します。動画で使用しているのは「KTC
                  トルクレンチ」です。詳しい使用方法については別途動画を用意しておりますので、ご参照ください。
                  お問い合わせありがとうございます。ネジが固い場合、トルクレンチやインパクトドライバーの使用を推奨します。動画で使用しているのは「KTC
                  トルクレンチ」です。詳しい使用方法については別途動画を用意しておりますので、ご参照ください。
                  お問い合わせありがとうございます。ネジが固い場合、トルクレンチやインパクトドライバーの使用を推奨します。動画で使用しているのは「KTC
                  トルクレンチ」です。詳しい使用方法については別途動画を用意しておりますので、ご参照ください。
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[98px] flex-none border-t-2">
            <div className="flex h-full justify-end items-center gap-6 px-[30px]">
              <Input className="max-w-[1130px] h-[54px] rounded-md" />
              <Button className="flex justify-center items-center rounded-full w-[80px] h-[54px] bg-[#4291EF]">
                <Image width={28} height={28} src="/icons/icon-send.png" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[300px] flex-none border-l-2"></div>
    </section>
  );
}
