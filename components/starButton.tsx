import React, { useState } from 'react';
import { StarIcon } from './icons';

interface StarButtonProps {
  videoId : string;
}

const StarButton  = ({videoId}:StarButtonProps) => {
return(
  <div
    className="absolute bottom-[30px] right-[20px]"
  >
    <StarIcon/>
  </div>
)
}

export default StarButton;