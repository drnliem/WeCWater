'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import '../style/forum.css';
import { wecwater, login_button } from '../imageimport.jsx';
import { login } from '@/lib/authservice';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !password) {
      setError('Email dan password harus diisi');
      setLoading(false);
      return;
    }

    try {
      const user = await login(email, password);
      console.log('User logged in:', user);
      // redirect ke halaman home setelah login sukses
      router.push('/home');
    } catch (err) {
      console.error('Login error:', err);
      setError('Login gagal: ' + (err.message || 'Terjadi kesalahan'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forum" data-model-id="73:3">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle">
            {error && <div className="error-message">{error}</div>}
            <div className="text-wrapper-2">Login</div>

            <form onSubmit={handleSubmit} className="login-form">
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

          <div className="text-wrapper">
            <a href="/forgetpass">Forgot Password?</a>
            </div>
          <div className="div">
            <a href="/signup">Sign Up</a>
            </div>

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
}


