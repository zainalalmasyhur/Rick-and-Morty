import React from 'react';
import Footer from './Footer';
import HeroSection from './HeroSection';

function Layout({ children }) {
  return (
    <div>
      <HeroSection />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
