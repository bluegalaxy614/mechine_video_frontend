import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden scroll-smooth",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen w-screen">
            <Navbar />
            <main className="mt-[90px]">{children}</main>
            <Link
              className="absolute fixed flex justify-center items-center bottom-16 right-6 w-[92px] h-[92px] bg-white rounded-full border border-gray-200 shadow-md hover:shadow-default-300"
              href="/ask"
            >
              <img
                src="/icons/icon-ask.png"
                alt="home"
                className="w-[57px] h-[57px]"
              />
            </Link>
          </div>
        </Providers>
      </body>
    </html>
  );
}
