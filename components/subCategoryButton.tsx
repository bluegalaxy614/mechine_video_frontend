'use client';

import { Button } from '@nextui-org/button';
import { useState } from 'react';
import { subCategoryButtonProps } from '@/types';
import { getCategoryLabelById } from '@/utils/utils';

export default function SubCategoryButton({
  id,
  name,
  setSelectedSubCategories,
}: subCategoryButtonProps) {
  const [selected, setSelected] = useState(false);
  const subLabel = getCategoryLabelById(id);
  const onClick = () => {
    setSelected(!selected);
    setSelectedSubCategories((prevState) => {
      if (!selected) {
        return [...prevState, subLabel];
      } else {
        return prevState.filter((item) => item !== subLabel);
      }
    });
  };
  return (
    <Button
      className={`h-[41px] lg:min-w-[144px] md:min-w-[144px] sm:min-w-[144px] xsm:min-w-[90px] rounded-full border hover:shadow-default-300 px-[8px] py-[1px] lg:text-[14px] md:text-[14px] sm:text-[14px] xsm:text-[10px]
        ${selected ? 'bg-[#FFFFFF] shadow-md' : 'bg-[#ececec]'}`}
      onPress={onClick}
    >
      {name}
    </Button>
  );
}
