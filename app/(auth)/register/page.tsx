'use client';

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import authService from '@/lib/auth';
import { useStore } from '@/store/store';
import { setSession } from '@/utils/utils';

export default function RegisterPage() {
  const setUser = useStore((state) => state.setUser);
  const setUnread = useStore((state) => state.setUnread);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const setErrorMessage = useStore((state) => state.setErrorMessage);
  const setMessage = useStore((state) => state.setMessage);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await authService.register({
        name,
        email,
        password,
        confirmPassword,
      });
      const { user, message, unread } = res.data;
      setSession(user?.token);
      setUser(user);
      setUnread(unread);
      setMessage(message);
      if (user?.role === 'admin') {
        router.push('/dashboard');
      } else {
        router.push('/');
      }
    } catch (err) {
      setErrorMessage(
        err.response?.data.message || 'An unexpected error occurred',
      );
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-wrap justify-between items-center py-[30px]"
      style={{ backgroundImage: `url('/bg/bg 1.png')` }}
    >
      <div className="text-center p-[30px] mx-auto">
        <h1 className="text-[#212121] text-[24px] font-bold">
          Mechanical Repair Support Platform
        </h1>
        <p className="text-[#4291EF] lg:text-4xl font-bold">メカニカルリペア</p>
        <p className="text-[#4291EF] lg:text-4xl font-bold">
          サポートプラットフォーム
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center bg-white shadow-lg rounded-lg w-[914px] min-h-[691px] p-8 mx-auto">
        <div className="w-full flex justify-center items-center">
          <div className="w-[283px] min-h-[283px] text-center ">
            <h2 className="text-xl font-bold text-blue-600 mb-8">
              メカニカルリアサポート
            </h2>
            <div className="w-[202px] h-[202px] rounded-[29px] text-center mx-auto">
              <Image
                width={202}
                height={202}
                src="/profile/user.png"
                alt="Mechanical Support"
                className="mx-auto w-full h-full object-cover rounded-[29px]"
              />
            </div>
          </div>
        </div>

        <div className="w-full">
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
                パスワード
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="パスワードを入力してください。"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                パスワード再入力
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="パスワードを入力してください。"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                ログイン
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <a
              href="/login"
              className="text-blue-500 text-sm underline mb-[30px]"
            >
              ログインはこちら
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
