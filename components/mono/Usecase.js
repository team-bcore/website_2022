import Image from "next/image";

export default function Usecase() {
    return (

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-noto text-3xl font-bold leading-none tracking-tight text-slate-900 sm:text-4xl md:mx-auto">
                    導入事例
                </h2>
            </div>
            <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
                <div className="transition duration-300 transform bg-white rounded hover:-translate-y-1 hover:shadow md:text-center">
                    <div className="relative">
                        <Image
                            className="rounded"
                            src="/images/Mono/tosho.png" // Route of the image file
                            height={1080} // Desired size with correct aspect ratio
                            width={1920} // Desired size with correct aspect ratio
                            alt="大分大学附属病院導入事例"
                        />
                    </div>
                    <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                        <h5 className="mb-2 text-xl font-noto leading-none sm:text-2xl">
                            大分大学附属病院 様
                        </h5>
                        <p className="font-ud mb-5 text-gray-700">
                            調剤機器大手のトーショーとビーコアが共同で開発したカラービット医薬品管理システムは、大分大学附属病院に導入されています。<br></br>手術室で使用した薬剤を自動カウントできるようになり、業務の大幅な効率化を実現しています。
                            <br></br>
                            <br></br>
                            ＊彩色兼備シリーズ リリース前の導入実績です
                        </p>
                    </div>
                </div>
                <div className="transition duration-300 transform bg-white rounded hover:-translate-y-1 hover:shadow md:text-center">
                    <div className="relative">
                        <Image
                            className="rounded"
                            src="/images/Mono/amidado.png" // Route of the image file
                            height={1080} // Desired size with correct aspect ratio
                            width={1920} // Desired size with correct aspect ratio
                            alt="位置管理システムイメージ"
                        />
                    </div>
                    <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                        <h5 className="mb-2 text-xl font-noto leading-none sm:text-2xl">
                            亀岳林万松寺 様
                        </h5>
                        <p className="font-ud mb-5 text-gray-700">
                            名古屋市の名刹、亀岳林万松寺の阿弥陀堂（都市型納骨堂）では、位牌の管理にカラービット在庫管理システムを導入しています。<br></br>納骨堂と収納庫では、専用に設計された治具を使用して、iPhoneを利用した位牌の管理を行っています。
                            <br></br>
                            <br></br>
                            ＊彩色兼備シリーズ リリース前の導入実績です
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}