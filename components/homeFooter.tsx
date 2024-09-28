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

      {/* Centering Container */}
      <div className="absolute inset-0 flex flex-col justify-center items-center h-full">
        <div className="max-w-[1280px] w-full flex flex-col justify-center items-center gap-9">
          <div className="mx-auto flex flex-col items-center md:items-start items-center">
            <div className="flex flex-wrap w-full mx-auto gap-6">
              {/* Heading Section */}
              <div className="flex justify-center w-full md:w-auto items-center gap-4">
                <Image
                  width={75}
                  height={75}
                  src="/icons/icons-contact.png"
                  alt="Contact Icon"
                />
                <h1 className="text-[40px] font-bold text-white">
                  お問い合わせ
                </h1>
              </div>

              {/* Main Content */}
              <div className="flex flex-col md:flex-row w-full justify-between itmes-center">
                <div className="flex justify-center md:justify-start gap-6 px-4">
                  <div className="max-w-[643px]">
                    <p className="text-[20px] text-white text-center md:text-left">
                      ご質問やサポートが必要な場合、または修理業者とのマッチングサービスに関するお問い合わせは、下記のフォームよりお気軽にご連絡ください。機械修理動画プラットフォームに関する詳細情報や、投稿・視聴に関するサポートなど、私たちのチームが迅速に対応し、必要な情報を提供いたします。
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center md:flex-row md:items-start gap-4">
                  {/* Icons Section */}
                  <div className="flex flex-col  gap-6">
                    <div className="flex gap-3 items-center">
                      <Image
                        width={40}
                        height={40}
                        src="/icons/icons8-phone-100.png"
                        alt="Phone Icon"
                      />
                      <p className="text-[24px] w-[170px] font-bold text-[#C7C7C7] h-[40px] flex items-center">
                        電話番号
                      </p>
                      <p className="text-[24px] font-bold text-white h-[40px] flex items-center">
                        03-8765-4321
                      </p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        width={40}
                        height={40}
                        src="/icons/icons8-mail-50.png"
                        alt="Email Icon"
                      />
                      <p className="text-[24px] w-[170px] font-bold text-[#C7C7C7] h-[40px] flex items-center">
                        メールアドレス
                      </p>
                      <p className="text-[24px] font-bold text-white h-[40px] flex items-center">
                        contact@sample.jp
                      </p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Image
                        width={40}
                        height={40}
                        src="/icons/icons8-location-100.png"
                        alt="Location Icon"
                      />
                      <p className="text-[24px] w-[170px] font-bold text-[#C7C7C7] h-[40px] flex items-center">
                        所在地
                      </p>
                      <p className="text-[24px] font-bold text-white h-[40px] flex items-center">
                        東京都 港区 六本木 2-15-8
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-6 mt-4">
              <Link
                href="https://twitter.com/repair_video"
                aria-label="Twitter"
              >
                <Image
                  width={40}
                  height={40}
                  src="/icons/icons8-twitter-100.png"
                  alt="Twitter"
                />
              </Link>
              <Link
                href="https://twitter.com/repair_video"
                aria-label="Facebook"
              >
                <Image
                  width={40}
                  height={40}
                  src="/icons/icons8-facebook-100.png"
                  alt="Facebook"
                />
              </Link>
              <Link
                href="https://twitter.com/repair_video"
                aria-label="YouTube"
              >
                <Image
                  width={40}
                  height={40}
                  src="/icons/icons8-youtube-100.png"
                  alt="YouTube"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
