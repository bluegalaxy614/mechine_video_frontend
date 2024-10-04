'use client';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import authService from '@/lib/auth';
import axios from 'axios';
import { setSession } from '@/utils/utils';
import { useStore } from '@/store/store';

export default function RegisterPage() {
  const { user, setUser } = useStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      console.log(name, email, password, confirmPassword);
      const res = await authService.register({
        name,
        email,
        password,
        confirmPassword,
      });
      console.log(res);
      const token = res.data.token;
      setSession(token);
      setUser(res.data.user);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setMessage(res.data.message);
      router.push('/');
      // router.push('verify-email');
    } catch (err) {
      console.log(err.response?.data.message, 'erere');
      setError(err.response?.data.message || 'An unexpected error occurred');
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-wrap justify-between items-center"
      style={{ backgroundImage: `url('/bg/bg 1.png')` }}
    >
      <div className="text-center mx-auto">
        <h1 className="text-[#212121] text-[24px] font-bold">
          Mechanical Repair Support Platform
        </h1>
        <p className="text-[#4291EF] lg:text-4xl font-bold">メカニカルリペア</p>
        <p className="text-[#4291EF] lg:text-4xl font-bold">
          サポートプラットフォーム
        </p>
      </div>
      <div className="flex justify-between items-center bg-white shadow-lg rounded-lg w-[914px] h-[691px] p-8 mx-auto">
        {/* Logo and Heading */}
        <div className="w-full flex justify-center items-center">
          <div className="w-[283px] h-[283px] text-center ">
            <h2 className="text-xl font-bold text-blue-600 mb-8">
              メカニカルリアサポート
            </h2>
            <div className="w-[202px] h-[202px] rounded-[29px] text-center mx-auto">
              <Image
                width={202}
                height={202}
                src="/profile/user.png" // Replace with the appropriate image URL
                alt="Mechanical Support"
                className="mx-auto w-full h-full object-cover rounded-[29px]"
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          {/* Form */}
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                ユーザー名
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="田中 太郎"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                メール
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="taro.tanaka@example.com"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                密碼
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="請輸入密碼"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                確認密碼
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="請確認密碼"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="text-center">
              {message && <p style={{ color: 'green' }}>{message}</p>}
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                ログイン
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <a href="/login" className="text-blue-500 text-sm underline">
              ログインはこちら
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
