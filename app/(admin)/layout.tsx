import '@/styles/globals.css';
import { AdminNavbar } from '@/components/adminNav';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen w-[100vw]">
      <AdminNavbar />
      <main className="mt-[90px]">{children}</main>
    </div>
  );
}
