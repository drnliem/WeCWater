'use client';
import React from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import * as Images from '../imageimport.jsx'; 
import '../style/location.css';

const Location = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/home");
  };

  const goToA = () => router.push("/river");
  const goToB = () => router.push("/beach");
  const goToC = () => router.push("/mangrove");
  const goToD = () => router.push("/canal");
  const goToE = () => router.push("/trash");

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

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Upcoming Events</h1>

      {/* Event Cards Section */}
      <div className="w-full max-w-xl grid gap-4">
        <div onClick={goToA} className="cursor-pointer flex items-center bg-white rounded-lg shadow-md p-3 hover:bg-blue-100 transition">
          <img className="h-16 w-16 object-cover rounded mr-4" alt="Location 3" src={Images.location_icon} />
          <span className="text-gray-800 font-semibold">River Cleanup - Jakarta</span>
        </div>

        <div onClick={goToB} className="cursor-pointer flex items-center bg-white rounded-lg shadow-md p-3 hover:bg-blue-100 transition">
          <img className="h-16 w-16 object-cover rounded mr-4" alt="Location 4" src={Images.location_icon} />
          <span className="text-gray-800 font-semibold">Beach Sweep - Bali</span>
        </div>

        <div onClick={goToC} className="cursor-pointer flex items-center bg-white rounded-lg shadow-md p-3 hover:bg-blue-100 transition">
          <img className="h-16 w-16 object-cover rounded mr-4" alt="Location 5" src={Images.location_icon} />
          <span className="text-gray-800 font-semibold">Mangrove Replanting - Surabaya</span>
        </div>

        <div onClick={goToD} className="cursor-pointer flex items-center bg-white rounded-lg shadow-md p-3 hover:bg-blue-100 transition">
          <img className="h-16 w-16 object-cover rounded mr-4" alt="Location" src={Images.location_icon} />
          <span className="text-gray-800 font-semibold">Canal Cleanup - Bandung</span>
        </div>

        <div onClick={goToE} className="cursor-pointer flex items-center bg-white rounded-lg shadow-md p-3 hover:bg-blue-100 transition">
          <img className="h-16 w-16 object-cover rounded mr-4" alt="Location 2" src={Images.location_icon} />
          <span className="text-gray-800 font-semibold">Trash Hunt - Yogyakarta</span>
        </div>
      </div>

      {/* Button */}
      <button 
        onClick={goToHome} 
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200"
      >
        Go to Home
      </button>
    </div>
  );
};

export default Location;
