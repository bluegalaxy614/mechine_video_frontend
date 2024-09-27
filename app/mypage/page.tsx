import VideoCards from '@/components/videoCards';
import ImageButton from '@/components/imageButton';
import { Pagination } from '@nextui-org/pagination';
import BoxImage from '@/components/boxImage';
import LineChart from '@/components/lineChart';
import { Button } from '@nextui-org/button';

export default function MyPage() {
  const lastestVideos = [
    {
      title: '旋盤のベアリング交換方法',
      img: '/videos/video_screen.png',
      categories: ['工作機械', '旋盤'],
      describe: '旋盤のベアリング交換を安全かつ効率的に行う手順。',
      author: '山田機械修理工房',
      date: '2024年9月10日',
    },
    {
      title: '旋盤のベアリング交換方法',
      img: '/videos/video_screen (1).png',
      categories: ['工作機械', '旋盤'],
      describe: '旋盤のベアリング交換を安全かつ効率的に行う手順。',
      author: '山田機械修理工房',
      date: '2024年9月10日',
    },
    {
      title: '旋盤のベアリング交換方法',
      img: '/videos/video_screen (2).png',
      categories: ['工作機械', '旋盤'],
      describe: '旋盤のベアリング交換を安全かつ効率的に行う手順。',
      author: '山田機械修理工房',
      date: '2024年9月10日',
    },
    {
      title: '旋盤のベアリング交換方法',
      img: '/videos/video_screen (3).png',
      categories: ['工作機械', '旋盤'],
      describe: '旋盤のベアリング交換を安全かつ効率的に行う手順。',
      author: '山田機械修理工房',
      date: '2024年9月10日',
    },
    {
      title: '旋盤のベアリング交換方法',
      img: '/videos/video_screen (4).png',
      categories: ['工作機械', '旋盤'],
      describe: '旋盤のベアリング交換を安全かつ効率的に行う手順。',
      author: '山田機械修理工房',
      date: '2024年9月10日',
    },
    {
      title: '旋盤のベアリング交換方法',
      img: '/videos/video_screen (5).png',
      categories: ['工作機械', '旋盤'],
      describe: '旋盤のベアリング交換を安全かつ効率的に行う手順。',
      author: '山田機械修理工房',
      date: '2024年9月10日',
    },
    {
      title: '旋盤のベアリング交換方法',
      img: '/videos/video_screen (1).png',
      categories: ['工作機械', '旋盤'],
      describe: '旋盤のベアリング交換を安全かつ効率的に行う手順。',
      author: '山田機械修理工房',
      date: '2024年9月10日',
    },
    {
      title: '旋盤のベアリング交換方法',
      img: '/videos/video_screen (2).png',
      categories: ['工作機械', '旋盤'],
      describe: '旋盤のベアリング交換を安全かつ効率的に行う手順。',
      author: '山田機械修理工房',
      date: '2024年9月10日',
    },
    {
      title: '旋盤のベアリング交換方法',
      img: '/videos/video_screen (3).png',
      categories: ['工作機械', '旋盤'],
      describe: '旋盤のベアリング交換を安全かつ効率的に行う手順。',
      author: '山田機械修理工房',
      date: '2024年9月10日',
    },
    {
      title: '旋盤のベアリング交換方法',
      img: '/videos/video_screen (4).png',
      categories: ['工作機械', '旋盤'],
      describe: '旋盤のベアリング交換を安全かつ効率的に行う手順。',
      author: '山田機械修理工房',
      date: '2024年9月10日',
    },
    {
      title: '旋盤のベアリング交換方法',
      img: '/videos/video_screen (5).png',
      categories: ['工作機械', '旋盤'],
      describe: '旋盤のベアリング交換を安全かつ効率的に行う手順。',
      author: '山田機械修理工房',
      date: '2024年9月10日',
    },
    {
      title: '旋盤のベアリング交換方法',
      img: '/videos/video_screen (1).png',
      categories: ['工作機械', '旋盤'],
      describe: '旋盤のベアリング交換を安全かつ効率的に行う手順。',
      author: '山田機械修理工房',
      date: '2024年9月10日',
    },
    {
      title: '旋盤のベアリング交換方法',
      img: '/videos/video_screen (2).png',
      categories: ['工作機械', '旋盤'],
      describe: '旋盤のベアリング交換を安全かつ効率的に行う手順。',
      author: '山田機械修理工房',
      date: '2024年9月10日',
    },
    {
      title: '旋盤のベアリング交換方法',
      img: '/videos/video_screen (3).png',
      categories: ['工作機械', '旋盤'],
      describe: '旋盤のベアリング交換を安全かつ効率的に行う手順。',
      author: '山田機械修理工房',
      date: '2024年9月10日',
    },
    {
      title: '旋盤のベアリング交換方法',
      img: '/videos/video_screen (4).png',
      categories: ['工作機械', '旋盤'],
      describe: '旋盤のベアリング交換を安全かつ効率的に行う手順。',
      author: '山田機械修理工房',
      date: '2024年9月10日',
    },
  ];
  const icon = {
    icon: '/icons/icons-setting.png',
    title: '動画承認ステータス',
    description: null,
  };
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
    <>
      <section className="flex flex-wrap justify-between max-w-[1280px] mx-auto">
        <div className="mx-auto my-[10px]">
          <BoxImage
            id={1}
            image={'/icons/icons-checked.png'}
            title="総投稿件数"
            info="250"
          />
        </div>
        <div className="mx-auto my-[10px]">
          <BoxImage
            id={2}
            image={'/icons/icon-clock.png'}
            title="総視聴時間"
            info="40000"
          />
        </div>
        <div className="mx-auto my-[10px]">
          <BoxImage
            id={3}
            image={'/icons/icon-coin.png'}
            title="総輸入額"
            info="50万+"
          />
        </div>
      </section>
      <section className="max-w-[1280px] mx-auto my-[10px]">
        <LineChart chartData={data} />
      </section>
      <section className="max-w-[1280px] mx-auto my-[10px]">
        <ImageButton data={icon} />
        <div className="mb-[30px] flex gap-[40px]">
          <Button className="rounded-full w-[144px] h-[41px] bg-[#FDE48D] text-[#725C10] text-[16px]">
            リクエスト中
          </Button>
          <Button className="rounded-full w-[144px] h-[41px] bg-[#B1FF9D] text-[#21770B] text-[16px]">
            承認済み
          </Button>
          <Button className="rounded-full w-[144px] h-[41px] bg-[#FFC2C5] text-[#9D0E14] text-[16px]">
            拒否
          </Button>
        </div>
        <VideoCards data={lastestVideos} />
        <Pagination
          showControls
          total={lastestVideos.length}
          initialPage={1}
          className="flex align-items-center justify-center my-[30px]"
        />
      </section>
      <footer className="w-full flex items-center justify-center py-3 bg-[#4291EF]">
        <p className="text-white text-[20px]"> All rights reserved.</p>
      </footer>
    </>
  );
}
