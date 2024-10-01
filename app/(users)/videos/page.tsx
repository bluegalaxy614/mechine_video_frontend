'use client';
import React from 'react';
import ImageSlider from '@/components/imageSlider';
import VideoCards from '@/components/videoCards';
import HomeFooter from '@/components/homeFooter';
import { Pagination } from '@nextui-org/pagination';
import { slides, lastestVideos } from '@/config/data';
import SearchCategories from '@/components/searchCategories';

export default function Home() {
  return (
    <>
      <ImageSlider slides={slides} />
      <SearchCategories />
      <section className="max-w-[1280px] mx-auto my-[30px]">
        <VideoCards data={lastestVideos} />
        <Pagination
          showControls
          total={lastestVideos.length}
          initialPage={1}
          className="flex align-items-center justify-center my-[30px]"
        />
      </section>
      <HomeFooter />
      <footer className="w-full flex items-center justify-center py-3 bg-[#4291EF]">
        <p className="text-white text-[20px]"> All rights reserved.</p>
      </footer>
    </>
  );
}
