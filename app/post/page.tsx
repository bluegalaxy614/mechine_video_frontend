import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export default function PostPage() {
  return (
    <div
      className="w-full flex mt-[85px] h-[100vh]"
      style={{ justifyContent: "space-evenly" }}
    >
      <div className="flex w-[1440px]">
        {/* Left side content */}
        <div className="flex flex-col w-[900px] mx-auto">
          <h1 className="text-[32px] text-[#4291EF] font-bold">
            機械修理のノウハウを共有し、収益を得ましょう！
          </h1>
          <p className="text-[20px] text-[#212121] font-bold">
            こちらのページから、あなたの修理動画を簡単にアップロードすることができます
          </p>

          <div className="flex mt-[40px] space-x-12">
            {/* Left form inputs */}
            <div className="w-[387px] flex flex-col gap-6">
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
                  className="w-[387px] h-[100px]"
                />
              </div>
            </div>

            {/* Image upload + Youtube Link */}
            <div className="w-[387px] flex flex-col gap-6">
              <div className="w-[248px] h-[196px] bg-[#E4F1FF] flex justify-center items-center rounded-lg mx-auto">
                <img
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
          <Button className="w-[100px] h-[30px] bg-[#4291EF] mx-auto mt-[40px] mb-[71px]">
            <p className=" text-[#FFFFFF] text-[20px]">提出</p>
            <img src="/icons/icon-store.png" alt="" />
          </Button>
        </div>

        {/* Right side content */}
        <div className="w-[389px] flex flex-col gap-4 mx-auto">
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
      </div>
    </div>
  );
}
