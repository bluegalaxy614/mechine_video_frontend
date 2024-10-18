'use client';
import VideoCards from '@/components/videoCards';
import ImageButton from '@/components/imageButton';
import { Pagination } from '@nextui-org/pagination';
import BoxImage from '@/components/boxImage';
import LineChart from '@/components/lineChart';
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getPosterVideos } from '@/lib/api';

const icon = {
  icon: '/icons/icons-setting.png',
  title: '動画承認ステータス',
  description: '',
};
export default function ProfilePage() {
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [displyVideos, setDisplyVideos] = useState([]);
  const [status, setStatus] = useState('all');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await getPosterVideos({
          page: page,
          perPage: 20,
          sort: 'uploadDate',
          status: status,
        });
        const { currentPage, totalPages, videos } = res;
        console.log(currentPage)
        setDisplyVideos(videos);
        setTotalPages(totalPages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();
  }, [page, status]);

  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [
      {
        label: '',
        data: [10, 15, 23, 12, 13, 5, 8, 15, 23, 12, 13, 5],
        borderColor: '#4291EF',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };
  return (
    <div className="min-h-[calc(100vh-90px)] flex flex-col lg:w-full xsm:w-fit justify-between">
      <section className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:w-[1280px] md:w-[945px] sm:w-[710px] lg:mt-[85px] md:mt-[55px] sm:mt-[45px] xsm:mt-[35px]">
          <div className="w-full flex flex-wrap gap-4 lg:justify-between md:justify-between sm:justify-between xsm:justify-center lg:px-[0px] md:px-[40px] sm:px-[50px] xsm:px-[35px]">
            <BoxImage
              id={1}
              image={'/icons/icons-checked.png'}
              title="総投稿件数"
              info="250"
              unit="件"
            />
            <BoxImage
              id={2}
              image={'/icons/icon-clock.png'}
              title="総視聴時間"
              info="40000"
              unit="時間"
            />
            <BoxImage
              id={3}
              image={'/icons/icon-coin.png'}
              title="総輸入額"
              info="50万+"
              unit="円"
            />
          </div>
          <LineChart chartData={data} />
        </div>
      </section>
      <section className="max-w-[1280px] mx-auto">
        {/* <SearchCategories /> */}
        <ImageButton data={icon} />
        <div className="flex lg:w-[1280px] justify-between">
          <div className="mb-[30px] flex gap-[40px] lg:px-[40px] md:px-[40px] sm:px-[50px] xsm:px-[35px]">
            <Button
              className="rounded-full w-[144px] h-[41px] bg-[#FDE48D] text-[#725C10] text-[16px]"
              onClick={() => setStatus('保留中')}
            >
              リクエスト中
            </Button>
            <Button
              className="rounded-full w-[144px] h-[41px] bg-[#B1FF9D] text-[#21770B] text-[16px]"
              onClick={() => setStatus('承認済み')}
            >
              承認済み
            </Button>
            <Button
              className="rounded-full w-[144px] h-[41px] bg-[#FFC2C5] text-[#9D0E14] text-[16px]"
              onClick={() => setStatus('拒否')}
            >
              拒否
            </Button>
          </div>
          <Link
            href="/poster/submission"
            className="flex items-center justify-center gap-5 rounded-full w-[144px] h-[41px] bg-[#4291EF] text-white text-[16px]"
          >
            投稿する
            <Image
              src="/icons/icon-video-upload.png"
              alt=""
              width={24}
              height={24}
            />
          </Link>
        </div>
        {displyVideos?.length === 0 ? (
          <p className="mb-[30px]">There is no any video.</p>
        ) : (
          <>
            <VideoCards data={displyVideos} />
            <Pagination
              showControls
              total={totalPages}
              page={page}
              initialPage={1}
              className="flex align-items-center justify-center my-[30px]"
              onChange={setPage}
            />
          </>
        )}
      </section>
      <footer className="w-full flex items-center justify-center py-3 bg-[#4291EF]">
        <p className="text-white text-[20px]"> All rights reserved.</p>
      </footer>
    </div>
  );
}
