import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        textAlign: 'center',
        width: '600px',
        margin: '50px auto',
      }}
    >
      <h1>Rick & Morty API With His Friend Sara</h1>
      {children}
    </div>
  );
};

export default Layout;
