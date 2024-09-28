'use client';

import { Button } from '@nextui-org/button';
import { useState } from 'react';

interface CategoryButtonProps {
  name: string;
}

export default function CategoryButton({
  name,
}: CategoryButtonProps) {
  const [selectedState, setSelectedState] = useState(false);

  const onClick = () => {
    setSelectedState(!selectedState);
  };
  return (
    <Button
      className={`h-[41px] w-[144px] rounded-full border shadow-md hover:shadow-default-300 px-[8px] py-[1px] mx-auto
        ${selectedState ? 'bg-[#4291EF]' : 'bg-default-100'}`}
      onClick={onClick} // Changed from onPress to onClick
    >
      {name}
    </Button>
  );
}
