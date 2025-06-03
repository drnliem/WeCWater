'use client';
import React from "react";
import { useRouter } from "next/navigation";
import * as Images from '../imageimport.jsx'; 
import '../style/goals.css';

// Komponen Header
function Header() {
  return (
    <header className="bg-blue-100 py-2 px-2 w-full max-w-xl box-border mx-auto">
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
  );
}

// Komponen TrashPage
function TrashPage() {
  const router = useRouter();

  const goBack = () => {
    router.push('/location');
  };

  return (
    <div className="font-sans bg-blue-50 min-h-screen flex flex-col items-center p-5 box-border">
      <Header />

      <main className="max-w-xl w-full p-6 bg-white rounded-md shadow mt-6">
        <h1 className="text-2xl font-bold mb-4">Trash Hunt - Yogyakarta</h1>
        <p>Lokasi : Candi Prambanan</p>
        <p>Link Maps : <a href="https://maps.app.goo.gl/5FEomPP59czu47qE7" className="text-blue-600 underline" target="_blank">Google Maps</a></p>
        <p>Waktu Pelaksanaan : 8:00 WIB - Selesai</p>
        <p>Gather Point : Entrance</p>

        <button
          onClick={goBack}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
        >
          Back to Location
        </button>
      </main>
    </div>
  );
}

export default TrashPage;
