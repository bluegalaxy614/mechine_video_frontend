'use client';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useStore } from '@/store/store';
import { CardIcon } from '@/components/icons';
import { useRouter } from 'next/navigation';
import { updateProfile } from '@/lib/api';
import { Modal, ModalContent, useDisclosure } from '@nextui-org/modal';
import PaymentMethod from '@/components/paymentMethod';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:5000';


export default function ViewerProfilePage() {
  const [loading, setLoading] = useState(false);
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const setErrorMessage = useStore((state) => state.setErrorMessage);
  const setMessage = useStore((state) => state.setMessage);
  const router = useRouter();  
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  useEffect(() => {
    if(!user){
      router.push('/login');
    }
  },[user]);
  const token = user?.token;

  const isFree: boolean = user?.role === '無料会員';
  const paymentStatus: boolean = user?.paymentStatus;

  const handleCheckout = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    try {
      const response = await fetch(`${API_URL}/api/payment/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        setErrorMessage('Failed to create checkout session');
        return;
      }

      const { id, role } = await response.json();

      setUser({ ...user, role: role });

      const { error } = await stripe.redirectToCheckout({ sessionId: id });
      
      if (error) {
        setErrorMessage('Stripe checkout failed');
      } else {
        setMessage('Success');
      }
    } catch (err) {
      setErrorMessage('Failed to initiate checkout');
    } finally {
      setLoading(false);
    }
  };

  const handleDown = async () => {
    const stripe = await stripePromise;

    try {
      const response = await fetch(`${API_URL}/api/payment/create-down-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        setErrorMessage('Failed to create checkout session');
        return;
      }

      const { id } = await response.json();

      const { error } = await stripe.redirectToCheckout({ sessionId: id });
      if (error) {
        setErrorMessage('Stripe checkout failed');
      } else {
        setMessage('Success');
      }
    } catch (err) {
      setErrorMessage('Failed to initiate checkout');
    } finally {
    }
  };
  
  const uploadAvatar = async (formData) => {
    try {
        const response = await updateProfile(formData);
        return response; // Assuming your API returns the updated user data
    } catch (error) {
        console.error('Upload error:', error);
        throw error;
    }
  };

  const handleFileChange = async (e) => {
      const file = e.target.files[0];
      console.log("File selected:", file);
      if (file) {
          const formData = new FormData();
          formData.append('avatar', file);

          try {
              const response = await uploadAvatar(formData);
              const { avatar } = response; // Adjust based on your response structure
              setUser({...user, avatar : avatar});
            } catch (err) {
              console.error('Error updating avatar:', err);
          }
      }
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
                <div className="relative h-[254px] rounded-[21px] border border-[#4291EF] border-[4px] flex justify-center items-center">
                  <Image
                    width={248}
                    height={248}
                    src={user?.avatar || '/profile/user.png'}
                    alt="profile"
                    unoptimized={false}
                  />
                  <div className="absolute bottom-[0px] text-[#FFFFFF] text-[20px] bg-[#4291EF] w-[248px] h-[51px] rounded-b-[12px] flex justify-center items-center mt-[-21px] z-[3]">
                    <label className="relative flex flex-col justify-center items-center w-full h-full cursor-pointer">
                      アバターアップロード
                      <Input
                        type="file"
                        name="video"
                        accept=".jpeg, .jpg, .png"
                        onChange={handleFileChange}
                        className="hidden"
                      />                                      
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-12 my-[40px] mx-auto">
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

                <div className="max-w-[320px] h-[41px]">
                  <p className="mb-2">現在のパスワード</p>
                  <Input
                    fullWidth
                    placeholder=""
                    labelPlacement="outside"
                    type='password'
                  />
                </div>

                <div className="max-w-[320px] h-[41px]">
                  <p className="mb-2">新しいパスワード</p>
                  <Input
                    fullWidth
                    placeholder=""
                    labelPlacement="outside"
                    type='password'
                  />
                </div>

                <div className="max-w-[320px] h-[41px]">
                  <p className="mb-2">パスワードを確認</p>
                  <Input
                    fullWidth
                    placeholder=""
                    labelPlacement="outside"
                    type='password'
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
        {user?.role =="admin" ? null :
          <div>
            <Divider />
            <div className="flex mt-[91px]">
              <div className="w-full flex flex-col lg:px-[0px] md:px-[80px] sm:px-[60px] xsm:px-[40px]">
                <h1 className="text-[32px] text-[#4291EF] font-bold">
                  プロフィール編集
                </h1>

                <div className="w-full flex flex-wrap mt-[30px] gap-[30px]">
                  <div
                    className={`lg:w-[554px] md:w-[554px] sm:w-[450px] xsm:w-[330px] my-[20px] rounded-[24px] pt-[49px] pb-[46px] pl-[55px] pr-[59px] border-[6px] hover:border-[#4291EF] mx-auto ${isFree ? 'bg-[#E4F1FF] border-[#4291EF]' : 'bg-[#F4F4F4]'}`}
                  >
                    <h1 className="text-[24px] text-[#4291EF] font-bold mb-[13px]">
                      無料プラン
                    </h1>
                    <Divider className="bg-[#4291EF]" />
                    <p className="max-w-[440px] mx-h-[140px] text-[#999999] text-[20px] mt-[25px] mb-[50px]">
                      すべての動画を視聴可能ですが、各動画の視聴時間は10秒に制限されています。ただし、2025年12月末まで、無料プランでも全動画を制限なしで視聴できます。
                    </p>
                    <Button
                    className="w-[185px] h-[31px] bg-[#4291EF] mx-auto"
                      onClick={handleDown}
                    >
                      <p className="text-[#FFFFFF] text-[20px]">アップデート</p>
                      <Image
                        width={28}
                        height={28}
                        src="/icons/icon-store.png"
                        alt="storeIcon"
                      />
                    </Button>
                  </div>

                  <div
                    className={`lg:w-[554px] md:w-[554px] sm:w-[450px] xsm:w-[330px] my-[20px] rounded-[24px] pt-[49px] pb-[46px] pl-[55px] pr-[59px] border-[6px] hover:border-[#4291EF] mx-auto ${!isFree ? 'bg-[#E4F1FF] border-[#4291EF]' : 'bg-[#F4F4F4]'}`}
                  >
                    <h1 className="text-[24px] text-[#4291EF] font-bold mb-[13px]">
                      有料プラン
                    </h1>
                    <Divider className="bg-[#4291EF]" />
                    <p className="max-w-[440px] mx-h-[140px] text-[#999999] text-[20px] mt-[25px] mb-[50px]">
                      月額8,000円で、すべての動画をフルで視聴可能。制限なくコンテンツを楽しむことができ、修理技術を学ぶには最適なプランです。
                    </p>
                    {isFree &&
                    <Button
                      className="w-[185px] h-[31px] bg-[#4291EF] mx-auto"
                      onClick={handleCheckout}
                      disabled={loading}
                    >
                      <p className="text-[#FFFFFF] text-[20px]">
                        {loading ? '処理中...' : 'アップデート'}
                      </p>
                      <Image
                        width={28}
                        height={28}
                        src="/icons/icon-store.png"
                        alt="icon"
                      />
                    </Button>
                    }
                  </div>
                </div>
              </div>
            </div>
        </div>
        }
        <Divider />
        {/* <Elements stripe={stripePromise}>
            <CreateAccount />
        </Elements> */}
        <div className="flex mt-[91px] lg:mx-0 md:mx-auto sm:mx-auto xsm:mx-auto">
          <div className="w-full flex flex-col lg:px-[0px] md:px-[80px] sm:px-[60px] xsm:px-[40px]">
            <h1 className="text-[32px] text-[#4291EF] font-bold">
              出金方法を追加
            </h1>

            <div className="w-full">
              <div
                className={`${paymentStatus ? 'flex justify-center items-center ' : ''} flex justify-center items-center relative lg:w-[554px] h-[300px] md:w-[554px] sm:w-[450px] xsm:w-[330px] my-[20px] rounded-[24px] pt-[49px] pb-[46px] pl-[55px] pr-[59px] border-[6px] hover:border-[#4291EF] bg-[#E4F1FF] border-[#4291EF]`}
              >
                {paymentStatus ? (
                  <>
                    <h1 className="text-[24px] text-[#4291EF] font-bold mb-[13px]">
                      カード
                    </h1>
                    <Divider className="bg-[#4291EF]" />
                    <p className="max-w-[440px] max-h-[140px] text-[#999999] text-[20px] mt-[25px] mb-[50px]">
                      カード番号: **** **** **** {user?.cardNumber?.slice(-4) || "無効なカード番号"}
                    </p>
                  </>
                ) : (
                  <div
                    className="flex justify-center items-center rounded-lg bg-[#4291EF] w-[120px] h-[70px] border-[1px] hover:shadow-2xl"
                    onClick={onOpen}
                  >
                    <CardIcon />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full flex items-center justify-center py-3 bg-[#4291EF]">
        <p className="text-white text-[20px]"> All rights reserved.</p>
      </footer>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>{() => <PaymentMethod />}</ModalContent>
      </Modal>
    </div>
  );
}