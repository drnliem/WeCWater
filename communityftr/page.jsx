"use client";
import React from "react";
import * as image from '../imageimport.jsx';
import { useRouter } from "next/navigation";

export const Community = () => {
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
              <img className="h-7 mr-5 cursor-pointer" alt="Menu" src={image.menu_icon} />
            </button>
            <img className="h-7 cursor-pointer" alt="User" src={image.user_icon} />
          </div>
          <div className="flex justify-end">
            <img className="h-20 ml-auto" alt="WeCWater Logo" src={image.wecwater} />
          </div>
        </div>
      </header>

     {/* Community Header Section */}
      <div className="w-full max-w-xl mt-6 relative">
        <div className="relative bg-blue-200 h-24 rounded-md">
          <img className="absolute top-8 left-4 h-12" alt="Wecwater" src={image.community_icon} />
          <img className="absolute top-8 right-16 h-6" alt="Vector" src={image.community_icon} />
          <img className="absolute top-8 right-4 h-6" alt="Image" src={image.community_icon} />
          <p className="absolute bottom-8 left-20 text-gray-800 font-semibold">Komunitas Air Bersih</p>
        </div>
      </div>

      <div className="w-full max-w-xl mt-6 relative">
        <div className="relative bg-blue-200 h-24 rounded-md">
          <img className="absolute top-8 left-4 h-12" alt="Wecwater" src={image.community_icon} />
          <img className="absolute top-8 right-16 h-6" alt="Vector" src={image.community_icon} />
          <img className="absolute top-8 right-4 h-6" alt="Image" src={image.community_icon} />
           <p className="absolute bottom-8 left-20 text-gray-800 font-semibold">Komunitas Bo Oh o' Wa Er</p>
        </div>
      </div>

      <div className="w-full max-w-xl mt-6 relative">
        <div className="relative bg-blue-200 h-24 rounded-md">
          <img className="absolute top-8 left-4 h-12" alt="Wecwater" src={image.community_icon} />
          <img className="absolute top-8 right-16 h-6" alt="Vector" src={image.community_icon} />
          <img className="absolute top-8 right-4 h-6" alt="Image" src={image.community_icon} />
          <p className="absolute bottom-8 left-20 text-gray-800 font-semibold">Monster Inc</p>
        </div>
      </div>

      <div className="w-full max-w-xl mt-6 relative">
        <div className="relative bg-blue-200 h-24 rounded-md">
          <img className="absolute top-8 left-4 h-12" alt="Wecwater" src={image.community_icon} />
          <img className="absolute top-8 right-16 h-6" alt="Vector" src={image.community_icon} />
          <img className="absolute top-8 right-4 h-6" alt="Image" src={image.community_icon} />
          <p className="absolute bottom-8 left-20 text-gray-800 font-semibold">Komunitas Air Tawar</p>
        </div>
      </div>

      <div className="w-full max-w-xl mt-6 relative">
        <div className="relative bg-blue-200 h-24 rounded-md">
          <img className="absolute top-8 left-4 h-12" alt="Wecwater" src={image.community_icon} />
          <img className="absolute top-8 right-16 h-6" alt="Vector" src={image.community_icon} />
          <img className="absolute top-8 right-4 h-6" alt="Image" src={image.community_icon} />
          <p className="absolute bottom-8 left-20 text-gray-800 font-semibold">Avatar Air</p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-6">
        <button
          onClick={goToHome}
          className="bg-cyan-500 text-white py-2 px-6 rounded-lg hover:bg-cyan-600 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Community;
