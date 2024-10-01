import '@/styles/globals.css';
import { Navbar } from '@/components/navbar';
import { Link } from '@nextui-org/link';
import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
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
    </div>
  );
}
