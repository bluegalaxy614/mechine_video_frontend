import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";

export default function PostPage() {
  return (
    <div
      className="w-full flex mt-[85px] flex-col"
      //   style={{ justifyContent: "space-evenly" }}
    >
      <div className="flex w-[1440px] mx-auto">
        {/* Left side content */}
        <div className="flex flex-col w-[900px] mx-auto">
          <h1 className="text-[32px] text-[#4291EF] font-bold">
            プロフィール編集
          </h1>

          <div className="flex mt-[40px] space-x-12">
            {/* Left form inputs */}
            <div className="w-[387px] flex flex-col gap-6">
              <div>
                <img src="/profile/3.png" alt="" />
              </div>
            </div>

            {/* Image upload + Youtube Link */}
            <div className="w-[387px] flex flex-col gap-6">
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
            <img src="/icons/icon-store.png" alt="" />
          </Button>
        </div>
      </div>
      <Divider />
      <div className="flex w-[1440px] mx-auto mt-[91px]">
        {/* Left side content */}
        <div className="flex flex-col w-[900px] mx-auto">
          <h1 className="text-[32px] text-[#4291EF] font-bold">
            プロフィール編集
          </h1>

          <div className="flex mt-[40px] space-x-12">
            {/* Left form inputs */}
            <div className="w-[387px] flex flex-col gap-6">
              <div>
                <img src="/profile/3.png" alt="" />
              </div>
            </div>

            {/* Image upload + Youtube Link */}
            <div className="w-[387px] flex flex-col gap-6">
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
            <img src="/icons/icon-store.png" alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
}
