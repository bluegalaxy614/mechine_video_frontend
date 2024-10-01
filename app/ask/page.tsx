import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import Image from 'next/image';

export default function AskPage() {
  return (
    <div className="h-[calc(100vh-90px)] max-w-[1280px] flex flex-col justify-between mx-auto">
      <div className="w-full">
        <h1 className="text-[32px] text-[#4291EF] font-bold my-[39px]">
          問題解決サポート申請
        </h1>
        <p className="text-[20px]">
          動画で解決しない場合、管理チームにお問い合わせください。1件の問題ごとに50,000円の料金が発生します。詳細を入力し、確認ボタンを押してサポートを開始してください。
        </p>
      </div>
      <div className="flex gap-[34px]">
        <div className="grow h-[516px] shadow-lg bg-[#F4F4F4] mt-[39px] overflow-scroll p-[28px]">
          <div>
            <div className="flex justify-center items-center rounded-full w-[191px] h-[59px] p-1 hover:pointer my-[20px]">
              <Image
                width={59}
                height={59}
                className="h-[59px] w-[59px]  bg-white rounded-full p-[8px] border-2 border-default-500 border-[#4291EF]"
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
                className="h-[59px] w-[59px]  bg-white rounded-full p-[8px] border-2 border-default-500 border-[#4291EF]"
                src="/profile/3.png"
                alt=""
              />
              <span className="mx-auto text-[20px] text-[#1F2B3E]">あなた</span>
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
        <form className="flex-none max-w-[389px] mt-[39px] gap-[39px] h-full">
          <label htmlFor="name" className="text-[20px]">
            お名前
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            className="rounded w-full bg-[#F4F4F4]"
          />
          <label htmlFor="email" className="text-[20px]">
            メールアドレス
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            className="rounded w-full bg-[#F4F4F4]"
          />
          <label htmlFor="phone" className="text-[20px]">
            電話番号
          </label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            className="rounded w-full bg-[#F4F4F4]"
          />
          <label htmlFor="message" className="text-[20px]">
            メッセージ
          </label>
          <textarea
            id="message"
            name="message"
            className="rounded w-full h-[200px] bg-[#F4F4F4]"
          />
          <Button className="w-[141px] h-[31px] bg-[#4291EF] mt-[40px] mb-[71px] float-right">
            <p className=" text-[#FFFFFF] text-[20px]">送信</p>
            <Image width={28} height={28} src="/icons/icon-send.png" alt="" />
          </Button>
        </form>
      </div>
    </div>
  );
}
