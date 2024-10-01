'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import authService from '@/services/authService';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message
    try {
      await authService.login({ email, password });
      router.push('/');
    } catch (err) {
      setErrorMessage('ログインに失敗しました。再試行してください。');
      console.error(err);
    }
  };

  return (
    <div
      className="w-full min-h-[100vh] bg-cover bg-center flex flex-wrap justify-between items-center"
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
      <div className="flex flex-col md:flex-row justify-between items-center bg-white shadow-lg rounded-lg w-[914px] h-[691px] p-8 mx-auto">
        {/* Logo and Heading */}
        <div className="w-full flex justify-center items-center">
          <div className="w-[283px] h-[283px] text-center">
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
          <h2 className="text-xl font-bold text-blue-600 mb-8">ログイン</h2>
          {/* Form */}
          <form onSubmit={handleLogin}>
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
                required
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
                required
              />
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm mb-4 text-center">
                {errorMessage}
              </div>
            )}

            <div className="text-center my-4">
              <a href="/forgot" className="text-gray-500 text-sm underline">
                パスワードを忘れた場合
              </a>
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
            <a href="/register" className="text-blue-500 text-sm underline">
              会員登録
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
