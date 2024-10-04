import Image from 'next/image';
import { ImageButtonProps } from '@/types';

const ImageButton = ({ data }: ImageButtonProps) => {
  return (
    <div className="flex flex-col gap-4 items-start lg:my-[60px] md:my-[40px] sm:my-[30px] xsm:my-[20px] lg:px-[40px] md:px-[40px] sm:px-[50px] xsm:px-[35px]">
      <div className="flex justify-start gap-6 items-center">
        <Image
          src={data.icon}
          alt={data.title}
          width={46}
          height={46}
          className="lg:w-[48px] lg:h-[48px] md:w-[48px] md:h-[48px] sm:w-[44px] sm:h-[44px] xsm:w-[40px] xsm:h-[40px]"
        />
        <h2 className="lg:text-[40px] md:text-[36px] sm:text-[30px] xsm:text-[28px] text-[#4291EF] font-bold">
          {data.title}
        </h2>
      </div>
      {data.description && (
        <p className="lg:text-[20px] md:text-[18px] sm:text-[14px] xsm:text-[14px] my-[20px] text-[#212121] font-bold">
          {data.description}
        </p>
      )}
    </div>
  );
};

export default ImageButton;
