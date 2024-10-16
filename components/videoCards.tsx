'use client';
import Image from 'next/image';
import { Card } from '@nextui-org/card';
import { VideoCardsProps } from '@/types';
import { Modal, ModalContent, useDisclosure } from '@nextui-org/modal';
import { useState, useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import StarButton from './starButton';

const VideoCards = ({ data }: VideoCardsProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [videoUrl, setVideoUrl] = useState<string>("");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<any>(null);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };

  useEffect(() => {
    if (isOpen && videoRef.current && !playerRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        preload: 'auto',
        loop: false,
        responsive: true,
        fluid: true,
      });

      playerRef.current.on('timeupdate', () => {
        if (playerRef.current.currentTime() >= 10) {
          playerRef.current.pause();
          playerRef.current.currentTime(0);
        }
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [videoUrl, isOpen]);

  console.log(data.length)

  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 gap-6 lg:mx-[0px] md:mx-[40px] sm:mx-[20px] xsm:mx-[10px]">
        {data.map((item, index) => (
          <Card
            className="relative max-w-[302px] h-[450px] rounded-[18px] shadow-md hover:shadow-xl transition-shadow duration-lg mx-auto"
            key={index}
            isPressable
            onClick={(e) => {
              e.preventDefault();
              onOpen();
              setVideoUrl(item.videoUrl);
            }}

          >
            <div className="w-[332px] h-[218px] rounded-t-[18px] overflow-hidden">
              <Image
                width={332}
                height={218}
                alt={"Thumbnail of " + item.title}
                src={item.thumbnailsUrl}
                unoptimized={true}
              />
            </div>
            <div className="w-[292px] h-[195px] py-5 flex flex-col !justify-start !items-start my-1 px-[25px]">
              {/* Title */}
              <h1 className="text-lg font-bold text-blue-500 !justify-start !items-start">
                {item.title}
              </h1>

              {/* Categories */}
              <div className="flex gap-2 mt-2">
                <p className="px-4 py-1 bg-blue-100 text-blue-500 rounded-full text-[14px] min-w-[80px] min-h-[32px]">
                  {item.selectedCategory}
                </p>
                <p className="px-4 py-1 bg-blue-100 text-blue-500 rounded-full text-[14px] min-w-[80px] min-h-[32px]">
                  {item.selectedSubCategory}
                </p>
              </div>

              {/* Description, Author, Date, Duration */}
              <div className="mt-2">
                <p className="mt-2 text-gray-700 text-[14px] !text-justify">
                  {item.description}
                </p>
                <p className="mt-2 text-gray-700 text-[14px] !text-justify">
                  投稿者 : <strong>{item.posterName}</strong>
                </p>
                <p className="text-gray-500 text-[14px] !text-justify font-bold">
                  {formatDate(item.uploadDate)}
                </p>
                <p className="mt-2 text-gray-700 text-[14px] !text-justify">
                  視聴時間:{' '}
                  <strong className="text-[#ED1C24] !text-[20px]">
                    {item.views}時間
                  </strong>
                </p>
              </div>
            </div>
            <StarButton videoId={item._id} />
          </Card>
        ))}
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
          <ModalContent>
            {(onClose) => (
              <div data-vjs-player>
                <video
                  ref={videoRef}
                  className="video-js vjs-big-play-centered"
                  playsInline
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default VideoCards;
