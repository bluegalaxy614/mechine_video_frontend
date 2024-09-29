'use client';

import React from 'react';
import { Selection } from '@nextui-org/table';
import ImageSlider from '@/components/imageSlider';
import CategoryButton from '@/components/categoryButton';
import { Divider } from '@nextui-org/divider';
import SubCategoryButton from '@/components/subCategoryButton';
import VideoCards from '@/components/videoCards';
import FavVideoCards from '@/components/favVideoCards';
import NewsCards from '@/components/newCards';
import ImageButton from '@/components/imageButton';
import UserCards from '@/components/userCards';
import CompanySlider from '@/components/companySlider';
import HomeFooter from '@/components/homeFooter';
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import { Input } from '@nextui-org/input';
import { SearchIcon } from '@/components/icons';
import { categoryConfig } from '@/config/site';
import { companyList } from '@/config/site';
import {
  users,
  slides,
  lastest,
  favorite,
  newsData,
  lastestVideos,
  favVideos,
  userIcon,
  news,
} from '@/config/data';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';

export default function Home() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(['最新順']),
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys],
  );

  return (
    <>
      <ImageSlider slides={slides} />
      <section className="max-w-[1280px] mx-auto">
        <div className="flex mt-[117px] my-[84px] lg:mx-[0px] md:mx-[40px] sm:mx-[20px] xsm:mx-[10px]">
          <div className="grow max-w-[866px] lg:mx-[0px] md:mx-[40px] sm:mx-[20px] xsm:mx-[10px]">
            <Input
              isClearable
              fullWidth={true}
              radius="lg"
              className="h-[48px] rounded-full"
              classNames={{
                label: 'text-black/50 dark:text-white/90',
                input: [
                  'bg-transparent',
                  'text-black/90 dark:text-white/90',
                  'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                ],
                innerWrapper: 'bg-transparent',
                inputWrapper: [
                  'shadow-xl',
                  'bg-default-200/50',
                  'dark:bg-default/60',
                  'backdrop-blur-xl',
                  'backdrop-saturate-200',
                  'hover:bg-default-200/70',
                  'dark:hover:bg-default/70',
                  'group-data-[focus=true]:bg-default-200/50',
                  'dark:group-data-[focus=true]:bg-default/60',
                  '!cursor-text',
                ],
              }}
              placeholder="検索..."
              startContent={
                <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
          </div>
          <Button className="h-[41px] w-[144px] rounded-full border hover:shadow-default-300 px-[8px] py-[1px] mx-auto bg-[#F4F4F4]">
            カテゴリ
          </Button>
          <div className="flex-none">
            <div className="flex gap-4">
              <p className="flex items-center">並べ替え</p>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Button className="capitalize h-[41px] w-[144px] rounded-full border hover:shadow-default-300 px-[8px] py-[1px] mx-auto">
                    {selectedValue}
                    <Image
                      width={21}
                      height={21}
                      src="/icons/icon-arrange.png"
                      alt=""
                    />
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
        </div>
        <div className=" lg:mx-[0px] md:mx-[40px]">
          <div className="flex grid lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-4 xsm:grid-cols-3 gap-3 divide-gray-200 py-[9px">
            <CategoryButton key="all" name="All" />
            {categoryConfig.map((category) => (
              <CategoryButton key={category.id} name={category.label} />
            ))}
          </div>
          <Divider />
          <p className="w-[181px] h-[35px] rounded-full bg-[#E4F1FF] text-[20px] flex justify-center items-center my-[40px]">
            サブカテゴリ
          </p>
          <div className="flex grid lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-4 xsm:grid-cols-3 gap-3 py-[9px] h-[208px] overflow-y-auto my-[20px">
            {categoryConfig
              .flatMap((category) => category.subCategories)
              .map((category) => (
                <SubCategoryButton key={category.id} name={category.label} />
              ))}
          </div>
        </div>
        <Divider />
      </section>
      <section className="max-w-[1280px] mx-auto">
        <ImageButton data={lastest} />
        <VideoCards data={lastestVideos} />
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
      </section>
      <section className="bg-[#DEF5FF] !w-[100vw]">
        <div className="max-w-[1280px] mx-auto py-[60px]">
          <ImageButton data={favorite} />
          <FavVideoCards data={favVideos} />
        </div>
      </section>
      <section className="max-w-[1280px] mx-auto">
        <ImageButton data={news} />
        <NewsCards data={newsData} />
      </section>
      <section className="bg-[#DEF5FF] !w-[100vw]">
        <div className="max-w-[1280px] mx-auto py-[60px]">
          <ImageButton data={userIcon} />
          <UserCards data={users} />
        </div>
      </section>
      <section>
        <div className="my-[20px]">
          <CompanySlider slides={companyList} dir={'ltr'} />
        </div>
        <div className="my-[20px]">
          <CompanySlider slides={companyList} dir={'rtl'} />
        </div>
      </section>
      <HomeFooter />
      <footer className="w-full flex items-center justify-center py-3 bg-[#4291EF]">
        <p className="text-white text-[20px]"> All rights reserved.</p>
      </footer>
    </>
  );
}
