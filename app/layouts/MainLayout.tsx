import { ReactNode } from 'react';

import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <TopBar />
      {children}
      <Footer />
    </div>
  );
}
