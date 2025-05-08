'use client';
import React from "react";
import { useRouter } from 'next/navigation';
import { wecwater, login_button } from '../imageimport.jsx';

export const Opening = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="flex flex-col items-center gap-0">
        <img src={wecwater} alt="Wecwater" className="w-90 h-auto" />
        <div className="relative">
          <img src={login_button} alt="Login Button Background" className="w-40 h-10" />
          <button
            onClick={() => router.push('/forum')}
            className="absolute inset-0 w-full h-full flex items-center justify-center text-white font-semibold text-lg"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Opening;
