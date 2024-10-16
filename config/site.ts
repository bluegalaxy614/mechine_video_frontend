export type SiteConfig = typeof siteConfig;
export type CategoryConfig = typeof categoryConfig;
export type CompanyList = typeof companyList;
export type TableConfig = typeof tableConfig;
export type VideoTableConfig = typeof videoTableConfig;
export type UserTableConfig = typeof userTableConfig;

export const siteConfig = {
  name: 'LOGO',
  description: 'Enjoy your life!',
  userNavItems: [
    {
      label: 'ホーム',
      href: '/',
    },
    {
      label: 'すべての動画',
      href: '/videos',
    },
    {
      label: '投稿する',
      href: '/post',
    },
    {
      label: 'マイページ',
      href: '/myPage',
    },
    {
      label: 'お問い合わせ',
      href: '/contact',
    },
  ],
  // userNavMenuItems: [
  //   {
  //     label: 'ホーム',
  //     href: '/',
  //   },
  //   {
  //     label: 'すべての動画',
  //     href: '/videos',
  //   },
  //   {
  //     label: '投稿する',
  //     href: '/post',
  //   },
  //   {
  //     label: 'マイページ',
  //     href: '/myPage',
  //   },
  //   {
  //     label: 'お問い合わせ',
  //     href: '/contact',
  //   },
  // ],
  adminNavItems: [
    {
      label: 'ダッシュボード',
      href: '/dashboard',
    },
    {
      label: 'ビデオステータス',
      href: '/videoManage',
    },
    {
      label: 'ユーザリスト',
      href: '/userManage',
    },
    {
      label: 'メッセージ',
      href: '/message',
    },
  ],
  // adminNavMenuItems: [
  //   {
  //     label: 'ダッシュボード',
  //     href: '/dashboard',
  //   },
  //   {
  //     label: 'ビデオステータス',
  //     href: '/videoManage',
  //   },
  //   {
  //     label: 'ユーザリスト',
  //     href: '/userManage',
  //   },
  //   {
  //     label: 'メッセージ',
  //     href: '/message',
  //   },
  // ],
};

