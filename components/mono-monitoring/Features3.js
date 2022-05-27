import Image from "next/image";

export default function Features3() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="lg:pr-10">
                    <a
                        href="/"
                        aria-label="Go Home"
                        title="Logo"
                        className="inline-block mb-5"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-400">
                            <svg
                                className="w-10 h-10 text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                            </svg>
                        </div>
                    </a>
                    <h5 className="mb-4 text-3xl font-noto leading-none text-slate-800">
                    ハードウエアのメンテナンスは必要ありません
                    </h5>
                    <p className="mb-6 text-gray-900 font-ud">
                    面倒なカメラの状態とログのチェック・死活監視はビーコアにお任せください。<br></br>
                    エンドユーザー様の手を煩わせることなくシステムをご利用できます。
                    </p>
                    <hr className="mb-5 border-gray-300" />
                </div>
                <div>
                <Image
                        className="rounded"
                        src="/images/Monom/Feature3.png" // Route of the image file
                        height={1080} // Desired size with correct aspect ratio
                        width={1920} // Desired size with correct aspect ratio
                        alt="モノ常時管理イメージ"
                    /> 
                </div>
            </div>
        </div>
        

        
    );
}