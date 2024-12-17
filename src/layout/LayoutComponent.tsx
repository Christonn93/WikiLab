import React from "react";
import { Header, Footer, Main } from "@/components/layout";

export const LayoutComponent: React.FC = () => {
 return (
  <div className="layout">
   {/* Header */}
   <Header />
   {/* Main Content */}
   <Main />
   {/* Footer */}
   <Footer />
  </div>
 );
};
