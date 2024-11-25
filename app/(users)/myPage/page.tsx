'use client';
import React, { useEffect, useState } from 'react';
import VideoCards from '@/components/videoCards';
import { Pagination } from '@nextui-org/pagination';
import SearchCategories from '@/components/searchCategories';
import ImageButton from '@/components/imageButton';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import { useStore } from '@/store/store';
import { useRouter } from 'next/navigation';

const icon = {
  icon: '/icons/view.png',
  title: '閲覧した動画',
  description: null,
};

export default function ViwerPage() {
  const [videos, setVideos] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [displyVideos, setDisplyVideos] = useState([]);
  const user = useStore((state) => state.user);

  const router = useRouter();

  useEffect(() => {
    if(!user){
      router.push('/login');
    }
  },[user]);
  useEffect(() => {
    setDisplyVideos(videos);
  }, [videos]);
  return (
    <>
      <SearchCategories
        setVideos={setVideos}
        setTotalPages={setTotalPages}
        currentPage={currentPage}
      />
      <section className="max-w-[1280px] mx-auto my-[30px]">
        <ImageButton data={icon} />
        <div className="mb-[30px] flex gap-[40px] lg:px-[40px] md:px-[40px] sm:px-[50px] xsm:px-[35px]">
          <Button className="flex justify-start gap-6 border-2 shadow-md rounded-full w-[202px] h-[48px] bg-white text-black text-[20px]">
            <Image width={33} height={33} src="/icons/star.png" alt="" />
            お気に入り
          </Button>
        </div>
        <VideoCards data={displyVideos} />
        <Pagination
          showControls
          total={totalPages}
          page={currentPage}
          onChange={setCurrentPage}
          className="flex align-items-center justify-center my-[30px]"
        />
      </section>
      <footer className="w-full flex items-center justify-center py-3 bg-[#4291EF]">
        <p className="text-white text-[20px]"> All rights reserved.</p>
      </footer>
    </>
  );
}
