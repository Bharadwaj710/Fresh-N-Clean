import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
           <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
            F
          </div>
          <p className="text-text-muted text-sm">© 2026 Fresh ’N Clean Laundry. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-text-muted hover:text-primary text-sm transition-colors">Privacy Policy</a>
          <a href="#" className="text-text-muted hover:text-primary text-sm transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
