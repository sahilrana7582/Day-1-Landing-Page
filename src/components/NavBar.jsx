import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants';
import { Cross, MenuIcon, X } from 'lucide-react';

const NavBar = () => {
  const [showTabs, setShowTabs] = useState(false);
  return (
    <nav className="sticky top-0 z-50  backdrop-blur-lg py-4 border-b border-orange-500 mx-4">
      <div className="container flex relative mx-auto justify-between">
        <div className="flex items-center gap-2 flex-shrink-0">
          <img src={logo} alt="logo" className="w-10 h-10"></img>
          <h3 className="text-lg  tracking-tight from-orange-200 to-orange-600">
            VirtualR
          </h3>
        </div>
        <ul className="hidden lg:flex ml-14 space-x-12 items-center">
          {navItems.map((link, ind) => {
            return (
              <li key={ind}>
                <a href={link.href}>{link?.label}</a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex justify-center space-x-12 items-center">
          <button className="p-2 border-2 border-white rounded-lg">
            Sign In
          </button>
          <button className="p-2 bg-gradient-to-r border-2 border-orange-500 from-orange-500 to-orange-700 rounded-lg">
            Create a account
          </button>
        </div>

        <div
          className=" items-center flex lg:hidden"
          onClick={() => setShowTabs(!showTabs)}
        >
          {showTabs ? <X /> : <MenuIcon />}
        </div>
      </div>
      {showTabs && (
        <div className="lg:hidden fixed right-0 left-0 z-20 bg-neutral-900 w-full border-b  border-orange-500 p-4">
          <div className="p-6 flex justify-center items-center flex-col gap-6">
            <div className="grid grid-cols-2 justify-center gap-10">
              {navItems.map((link, ind) => {
                return (
                  <a key={ind} href={link.href}>
                    {link?.label}
                  </a>
                );
              })}
            </div>

            <div className="border-white border w-full"></div>

            <div className="flex flex-col gap-6 justify-center items-center">
              <button className="p-2 border-2 border-white rounded-lg">
                Sign In
              </button>
              <button className="p-2 bg-gradient-to-r border-2 border-orange-500 from-orange-500 to-orange-700 rounded-lg">
                Create a account
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
