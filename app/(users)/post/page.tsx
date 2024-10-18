'use client';
import { Input, Textarea } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import { Select, SelectItem } from '@nextui-org/select';
import { useRef, useState } from 'react';
import { categoryConfig } from '@/config/site';
import { uploadVideo } from '@/lib/api';
import { Slider } from '@nextui-org/slider';
import { useStore } from '@/store/store';
import { getCategoryLabelById } from '@/utils/utils';

function getVideoSnapshot(videoElement: HTMLVideoElement) {
  const canvas = document.createElement('canvas');
  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;

  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
  }

  return canvas;
}

export default function PostPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoTime, setVideoTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [video, setVideo] = useState<File | null>(null);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const setMessage = useStore((state) => state.setMessage);
  const setErrorMessage = useStore((state) => state.setErrorMessage);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoCode: '',
    machineName: '',
    format: '',
    manufacturer: '',
  });
  const [uploadedStatus, setUploadedStatus] = useState(false);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('');

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setVideoTime(videoRef.current.currentTime);
    }
  };

  const handleSliderChange = (value: number) => {
    if (videoRef.current && !isNaN(value) && isFinite(value)) {
      videoRef.current.currentTime = value;
      setVideoTime(value);
    }
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSelectedSubCategory('');
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubCategoryChange = (value: string) => {
    setSelectedSubCategory(value);
  };

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
        if (tempVideo.duration) {
          setVideoDuration(Math.floor(tempVideo.duration));
        }
      });
    }
  };

  const handleSnapshot = () => {
    if (videoRef.current) {
      const canvas = getVideoSnapshot(videoRef.current);
      const imageSrc = canvas.toDataURL('image/png');
      setScreenshot(imageSrc);
      setMessage('Successfully get the video thumbnail!');
    }
  };

  const createScreenshotBlob = (
    canvas: HTMLCanvasElement,
  ): Promise<Blob | null> => {
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, 'image/png');
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUploadedStatus(true);

    if (!video) {
      setErrorMessage('No video selected');
      return;
    }
    const mainName = getCategoryLabelById(selectedCategory);
    const subName = getCategoryLabelById(selectedSubCategory);
    const data = new FormData();
    data.append('video', video);
    data.append('videoDuration', videoDuration.toString());
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('videoCode', formData.videoCode);
    data.append('machineName', formData.machineName);
    data.append('format', formData.format);
    data.append('manufacturer', formData.manufacturer);
    data.append('selectedCategory', mainName);
    data.append('selectedSubCategory', subName);

    if (screenshot && videoRef.current) {
      const canvas = getVideoSnapshot(videoRef.current);
      const screenshotBlob = await createScreenshotBlob(canvas);
      if (screenshotBlob) {
        data.append('thumbnail', screenshotBlob, 'thumbnail.png');
      }
    }

    try {
      const res = await uploadVideo(data);
      setUploadedStatus(false);
      setMessage('Video uploaded successfully');
    } catch (error) {
      setUploadedStatus(false);
      setErrorMessage('Error uploading video');
    }
  };

  return (
    <div className="relative h-[calc(100vh-90px)] w-full flex flex-col justify-between">
      <form
        onSubmit={handleSubmit}
        className="max-w-[1280px] mx-auto flex flex-wrap lg:mt-[85px] md:mt-[60px] sm:mt-[50px] xsm:mt-[30px] gap-12"
      >
        <div className="flex flex-col max-w-[900px] mx-auto lg:px-0 md:px-[20px] sm:px-[30px] xsm:px-[30px]">
          <h1 className="text-[30px] text-[#4291EF] font-bold">
            機械修理のノウハウを共有し、収益を得ましょう！
          </h1>
          <p className="text-[20px] text-[#212121] font-bold">
            こちらのページから、あなたの修理動画を簡単にアップロードすることができます
          </p>

          <div className="flex lg:mt-[85px] md:mt-[60px] sm:mt-[50px] xsm:mt-[30px] grid lg:grid-cols-2 gap-6">
            <div className="w-[300px] flex flex-col gap-6 mx-auto">
              <div>
                <p className="mb-2">タイトル</p>
                <Input
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="入力してください..."
                />
              </div>

              <div>
                <p className="mb-2">説明</p>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="入力してください..."
                />
              </div>
            </div>

            <div className="w-[300px] flex flex-col gap-6 mx-auto">
              <div className="w-[248px] h-[196px] bg-[#E4F1FF] flex justify-center items-center rounded-lg mx-auto overflow-hidden">
                <label className="relative flex flex-col justify-center items-center w-full h-full cursor-pointer">
                  {videoPreview && (
                    <video
                      ref={videoRef}
                      key={videoPreview}
                      className="absolute inset-0 w-full h-full object-cover"
                      onTimeUpdate={handleTimeUpdate}
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
                    className="z-10 opacity-30 hover:opacity-100"
                  />
                </label>
              </div>
              {/* {screenshot && (
                <Image
                  src={screenshot}
                  alt="Screenshot"
                  width={300}
                  height={200}
                />
              )} */}

              {videoPreview && (
                <div>
                  <p className="mb-2">動画プレビュー</p>
                  <Slider
                    step={0.1}
                    minValue={0}
                    maxValue={videoDuration || 0}
                    value={videoTime}
                    onChange={handleSliderChange}
                  />
                  <Button onClick={handleSnapshot}>スクリーンショット</Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[300px] gap-4 mx-auto">
          <div>
            <p className="mb-2">動画コード</p>
            <Input
              name="videoCode"
              value={formData.videoCode}
              onChange={handleInputChange}
              placeholder="入力してください..."
            />
          </div>

          <div>
            <p className="mb-2">機械名</p>
            <Input
              name="machineName"
              value={formData.machineName}
              onChange={handleInputChange}
              placeholder="入力してください..."
            />
          </div>

          <div>
            <p className="mb-2">形式</p>
            <Input
              name="format"
              value={formData.format}
              onChange={handleInputChange}
              placeholder="入力してください..."
            />
          </div>

          <div>
            <p className="mb-2">メーカー</p>
            <Input
              name="manufacturer"
              value={formData.manufacturer}
              onChange={handleInputChange}
              placeholder="入力してください..."
            />
          </div>

          <div>
            <p className="mb-2">メインカテゴリ</p>
            <Select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              {categoryConfig.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.label}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div>
            <p className="mb-2">サブカテゴリ</p>
            <Select
              disabled={filteredSubCategories.length === 0}
              value={selectedSubCategory}
              onChange={(e) => handleSubCategoryChange(e.target.value)}
            >
              {filteredSubCategories.map((subCategory) => (
                <SelectItem key={subCategory.id} value={subCategory.id}>
                  {subCategory.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <Button type="submit" color="primary" isLoading={uploadedStatus}>
            提出
          </Button>
        </div>
      </form>
    </div>
  );
}
