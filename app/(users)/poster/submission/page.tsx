'use client';
import { Input, Textarea } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import { Select, SelectItem } from '@nextui-org/select';
import { useState } from 'react';
import { categoryConfig } from '@/config/site';
import { uploadVideo } from '@/lib/api';

export default function SubmissionPage() {
  const [video, setVideo] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoDuration: '',
    youtubeLink: '',
    videoCode: '',
    machineName: '',
    format: '',
    manufacturer: '',
    selectedCategory: '',
    selectedSubCategory: '',
  });
  const [uploadedStatus, setUploadedStatus] = useState(false);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('');

  // Handle category change
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSelectedSubCategory(''); // Reset subcategory when main category changes
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle subcategory change
  const handleSubCategoryChange = (value: string) => {
    setSelectedSubCategory(value);
  };

  // Filter subcategories based on the selected main category
  const filteredSubCategories =
    categoryConfig.find((category) => category.id === selectedCategory)
      ?.subCategories || [];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      setVideo(file);
      const fileURL = URL.createObjectURL(file);
      setVideoPreview(fileURL);

      const tempVideo = document.createElement('video');
      tempVideo.src = fileURL;
      tempVideo.addEventListener('loadedmetadata', () => {
        formData.videoDuration =  Math.floor(tempVideo.duration).toString();
      })
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData, selectedCategory, selectedSubCategory, video);
    if (!video) {
      console.log('No video selected');
      return;
    }

    const data = new FormData();

    data.append('video', video);
    data.append('videoDuration', formData.videoDuration);
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('youtubeLink', formData.youtubeLink);
    data.append('videoCode', formData.videoCode);
    data.append('machineName', formData.machineName);
    data.append('format', formData.format);
    data.append('manufacturer', formData.manufacturer);
    data.append('selectedCategory', selectedCategory);
    data.append('selectedSubCategory', selectedSubCategory);

    try {
      const res = await uploadVideo(data);
      setUploadedStatus(true);
      console.log(uploadedStatus, res, data);
    } catch (error) {
      setUploadedStatus(false);
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div className="h-[calc(100vh-90px)] lg:w-full xsm:w-fit flex flex-col justify-between">
      <form
        onSubmit={handleSubmit}
        className="max-w-[1280px] mx-auto flex flex-wrap lg:mt-[85px] md:mt-[55px] sm:mt-[45px] xsm:mt-[35px] gap-12"
      >
        <div className="flex flex-col max-w-[900px] mx-auto lg:px-0 md:px-0 sm:px-[40px] xsm:px-[40px]">
          <h1 className="lg:text-[30px] md:text-[28px] sm:text-[24px] xsm:text-[22px] text-[#4291EF] font-bold">
            機械修理のノウハウを共有し、収益を得ましょう！
          </h1>
          <p className="lg:text-[20px] md:text-[18px] sm:text-[14px] xsm:text-[12px] text-[#212121] font-bold">
            こちらのページから、あなたの修理動画を簡単にアップロードすることができます
          </p>

          <div className="flex lg:mt-[85px] md:mt-[55px] sm:mt-[45px] xsm:mt-[35px] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
            <div className="w-[300px] flex flex-col gap-6 mx-auto">
              <div>
                <p className="mb-2">タイトル</p>
                <Input
                  width={387}
                  height={41}
                  name="title"
                  placeholder="入力してください..."
                  labelPlacement="outside"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <p className="mb-2">説明</p>
                <Textarea
                  name="description"
                  value={formData.description}
                  labelPlacement="outside"
                  placeholder="入力してください..."
                  className="w-[300px] h-[100px]"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="w-[300px] flex flex-col gap-6 mx-auto">
              <div className="w-[248px] h-[196px] bg-[#E4F1FF] flex justify-center items-center rounded-lg mx-auto">
                <label className="relative flex flex-col items-center justify-center w-full h-full cursor-pointer">
                  {/* Video Preview */}
                  {videoPreview && (
                    <video
                      key={videoPreview}
                      className="absolute inset-0 w-full h-full rounded-lg"
                      controls
                    >
                      <source src={videoPreview} type="video/mp4" />
                      <source src={videoPreview} type="video/avi" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  <Input
                    type="file"
                    name="video"
                    accept=".mp4, .avi"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                  <Image
                    width={105}
                    height={105}
                    src="/icons/icon-upload.png"
                    alt="Upload"
                    className="z-10 w-[105px] h-[105px] p-0 hover:cursor-pointer hover:opacity-50 transition-opacity duration-200"
                  />
                </label>
              </div>

              <div>
                <p className="mb-2">Youtubeリンク</p>
                <Input
                  name="youtubeLink"
                  value={formData.youtubeLink}
                  width={387}
                  type="url"
                  placeholder="www.youtube.com/watch?v=dQw4w9WgXcQ"
                  labelPlacement="outside"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">
                        https://
                      </span>
                    </div>
                  }
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[300px] gap-4 mx-auto">
          <div>
            <p className="mb-2">動画コード</p>
            <Input
              name="videoCode"
              value={formData.videoCode}
              width={387}
              height={41}
              placeholder="入力してください..."
              labelPlacement="outside"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <p className="mb-2">機械名</p>
            <Input
              name="machineName"
              value={formData.machineName}
              width={387}
              height={41}
              placeholder="入力してください..."
              labelPlacement="outside"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <p className="mb-2">形式</p>
            <Input
              name="format"
              value={formData.format}
              width={387}
              height={41}
              placeholder="入力してください..."
              labelPlacement="outside"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <p className="mb-2">メーカー</p>
            <Input
              name="manufacturer"
              value={formData.manufacturer}
              width={387}
              height={41}
              placeholder="入力してください..."
              labelPlacement="outside"
              onChange={handleInputChange}
            />
          </div>

          {/* Main Category Select */}
          <div>
            <p className="mb-2">メインカテゴリ</p>
            <Select
              size="sm"
              aria-label="select the category"
              selectedKeys={selectedCategory}
              className="w-full h-[41px] rounded-md"
              onChange={(value) => handleCategoryChange(value.target.value)}
            >
              {categoryConfig.map((category) => (
                <SelectItem key={category.id} value={category.label}>
                  {category.label}
                </SelectItem>
              ))}
            </Select>
          </div>

          {/* Subcategory Select */}
          <div>
            <p className="mb-2">サブカテゴリ</p>
            <Select
              size="sm"
              aria-label="select the subcategory"
              className="w-full h-[41px] rounded-md"
              onChange={(value) => handleSubCategoryChange(value.target.value)}
              isDisabled={!selectedCategory} // Disable if no main category is selected
            >
              {filteredSubCategories.map((subCategory) => (
                <SelectItem key={subCategory.id} value={subCategory.label}>
                  {subCategory.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        <div className="w-full flex">
          <Button
            type="submit"
            className="w-[100px] h-[30px] bg-[#4291EF] mx-auto mt-[40px] mb-[71px]"
          >
            <p className="text-[#FFFFFF] text-[18px]">提出</p>
            <Image width={28} height={28} src="/icons/icon-store.png" alt="" />
          </Button>
        </div>
      </form>
      <footer className="w-full flex items-center justify-center py-3 bg-[#4291EF]">
        <p className="text-white text-[20px]"> All rights reserved </p>
      </footer>
    </div>
  );
}
