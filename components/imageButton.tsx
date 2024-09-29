import Image from 'next/image';

interface ImageButtonProps {
  data: {
    icon: string;
    title: string;
    description?: string | null; // accept null or undefined
  };
}

const ImageButton = ({ data }: ImageButtonProps) => {
  return (
    <div className="flex flex-col gap-4 items-start lg:my-[60px] md:my-[40px] sm:my-[40px] xsm:my-[20px] lg:px-[40px] md:px-[40px] sm:px-[50px] xsm:px-[50px]">
      <div className="flex justify-start gap-6 items-center">
        <Image src={data.icon} alt={data.title} width={48} height={48} />
        <h2 className="lg:text-[40px] md:text-[36px] sm:text-[32px] xsm:text-[28px] text-[#4291EF] font-bold">
          {data.title}
        </h2>
      </div>
      {data.description && (
        <p className="lg:text-[20px] md:text-[18px] sm:text-[16px] xsm:text-[14px] my-[20px] text-[#212121] font-bold">
          {data.description}
        </p>
      )}
    </div>
  );
};

export default ImageButton;
// lg:mx-[0px] md:mx-[40px] sm:mx-[20px] xsm:mx-[10px]
