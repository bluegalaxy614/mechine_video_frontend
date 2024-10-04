'use client';
import authService from '@/lib/auth';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

export default function ForgotPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState('');

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      const res = await authService.forgotPassword({ email });
      setMessage(res.data.message);
    } catch (err) {
      setError(err.response?.data.message || 'An unexpected error occurred');
    }
  };
  return (
    <div
      className="min-h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: `url('/bg/bg 1.png')` }}
    >
      <div className="max-w-[1280px] mx-auto flex flex-wrap justify-center items-center">
        <div className="text-center">
          <h1 className="text-[#212121] text-[24px] font-bold">
            Mechanical Repair Support Platform
          </h1>
          <p className="text-[#4291EF] lg:text-4xl font-bold">
            メカニカルリペア
          </p>
          <p className="text-[#4291EF] lg:text-4xl font-bold">
            サポートプラットフォーム
          </p>
        </div>
        <div>
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
              <h2 className="text-xl font-bold text-black-600 mb-8">
                パスワードを忘れた場合
              </h2>
              {/* Form */}
              <form onSubmit={handleForgotPassword}>
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
                  会員登録
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
