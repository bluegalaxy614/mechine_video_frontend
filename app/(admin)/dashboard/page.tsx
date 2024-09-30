import ImageButton from '@/components/imageButton';
import BoxImage from '@/components/boxImage';
import LineChart from '@/components/lineChart';
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import { Input, Textarea } from '@nextui-org/input';
import NewsCards from '@/components/newCards';
import { chartData, newsData } from '@/config/data';

export default function DashboardPage() {
  const icon = {
    icon: '/icons/icons-setting.png',
    title: 'ニュース編集と表示',
    description:
      'ニュース記事の作成、公開状況を管理し、最新情報をユーザーに届けます',
  };
  return (
    <div>
      <section className="flex flex-wrap justify-between max-w-[1280px] mx-auto">
        <div className="mx-auto my-[10px]">
          <BoxImage
            id={1}
            image={'/icons/icons-checked.png'}
            title="総投稿件数"
            info="5千+"
            unit="件"
          />
        </div>
        <div className="mx-auto my-[10px]">
          <BoxImage
            id={2}
            image={'/icons/icon-clock.png'}
            title="総視聴者数"
            info="8千+"
            unit="人"
          />
        </div>
        <div className="mx-auto my-[10px]">
          <BoxImage
            id={3}
            image={'/icons/icon-coin.png'}
            title="総投稿者数"
            info="3千+"
            unit="人"
          />
        </div>
        <div className="mx-auto my-[10px]">
          <BoxImage
            id={4}
            image={'/icons/icon-coin.png'}
            title="総輸入額"
            info="400万+"
            unit="円"
          />
        </div>
      </section>
      <section className="max-w-[1280px] mx-auto my-[10px]">
        <LineChart chartData={chartData} />
      </section>
      <section className="max-w-[1280px] mx-auto my-[10px]">
        <ImageButton data={icon} />
        <div className="flex flex-col justify-between items-center">
          <p className="text-[20px] text-[#4291EF]">新規ニュース作成</p>
          <Image src="/icons/icons-plus.png" width={68} height={68} alt="" />
        </div>
        <div>
          <Input />
          <Textarea />
          <Button />
        </div>
      </section>
      <section className="max-w-1280px mx-auto my-[10px] flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center">
          <p>公開済みニュース一覧</p>
          <Image
            width={68}
            height={68}
            src="/icons/icons-setting.png"
            className="w-[68px] h-[68px]"
            alt=""
          />
        </div>
        <NewsCards data={newsData} />
      </section>
      <footer className="w-full flex items-center justify-center py-3 bg-[#4291EF]">
        <p className="text-white text-[20px]"> All rights reserved.</p>
      </footer>
    </div>
  );
}
