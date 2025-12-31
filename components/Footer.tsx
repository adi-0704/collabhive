
import React from 'react';
import Logo from './UI/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
          <Logo variant="full" />
          
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Headquarters</p>
                <p className="font-bold text-black">India</p>
            </div>
            <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Collaborations</p>
                <p className="font-bold text-black">collabhive.in@gmail.com</p>
            </div>
            <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Social</p>
                <p className="font-bold text-black">@collabhive.in</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
          <p>© {currentYear} CollabHive Influencer Marketing Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
