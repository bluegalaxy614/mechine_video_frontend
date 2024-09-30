'use client';

import React from 'react';
import ImageSlider from '@/components/imageSlider';
import VideoCards from '@/components/videoCards';
import FavVideoCards from '@/components/favVideoCards';
import NewsCards from '@/components/newCards';
import ImageButton from '@/components/imageButton';
import UserCards from '@/components/userCards';
import CompanySlider from '@/components/companySlider';
import HomeFooter from '@/components/homeFooter';
import SearchCategories from '@/components/searchCategories';
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
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
export default function Home() {
  return (
    <>
      <ImageSlider slides={slides} />
      <SearchCategories />
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
        <div className="max-w-[1280px] mx-auto lg:py-[60px] md:py-[40px] sm:py-[20px] xsm:py-[10px]">
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
