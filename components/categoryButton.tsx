"use client";

import { Button } from "@nextui-org/button";

export default function CategoryButton({
  name,
  selected,
  // onClick,
}: {
  name: string;
  selected: boolean;
  // onClick: () => void;
}) {
  return (
    <Button
      className={`h-[41px] w-[144px] rounded-full border shadow-md hover:shadow-default-300 px-[8px] py-[1px]
        ${selected ? "bg-[#4291EF]" : "bg-default-100"
      }`}
      // onPress={onClick}
    >
      {name}
    </Button>
  );
}
