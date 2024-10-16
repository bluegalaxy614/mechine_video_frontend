'use client';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import Image from 'next/image';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useStore } from '@/store/store';
import { CardIcon } from '@/components/icons';
import PaymentMethod from '@/components/paymentMethod';
import { Modal, ModalContent, useDisclosure } from '@nextui-org/modal';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export default function ViewerProfilePage() {
  const [loading, setLoading] = useState(false);
  const user = useStore((state) => state.user);
  const setErrorMessage = useStore((state) => state.setErrorMessage);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const isFree: boolean = user?.role === "無料会員";
  const handleCheckout = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    const response = await fetch(`${API_URL}/api/payment/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { id } = await response.json();
    console.log(id)

    const { error } = await stripe.redirectToCheckout({ sessionId: id });
    if (error) {
      setErrorMessage('Stripe checkout failed');
    }
    setLoading(false);
  };
  return (
    <div className="min-h-[calc(100vh-90px)] flex flex-col lg:w-full xsm:w-fit justify-between">
      <section className="max-w-[1280px] mx-auto flex flex-col lg:mt-[85px] md:mt-[55px] sm:mt-[45px] xsm:mt-[35px]">
        <div className="flex flex-col">
          <div className="flex flex-col lg:px-[0px] md:px-[80px] sm:px-[60px] xsm:px-[40px]">
            <h1 className="text-[30px] text-[#4291EF] font-bold">
              プロフィール編集
            </h1>

            <div className="w-full flex grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 gap-3">
              <div className="flex my-[40px] mx-auto">
                <div className="relative rounded-[21px] border border-[#4291EF] border-[4px] flex justify-center items-center">
                  <Image width={248} height={248} src="/profile/3.png" alt="profile" />
                  <p className="absolute bottom-[0px] text-[#FFFFFF] text-[20px] bg-[#4291EF] w-[248px] h-[51px] rounded-b-[12px] flex justify-center items-center mt-[-21px] z-[3]">
                    アバターアップロード
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6 my-[40px] mx-auto">
                <div className="min-w-[320px] h-[41px]">
                  <p className="mb-2">ユーザー名</p>
                  <Input
                    fullWidth
                    placeholder="田中 太郎"
                    labelPlacement="outside"
                  />
                </div>

                <div className="max-w-[320px] h-[41px]">
                  <p className="mb-2">メール</p>
                  <Input
                    fullWidth
                    placeholder="taro.tanaka@example.com"
                    labelPlacement="outside"
                  />
                </div>
              </div>
            </div>
            <Button className="w-[185px] h-[31px] bg-[#4291EF] mt-[40px] mb-[71px] mx-auto">
              <p className="text-[#FFFFFF] text-[20px]">アップデート</p>
              <Image
                width={28}
                height={28}
                src="/icons/icon-store.png"
                alt=""
              />
            </Button>
          </div>
        </div>
        <Divider />
        <div className="flex mt-[91px]">
          <div className="w-full flex flex-col lg:px-[0px] md:px-[80px] sm:px-[60px] xsm:px-[40px]">
            <h1 className="text-[32px] text-[#4291EF] font-bold">
              プロフィール編集
            </h1>

            <div className="w-full flex flex-wrap mt-[30px] gap-[30px]">
              <div className={`lg:w-[554px] md:w-[554px] sm:w-[450px] xsm:w-[330px] my-[20px] rounded-[24px] pt-[49px] pb-[46px] pl-[55px] pr-[59px] border-[6px] hover:border-[#4291EF] mx-auto ${isFree ? "bg-[#E4F1FF] border-[#4291EF]" : "bg-[#F4F4F4]"}`}>
                <h1 className="text-[24px] text-[#4291EF] font-bold mb-[13px]">
                  無料プラン
                </h1>
                <Divider className="bg-[#4291EF]" />
                <p className="max-w-[440px] mx-h-[140px] text-[#999999] text-[20px] mt-[25px] mb-[50px]">
                  すべての動画を視聴可能ですが、各動画の視聴時間は10秒に制限されています。ただし、2025年12月末まで、無料プランでも全動画を制限なしで視聴できます。
                </p>
                <Button className="w-[185px] h-[31px] bg-[#4291EF] mx-auto">
                  <p className="text-[#FFFFFF] text-[20px]">アップデート</p>
                  <Image
                    width={28}
                    height={28}
                    src="/icons/icon-store.png"
                    alt="storeIcon"
                  />
                </Button>
              </div>

              <div className={`lg:w-[554px] md:w-[554px] sm:w-[450px] xsm:w-[330px] my-[20px] rounded-[24px] pt-[49px] pb-[46px] pl-[55px] pr-[59px] border-[6px] hover:border-[#4291EF] mx-auto ${!isFree ? "bg-[#E4F1FF] border-[#4291EF]" : "bg-[#F4F4F4]"}`}>
                <h1 className="text-[24px] text-[#4291EF] font-bold mb-[13px]">
                  有料プラン
                </h1>
                <Divider className="bg-[#4291EF]" />
                <p className="max-w-[440px] mx-h-[140px] text-[#999999] text-[20px] mt-[25px] mb-[50px]">
                  月額8,000円で、すべての動画をフルで視聴可能。制限なくコンテンツを楽しむことができ、修理技術を学ぶには最適なプランです。
                </p>
                <Button
                  className="w-[185px] h-[31px] bg-[#4291EF] mx-auto"
                  onClick={handleCheckout}
                  disabled={loading}
                >
                  <p className="text-[#FFFFFF] text-[20px]">
                    {loading ? '処理中...' : 'アップデート'}
                  </p>
                  <Image width={28} height={28} src="/icons/icon-store.png" alt="icon" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Divider />
        <div className="flex mt-[91px] lg:mx-0 md:mx-auto sm:mx-auto xsm:mx-auto">
          <div className="w-full flex flex-col lg:px-[0px] md:px-[80px] sm:px-[60px] xsm:px-[40px]">
            <h1 className="text-[32px] text-[#4291EF] font-bold">
              Add a PaymentMethod
            </h1>

            <div className="w-full">

              <div className={`${true ? "flex justify-center items-center ": ""}relative lg:w-[554px] h-[300px] md:w-[554px] sm:w-[450px] xsm:w-[330px] my-[20px] rounded-[24px] pt-[49px] pb-[46px] pl-[55px] pr-[59px] border-[6px] hover:border-[#4291EF] bg-[#E4F1FF] border-[#4291EF]`}>
                {
                  false ? (
                    <>
                      <h1 className="text-[24px] text-[#4291EF] font-bold mb-[13px]">
                        Card
                      </h1>
                      <Divider className="bg-[#4291EF]" />
                      <p className="max-w-[440px] mx-h-[140px] text-[#999999] text-[20px] mt-[25px] mb-[50px]">
                        Card Number: **** **** **** 4161
                      </p>
                    </>
                  ) : (
                    <div
                      className="flex justify-center items-center rounded-lg bg-[#4291EF] w-[120px] h-[70px] border-[1px] hover:shadow-2xl"
                      onClick={onOpen}
                    >
                      <CardIcon />
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </section >
      <footer className="w-full flex items-center justify-center py-3 bg-[#4291EF]">
        <p className="text-white text-[20px]"> All rights reserved.</p>
      </footer>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}  placement="top-center">
        <ModalContent>
          {(onClose) => (
            <PaymentMethod />
          )}
        </ModalContent>
      </Modal>
    </div >
  );
}