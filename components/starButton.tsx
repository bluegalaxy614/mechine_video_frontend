import React from 'react';
import { StarIcon } from './icons';

interface StarButtonProps {
  videoId: string;
}

const StarButton = ({ videoId }: StarButtonProps) => {
  return (
    <div className="absolute bottom-[20px] right-[20px]">
      <StarIcon videoId={videoId} />
    </div>
  );
};

export default StarButton;
