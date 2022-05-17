import Link from "next/link";
import Image from "next/image";


export default function Logoclouds() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="lg:pr-10">
                    <h2 className="mb-4 text-4xl font-noto text-slate-800 leading-none">

                        <br className="hidden md:block" />
                        取引先企業・{' '}
                        <span className="inline-block text-deep-purple-accent-400">
                            パートナーシップ
                        </span>
                    </h2>
                    <p className="mb-6 font-ud text-md text-slate-800">
                        私たちのソリューションは、幅広い業界のさまざまなお客様に導入いただいております。<br></br>
                        また、パナソニックのAIカメラ「ビューレカ」プラットフォームのパートナー企業として、
                        共にイノベーションを生み出しています。
                        <br></br>
                        <br></br>パナソニック・ビューレカプラットフォームについて
                    </p>
                    <hr className="mb-5 border-gray-300" />
                </div>
                <div>
                    <div className="object-cover w-full h-56 rounded shadow-lg sm:h-96">
                        <Image
                            src="/images/Home/Logoclouds.png" // Route of the image file
                            height={2250} // Desired size with correct aspect ratio
                            width={3375} // Desired size with correct aspect ratio
                            alt="Logo-clouds"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}