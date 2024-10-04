'use client';
import Image from 'next/image';
import { Card } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { FavVideoCardsProps } from '@/types';

const FavVideoCards = ({ data }: FavVideoCardsProps) => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 gap-6 lg:mx-[0px] md:mx-[40px] sm:mx-[20px] xsm:mx-[10px]">
        {data.map((item, index) => (
          <Card
            className="max-w-[332px] h-[481px] rounded-[18px] shadow-md hover:shadow-xl transition-shadow duration-lg mx-auto"
            key={index}
            isPressable
          >
            <Image
              className="rounded-t-[18px]"
              width={332}
              height={218}
              alt={item.title}
              src={item.img}
            />
            <div className="w-[292px] h-[195px] py-5 flex flex-col !justify-start !items-start my-2 px-[25px]">
              {/* Title */}
              <h1 className="text-lg font-bold text-blue-500 !justify-start !items-start">
                {item.title}
              </h1>

              {/* Categories */}
              <div className="flex gap-2 mt-2">
                {item.categories.map((category, index) => (
                  <p
                    className="px-4 py-1 bg-blue-100 text-blue-500 rounded-full text-[14px]"
                    key={index}
                  >
                    {category}
                  </p>
                ))}
              </div>

              {/* Description, Author, Date, Duration */}
              <div className="mt-4">
                <p className="mt-2 text-gray-700 text-[14px] !text-justify">
                  {item.describe}
                </p>
                <p className="mt-2 text-gray-700 text-[14px] !text-justify">
                  投稿者 : <strong>{item.author}</strong>
                </p>
                <p className="text-gray-500 text-[14px] !text-justify font-bold">
                  {item.date}
                </p>
                <p className="mt-2 text-gray-700 text-[14px] !text-justify">
                  視聴時間:{' '}
                  <strong className="text-[#ED1C24] !text-[20px]">
                    {item.duration}
                  </strong>
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <Button className="flex rounded-full w-[188px] h-[43px] bg-[#4291EF] my-[40px] text-[#FFFDFD] text-[20px] mx-auto">
        <div className="flex justify-start gap-6">
          <p className="flex justify-center text-[20px] text-[#FFFDFD] font-bold">
            最新の動画
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

export default FavVideoCards;
