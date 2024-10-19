'use client';
import ImageButton from '@/components/imageButton';
import BoxImage from '@/components/boxImage';
import LineChart from '@/components/lineChart';
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import { Input } from '@nextui-org/input';
import NewsCards from '@/components/newCards';
import { chartData } from '@/config/data';
import { useEffect, useState } from 'react';
import { createNews, getAnalyseData, getNews } from '@/lib/api';
import { Spinner } from '@nextui-org/spinner';
import { useStore } from '@/store/store';

const icon = {
  icon: '/icons/icons-setting.png',
  title: 'ニュース編集と表示',
  content: 'ニュース記事の作成、公開状況を管理し、最新情報をユーザーに届けます',
};

export default function DashboardPage() {
  const [viewerNumber, setViewerNumber] = useState<number>(0);
  const [postersNumber, setPostersNumber] = useState<number>(0);
  const [videoNumber, setVideoNumber] = useState<number>(0);
  const [paid, setPaid] = useState<number>(0);

  const setMessage = useStore((state) => state.setMessage);

  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [newsData, setNewsData] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const fetchData = async () => {
    try {
      const res = await getAnalyseData();
      const { viewer, posters, video, paidCount } = res.data;
      setViewerNumber(viewer);
      setPostersNumber(posters);
      setVideoNumber(video);
      setPaid(paidCount);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const res = await getNews({
        currentPage: page,
      });
      const { totalPages, news } = res;
      setNewsData([...newsData, ...news]);
      setIsLoading(false);

      if (page >= totalPages) {
        setLastPage(true);
      } else {
        setLastPage(false);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  },[]);

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      title: formData.title,
      content: formData.content,
    };

    try {
      const res = await createNews(data);
      const { message } = res;
      fetchNews();
      setMessage(message);
      setFormData({
        title: '',
        content: '',
      });
    } catch (error) {
      console.error('Error creating news:', error);
    }
  };

  return (
    <div>
      <div className="max-w-[1280px] mx-auto px-[20px] lg:px-[0px] md:px-[40px] sm:px-[50px] xsm:px-[35px]">
        <section className="w-full flex flex-wrap gap-4 lg:justify-between md:justify-between sm:justify-between xsm:justify-center lg:px-[0px] md:px-[40px] sm:px-[50px] xsm:px-[35px] pt-[50px]">
          <BoxImage
            id={1}
            image={'/icons/icons-checked.png'}
            title="総投稿件数"
            info={`${videoNumber / 1000}千+`}
            unit="件"
          />
          <BoxImage
            id={2}
            image={'/icons/viwer.png'}
            title="総視聴者数"
            info={`${viewerNumber / 1000}千+`}
            unit="人"
          />
          <BoxImage
            id={3}
            image={'/icons/user.png'}
            title="未払い総額"
            info={`${postersNumber / 1000}千+`}
            unit="人"
          />
          <BoxImage
            id={4}
            image={'/icons/icon-coin.png'}
            title="総輸入額"
            info={`${paid / 10000}万+`}
            unit="円"
          />
        </section>
        <section className="w-full mx-auto my-[10px]">
          <LineChart chartData={chartData} />
        </section>
        <section className="w-full mx-auto my-[10px]">
          <ImageButton data={icon} />
          <div className="flex justify-center gap-6 items-center">
            <h2 className="lg:text-[32px] md:text-[28px] sm:text-[22px] xsm:text-[22px] text-[#4291EF] font-bold">
              新規ニュース作成
            </h2>
            <Image
              src="/icons/icons-edit.png"
              alt=""
              width={64}
              height={64}
              className="lg:w-[48px] lg:h-[48px] md:w-[48px] md:h-[48px] sm:w-[44px] sm:h-[44px] xsm:w-[40px] xsm:h-[40px]"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="lg:w-[930px] mx-auto mt-[39px] gap-[39px] h-full gap-6"
          >
            <label htmlFor="phone" className="text-[20px]">
              タイトル
            </label>
            <Input
              type="text"
              id="title"
              name="title"
              className="rounded w-full bg-[#F4F4F4]"
              placeholder="入力してください..."
              onChange={handleInputChange}
            />
            <label htmlFor="message" className="text-[20px]">
              説明
            </label>
            <textarea
              id="content"
              name="content"
              className="rounded w-full h-[200px] bg-[#F4F4F4]"
              placeholder="入力してください..."
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              className="w-[178px] h-[36px] bg-[#4291EF] rounded-full mt-[40px] mb-[71px]"
            >
              <p className="text-[#FFFFFF] text-[20px]">提出</p>
              <Image width={28} height={28} src="/icons/icon-save.png" alt="" />
            </Button>
          </form>
        </section>
        <section className="w-full mx-auto my-[10px] flex flex-col justify-center items-center">
          <div className="flex justify-center gap-6 items-center">
            <h2 className="lg:text-[32px] md:text-[28px] sm:text-[22px] xsm:text-[22px] text-[#4291EF] font-bold">
              公開済みニュース一覧
            </h2>
            <Image
              src="/icons/icons-list.png"
              alt="list icon"
              width={64}
              height={64}
              className="lg:w-[48px] lg:h-[48px] md:w-[48px] md:h-[48px] sm:w-[44px] sm:h-[44px] xsm:w-[40px] xsm:h-[40px]"
            />
          </div>
          <NewsCards data={newsData} />
          <Button
            className="flex rounded-full w-[188px] h-[43px] bg-[#4291EF] my-[40px] text-[#FFFDFD] text-[20px] mx-auto"
            onClick={(e) => {
              e.preventDefault();
              setPage(page + 1);
            }}
            isDisabled={lastPage}
          >
            {isLoading && <Spinner color="white" size="sm" />}
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
      </div>
      <footer className="w-full flex items-center justify-center py-3 bg-[#4291EF]">
        <p className="text-white text-[20px]"> All rights reserved.</p>
      </footer>
    </div>
  );
}
