import ImageButton from '@/components/imageButton';
import BoxImage from '@/components/boxImage';
import LineChart from '@/components/lineChart';
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import { Input } from '@nextui-org/input';
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
      <section className="max-w-[1280px] mx-auto flex flex-wrap gap-4 lg:justify-between md:justify-between sm:justify-between xsm:justify-center lg:px-[0px] md:px-[40px] sm:px-[50px] xsm:px-[35px]">
        <BoxImage
          id={1}
          image={'/icons/icons-checked.png'}
          title="総投稿件数"
          info="250"
          unit="件"
        />
        <BoxImage
          id={2}
          image={'/icons/viwer.png'}
          title="未払い動画の数"
          info="8"
          unit="件"
        />
        <BoxImage
          id={3}
          image={'/icons/user.png'}
          title="未払い総額"
          info="4万+"
          unit="円"
        />
        <BoxImage
          id={4}
          image={'/icons/icon-coin.png'}
          title="未払い総額"
          info="4万+"
          unit="円"
        />
      </section>
      <section className="max-w-[1280px] mx-auto my-[10px]">
        <LineChart chartData={chartData} />
      </section>
      <section className="max-w-[1280px] mx-auto my-[10px]">
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
        <form className="lg:w-[930px] mx-auto mt-[39px] gap-[39px] h-full gap-6">
          <label htmlFor="phone" className="text-[20px]">
            タイトル
          </label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            className="rounded w-full bg-[#F4F4F4]"
            placeholder="入力してください..."
          />
          <label htmlFor="message" className="text-[20px]">
            説明
          </label>
          <textarea
            id="message"
            name="message"
            className="rounded w-full h-[200px] bg-[#F4F4F4]"
            placeholder="入力してください..."
          />
          <Button className="w-[178px] h-[36px] bg-[#4291EF] rounded-full mt-[40px] mb-[71px] mx-auto">
            <p className=" text-[#FFFFFF] text-[20px]">提出</p>
            <Image width={28} height={28} src="/icons/icon-save.png" alt="" />
          </Button>
        </form>
      </section>
      <section className="max-w-1280px mx-auto my-[10px] flex flex-col justify-center items-center">
        <div className="flex justify-center gap-6 items-center">
          <h2 className="lg:text-[32px] md:text-[28px] sm:text-[22px] xsm:text-[22px] text-[#4291EF] font-bold">
            公開済みニュース一覧
          </h2>
          <Image
            src="/icons/icons-list.png"
            alt=""
            width={64}
            height={64}
            className="lg:w-[48px] lg:h-[48px] md:w-[48px] md:h-[48px] sm:w-[44px] sm:h-[44px] xsm:w-[40px] xsm:h-[40px]"
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
