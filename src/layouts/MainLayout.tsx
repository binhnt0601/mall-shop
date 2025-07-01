import { ReactNode } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
