import ImageSlider from "@/components/imageSlider";
import CategoryButton from "@/components/categoryButton";
import { Divider } from "@nextui-org/divider";
import SubCategoryButton from "@/components/subCategoryButton";
import VideoCards from "@/components/videoCards";
import HomeFooter from "@/components/homeFooter";
import { Pagination } from "@nextui-org/pagination";

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
      <section className="max-w-[1440px] mx-auto my-[30px]">
        <VideoCards data={lastestVideos} />
        <Pagination showControls total={lastestVideos.length} initialPage={1} className="flex align-items-center justify-center my-[30px]"/>
      </section>
      <HomeFooter />
    </>
  );
}
