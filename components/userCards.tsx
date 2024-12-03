'use client';
import Image from 'next/image';
import { Card, CardBody } from '@nextui-org/card';
import { UserCardsProps } from '@/types';

const UserCards = ({ data }: UserCardsProps) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 gap-6">
      {data && data.length > 0 ? (
        data?.map((item, index) => (
          <Card
            className="flex w-[277px] h-[360px] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 mx-auto"
            key={index}
            isPressable
          >
            <CardBody className="overflow-visible pt-4">
              <Image
                className="object-cover rounded-t-md mx-auto"
                width={196}
                height={192}
                alt={`Profile picture of ${item.name}`}
                src={item.avatar ? item.avatar : '/profile/user.png'}
              />
              <div className="w-full flex flex-col mt-6 mb-8">
                <h1 className="text-[20px] font-bold text-blue-500 text-center">
                  {item.name}
                </h1>
                <div className="mt-6 text-center">
                  <p className="text-gray-700 text-[16px]">
                    投稿件数:{' '}
                    <strong className="text-[#ED1C24] text-[20px]">
                      {item.posterCounts}件
                    </strong>
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        ))
      ) : (
        <p>ユーザーがいません</p>
      )}
    </div>
  );
};

export default UserCards;
