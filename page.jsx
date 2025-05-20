'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../style/home.css';
import * as image from '../imageimport.jsx';


export const Home = () => {
  const router = useRouter();
  const goToReport = () => {
    router.push('/report');
  };

  return (
    <div className="home-container">
      <header className="header">
      <div className="header-all">
        <div className="header-kiri">
          <button> 
          <img className="menu-icon" alt="Menu" src={image.menu_icon} />
          </button>
          <img className="user-icon" alt="WeCWater" src={image.user_icon} />
        </div>
        <div className="header-kanan">          
          <img className="wecwater-logo" alt="User" src={image.wecwater} />
        </div>
        </div>
      </header>

      <div className="search-bar">
        <input type="text" placeholder="Try search something" className="search-input" />
        <img className="search-icon" alt="Search" src={image.search_icon} />
      </div>

      <div className="forum-section">
        <h2 className="forum-title">Forum</h2>
        <div className="forum-list">
          <button className="forum-item" >
            <img className="user-icon-forum" alt="User" src={image.user_icon} />
          </button>
          <button className="forum-item">
            <img className="user-icon-forum" alt="User" src={image.user_icon} />
          </button>
          <button className="forum-item">
            <img className="user-icon-forum" alt="User" src={image.user_icon} />
          </button>
          <button className="forum-item">
            <img className="user-icon-forum" alt="User" src={image.user_icon} />
          </button>
          <button className="forum-item">
            <img className="user-icon-forum" alt="User" src={image.user_icon} />
          </button>
        </div>
      </div>

      <div className="more-features-section">
        <h2 className="more-features-title">More of Our Features</h2>
        <div className="features-grid">
          <button className="feature-item">
            <img className="feature-icon" alt="Goals" src={image.goals_icon} />
            <div className="feature-text">Goals</div>
          </button>
          <button className="feature-item">
            <img className="feature-icon" alt="Location" src={image.location_icon} />
            <div className="feature-text">Location</div>
            </button>
          <button className="feature-item">
            <img className="feature-icon" alt="Top Activity" src={image.top_icon} />
            <div className="feature-text">Top Activity</div>
            </button>
          <button className="feature-item">
            <img className="feature-icon" alt="Community" src={image.community_icon} />
            <div className="feature-text">Community</div>
            </button>
          <button className="feature-item" onClick={goToReport}>
            <img className="feature-icon" alt="Report" src={image.report_icon} />
            <div className="feature-text">Report</div>
            </button>
          <div className="feature-item">
            <img className="feature-icon" alt="Donate us" src={image.donate_icon} />
            <div className="feature-text">Donate us</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;