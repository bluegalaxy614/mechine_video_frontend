import Image from 'next/image';
import Link from 'next/link';

const HomeFooter = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[532px]">
      {/* Background Image */}
      <Image
        fill
        src="/bg/footerImage.png"
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      {/* Content Container */}
      <div className="absolute inset-0 flex flex-wrap max-w-[1280px] mx-auto h-full">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-[40%] mx-auto my-auto items-start gap-6 px-4">
          <div className="flex items-center gap-4">
            <Image
              width={75}
              height={75}
              src="/icons/icons-contact.png"
              alt="Contact Icon"
            />
            <h1 className="text-[40px] font-bold text-white">お問い合わせ</h1>
          </div>
          <div className="max-w-[643px]">
            <p className="text-[20px] text-white">
              ご質問やサポートが必要な場合、または修理業者とのマッチングサービスに関するお問い合わせは、下記のフォームよりお気軽にご連絡ください。機械修理動画プラットフォームに関する詳細情報や、投稿・視聴に関するサポートなど、私たちのチームが迅速に対応し、必要な情報を提供いたします。
            </p>
          </div>
          {/* Social Media Links */}
          <div className="flex justify-start gap-6">
            <Link href="https://twitter.com/repair_video" aria-label="Twitter">
              <Image
                width={40}
                height={40}
                src="/icons/icons8-twitter-100.png"
                alt="Twitter"
              />
            </Link>
            <Link href="https://twitter.com/repair_video" aria-label="Facebook">
              <Image
                width={40}
                height={40}
                src="/icons/icons8-facebook-100.png"
                alt="Facebook"
              />
            </Link>
            <Link href="https://twitter.com/repair_video" aria-label="YouTube">
              <Image
                width={40}
                height={40}
                src="/icons/icons8-youtube-100.png"
                alt="YouTube"
              />
            </Link>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col w-full md:w-[40%] mx-auto my-auto gap-10 px-4">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <Image
              width={40}
              height={40}
              src="/icons/icons8-phone-100.png"
              alt="Phone Icon"
            />
            <p className="text-[24px] font-bold text-[#C7C7C7]">電話番号</p>
            <p className="text-[24px] font-bold text-white">03-8765-4321</p>
          </div>
          {/* Email */}
          <div className="flex items-center gap-4">
            <Image
              width={40}
              height={40}
              src="/icons/icons8-mail-50.png"
              alt="Mail Icon"
            />
            <p className="text-[24px] font-bold text-[#C7C7C7]">
              メールアドレス
            </p>
            <p className="text-[24px] font-bold text-white">
              contact@sample.jp
            </p>
          </div>
          {/* Location */}
          <div className="flex items-center gap-4">
            <Image
              width={40}
              height={40}
              src="/icons/icons8-location-100.png"
              alt="Location Icon"
            />
            <p className="text-[24px] font-bold text-[#C7C7C7]">所在地</p>
            <p className="text-[24px] font-bold text-white">
              東京都 港区 六本木 2-15-8
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
