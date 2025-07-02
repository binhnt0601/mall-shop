import { ReactNode } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LiveChatSupport from '@/components/LiveChatSupport';
// import ProgressBar from '@/components/ProgressBar';

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* <ProgressBar /> */}
      <Header />
      <div className='pt-[72px] flex-1'>{children}</div>
      <LiveChatSupport />
      <Footer />
    </div>
  );
}
