'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import '../style/forum.css';
import { wecwater, login_button } from '../imageimport.jsx';

export const Forum = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email dan Password harus diisi');
      return;
    }

    if (email === 'admin@example.com' && password === 'admin123') {
      router.push('/home');
    } else {
      setError('Email atau Password salah');
    }
  };

  return (
    <div className="forum" data-model-id="73:3">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle">
            {error && <div className="error-message">{error}</div>}
            <div className="text-wrapper-2">Login</div>

            <form onSubmit={handleLogin} className="login-form">
              <input
                type="email"
                id="email"
                className="input input-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <input
                type="password"
                id="password"
                className="input input-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />

              <div className="group">
                <div className="overlap-group">
                  <button type="submit" className="login-button">
                    <div className="submit-text">Submit</div>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="text-wrapper">Forgot Password?</div>
          <div className="div">Sign Up</div>

          <Image
            className="wecwater"
            alt="Wecwater Logo"
            src={wecwater}
            width={100}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Forum;