export const categoryConfig = [
  {
    id: '1',
    label: '工作機械',
    subCategories: [
      {
        id: 's_1',
        label: '旋盤',
        category: {
          main: '1',
          sub: 's_1'
        }
      },
      {
        id: 's_2',
        label: 'フライス盤',
        category: {
          main: '1',
          sub: 's_2'
        }
      },
      {
        id: 's_3',
        label: '研削盤',
        category: {
          main: '1',
          sub: 's_3'
        }
      },
      {
        id: 's_4',
        label: 'ボール盤',
        category: {
          main: '1',
          sub: 's_4'
        }
      },
      {
        id: 's_5',
        label: '汎用工作機械 その他',
        category: {
          main: '1',
          sub: 's_5'
        }
      },
    ],
  },
  {
    id: '2',
    label: '板金機械',
    subCategories: [
      {
        id: 's_1',
        label: 'プレスブレーキ・aベンダー',
        category: {
          main: '2',
          sub: 's_1'
        }
      },
      {
        id: 's_2',
        label: 'シャーリング',
        category: {
          main: '2',
          sub: 's_2'
        }
      },
      {
        id: 's_3',
        label: 'パンチプレス',
        category: {
          main: '2',
          sub: 's_3'
        }
      },
      {
        id: 's_4',
        label: '板金機械_その他',
        category: {
          main: '2',
          sub: 's_4'
        }
      },
    ],
  },
  {
    id: '3',
    label: '鉄骨加工機',
    subCategories: [
      {
        id: 's_1',
        label: 'バンドソー',
        category: {
          main: '3',
          sub: 's_1'
        }
      },
      {
        id: 's_2',
        label: 'メタルソー',
        category: {
          main: '3',
          sub: 's_2'
        }
      },
      {
        id: 's_3',
        label: 'コンターマシン',
        category: {
          main: '3',
          sub: 's_3'
        }
      },
      {
        id: 's_4',
        label: '鉄骨加工機 その他',
        category: {
          main: '3',
          sub: 's_4'
        }
      },
    ],
  },
  {
    id: '4',
    label: 'プレス',
    subCategories: [
      {
        id: 's_1',
        label: '電動・油圧プレス',
        category: {
          main: '4',
          sub: 's_1'
        }
      },
      {
        id: 's_2',
        label: 'エアープレス',
        category: {
          main: '4',
          sub: 's_2'
        }
      },
      {
        id: 's_3',
        label: 'リベッティングマシン',
        category: {
          main: '4',
          sub: 's_3'
        }
      },
      {
        id: 's_4',
        label: 'プレス その他',
        category: {
          main: '4',
          sub: 's_4'
        }
      },
    ],
  },
  {
    id: '5',
    label: '成形機',
    subCategories: [
      {
        id: 's_1',
        label: '射出成型機',
        category: {
          main: '5',
          sub: 's_1'
        }
      },
      {
        id: 's_2',
        label: '真空成型機',
        category: {
          main: '5',
          sub: 's_2'
        }
      },
      {
        id: 's_3',
        label: '成形機 その他',
        category: {
          main: '5',
          sub: 's_3'
        }
      },
    ],
  },
  {
    id: '6',
    label: '研磨機',
    subCategories: [
      {
        id: 's_1',
        label: 'ベルトグラインダー',
        category: {
          main: '6',
          sub: 's_1'
        }
      },
      {
        id: 's_2',
        label: 'バフグラインダー',
        category: {
          main: '6',
          sub: 's_2'
        }
      },
      {
        id: 's_3',
        label: '工具研磨機',
        category: {
          main: '6',
          sub: 's_3'
        }
      },
      {
        id: 's_4',
        label: '面取り機',
        category: {
          main: '6',
          sub: 's_4'
        }
      },
      {
        id: 's_5',
        label: 'バレル研磨機',
        category: {
          main: '6',
          sub: 's_5'
        }
      },
      {
        id: 's_6',
        label: '研磨機 その他',
        category: {
          main: '6',
          sub: 's_6'
        }
      },
    ],
  },
  {
    id: '7',
    label: '冷熱・空調機器',
    subCategories: [
      {
        id: 's_1',
        label: 'チラー',
        category: {
          main: '7',
          sub: 's_1'
        }
      },
      {
        id: 's_2',
        label: 'クーリングタワー',
        category: {
          main: '7',
          sub: 's_2'
        }
      },
      {
        id: 's_3',
        label: '集塵機',
        category: {
          main: '7',
          sub: 's_3'
        }
      },
      {
        id: 's_4',
        label: 'ミストコレクター',
        category: {
          main: '7',
          sub: 's_4'
        }
      },
      {
        id: 's_5',
        label: 'スポットクーラー',
        category: {
          main: '7',
          sub: 's_5'
        }
      },
      {
        id: 's_6',
        label: '冷熱・空調機器　その他',
        category: {
          main: '7',
          sub: 's_6'
        }
      },
    ],
  },
  {
    id: '9',
    label: '理化学機器',
    subCategories: [
      {
        id: 's_1',
        label: 'ポンプ',
        category: {
          main: '9',
          sub: 's_1'
        }
      },
      {
        id: 's_2',
        label: 'ガス発生装置',
        category: {
          main: '9',
          sub: 's_2'
        }
      },
      {
        id: 's_3',
        label: '恒温器',
        category: {
          main: '9',
          sub: 's_3'
        }
      },
      {
        id: 's_4',
        label: '理化学機器 その他',
        category: {
          main: '9',
          sub: 's_4'
        }
      },
    ],
  },

  {
    id: '8',
    label: 'コンプレッサー',
    subCategories: [
      {
        id: 's_1',
        label: 'コンプレッサー',
        category: {
          main: '8',
          sub: 's_1'
        }
      },
      {
        id: 's_2',
        label: 'エアードライヤー',
        category: {
          main: '8',
          sub: 's_2'
        }
      },
      {
        id: 's_3',
        label: 'コンプレッサー その他',
        category: {
          main: '8',
          sub: 's_3'
        }
      },
    ],
  },
  {
    id: '10',
    label: '運搬・物流機器',
    subCategories: [
      {
        id: 's_1',
        label: 'フォークリフト',
        category: {
          main: '10',
          sub: 's_1'
        }
      },
      {
        id: 's_2',
        label: 'リフター',
        category: {
          main: '10',
          sub: 's_2'
        }
      },
      {
        id: 's_3',
        label: '研削盤',
        category: {
          main: '10',
          sub: 's_3'
        }
      },
      {
        id: 's_4',
        label: '運搬・物流機器 その他',
        category: {
          main: '10',
          sub: 's_4'
        }
      },
    ],
  },
  {
    id: '11',
    label: '溶接機',
    subCategories: [
      {
        id: 's_1',
        label: '溶接機',
        category: {
          main: '11',
          sub: 's_1'
        }
      },
      {
        id: 's_2',
        label: 'ポジショナー',
        category: {
          main: '11',
          sub: 's_2'
        }
      },
      {
        id: 's_3',
        label: '溶接機 その他',
        category: {
          main: '11',
          sub: 's_3'
        }
      },
    ],
  },
  {
    id: '12',
    label: '木工機械',
    subCategories: [
      {
        id: 's_1',
        label: 'かんな盤',
        category: {
          main: '12',
          sub: 's_1'
        }
      },
      {
        id: 's_2',
        label: '丸鋸盤',
        category: {
          main: '12',
          sub: 's_2'
        }
      },
      {
        id: 's_3',
        label: '帯鋸盤',
        category: {
          main: '12',
          sub: 's_3'
        }
      },
      {
        id: 's_4',
        label: 'パネルソー',
        category: {
          main: '12',
          sub: 's_4'
        }
      },
      {
        id: 's_5',
        label: 'ルータ',
        category: {
          main: '12',
          sub: 's_5'
        }
      },
      {
        id: 's_6',
        label: '木工機械 その他',
        category: {
          main: '12',
          sub: 's_6'
        }
      },
    ],
  },
  {
    id: '13',
    label: '農業機械',
    subCategories: [
      {
        id: 's_1',
        label: '油圧ショベル',
        category: {
          main: '13',
          sub: 's_1'
        }
      },
      {
        id: 's_2',
        label: 'ブルドーザー',
        category: {
          main: '13',
          sub: 's_2'
        }
      },
      {
        id: 's_3',
        label: 'ホイールローダー',
        category: {
          main: '13',
          sub: 's_3'
        }
      },
      {
        id: 's_4',
        label: 'ロードローラー',
        category: {
          main: '13',
          sub: 's_4'
        }
      },
      {
        id: 's_5',
        label: 'フィニッシャー',
        category: {
          main: '13',
          sub: 's_5'
        }
      },
      {
        id: 's_6',
        label: 'グレーダー',
        category: {
          main: '13',
          sub: 's_6'
        }
      },
      {
        id: 's_7',
        label: 'キャリアダンプ',
        category: {
          main: '13',
          sub: 's_7'
        }
      },
      {
        id: 's_8',
        label: '建設機械 その他',
        category: {
          main: '13',
          sub: 's_8'
        }
      },
    ],
  },
  {
    id: '14',
    label: '農業機械',
    subCategories: [
      {
        id: 's_1',
        label: 'トラクタ',
        category: {
          main: '14',
          sub: 's_1'
        }
      },
      {
        id: 's_2',
        label: '田植え機',
        category: {
          main: '14',
          sub: 's_2'
        }
      },
      {
        id: 's_3',
        label: 'コンバイン',
        category: {
          main: '14',
          sub: 's_3'
        }
      },
      {
        id: 's_4',
        label: '農業機械 その他',
        category: {
          main: '14',
          sub: 's_4'
        }
      },
    ],
  },
  {
    id: '15',
    label: '半導体製造装置',
    subCategories: [],
  },
  {
    id: '16',
    label: '厨房機器',
    subCategories: [],
  },
  {
    id: '17',
    label: 'その他',
    subCategories: [],
  },
];

