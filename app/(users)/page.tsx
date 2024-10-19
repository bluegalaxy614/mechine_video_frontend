'use client';

import React, { useEffect, useState } from 'react';
import ImageSlider from '@/components/imageSlider';
import VideoCards from '@/components/videoCards';
import NewsCards from '@/components/newCards';
import ImageButton from '@/components/imageButton';
import UserCards from '@/components/userCards';
import CompanySlider from '@/components/companySlider';
import HomeFooter from '@/components/homeFooter';
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import { companyList } from '@/config/site';
import {
  slides,
  lastest,
  favorite,
  userIcon,
  news,
} from '@/config/data';
import { getNews, getUsers, getVideos } from '@/lib/api';
import { Spinner } from '@nextui-org/spinner';
import { Video } from '@/types';
import { Input } from '@nextui-org/input';
import { SearchIcon } from '@/components/icons';

interface ResponseVideos {
  currentPage: number;
  totalPages: number;
  videos: any[];
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [lastPage, setLastPage] = useState(true);
  const [lastestVideos, setLastestVideos] = useState<Video[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);

  const [isFavVideoLoading, setIsFavVideoLoading] = useState(true);
  const [favPage, setFavPage] = useState(true);
  const [favTotalVideos, setFavTotalVideos] = useState<Video[]>([]);
  const [favVideos, setFavVideos] = useState<Video[]>([]);

  const [users, setUsers] = useState<any[]>([]);

  const [page, setPage] = useState<number>(1);
  const [lastNewsPage, setLastNewsPage] = useState<boolean>(true);
  const [isNewsLoading, setIsNewsLoading] = useState<boolean>(true);
  const [newsData, setNewsData] = useState([]);

  const [videoConfig, setVideoConfig] = useState({
    page: 1,
    perPage: 20,
    sort: 'uploadDate',
  });
  const [favVideoConfig, setFavVideoConfig] = useState({
    page: 1,
    perPage: 8,
    sort: 'views',
  });

  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      try {
        const res: ResponseVideos = await getVideos(videoConfig);
        const { currentPage, totalPages, videos } = res;

        if (currentPage >= totalPages) {
          setLastPage(true);
        } else {
          setLastPage(false);
        }

        setVideos(videos);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, [videoConfig]);

  useEffect(() => {
    setLastestVideos([...lastestVideos, ...videos]);
  }, [videos]);

  useEffect(() => {
    const fetchVideos = async () => {
      setIsFavVideoLoading(true);
      try {
        const res: ResponseVideos = await getVideos(favVideoConfig);
        const { currentPage, totalPages, videos } = res;

        if (currentPage >= totalPages) {
          setFavPage(true);
        } else {
          setFavPage(false);
        }

        setFavVideos(videos);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setIsFavVideoLoading(false);
      }
    };

    fetchVideos();
  }, [favVideoConfig]);

  useEffect(() => {
    setFavTotalVideos([...favTotalVideos, ...favVideos]);
  }, [favVideos]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUsers({ perPage: 8, page: 1, sort: 'uploads' });
        setUsers(res.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const res = await getNews({
          currentPage: page,
        });
        const { totalPages, news } = res;
        setNewsData([...newsData, ...news]);
        setIsNewsLoading(false);

        if (page >= totalPages) {
          setLastNewsPage(true);
        } else {
          setLastNewsPage(false);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setIsNewsLoading(false);
      }
    };

    fetchNews();
  }, [page]);

  return (
    <>
      <ImageSlider slides={slides} />
      <section className="max-w-[1280px] mx-auto mt-[50px]">
        <Input
          isClearable
          fullWidth={true}
          radius="lg"
          className="block w-full resize-none border-0 focus-visible:outline-none bg-transparent px-0 py-2 text-token-text-primary placeholder:text-token-text-secondary"
          placeholder="検索..."
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </section>
      <section className="max-w-[1280px] mx-auto">
        <ImageButton data={lastest} />
        <VideoCards data={lastestVideos} />
        <Button
          className="flex rounded-full w-[188px] h-[43px] bg-[#4291EF] my-[40px] text-[#FFFDFD] text-[20px] mx-auto"
          onClick={(e) => {
            e.preventDefault();
            const newPage = videoConfig.page + 1;
            setVideoConfig({ ...videoConfig, page: newPage });
          }}
          isDisabled={lastPage}
        >
          {isLoading && <Spinner color="white" size="sm" />}
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
          <VideoCards data={favTotalVideos} />
          <Button
            className="flex rounded-full w-[188px] h-[43px] bg-[#4291EF] my-[40px] text-[#FFFDFD] text-[20px] mx-auto"
            onClick={(e) => {
              e.preventDefault();
              const newPage = favVideoConfig.page + 1;
              setFavVideoConfig({ ...favVideoConfig, page: newPage });
            }}
            isDisabled={favPage}
          >
            {isFavVideoLoading && <Spinner color="white" size="sm" />}
            <div className="flex justify-start gap-6">
              <p className="flex justify-center text-[20px] text-[#FFFDFD] font-bold">
                すべての動画
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
      <section className="max-w-[1280px] mx-auto">
        <ImageButton data={news} />
        <NewsCards data={newsData} />
        <Button
          className="flex rounded-full w-[188px] h-[43px] bg-[#4291EF] my-[40px] text-[#FFFDFD] text-[20px] mx-auto"
          onClick={(e) => {
            e.preventDefault();
            setPage(page + 1);
          }}
          isDisabled={lastNewsPage}
        >
          {isNewsLoading && <Spinner color="white" size="sm" />}
          <div className="flex justify-start gap-6">
            <p className="flex justify-center text-[20px] text-[#FFFDFD] font-bold">
              すべての動画
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
