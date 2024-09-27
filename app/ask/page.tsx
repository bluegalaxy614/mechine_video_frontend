import { Button } from "@nextui-org/button";

export default function AskPage() {
    return (
        <div className="h-[100vh] max-w-[1440px] flex flex-col mx-auto">
            <div className="w-full mt-[85px]">
                <h1 className="text-[32px] text-[#4291EF] font-bold my-[39px]"> 問題解決サポート申請</h1>
                <p className="text-[20px]">動画で解決しない場合、管理チームにお問い合わせください。1件の問題ごとに50,000円の料金が発生します。詳細を入力し、確認ボタンを押してサポートを開始してください。</p>
            </div>
            <div className="flex gap-[34px]">
                <div className="grow h-[516px] shadow-lg bg-[#F4F4F4] mt-[39px]">

                </div>
                <form className="flex-none max-w-[389px] mt-[39px] gap-[39px] h-full">
                    <label htmlFor="name" className="text-[20px]">お名前</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="border border-gray-300 rounded px-3 py-2 w-full bg-[#F4F4F4]"
                    />
                    <label htmlFor="email" className="text-[20px]">メールアドレス</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="border border-gray-300 rounded px-3 py-2 w-full bg-[#F4F4F4]"
                    />
                    <label htmlFor="phone" className="text-[20px]">電話番号</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="border border-gray-300 rounded px-3 py-2 w-full bg-[#F4F4F4]"
                    />
                    <label htmlFor="message" className="text-[20px]">メッセージ</label>
                    <textarea
                        id="message"
                        name="message"
                        className="border border-gray-300 rounded px-3 py-2 w-full h-[200px] bg-[#F4F4F4]" />
                    <Button className="w-[141px] h-[31px] bg-[#4291EF] mt-[40px] mb-[71px] float-right">
                        <p className=" text-[#FFFFFF] text-[20px]">送信</p>
                        <img src="/icons/icon-send.png" alt="" />
                    </Button>
                </form>
            </div>
        </div>
    );
}