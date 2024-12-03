'use client';
import Image from 'next/image';
import { Card } from '@nextui-org/card';
import { VideoCardsProps } from '@/types';
import { Modal, ModalContent, useDisclosure } from '@nextui-org/modal';
import { useState, useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import StarButton from './starButton';
import { useStore } from '@/store/store';
import { formatDate } from '@/utils/utils';
import Player from 'video.js/dist/types/player';
import { sendTimer } from '@/lib/api';

const VideoCards = ({ data }: VideoCardsProps) => {
  const user = useStore((state) => state.user);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [videoUrl, setVideoUrl] = useState<string>('');
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  const [totalPlayedTime, setTotalPlayedTime] = useState<number>(0);
  const lastTimeUpdateRef = useRef<number | null>(null);
  const [videoId, setVideoId] = useState<string | null>(null);

  const handleClose = () => {
    console.log(totalPlayedTime.toFixed(2))
    const PlayedTime = totalPlayedTime.toFixed(2);
    const setPlayedTimer = async (PlayedTime, videoId) => {
      try{
        const res = await sendTimer({PlayedTime, videoId});
        setTotalPlayedTime(0);
        setVideoId(null);
      }catch(err){
        console.log(err)
      }
    }

    if(Number(PlayedTime) > 10.00 && user?.role == '有料会員'){
      setPlayedTimer(PlayedTime, videoId);
    }

  }

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

      // Timeupdate listener to calculate total played duration
      playerRef.current.on('timeupdate', () => {
        if (playerRef.current && user?.role !== '有料会員' && user?.role !== 'admin') {
          if (playerRef.current.currentTime() >= 10) {
            playerRef.current.pause();
            playerRef.current.currentTime(0);
          }
        }

        if (playerRef.current?.paused() === false) {
          const currentTime = playerRef.current.currentTime();
          if (lastTimeUpdateRef.current !== null) {
            setTotalPlayedTime((prev) => prev + (currentTime - lastTimeUpdateRef.current));
          }
          lastTimeUpdateRef.current = currentTime;
        }
      });

      // Pause event listener to reset lastTimeUpdateRef
      playerRef.current.on('pause', () => {
        lastTimeUpdateRef.current = null;
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [videoUrl, isOpen, user?.role]);

  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 gap-6 lg:mx-[0px] md:mx-[40px] sm:mx-[20px] xsm:mx-[10px]">
        {data?.map((item, index) => (
          <Card
            className="relative max-w-[302px] h-[450px] rounded-[18px] shadow-md hover:shadow-xl transition-shadow duration-lg mx-auto"
            key={index}
            isPressable
            onClick={(e) => {
              e.preventDefault();
              onOpen();
              setVideoUrl(item.videoUrl);
              setTotalPlayedTime(0); // Reset total played time
              lastTimeUpdateRef.current = null; // Reset time tracking
              setVideoId(item._id);
            }}
          >
            <div className="w-[332px] h-[218px] rounded-t-[18px] overflow-hidden">
              <Image
                width={332}
                height={218}
                alt={`Thumbnail of ${item.title}`}
                src={item.thumbnailsUrl}
                unoptimized={false}
                priority
              />
            </div>
            <div className="w-[292px] h-[195px] py-3 flex flex-col !justify-start !items-start my-1 px-[25px]">
              <h1 className="text-lg font-bold text-blue-500 flex justify-start !items-start">
                {item.title}
              </h1>
              <div className="flex gap-2 mt-1">
                <p className="px-4 py-1 bg-blue-100 text-blue-500 rounded-full text-[14px] min-w-[80px] min-h-[32px]">
                  {item.selectedCategory}
                </p>
                <p className="px-4 py-1 bg-blue-100 text-blue-500 rounded-full text-[14px] min-w-[80px] min-h-[32px]">
                  {item.selectedSubCategory}
                </p>
              </div>
              <div className="mt-1">
                <p className="mt-1 text-gray-700 text-[14px] !text-justify">
                  {item.description}
                </p>
                <p className="mt-1 text-gray-700 text-[14px] !text-justify">
                  投稿者 : <strong>{item.posterName}</strong>
                </p>
                <p className="text-gray-500 text-[14px] !text-justify font-bold">
                  {formatDate(item.uploadDate)}
                </p>
              </div>
            </div>
            <StarButton videoId={item._id} />
          </Card>
        ))}
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} onClose={handleClose} placement="top-center">
        <ModalContent>
          {() => (
            <div data-vjs-player>
              <video
                ref={videoRef}
                className="video-js vjs-big-play-centered"
                playsInline
                preload="auto"
                crossOrigin="anonymous"
              >
                <source src={videoUrl} type="video/mp4" />
                <source src={videoUrl} type="video/avi" />
                <source src={videoUrl} type="video/mov" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </ModalContent>
        <div className="p-4 text-center text-gray-700">
          <p>Total Played Time: {totalPlayedTime.toFixed(2)} seconds</p>
        </div>
      </Modal>
    </div>
  );
};

export default VideoCards;
