import React from "react";

interface MobileLayoutProps {
  children: React.ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  return (
    <div className="mobile-layout">
      {/* Your mobile-specific layout here */}
      {children}
    </div>
  );
};

export default MobileLayout;
