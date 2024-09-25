import { Card } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";

interface NewsCardsProps {
  data: {
    icon: string;
    title: string;
    description: string;
    date: string;
  }[];
}

const NewsCards = ({ data }: NewsCardsProps) => {
  return (
    <div className="flex flex-col space-y-4 p-2 my-[20px]">
      {data.map((item, index) => (
        <Card
          key={index}
          className="w-[1398px] h-[176px] px-[37px] py-[25px] shadow-lg rounded-lg border border-gray-200 shadow-md hover:shadow-default-300 hover:bg-[#E4F1FF]"
        >
          <div className="flex justify-between">
            <div className="flex-none w-[65px]">
              <Image width={64} height={62} alt={item.title} src={item.icon} />
            </div>
            <div className="grow mt-4 ml-4 grid gap-4">
              <h1 className="text-[20px] text-[#4291EF] font-bold">{item.title}</h1>
              <p className="text-[14px] text-[#212121] w-[862px] h-[73px]">{item.description}</p>
            </div>
            <div className="flex-none bg-blue-100 text-blue-500 px-3 py-1 rounded-full w-[147px] h-[35px]">
              {item.date}
            </div>
          </div>
        </Card>
      ))}
      <Button className="flex rounded-full w-[188px] h-[43px] bg-[#4291EF] my-[40px] text-[#FFFDFD] text-[20px] mx-auto">
        <div className="flex justify-start gap-6">
          <p className="flex justify-center text-[20px] text-[#FFFDFD] font-bold">
            もっと見る
          </p>
          <Image
            src="/icons/icons-more.png"
            alt="new video"
            width={28}
            height={24}
          />
        </div>
      </Button>
    </div>
  );
};

export default NewsCards;
