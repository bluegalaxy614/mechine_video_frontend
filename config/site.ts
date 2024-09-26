export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Mechines Friends",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "ホーム",
      href: "/",
    },
    {
      label: "すべての動画",
      href: "/videos",
    },
    {
      label: "投稿する",
      href: "/post",
    },
    {
      label: "マイページ",
      href: "/mypage",
    },
    {
      label: "お問い合わせ",
      href: "/inquiry",
    },
  ],
  navMenuItems: [
    {
      label: "ホーム",
      href: "/",
    },
    {
      label: "すべての動画",
      href: "/videos",
    },
    {
      label: "投稿する",
      href: "/post",
    },
    {
      label: "マイページ",
      href: "/mypage",
    },
    {
      label: "お問い合わせ",
      href: "/inquiry",
    }, 
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
