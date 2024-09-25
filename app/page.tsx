import ImageSlider from "@/components/imageSlider";
import CategoryButton from "@/components/categoryButton";
import { Divider } from "@nextui-org/divider";
import SubCategoryButton from "@/components/subCategoryButton";
import VideoCards from "@/components/videoCards";
import FavVideoCards from "@/components/favVideoCards";
import NewsCards from "@/components/newCards";
import ImageButton from "@/components/imageButton";
import UserCards from "@/components/userCards";
import CompanySlider from "@/components/companySlider";
import HomeFooter from "@/components/homeFooter";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

export default function Home() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "修理動画で学ぼう",
      description:
        "専門家による工作機械や建機、農機の修理動画を視聴・投稿し、知識を共有しながら収益を得られる新しい動画プラットフォームです。",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Amazing Cityscape",
      description: "A stunning city view during the evening lights.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Desert Dunes",
      description:
        "The serene beauty of the desert sand dunes under the sunset.",
    },
  ];
  const lastest = {
    icon: "/icons/icons-setting.png",
    title: "最新の動画",
    description:
      "プロフェッショナルが投稿した最新の機械修理動画で、今すぐ新しい修理方法を学びましょう。",
  };
  const favorite = {
    icon: "/icons/icons-fav.png",
    title: "人気動画",
    description:
      "再生数が多い人気の修理動画を集めました。今すぐチェックして、役立つ修理テクニックを学びましょう！",
  };
  const news = {
    icon: "/icons/icons-nesw.png",
    title: "ニュース",
    description:
      "最新のニュースやお知らせをまとめてご確認いただけます。サービスのアップデートや重要な情報をお見逃しなく。",
  };
  const userIcon = {
    icon: "/icons/icons-nesw.png",
    title: "トップ貢献者",
    description:
      "多くの動画を投稿し、コミュニティに大きく貢献しているユーザーを紹介します。彼らの豊富な知識と経験を活かした動画は、多くの視聴者に支持されています。",
  };
  const favVideos = [
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen.png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
      duration: "4万時間",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (1).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
      duration: "4万時間",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (2).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
      duration: "4万時間",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (3).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
      duration: "4万時間",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (4).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
      duration: "4万時間",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (5).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
      duration: "4万時間",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (1).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
      duration: "4万時間",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (2).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
      duration: "4万時間",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (3).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
      duration: "4万時間",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (4).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
      duration: "4万時間",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (5).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
      duration: "4万時間",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (1).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
      duration: "4万時間",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (2).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
      duration: "4万時間",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (3).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (4).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
      duration: "4万時間",
    },
  ];
  const lastestVideos = [
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen.png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (1).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (2).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (3).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (4).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (5).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (1).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (2).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (3).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (4).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (5).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (1).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (2).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (3).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
    },
    {
      title: "旋盤のベアリング交換方法",
      img: "/videos/video_screen (4).png",
      categories: ["工作機械", "旋盤"],
      describe: "旋盤のベアリング交換を安全かつ効率的に行う手順。",
      author: "山田機械修理工房",
      date: "2024年9月10日",
    },
  ];
  const categories = [
    {
      name: "全て",
      selected: false,
    },
    {
      name: "工作機械",
      selected: true,
    },
    {
      name: "板金機械",
      selected: false,
    },
    {
      name: "鉄骨加工機",
      selected: false,
    },
    {
      name: "プレス",
      selected: false,
    },
    {
      name: "成形機",
      selected: false,
    },
    {
      name: "研磨機",
      selected: false,
    },
    {
      name: "冷熱・空調機器",
      selected: false,
    },
    {
      name: "コンプレッサー",
      selected: false,
    },
    {
      name: "理化学機器",
      selected: false,
    },
    {
      name: "運搬・物流機器",
      selected: false,
    },
    {
      name: "溶接機",
      selected: false,
    },
    {
      name: "木工機械",
      selected: false,
    },
    {
      name: "建設機械",
      selected: false,
    },
    {
      name: "農業機械",
      selected: false,
    },
    {
      name: "半導体製造装置",
      selected: false,
    },
    {
      name: "厨房機器",
      selected: false,
    },
    {
      name: "その他",
      selected: false,
    },
  ];
  const subCategories = [
    {
      name: "全て",
      selected: false,
    },
    {
      name: "工作機械",
      selected: true,
    },
    {
      name: "板金機械",
      selected: false,
    },
    {
      name: "鉄骨加工機",
      selected: false,
    },
    {
      name: "プレス",
      selected: false,
    },
    {
      name: "成形機",
      selected: false,
    },
    {
      name: "研磨機",
      selected: false,
    },
    {
      name: "冷熱・空調機器",
      selected: false,
    },
    {
      name: "コンプレッサー",
      selected: false,
    },
    {
      name: "理化学機器",
      selected: false,
    },
    {
      name: "運搬・物流機器",
      selected: false,
    },
    {
      name: "溶接機",
      selected: false,
    },
    {
      name: "木工機械",
      selected: false,
    },
    {
      name: "建設機械",
      selected: false,
    },
    {
      name: "理化学機器",
      selected: false,
    },
    {
      name: "運搬・物流機器",
      selected: false,
    },
    {
      name: "溶接機",
      selected: false,
    },
    {
      name: "木工機械",
      selected: false,
    },
    {
      name: "建設機械",
      selected: false,
    },
    {
      name: "農業機械",
      selected: false,
    },
    {
      name: "半導体製造装置",
      selected: false,
    },
    {
      name: "厨房機器",
      selected: false,
    },
    {
      name: "その他",
      selected: false,
    },
  ];
  const newsData = [
    {
      icon: "/icons/icons-checked.png",
      title: "新しいパートナープログラムを開始",
      description:
        "動画投稿者向けの新しいパートナープログラムが始まりました。これにより、再生回数に応じた報酬が増加します。詳細はパートナーガイドをご覧ください。",
      date: "2024年8月20日",
    },
    {
      icon: "/icons/icons-checked.png",
      title: "旋盤のベアリング交換方法",
      description:
        "旋盤のベアリング交換を安全かつ効率的に行う手順。詳細な手順については、パートナーガイドをご覧ください。",
      date: "2024年9月10日",
    },
    {
      icon: "/icons/icons-checked.png",
      title: "新しいパートナープログラムを開始",
      description:
        "動画投稿者向けの新しいパートナープログラムが始まりました。これにより、再生回数に応じた報酬が増加します。詳細はパートナーガイドをご覧ください。",
      date: "2024年8月20日",
    },
    {
      icon: "/icons/icons-checked.png",
      title: "旋盤のベアリング交換方法",
      description:
        "旋盤のベアリング交換を安全かつ効率的に行う手順。詳細な手順については、パートナーガイドをご覧ください。",
      date: "2024年9月10日",
    },
    {
      icon: "/icons/icons-checked.png",
      title: "新しいパートナープログラムを開始",
      description:
        "動画投稿者向けの新しいパートナープログラムが始まりました。これにより、再生回数に応じた報酬が増加します。詳細はパートナーガイドをご覧ください。",
      date: "2024年8月20日",
    },
    {
      icon: "/icons/icons-checked.png",
      title: "旋盤のベアリング交換方法",
      description:
        "旋盤のベアリング交換を安全かつ効率的に行う手順。詳細な手順については、パートナーガイドをご覧ください。",
      date: "2024年9月10日",
    },
  ];
  const users = [
    {
      img: "/profile/1.png",
      name: "有村 架純",
      number: "112",
    },
    {
      img: "/profile/1.png",
      name: "有村 架純",
      number: "112",
    },
    {
      img: "/profile/2.png",
      name: "有村 架純",
      number: "112",
    },
    {
      img: "/profile/3.png",
      name: "有村 架純",
      number: "112",
    },
    {
      img: "/profile/4.png",
      name: "有村 架純",
      number: "112",
    },
    {
      img: "/profile/1.png",
      name: "有村 架純",
      number: "112",
    },
    {
      img: "/profile/1.png",
      name: "有村 架純",
      number: "112",
    },
    {
      img: "/profile/2.png",
      name: "有村 架純",
      number: "112",
    },
    {
      img: "/profile/3.png",
      name: "有村 架純",
      number: "112",
    },
    {
      img: "/profile/4.png",
      name: "有村 架純",
      number: "112",
    },
  ];
  const company = [
    {
      image: "/company/image 9.png",
      title: "有村 架純",
    },
    {
      image: "/company/image 10.png",
      title: "有村 架純",
    },
    {
      image: "/company/image 13.png",
      title: "有村 架純",
    },
    {
      image: "/company/image 16.png",
      title: "有村 架純",
    },
    {
      image: "/company/image 18.png",
      title: "有村 架純",
    },
    {
      image: "/company/image 9.png",
      title: "有村 架純",
    },
    {
      image: "/company/image 10.png",
      title: "有村 架純",
    },
  ];
  return (
    <>
      <ImageSlider slides={slides} />
      <section className="max-w-[1440px] mx-auto">
        <div className="flex grid grid-cols-7 gap-3 divide-gray-200 py-[9px] px-[0px]">
          {categories.map((category) => (
            <CategoryButton
              name={category.name}
              selected={category.selected}
              // onClick={console.log(category.name)}
            />
          ))}
        </div>
        <Divider />
        <p className="w-[181px] h-[35px] rounded-full bg-[#E4F1FF] text-[20px] flex justify-center items-center my-[40px]">
          サブカテゴリ
        </p>
        <div className="flex grid grid-cols-7 gap-3 py-[9px] px-[0px] w-[1440px] h-[208px] overflow-y-auto my-[20px]">
          {subCategories.map((category) => (
            <SubCategoryButton
              name={category.name}
              selected={category.selected}
              // onClick={console.log(category.name)}
            />
          ))}
        </div>
        <Divider />
      </section>
      <section className="max-w-[1440px] mx-auto">
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
        <div className="max-w-[1440px] mx-auto py-[60px]">
          <ImageButton data={favorite} />
          <FavVideoCards data={favVideos} />
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto">
        <ImageButton data={news} />
        <NewsCards data={newsData} />
      </section>
      <section className="bg-[#DEF5FF] !w-[100vw]">
        <div className="max-w-[1440px] mx-auto py-[60px]">
          <ImageButton data={userIcon} />
          <UserCards data={users} />
        </div>
      </section>
      <section>
        <div className="my-[20px]">
          <CompanySlider
            slides={company}
            dir={"ltr"}
          />
        </div>
        <div className="my-[20px]">
          <CompanySlider
            slides={company}
            dir={"rtl"}
          />
        </div>
      </section>
      <HomeFooter />
    </>
  );
}
