'use client';

import { Button } from '@nextui-org/button';
import { useState } from 'react';

export default function SubCategoryButton({ name }: { name: string }) {
  const [selected, setSelected] = useState(false);
  const onClick = () => {
    setSelected(!selected);
  };
  return (
    <Button
      className={`h-[41px] lg:w-[144px] md:w-[144px] sm:w-[144px] xsm:w-[90px] rounded-full border hover:shadow-default-300 px-[8px] py-[1px] mx-auto lg:text-[14px] md:text-[14px] sm:text-[14px] xsm:text-[10px]
        ${selected ? 'bg-[#FFFFFF] shadow-md' : 'bg-[#ececec]'}`}
      onPress={onClick}
    >
      {name}
    </Button>
  );
}
