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
    <div className="flex flex-col gap-4 items-start my-[60px]">
      <div className="flex justify-start gap-6 items-center">
        <Image src={data.icon} alt={data.title} width={48} height={48} />
        <h2 className="text-[40px] text-[#4291EF] font-bold">{data.title}</h2>
      </div>
      {data.description && (
        <p className="text-[20px] my-[20px] text-[#212121] font-bold">
          {data.description}
        </p>
      )}
    </div>
  );
};

export default ImageButton;
