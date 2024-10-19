'use client';
import React, { useState } from 'react';
import ImageSlider from '@/components/imageSlider';
import VideoCards from '@/components/videoCards';
import HomeFooter from '@/components/homeFooter';
import { Pagination } from '@nextui-org/pagination';
import { slides } from '@/config/data';
import SearchCategories from '@/components/searchCategories';

export default function VideoPage() {
  const [videos, setVideos] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <ImageSlider slides={slides} />
      <SearchCategories
        setVideos={setVideos}
        setTotalPages={setTotalPages}
        currentPage={currentPage}
      />
      <section className="max-w-[1280px] mx-auto my-[30px]">
        <VideoCards data={videos} />
        <Pagination
          showControls
          total={totalPages}
          page={currentPage}
          onChange={(page) => setCurrentPage(page)}
          className="flex align-items-center justify-center my-[30px]"
        />
      </section>
      <HomeFooter />
      <footer className="w-full flex items-center justify-center py-3 bg-[#4291EF]">
        <p className="text-white text-[20px]">All rights reserved.</p>
      </footer>
    </>
  );
}
