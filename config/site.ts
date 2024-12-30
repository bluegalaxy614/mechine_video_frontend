export type SiteConfig = typeof siteConfig;
export type CategoryConfig = typeof categoryConfig;
export type CompanyList = typeof companyList;
export type TableConfig = typeof tableConfig;
export type VideoTableConfig = typeof videoTableConfig;
export type UserTableConfig = typeof userTableConfig;

export const siteConfig = {
  name: '修理指南書',
  description: '修理指南書',
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
      label: '支払い管理',
      href: '/paymentManage',
    },
    {
      label: 'メッセージ',
      href: '/message',
    },
  ],
  contactInfo: {
    phone: '',
    email: 'info@shinansho.com',
    address: '三重県 鈴鹿市 汲川原町 460番地',
    twitter: '',
    facebook: '',
    youtube: '',
  },
};

export const categoryConfig = [
  {
    id: '1',
    label: '工作機械',
    subCategories: [
      {
        id: '1_1',
        label: '旋盤',
      },
      {
        id: '1_2',
        label: 'フライス盤',
      },
      {
        id: '1_3',
        label: '研削盤',
      },
      {
        id: '1_4',
        label: 'ボール盤',
      },
      {
        id: '1_5',
        label: '汎用工作機械 その他',
      },
    ],
  },
  {
    id: '2',
    label: '板金機械',
    subCategories: [
      {
        id: '2_1',
        label: 'プレスブレーキ・ベンダー',
      },
      {
        id: '2_2',
        label: 'シャーリング',
      },
      {
        id: '2_3',
        label: 'パンチプレス',
      },
      {
        id: '2_4',
        label: '板金機械_その他',
      },
    ],
  },
  {
    id: '3',
    label: '鉄骨加工機',
    subCategories: [
      {
        id: '3_1',
        label: 'バンドソー',
      },
      {
        id: '3_2',
        label: 'メタルソー',
      },
      {
        id: '3_3',
        label: 'コンターマシン',
      },
      {
        id: '3_4',
        label: '鉄骨加工機 その他',
      },
    ],
  },
  {
    id: '4',
    label: 'プレス',
    subCategories: [
      {
        id: '4_1',
        label: '電動・油圧プレス',
      },
      {
        id: '4_2',
        label: 'エアープレス',
      },
      {
        id: '4_3',
        label: 'リベッティングマシン',
      },
      {
        id: '4_4',
        label: 'プレス その他',
      },
    ],
  },
  {
    id: '5',
    label: '成形機',
    subCategories: [
      {
        id: '5_1',
        label: '射出成型機',
      },
      {
        id: '5_2',
        label: '真空成型機',
      },
      {
        id: '5_3',
        label: '成形機 その他',
      },
    ],
  },
  {
    id: '6',
    label: '研磨機',
    subCategories: [
      {
        id: '6_1',
        label: 'ベルトグラインダー',
      },
      {
        id: '6_2',
        label: 'バフグラインダー',
      },
      {
        id: '6_3',
        label: '工具研磨機',
      },
      {
        id: '6_4',
        label: '面取り機',
      },
      {
        id: '6_5',
        label: 'バレル研磨機',
      },
      {
        id: '6_6',
        label: '研磨機 その他',
      },
    ],
  },
  {
    id: '7',
    label: '冷熱・空調機器',
    subCategories: [
      {
        id: '7_1',
        label: 'チラー',
      },
      {
        id: '7_2',
        label: 'クーリングタワー',
      },
      {
        id: '7_3',
        label: '集塵機',
      },
      {
        id: '7_4',
        label: 'ミストコレクター',
      },
      {
        id: '7_5',
        label: 'スポットクーラー',
      },
      {
        id: '7_6',
        label: '冷熱・空調機器　その他',
      },
    ],
  },
  {
    id: '9',
    label: '理化学機器',
    subCategories: [
      {
        id: '9_1',
        label: 'ポンプ',
      },
      {
        id: '9_2',
        label: 'ガス発生装置',
      },
      {
        id: '9_3',
        label: '恒温器',
      },
      {
        id: '9_4',
        label: '理化学機器 その他',
      },
    ],
  },

  {
    id: '8',
    label: 'コンプレッサー',
    subCategories: [
      {
        id: '8_1',
        label: 'コンプレッサー',
      },
      {
        id: '8_2',
        label: 'エアードライヤー',
      },
      {
        id: '8_3',
        label: 'コンプレッサー その他',
      },
    ],
  },
  {
    id: '10',
    label: '運搬・物流機器',
    subCategories: [
      {
        id: '10_1',
        label: 'フォークリフト',
      },
      {
        id: '10_2',
        label: 'リフター',
      },
      {
        id: '10_3',
        label: '研削盤',
      },
      {
        id: '10_4',
        label: '運搬・物流機器 その他',
      },
    ],
  },
  {
    id: '11',
    label: '溶接機',
    subCategories: [
      {
        id: '11_1',
        label: '溶接機',
      },
      {
        id: '11_2',
        label: 'ポジショナー',
      },
      {
        id: '11_3',
        label: '溶接機 その他',
      },
    ],
  },
  {
    id: '12',
    label: '木工機械',
    subCategories: [
      {
        id: '12_1',
        label: 'かんな盤',
      },
      {
        id: '12_2',
        label: '丸鋸盤',
      },
      {
        id: '12_3',
        label: '帯鋸盤',
      },
      {
        id: '12_4',
        label: 'パネルソー',
      },
      {
        id: '12_5',
        label: 'ルータ',
      },
      {
        id: '12_6',
        label: '木工機械 その他',
      },
    ],
  },
  {
    id: '13',
    label: '農業機械',
    subCategories: [
      {
        id: '13_1',
        label: '油圧ショベル',
      },
      {
        id: '13_2',
        label: 'ブルドーザー',
      },
      {
        id: '13_3',
        label: 'ホイールローダー',
      },
      {
        id: '13_4',
        label: 'ロードローラー',
      },
      {
        id: '13_5',
        label: 'フィニッシャー',
      },
      {
        id: '13_6',
        label: 'グレーダー',
      },
      {
        id: '13_7',
        label: 'キャリアダンプ',
      },
      {
        id: '13_8',
        label: '建設機械 その他',
      },
    ],
  },
  {
    id: '14',
    label: '農業機械',
    subCategories: [
      {
        id: '14_1',
        label: 'トラクタ',
      },
      {
        id: '14_2',
        label: '田植え機',
      },
      {
        id: '14_3',
        label: 'コンバイン',
      },
      {
        id: '14_4',
        label: '農業機械 その他',
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
    name : '総プレイ時間 (s)',
    uid : 'videoDuration'
  },
  {
    name : '視聴者数',
    uid : 'views'
  },
  {
    name: 'ステータス',
    uid: 'status',
  },
  {
    name: '投稿日',
    uid: 'uploadDate',
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
    uid: 'createdAt',
  },
  {
    name: '投稿数',
    uid: 'posterCounts',
  },
  {
    name: '総プレイ時間 (s)',
    uid: 'totalPlayedTime'
  },
  {
    name: '総収入',
    uid: 'totalIncome',
  },
  {
    name : '有給',
    uid:'paid',
  },
  {
    name: '無給',
    uid: 'unPaid'
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

export const paymentTableConfig = [
  {
    name: '',
    uid: 'avatar',
  },
  {
    name: '名前',
    uid: 'name',
  },
  {
    name: '総収入',
    uid: 'totalIncome',
  },
  {
    name : '有給',
    uid:'paid',
  },
  {
    name: '無給',
    uid: 'unPaid'
  },
  {
    name: '最終支払日',
    uid: 'lastPaidDate',
  },
  {
    name: '役割',
    uid: 'paymentStatus',
  },
  {
    name: 'アクション',
    uid: 'actions',
  },
];
