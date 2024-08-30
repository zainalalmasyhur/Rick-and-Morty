import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4 shadow-inner">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm mb-1">
          &copy; {new Date().getFullYear()} The Rick and Morty API. All rights reserved.
        </p>
        <p className="text-sm">
          Made with <span className="text-red-500">❤️</span> for Rick and Morty fans.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
