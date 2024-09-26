"use client";
import Image from "next/image";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

interface UserCardsProps {
  data: {
    img: string;
    name: string;
    number: string;
  }[];
}

const UserCards = ({ data }: UserCardsProps) => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 gap-6 ">
        {data.map((item, index) => (
          <Card
            className="flex w-[277px] h-[380px] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-lg pt-4 mx-auto"
            key={index}
            isPressable
          >
            <CardBody className="overflow-visible">
              <Image
                className="object-cover rounded-t-md mx-auto"
                width={196}
                height={192}
                alt={item.name}
                src={item.img}
              />
            </CardBody>
            <CardFooter className="w-[292px] h-[195px] p-2 flex flex-col">
              {/* Title */}
              <h1 className="text-lg font-bold text-blue-500">
                {item.name}
              </h1>
              <div className="mt-4">
                <p className="mt-2 text-gray-700 text-sm">
                投稿件数:{" "}
                  <strong className="text-[#ED1C24]">{item.number}件</strong>
                </p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default UserCards;