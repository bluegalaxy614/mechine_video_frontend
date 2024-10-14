'use client';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useStore } from '@/store/store';
import { updateProfile } from '@/lib/api';

export default function PostProfilePage() {
  const { user, setUser } = useStore((state) => state);
  const fileInputRef = useRef(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(
  );

  const [formdata, setFormData] = useState({
    name: '',
    email: '',
  })
  
  const handleClick = () => {
    fileInputRef?.current.click();
  }

  const [avatar, setAvatar] = useState<File | null>(null);

  useEffect(() => {
    setAvatarPreview(user.avatar ? user.avatar : '/profile/user.png')
  }, [user]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    console.log(e.target.name, e.target.value);
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(file);
      const fileUrl = URL.createObjectURL(file);
      setAvatarPreview(fileUrl)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData();

    data.append('name', formdata.name);
    data.append('email', formdata.email);
    data.append('avatar', avatar)

    try {
      const res = await updateProfile(data);
      const user = res.data;
      console.log(user)
      setUser(user.user);
    } catch (error) {
      console.error('Profile changing Error')
    }
  }

  return (
    <div className="min-h-[calc(100vh-90px)] flex flex-col justify-between">
      <section className="max-w-[1280px] mx-auto flex justify-center items-center lg:mt-[85px] md:mt-[55px] sm:mt-[45px] xsm:mt-[35px]">
        <form
          className="flex flex-col lg:w-[1280px] lg:px-[0px] md:px-[80px] sm:px-[60px] xsm:px-[40px]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-[30px] text-[#4291EF] font-bold">
            プロフィール編集
          </h1>

          <div className="w-full flex grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 gap-3">
            <div className="flex my-[40px] mx-auto">
              <div className="relative w-[248px] h-[299px] rounded-[21px] border border-[#4291EF] border-[4px] flex justify-center items-center overflow-hidden">
                <Image fill src={avatarPreview} alt={user.name} />
                <Input
                  type="file"
                  name="image"
                  accept=".jpeg, .png"
                  onChange={handleFileChange}
                  className="hidden"
                  ref={fileInputRef}
                  required
                />
                <div
                  onClick={handleClick}
                  className="absolute cursor-pointer bottom-[0px] text-[#FFFFFF] text-[20px] bg-[#4291EF] w-[248px] h-[51px] rounded-b-[12px] flex justify-center items-center mt-[-21px] z-[1000]">
                  アバターアップロード
                </div>
              </div>
            </div>

            <div className="flex flex-col my-[40px] mx-auto gap-10">
              <div className="min-w-[320px] h-[41px] gap-6">
                <p className="mb-2">ユーザー名</p>
                <Input
                  fullWidth
                  placeholder={user.name}
                  labelPlacement="outside"
                  name='name'
                  value={formdata.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="max-w-[320px] h-[41px] gap-6">
                <p className="mb-2">メール</p>
                <Input
                  fullWidth
                  placeholder={user.email}
                  labelPlacement="outside"
                  name='email'
                  value={formdata.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <Button className="w-[185px] h-[31px] bg-[#4291EF] mt-[40px] mb-[71px] mx-auto">
            <p className="text-[#FFFFFF] text-[20px]">アップデート</p>
            <Image width={28} height={28} src="/icons/icon-store.png" alt="" />
          </Button>
        </form>
      </section>
      <footer className="w-full flex items-center justify-center py-3 bg-[#4291EF]">
        <p className="text-white text-[20px]"> All rights reserved.</p>
      </footer>
    </div>
  );
}