export const companyList = [
  {
    image: '/company/image 9.png',
    title: '有村 架純',
    link: '#',
  },
  {
    image: '/company/image 10.png',
    title: '有村 架純',
    link: '#',
  },
  {
    image: '/company/image 13.png',
    title: '有村 架純',
    link: '#',
  },
  {
    image: '/company/image 16.png',
    title: '有村 架純',
    link: '#',
  },
  {
    image: '/company/image 18.png',
    title: '有村 架純',
    link: '#',
  },
  {
    image: '/company/image 9.png',
    title: '有村 架純',
    link: '#',
  },
  {
    image: '/company/image 10.png',
    title: '有村 架純',
    link: '#',
  },
];

export const tableConfig = [
  { name: 'タイトル', uid: 'title' },
  { name: '総視聴時間（時間）', uid: 'videoDuration' },
  { name: '視聴者数（人）', uid: 'views' },
  { name: '報酬額（円）', uid: 'revenue' },
  { name: '支払い状態', uid: 'status' },
  { name: '削除', uid: 'actions' },
];

export const videoTableConfig = [
  {
    name: '',
    uid: 'thumbnailsUrl',
  },
  {
    name: 'タイトル',
    uid: 'title',
  },
  {
    name: '説明',
    uid: 'description',
  },
  {
    name: '投稿者',
    uid: 'posterName',
  },
  {
    name: 'メインカテゴリ',
    uid: 'selectedCategory',
  },
  {
    name: 'サブカテゴリ',
    uid: 'selectedSubCategory',
  },
  {
    name: 'ステータス',
    uid: 'status',
  },
  {
    name: '投稿日',
    uid: 'createdAt',
  },
  {
    name: '削除',
    uid: 'actions',
  },
];

export const userTableConfig = [
  {
    name: '',
    uid: 'avatar',
  },
  {
    name: '名前',
    uid: 'name',
  },
  {
    name: 'メール',
    uid: 'email',
  },
  {
    name: '登録日',
    uid: 'date',
  },
  {
    name: '投稿数',
    uid: 'posterCounts',
  },
  {
    name: '役割',
    uid: 'role',
  },
  {
    name: '決済状況(から～まで)',
    uid: 'expired',
  },
  {
    name: 'アクション',
    uid: 'actions',
  },
];
