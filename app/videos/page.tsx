'use client';
import ImageSlider from "@/components/imageSlider";
import CategoryButton from "@/components/categoryButton";
import { Divider } from "@nextui-org/divider";
import SubCategoryButton from "@/components/subCategoryButton";
import VideoCards from "@/components/videoCards";
import HomeFooter from "@/components/homeFooter";
import { Pagination } from "@nextui-org/pagination";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import React from "react";
import { Selection } from "@nextui-org/table";

import { slides, categories, subCategories, lastestVideos } from "@/config/data";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "@/components/icons";

export default function Home() {
    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(["最新順"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );
    return (
        <>
            <ImageSlider slides={slides} />
            <section className="max-w-[1440px] mx-auto">
                <div className="flex mt-[117px] my-[84px]">
                    <Input
                        isClearable
                        radius="lg"
                        className=" !max-w-[866px] h-[48px] rounded-full"
                        classNames={{
                            label: "text-black/50 dark:text-white/90",
                            input: [
                                "bg-transparent",
                                "text-black/90 dark:text-white/90",
                                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                            ],
                            innerWrapper: "bg-transparent",
                            inputWrapper: [
                                "shadow-xl",
                                "bg-default-200/50",
                                "dark:bg-default/60",
                                "backdrop-blur-xl",
                                "backdrop-saturate-200",
                                "hover:bg-default-200/70",
                                "dark:hover:bg-default/70",
                                "group-data-[focus=true]:bg-default-200/50",
                                "dark:group-data-[focus=true]:bg-default/60",
                                "!cursor-text",
                            ],
                        }}
                        placeholder="検索..."
                        startContent={
                            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                        }
                    />
                    <SubCategoryButton
                        name={"カテゴリ"}
                        selected={false}
                    // onClick={console.log(category.name)}
                    />
                    <div className="flex gap-4">
                        <p className="flex items-center">並べ替え</p>
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Button
                                    className="capitalize h-[41px] w-[144px] rounded-full border hover:shadow-default-300 px-[8px] py-[1px] mx-auto"
                                >
                                    {selectedValue}
                                    <img src="/icons/icon-arrange.png" alt="" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                aria-label="Select Arrange Type"
                                variant="flat"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={selectedKeys}
                                onSelectionChange={setSelectedKeys}
                            >
                                <DropdownItem key="最新順">最新順</DropdownItem>
                                <DropdownItem key="人気順">人気順</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <div className="flex grid grid-cols-7 gap-3 divide-gray-200 py-[9px] px-[0px]">
                    {categories.map((category) => (
                        <CategoryButton
                            name={category.name}
                            selected={category.selected}
                        // onClick={console.log(category.name)}
                        />
                    ))}
                </div>
                <Divider />
                <p className="w-[181px] h-[35px] rounded-full bg-[#E4F1FF] text-[20px] flex justify-center items-center my-[40px]">
                    サブカテゴリ
                </p>
                <div className="flex grid grid-cols-7 gap-3 py-[9px] px-[0px] w-[1440px] h-[208px] overflow-y-auto my-[20px]">
                    {subCategories.map((category) => (
                        <SubCategoryButton
                            name={category.name}
                            selected={category.selected}
                        // onClick={console.log(category.name)}
                        />
                    ))}
                </div>
                <Divider />
            </section>
            <section className="max-w-[1440px] mx-auto my-[30px]">
                <VideoCards data={lastestVideos} />
                <Pagination showControls total={lastestVideos.length} initialPage={1} className="flex align-items-center justify-center my-[30px]" />
            </section>
            <HomeFooter />
        </>
    );
}
