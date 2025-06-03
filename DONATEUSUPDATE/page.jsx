'use client';
import React from "react";
import { useRouter } from "next/navigation";
import * as Images from '../imageimport.jsx';
import '../style/donate-us.css';

export const DonateUs = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/home");
  };

  return (
    <div className="font-sans bg-blue-50 min-h-screen flex flex-col items-center p-5 box-border">
      {/* Header */}
      <header className="bg-blue-100 py-2 px-2 w-full max-w-xl box-border">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer px-2 py-2">
            <button>
              <img className="h-7 mr-5 cursor-pointer" alt="Menu" src={Images.menu_icon} />
            </button>
            <img className="h-7 cursor-pointer" alt="User" src={Images.user_icon} />
          </div>
          <div className="flex justify-end">
            <img className="h-20 ml-auto" alt="WeCWater Logo" src={Images.wecwater} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="mt-10 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Donate Us</h2>
        <div className="border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md">
          <img
            src={Images.qr}
            alt="QR Code"
            className="h-60 w-60 object-contain"
          />
        </div>
      </div>

      {/* Back to Home Button */}
      <button
        onClick={goToHome}
        className="mt-6 bg-cyan-500 text-white py-2 px-6 rounded-lg hover:bg-cyan-600 transition"
      >
        Go to Home
      </button>
    </div>
  );
};

export default DonateUs;
