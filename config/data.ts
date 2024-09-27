const columns = [
  { name: "タイトル", uid: "name" },
  { name: "総視聴時間（時間）", uid: "duration" },
  { name: "視聴者数（人）", uid: "viewers" },
  { name: "報酬額（円）", uid: "revenue" },
  { name: "支払い状態", uid: "status" },
  { name: "削除", uid: "actions" },
];
const rows = [
  {
    id: 1,
    name: "旋盤のベアリング交換方法",
    duration: "12000",
    viewers: "234",
    revenue: "40000",
    status: "未払い",
  },
  {
    id: 2,
    name: "旋盤のベアリング交換方法",
    duration: "12000",
    viewers: "234",
    revenue: "40000",
    status: "支払い",
  },
  {
    id: 3,
    name: "旋盤のベアリング交換方法",
    duration: "12000",
    viewers: "234",
    revenue: "40000",
    status: "未払い",
  },
  {
    id: 4,
    name: "旋盤のベアリング交換方法",
    duration: "12000",
    viewers: "234",
    revenue: "40000",
    status: "支払い",
  },
  {
    id: 5,
    name: "旋盤のベアリング交換方法",
    duration: "12000",
    viewers: "234",
    revenue: "40000",
    status: "保留中",
  },
  {
    id: 6,
    name: "旋盤のベアリング交換方法",
    duration: "12000",
    viewers: "234",
    revenue: "40000",
    status: "保留中",
  },
  {
    id: 7,
    name: "旋盤のベアリング交換方法",
    duration: "12000",
    viewers: "234",
    revenue: "40000",
    status: "保留中",
  },
  {
    id: 8,
    name: "旋盤のベアリング交換方法",
    duration: "12000",
    viewers: "234",
    revenue: "40000",
    status: "保留中",
  },
  {
    id: 9,
    name: "旋盤のベアリング交換方法",
    duration: "12000",
    viewers: "234",
    revenue: "40000",
    status: "保留中",
  },
  {
    id: 10,
    name: "旋盤のベアリング交換方法",
    duration: "12000",
    viewers: "234",
    revenue: "40000",
    status: "保留中",
  },
  {
    id: 11,
    name: "旋盤のベアリング交換方法",
    duration: "12000",
    viewers: "234",
    revenue: "40000",
    status: "保留中",
  },
  {
    id: 12,
    name: "旋盤のベアリング交換方法",
    duration: "12000",
    viewers: "234",
    revenue: "40000",
    status: "保留中",
  },
  {
    id: 13,
    name: "旋盤のベアリング交換方法",
    duration: "12000",
    viewers: "234",
    revenue: "40000",
    status: "保留中",
  },
  {
    id: 14,
    name: "旋盤のベアリング交換方法",
    duration: "12000",
    viewers: "234",
    revenue: "40000",
    status: "保留中",
  },
];
const slides = [
  {
    image:
      "/slides/1.png",
    title: "修理動画で学ぼう",
    description:
      "専門家による工作機械や建機、農機の修理動画を視聴・投稿し、知識を共有しながら収益を得られる新しい動画プラットフォームです。",
  },
  {
    image:
      "/slides/1.png",
    title: "修理動画で学ぼう",
    description: "専門家による工作機械や建機、農機の修理動画を視聴・投稿し、知識を共有しながら収益を得られる新しい動画プラットフォームです。",
  },
  {
    image:
      "/slides/3.png",
    title: "修理動画で学ぼう",
    description:
      "専門家による工作機械や建機、農機の修理動画を視聴・投稿し、知識を共有しながら収益を得られる新しい動画プラットフォームです。",
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

export { columns, rows, users, company, slides, lastest, favorite, categories, subCategories, newsData, lastestVideos, favVideos, userIcon, news };