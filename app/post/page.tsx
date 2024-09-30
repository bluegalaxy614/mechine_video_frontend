import { Input, Textarea } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import Image from 'next/image';

export default function PostPage() {
  return (
    <div className="h-[calc(100vh-90px)] lg:w-full xsm:w-fit flex flex-col justify-between">
      <section className="max-w-[1280px] mx-auto flex flex-wrap lg:mt-[85px] md:mt-[55px] sm:mt-[45px] xsm:mt-[35px] gap-12">
        {/* Left side content */}
        <div className="flex flex-col max-w-[900px] mx-auto lg:px-0 md:px-0 sm:px-[40px] xsm:px-[40px]">
          <h1 className="lg:text-[30px] md:text-[28px] sm:text-[24px] xsm:text-[22px] text-[#4291EF] font-bold">
            機械修理のノウハウを共有し、収益を得ましょう！
          </h1>
          <p className="lg:text-[20px] md:text-[18px] sm:text-[14px] xsm:text-[12px] text-[#212121] font-bold">
            こちらのページから、あなたの修理動画を簡単にアップロードすることができます
          </p>

          <div className="flex lg:mt-[85px] md:mt-[55px] sm:mt-[45px] xsm:mt-[35px] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {/* Left form inputs */}
            <div className="w-[300px] flex flex-col gap-6 mx-auto">
              <div>
                <p className="mb-2">タイトル</p>
                <Input
                  width={387}
                  height={41}
                  placeholder="入力してください..."
                  labelPlacement="outside"
                />
              </div>

              <div>
                <p className="mb-2">説明</p>
                <Textarea
                  labelPlacement="outside"
                  placeholder="入力してください..."
                  className="w-[300px] h-[100px]"
                />
              </div>
            </div>

            {/* Image upload + Youtube Link */}
            <div className="w-[300px] flex flex-col gap-6 mx-auto">
              <div className="w-[248px] h-[196px] bg-[#E4F1FF] flex justify-center items-center rounded-lg mx-auto">
                <Image
                  width={105}
                  height={105}
                  src="/icons/icon-upload.png"
                  alt="Upload"
                  className="w-[105px] h-[105px] p-0 hover:cursor-pointer hover:opacity-50 transition-opacity duration-200"
                />
              </div>

              <div>
                <p className="mb-2">Youtubeリンク</p>
                <Input
                  width={387}
                  type="url"
                  placeholder="www.youtube.com/watch?v=dQw4w9WgXcQ"
                  labelPlacement="outside"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">
                        https://
                      </span>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right side content */}
        <div className="flex flex-col w-[300px] gap-4 mx-auto">
          <div>
            <p className="mb-2">動画コード</p>
            <Input
              width={387}
              height={41}
              placeholder="入力してください..."
              labelPlacement="outside"
            />
          </div>

          <div>
            <p className="mb-2">機械名</p>
            <Input
              width={387}
              height={41}
              placeholder="入力してください..."
              labelPlacement="outside"
            />
          </div>

          <div>
            <p className="mb-2">形式</p>
            <Input
              width={387}
              height={41}
              placeholder="入力してください..."
              labelPlacement="outside"
            />
          </div>

          <div>
            <p className="mb-2">メーカー</p>
            <Input
              width={387}
              height={41}
              placeholder="入力してください..."
              labelPlacement="outside"
            />
          </div>

          <div>
            <p className="mb-2">メインカテゴリ</p>
            <select className="w-full h-[41px] border border-gray-300 rounded-md p-2">
              <option>工作機械</option>
            </select>
          </div>

          <div>
            <p className="mb-2">サブカテゴリ</p>
            <select className="w-full h-[41px] border border-gray-300 rounded-md p-2">
              <option>旋盤</option>
            </select>
          </div>
        </div>
        <div className="w-full flex">
          <Button className="w-[100px] h-[30px] bg-[#4291EF] mx-auto mt-[40px] mb-[71px]">
            <p className=" text-[#FFFFFF] text-[20px]">提出</p>
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
