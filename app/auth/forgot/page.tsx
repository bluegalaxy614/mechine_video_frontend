'use client';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

export default function ForgotPage() {
  const [form, setForm] = useState({
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div
      className="h-[calc(100vh-90px)] w-full bg-cover bg-center flex flex-wrap justify-between items-center px-[153px]"
      style={{ backgroundImage: `url('/bg/bg 1.png')` }}
    >
      <div className="text-center">
        <h1 className="text-[#212121] text-[24px] font-bold">
          Mechanical Repair Support Platform
        </h1>
        <p className="text-[#4291EF] text-[40px] font-bold">メカニカルリペア</p>
        <p className="text-[#4291EF] text-[40px] font-bold">
          サポートプラットフォーム
        </p>
      </div>
      <div>
        <div className="flex justify-between items-center bg-white shadow-lg rounded-lg w-[914px] h-[691px] p-8">
          {/* Logo and Heading */}
          <div className="w-full flex justify-center items-center">
            <div className="w-[283px] h-[283px] text-center ">
              <h2 className="text-xl font-bold text-blue-600 mb-8">
                メカニカルリアサポート
              </h2>
              <div className="w-[202px] h-[202px] rounded-[29px] text-center mx-auto">
                <Image
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
            <form onSubmit={handleSubmit}>
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
                  value={form.email}
                  onChange={handleChange}
                  placeholder="taro.tanaka@example.com"
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
              <a href="#" className="text-blue-500 text-sm underline">
                会員登録
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
