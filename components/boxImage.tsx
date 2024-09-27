import Image from 'next/image';

interface BoxImageProps {
  id: number;
  image: string;
  title: string;
  info: string;
}

const BoxImage = ({ id, image, title, info }: BoxImageProps) => {
  const unit = id === 1 ? '件' : id === 2 ? '時間' : '円';
  return (
    <>
      <div
        key={id}
        className="relative flex items-center justify-start w-[328px] h-[146px] pl-[42px] pr-[18px] pt-[20px] pb-[40px] shadow-md rounded-3xl bg-white border border-gray-200 gap-8"
      >
        <div className="w-[58px] h-[58px]">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            width={58}
            height={58}
          />
        </div>
        <div>
          <p className="text-[16px] text-[#4291EF]">{title}</p>
          <p className="text-[16px] text-[#4291EF]">
            <strong className="!text-[40px] font-bold">{info}</strong>
            {unit}
          </p>
        </div>
        <div className="absolute top-[20px] right-[18px]">
          <div className="!w-[10px] !h-[24px] bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#4285F4"
            >
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxImage;
