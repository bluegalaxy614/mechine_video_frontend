'use client';
import '@/styles/globals.css';
import { AdminNavbar } from '@/components/adminNav';
import { useStore } from '@/store/store';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useStore((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (user?.role !== 'admin') {
      router.push('/login');
    }
  }, [router, user]);
  return (
    <div className="relative flex flex-col h-screen w-[100vw]">
      <AdminNavbar />
      <main className="mt-[90px]">{children}</main>
    </div>
  );
}
