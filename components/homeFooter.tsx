import Image from 'next/image';
import Link from 'next/link';

const HomeFooter = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[532px]">
      <Image
        fill
        src="/bg/footerImage.png"
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      <div className="absolute inset-2 flex flex-col justify-center items-center h-full">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-1/2 md:w-1/2 sm:w-full xsm:w-full flex justify-center lg:px-[0px] md:px-[40px] sm:px-[30px] xsm:px-[30px]">
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-start w-full items-center gap-4 mb-[28px]">
                <Image
                  width={65}
                  height={65}
                  src="/icons/icons-contact.png"
                  alt="Contact Icon"
                />
                <h1 className="lg:text-[40px] md:text-[38px] sm:text-[36px] xsm:text-[34px] font-bold text-white">
                  お問い合わせ
                </h1>
              </div>

              <div className="max-w-[500px] flex justify-center gap-4">
                <p className="lg:text-[20px] md:text-[18px] sm:text-[16px] xsm:text-[14px]  text-white">
                  ご質問やサポートが必要な場合、または修理業者とのマッチングサービスに関するお問い合わせは、下記のフォームよりお気軽にご連絡ください。機械修理動画プラットフォームに関する詳細情報や、投稿・視聴に関するサポートなど、私たちのチームが迅速に対応し、必要な情報を提供いたします。
                </p>
              </div>

              <div className="w-full flex lg:justify-start md:justify-start sm:justify-center xsm:justify-center gap-6 my-4">
                <Link
                  href="https://twitter.com/repair_video"
                  aria-label="Twitter"
                >
                  <Image
                    width={30}
                    height={30}
                    src="/icons/icons8-twitter-100.png"
                    alt="Twitter"
                  />
                </Link>
                <Link
                  href="https://twitter.com/repair_video"
                  aria-label="Facebook"
                >
                  <Image
                    width={30}
                    height={30}
                    src="/icons/icons8-facebook-100.png"
                    alt="Facebook"
                  />
                </Link>
                <Link
                  href="https://twitter.com/repair_video"
                  aria-label="YouTube"
                >
                  <Image
                    width={30}
                    height={30}
                    src="/icons/icons8-youtube-100.png"
                    alt="YouTube"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 sm:w-full xsm:w-full flex justify-center lg:px-[0px] md:px-[40px] sm:px-[30px] xsm:px-[30px]">
            <div className="w-full flex justify-center items-center">
              <div className="flex w-[500px] flex-col gap-4">
                <div className="flex gap-3 items-center">
                  <Image
                    width={30}
                    height={30}
                    src="/icons/icons8-phone-100.png"
                    alt="Phone Icon"
                  />
                  {/* <p className="lg:text-[22px] md:text-[20px] sm:text-[18px] xsm:text-[16px] lg:w-[170px] md:w-[160px] sm:w-[140px] xsm:w-[130px] font-bold text-[#C7C7C7] h-[40px] flex items-center">
                    電話番号
                  </p> */}
                  <p className="lg:text-[22px] md:text-[20px] sm:text-[18px] xsm:text-[16px] font-bold text-white h-[40px] flex items-center">
                    03-8765-4321
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    width={30}
                    height={30}
                    src="/icons/icons8-mail-50.png"
                    alt="Email Icon"
                  />
                  {/* <p className="lg:text-[22px] md:text-[20px] sm:text-[18px] xsm:text-[16px] lg:w-[170px] md:w-[160px] sm:w-[140px] xsm:w-[130px] font-bold text-[#C7C7C7] h-[40px] flex items-center">
                    メールアドレス
                  </p> */}
                  <p className="lg:text-[22px] md:text-[20px] sm:text-[18px] xsm:text-[16px] font-bold text-white h-[40px] flex items-center">
                    contact@sample.jp
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    width={30}
                    height={30}
                    src="/icons/icons8-location-100.png"
                    alt="Location Icon"
                  />
                  {/* <p className="lg:text-[22px] md:text-[20px] sm:text-[18px] xsm:text-[16px] lg:w-[170px] md:w-[160px] sm:w-[140px] xsm:w-[130px] font-bold text-[#C7C7C7] h-[40px] flex items-center">
                    所在地
                  </p> */}
                  <p className="lg:text-[22px] md:text-[20px] sm:text-[18px] xsm:text-[16px] font-bold text-white h-[40px] flex items-center">
                    東京都 港区 六本木 2-15-8
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
