import { ReactNode } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LiveChatSupport from '@/components/LiveChatSupport';

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='pt-[61px] flex-1'>{children}</div>
      <LiveChatSupport />
      <Footer />
    </div>
  );
}
