'use client';

import { Button } from '@nextui-org/button';
import { useState } from 'react';

export default function SubCategoryButton({
  name,
}: {
  name: string;
}) {
  const [selected, setSelected] = useState(false);
  const onClick = () => {
    setSelected(!selected);
  }
  return (
    <Button
      className={`h-[41px] w-[144px] rounded-full border hover:shadow-default-300 px-[8px] py-[1px] mx-auto
        ${selected ? 'bg-[#FFFFFF] shadow-md' : 'bg-[#F4F4F4]'}`}
      onPress={onClick}
    >
      {name}
    </Button>
  );
}
