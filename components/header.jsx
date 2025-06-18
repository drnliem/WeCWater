'use client';
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import * as Images from '../app/imageimport.jsx'; 

export default function Header() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  const goToProfile = () => {
    router.push('/profile');
  };

  const goToHome = () => {
    router.push("/home");
  };

  return (
    <header className="bg-blue-100 py-2 px-2 w-full max-w-xl box-border">
      <div className="flex justify-between items-center">
        <div className="flex items-center cursor-pointer px-2 py-2">
          <div className="relative" ref={menuRef}>
            <button onClick={() => setShowMenu(!showMenu)}>
              <img
                className="h-7 mr-5 cursor-pointer"
                alt="Menu"
                src={Images.menu_icon}
              />
            </button>

            {showMenu && (
              <div className="absolute top-10 left-0 bg-white border rounded-lg shadow-lg z-50 w-40">
                <button
                  onClick={() => {
                    setShowMenu(false);
                    router.push('/home');
                  }}
                  className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100">
                  Home
                </button>
                <button
                  onClick={() => {
                    setShowMenu(false);
                    router.push('/setting');
                  }}
                  className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100">
                  Setting
                </button>
                <button
                  onClick={() => {
                    setShowMenu(false);
                    alert("Logout clicked"); // Ganti dengan fungsi logout jika ada
                  }}
                  className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>

          <button onClick={goToProfile}>
            <img
              className="h-7 cursor-pointer"
              alt="WeCWater User"
              src={Images.user_icon}
            />
          </button>  
        </div>

        <div className="flex justify-end">
          <img
            className="h-20 ml-auto"
            alt="WeCWater Logo"
            src={Images.wecwater}
          />
        </div>
      </div>
    </header>
  );
}
