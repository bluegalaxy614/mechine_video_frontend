import { Card } from '@nextui-org/card';
import Image from 'next/image';
import { NewsCardsProps } from '@/types';

const NewsCards = ({ data }: NewsCardsProps) => {
  return (
    <div className="w-full flex flex-col space-y-4 p-2 my-[20px]">
      {data.map((item, index) => (
        <Card
          key={index}
          className="w-full lg:h-[176px] md:h-[170px] sm:h-[160px] xsm:h-[140px] py-[25px] shadow-lg rounded-lg border border-gray-200 shadow-md hover:shadow-default-300 hover:bg-[#E4F1FF]"
        >
          <div className="flex justify-between mx-[20px]">
            <div className="flex-none max-w-[65px]">
              <Image width={64} height={62} alt={item.title} src="/icons/icons-checked.png" />
            </div>
            <div className="grow mt-4 ml-4 grid gap-4">
              <h1 className="lg:text-[20px] md:text-[20px] sm:text-[18px] xsm:text-[16px] text-[#4291EF] font-bold truncate">
                {item.title}
              </h1>
              <p className="lg:text-[14px] md:text-[14px] sm:text-[12px] xsm:text-[10px] text-[#212121] max-w-[862px] h-[73px] truncate">
                {item.content}
              </p>
            </div>
            <div className="flex-none bg-blue-100 text-blue-500 px-3 py-1 rounded-full max-w-[147px] max-h-fit py-[6px] lg:text-[14px] md:text-[14px] sm:text-[12px] xsm:text-[10px]">
              {item.date}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default NewsCards;
