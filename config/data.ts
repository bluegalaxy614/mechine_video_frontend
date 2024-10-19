const slides = [
  {
    image: '/slides/1.png',
    title: '修理動画で学ぼう',
    description:
      '専門家による工作機械や建機、農機の修理動画を視聴・投稿し、知識を共有しながら収益を得られる新しい動画プラットフォームです。',
  },
  {
    image: '/slides/1.png',
    title: '修理動画で学ぼう',
    description:
      '専門家による工作機械や建機、農機の修理動画を視聴・投稿し、知識を共有しながら収益を得られる新しい動画プラットフォームです。',
  },
  {
    image: '/slides/3.png',
    title: '修理動画で学ぼう',
    description:
      '専門家による工作機械や建機、農機の修理動画を視聴・投稿し、知識を共有しながら収益を得られる新しい動画プラットフォームです。',
  },
];
const lastest = {
  icon: '/icons/icons-setting.png',
  title: '最新の動画',
  description:
    'プロフェッショナルが投稿した最新の機械修理動画で、今すぐ新しい修理方法を学びましょう。',
};
const favorite = {
  icon: '/icons/icons-fav.png',
  title: '人気動画',
  description:
    '再生数が多い人気の修理動画を集めました。今すぐチェックして、役立つ修理テクニックを学びましょう！',
};
const news = {
  icon: '/icons/icons-nesw.png',
  title: 'ニュース',
  description:
    '最新のニュースやお知らせをまとめてご確認いただけます。サービスのアップデートや重要な情報をお見逃しなく。',
};
const userIcon = {
  icon: '/icons/icons-nesw.png',
  title: 'トップ貢献者',
  description:
    '多くの動画を投稿し、コミュニティに大きく貢献しているユーザーを紹介します。彼らの豊富な知識と経験を活かした動画は、多くの視聴者に支持されています。',
};

const chartData = {
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
export { slides, lastest, favorite, userIcon, news, chartData };
