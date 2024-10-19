'use client';
import '@/styles/globals.css';
import { Navbar } from '@/components/navbar';
import Image from 'next/image';
import { Badge } from '@nextui-org/badge';
import { useStore } from '@/store/store';
import { useRouter } from 'next/navigation';
import { readMessage } from '@/lib/api';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const unread = useStore((state) => state.unread);
  const setUnread = useStore((state) => state.setUnread);
  // const user = useStore((state) => state.user);
  const router = useRouter();

  const showMessage = async () => {
    try {
      await readMessage();
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {
    setUnread(false);
    showMessage();
    router.push('/ask');
  };

  return (
    <div>
      <div className="relative flex flex-col h-screen w-[100vw]">
        <Navbar />
        <main className="mt-[90px]">{children}</main>
        <div
          className="absolute rounded-full !fixed flex justify-center items-center right-2 bottom-[100px] lg:w-[72px] lg:h-[72px] md:w-[72px] md:h-[72px] sm:w-[60px] sm:h-[60px] xsm:w-[50px] xsm:h-[50px] bg-white rounded-full border border-gray-200 shadow-md"
          onClick={handleClick}
        >
          <Badge isInvisible={!unread} content={'new'} color="danger">
            <Image
              src="/icons/icon-ask.png"
              alt="home"
              width={50}
              height={50}
              className="lg:w-[50px] lg:h-[50px] md:w-[50px] md:h-[50px] sm:w-[42px] sm:h-[42px] xsm:w-[35px] xsm:h-[35px]"
            />
          </Badge>
        </div>
      </div>
    </div>
  );
}
