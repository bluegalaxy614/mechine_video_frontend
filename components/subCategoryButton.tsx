"use client";

import { Button } from "@nextui-org/button";

export default function SubCategoryButton({
  name,
  selected,
  onClick,
}: {
  name: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      className={`h-[41px] w-[144px] rounded-full border hover:shadow-default-300 px-[8px] py-[1px]
        ${selected ? "bg-[#FFFFFF] shadow-md" : "bg-[#F4F4F4]"
      }`}
      onPress={onClick}
    >
      {name}
    </Button>
  );
}
