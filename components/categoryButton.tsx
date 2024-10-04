'use client';

import { Button } from '@nextui-org/button';
import { useState } from 'react';
import { CategoryButtonProps } from '@/types';

export default function CategoryButton({
  id,
  name,
  setSelectedCategories,
}: CategoryButtonProps) {
  const [selectedState, setSelectedState] = useState(false);

  const onClick = () => {
    setSelectedState(!selectedState);

    setSelectedCategories((prevState) => {
      if (!selectedState) {
        return [...prevState, id];
      } else {
        return prevState.filter((categoryId) => categoryId !== id);
      }
    });
  };
  return (
    <Button
      className={`h-[41px] lg:w-[144px] md:w-[144px] sm:w-[144px] xsm:w-[90px] rounded-full border shadow-md hover:shadow-default-300 px-[8px] py-[1px] mx-auto lg:text-[14px] md:text-[14px] sm:text-[14px] xsm:text-[10px]
        ${selectedState ? 'bg-[#4291EF]' : 'bg-default-100'}`}
      onClick={onClick} // Changed from onPress to onClick
    >
      {name}
    </Button>
  );
}
