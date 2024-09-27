"use client";
import Image from "next/image";
import { Card } from "@nextui-org/card";

interface VideoCardsProps {
    data: {
        title: string;
        img: string;
        categories: string[];
        describe: string;
        author: string;
        date: string;
    }[];
}
const VideoCards = ({ data }: VideoCardsProps) => {
    return (
        <>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 gap-6">
                {data.map((item, index) => (
                    <Card
                        className="w-[332px] h-[440px] rounded-[18px] shadow-md hover:shadow-xl transition-shadow duration-lg mx-auto"
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
                        <div className="w-[292px] h-[195px] p-2 flex flex-col !justify-start !items-start my-2">
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
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default VideoCards;
