export type SiteConfig = typeof siteConfig;
export type CategoryConfig = typeof categoryConfig;
export type CompanyList = typeof companyList;
export type TableConfig = typeof tableConfig;

export const siteConfig = {
  name: 'Mechines Friends',
  description: 'Make beautiful websites regardless of your design experience.',
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
      href: '/mypage',
    },
    {
      label: 'お問い合わせ',
      href: '/contact',
    },
  ],
  userNavMenuItems: [
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
      href: '/mypage',
    },
    {
      label: 'お問い合わせ',
      href: '/contact',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
  adminNavItems: [
    {
      label: 'ダッシュボード',
      href: '/dashboard',
    },
    {
      label: 'ビデオステータス',
      href: '/status',
    },
    {
      label: 'ユーザリスト',
      href: '/userList',
    },
  ],
  adminNavMenuItems: [
    {
      label: 'ダッシュボード',
      href: '/dashboard',
    },
    {
      label: 'ビデオステータス',
      href: '/status',
    },
    {
      label: 'ユーザリスト',
      href: '/userList',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
};

export const categoryConfig = [
  {
    id: '1',
    label: '工作機械',
    subCategories: [
      {
        id: 's_1',
        label: '旋盤',
      },
      {
        id: 's_2',
        label: 'フライス盤',
      },
      {
        id: 's_3',
        label: '研削盤',
      },
      {
        id: 's_4',
        label: 'ボール盤',
      },
      {
        id: 's_5',
        label: '汎用工作機械 その他',
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
      },
      {
        id: 's_2',
        label: 'シャーリング',
      },
      {
        id: 's_3',
        label: 'パンチプレス',
      },
      {
        id: 's_4',
        label: '板金機械_その他',
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
      },
      {
        id: 's_2',
        label: 'メタルソー',
      },
      {
        id: 's_3',
        label: 'コンターマシン',
      },
      {
        id: 's_4',
        label: '鉄骨加工機 その他',
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
      },
      {
        id: 's_2',
        label: 'エアープレス',
      },
      {
        id: 's_3',
        label: 'リベッティングマシン',
      },
      {
        id: 's_4',
        label: 'プレス その他',
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
      },
      {
        id: 's_2',
        label: '真空成型機',
      },
      {
        id: 's_3',
        label: '成形機 その他',
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
      },
      {
        id: 's_2',
        label: 'バフグラインダー',
      },
      {
        id: 's_3',
        label: '工具研磨機',
      },
      {
        id: 's_4',
        label: '面取り機',
      },
      {
        id: 's_5',
        label: 'バレル研磨機',
      },
      {
        id: 's_6',
        label: '研磨機 その他',
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
      },
      {
        id: 's_2',
        label: 'クーリングタワー',
      },
      {
        id: 's_3',
        label: '集塵機',
      },
      {
        id: 's_4',
        label: 'ミストコレクター',
      },
      {
        id: 's_5',
        label: 'スポットクーラー',
      },
      {
        id: 's_6',
        label: '冷熱・空調機器　その他',
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
      },
      {
        id: 's_2',
        label: 'ガス発生装置',
      },
      {
        id: 's_3',
        label: '恒温器',
      },
      {
        id: 's_4',
        label: '理化学機器 その他',
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
      },
      {
        id: 's_2',
        label: 'エアードライヤー',
      },
      {
        id: 's_3',
        label: 'コンプレッサー その他',
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
      },
      {
        id: 's_2',
        label: 'リフター',
      },
      {
        id: 's_3',
        label: '研削盤',
      },
      {
        id: 's_4',
        label: '運搬・物流機器 その他',
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
      },
      {
        id: 's_2',
        label: 'ポジショナー',
      },
      {
        id: 's_3',
        label: '溶接機 その他',
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
      },
      {
        id: 's_2',
        label: '丸鋸盤',
      },
      {
        id: 's_3',
        label: '帯鋸盤',
      },
      {
        id: 's_4',
        label: 'パネルソー',
      },
      {
        id: 's_5',
        label: 'ルータ',
      },
      {
        id: 's_6',
        label: '木工機械 その他',
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
      },
      {
        id: 's_2',
        label: 'ブルドーザー',
      },
      {
        id: 's_3',
        label: 'ホイールローダー',
      },
      {
        id: 's_4',
        label: 'ロードローラー',
      },
      {
        id: 's_5',
        label: 'フィニッシャー',
      },
      {
        id: 's_6',
        label: 'グレーダー',
      },
      {
        id: 's_7',
        label: 'キャリアダンプ',
      },
      {
        id: 's_8',
        label: '建設機械 その他',
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
      },
      {
        id: 's_2',
        label: '田植え機',
      },
      {
        id: 's_3',
        label: 'コンバイン',
      },
      {
        id: 's_4',
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
  { name: 'タイトル', uid: 'name' },
  { name: '総視聴時間（時間）', uid: 'duration' },
  { name: '視聴者数（人）', uid: 'viewers' },
  { name: '報酬額（円）', uid: 'revenue' },
  { name: '支払い状態', uid: 'status' },
  { name: '削除', uid: 'actions' },
];
