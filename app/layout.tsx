import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';

import { Providers } from './providers';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Navbar } from '@/components/navbar';
import { Link } from '@nextui-org/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
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
          'min-h-screen bg-background font-sans antialiased overflow-x-hidden scroll-smooth',
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <div className="relative flex flex-col h-screen w-[100vw]">
            <Navbar />
            <main className="mt-[90px]">{children}</main>
            <Link
              className="absolute fixed flex justify-center items-center lg:bottom-[60px] lg:right-6 md:bottom-[60px] md:right-5 sm:bottom-[60px] sm:right-4 xsm:bottom-[60px] xsm:right-3 lg:w-[92px] lg:h-[92px] md:w-[72px] md:h-[72px] sm:w-[60px] sm:h-[60px] xsm:w-[50px] xsm:h-[50px] bg-white rounded-full border border-gray-200 shadow-md hover:shadow-default-300"
              href="/ask"
            >
              <Image
                src="/icons/icon-ask.png"
                alt="home"
                width={57}
                height={57}
                className="lg:w-[57px] lg:h-[57px] md:w-[50px] md:h-[50px] sm:w-[42px] sm:h-[42px] xsm:w-[35px] xsm:h-[35px]"
              />
            </Link>
          </div>
        </Providers>
      </body>
    </html>
  );
}
