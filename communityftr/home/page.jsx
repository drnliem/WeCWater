'use client';
import React, { useState, useEffect } from 'react';
import { getPosts } from "@/services/postservice";
import { useRouter } from 'next/navigation';
import * as image from '../imageimport.jsx';

export const Home = () => {
  const router = useRouter();

  const goToTop = () => {
    router.push('/topAct');
  };

  const goToForum = (id) => {
    router.push(`/forum/${id}`);
  };

  const goToReport = () => {
    router.push('/report');
  };

  const goToProfile = () => {
    router.push('/profile');
  };

  const goToGoals = () => {
    router.push('/goals');
  };

  const goToLocation = () => {
    router.push('/location');
  }

  const goToDonateUs = () => {
    router.push('/DonateUs');
  };

  const goToCommunity = () => {
    router.push('/community');
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="font-sans bg-blue-50 min-h-screen flex flex-col items-center p-5 box-border">
      {/* Header */}
      <header className="bg-blue-100 py-2 px-2 w-full max-w-xl box-border">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer px-2 py-2">
            <button>
              <img className="h-7 mr-5 cursor-pointer" alt="Menu" src={image.menu_icon} />
            </button>
            <button onClick={goToProfile}>
              <img className="h-7 cursor-pointer" alt="WeCWater User" src={image.user_icon} />
            </button>
          </div>
          <div className="flex justify-end">
            <img className="h-20 ml-auto" alt="WeCWater Logo" src={image.wecwater} />
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white p-2 mt-5 rounded-lg flex items-center w-full max-w-xl box-border border border-gray-300">
        <input
          type="text"
          placeholder="Try search something"
          className="flex-grow border-none p-2 text-black text-base outline-none"
        />
        <img className="h-5 ml-2 cursor-pointer" alt="Search" src={image.search_icon} />
      </div>

      {/* Forum Section */}
      <div className="bg-white p-5 rounded-lg w-full max-w-xl mt-5 box-border">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">Forum</h2>
        <div className="flex flex-col gap-4 justify-center">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500">Belum ada post.</p>
          ) : (
            posts.map((post) => (
              <button
                onClick={() => goToForum(post.id)}
                key={post.id}
                className="bg-cyan-100 p-3 rounded-md border-2 border-cyan-500 cursor-pointer hover:scale-105 hover:shadow-lg transition-transform"
              >
                <div className="flex items-center gap-3">
                  <img
                    className="h-10 w-10 object-cover"
                    alt="Post Media"
                    src={post.mediaUrls?.[0] || image.user_icon}
                  />
                  <div>
                    <div className="font-bold text-sm text-gray-800">{post.title}</div>
                    <div className="text-xs text-gray-600">{post.location}</div>
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
      </div>

      {/* More Features Section */}
      <div className="bg-white p-4 rounded-lg w-full max-w-xl mt-5 box-border">
        <h2 className="text-lg font-bold mb-4 text-gray-800 text-center">More of Our Features</h2>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={goToGoals}
            className="bg-cyan-100 p-5 rounded-lg flex items-center border-2 border-cyan-500 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg flex-col"
          >
            <img className="h-7 mb-2 text-teal-700" alt="Goals" src={image.goals_icon} />
            <div className="text-sm text-black pt-2">Goals</div>
          </button>

          <button
            onClick={goToLocation}
            className="bg-cyan-100 p-5 rounded-lg flex items-center border-2 border-cyan-500 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg flex-col"
          >
            <img className="h-7 mb-2 text-teal-700" alt="Donate us" src={image.location_icon} />
            <div className="text-sm text-black pt-2">Location</div>
          </button>

          <button
            onClick={goToTop}
            className="bg-cyan-100 p-5 rounded-lg flex items-center border-2 border-cyan-500 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg flex-col"
          >
            <img className="h-7 mb-2 text-teal-700" alt="Top Activity" src={image.top_icon} />
            <div className="text-sm text-black pt-2">Top Activity</div>
          </button>

          <button
            onClick={goToCommunity}
            className="bg-cyan-100 p-5 rounded-lg flex items-center border-2 border-cyan-500 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg flex-col"
          >
            <img className="h-7 mb-2 text-teal-700" alt="Donate us" src={image.community_icon} />
            <div className="text-sm text-black pt-2">Community</div>
          </button>

          <button
            onClick={goToReport}
            className="bg-cyan-100 p-5 rounded-lg flex items-center border-2 border-cyan-500 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg flex-col"
          >
            <img className="h-7 mb-2 text-teal-700" alt="Report" src={image.report_icon} />
            <div className="text-sm text-black pt-2">Report</div>
          </button>

          <button
            onClick={goToDonateUs}
            className="bg-cyan-100 p-5 rounded-lg flex items-center border-2 border-cyan-500 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg flex-col"
          >
            <img className="h-7 mb-2 text-teal-700" alt="Donate us" src={image.donate_icon} />
            <div className="text-sm text-black pt-2">Donate us</div>
          </button>
          </div>
        </div>
      </div>
  );
};

export default Home;
