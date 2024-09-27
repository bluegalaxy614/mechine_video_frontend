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
                            <div className="w-full flex flex-col mt-[50px] mb-[58px]">
                                {/* Title */}
                                <h1 className="text-[20px] font-bold text-blue-500 mx-auto">
                                    {item.name}
                                </h1>
                                <div className="mt-[22px] mx-auto">
                                    <p className="mt-2 text-gray-700 text-[16px]">
                                        投稿件数:{" "}
                                        <strong className="text-[#ED1C24] text-[20px]">{item.number}件</strong>
                                    </p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default UserCards;