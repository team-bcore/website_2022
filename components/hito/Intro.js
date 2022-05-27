import Image from "next/image";

export default function Intro() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mx-auto sm:text-center lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-noto text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-3xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">食品工場向けの入退室管理は<br></br>お任せください</span>

                        </span>{' '}
                    </h2>
                    <p className="font-ud text-base text-gray-700 md:text-lg">
                        食品工場では、作業員が帽子やマスク、ゴーグル、ポケットのない白衣で作業することが多く、顔認証やICカードによる入退室管理が難しいといった課題があります。
                    </p>
                </div>
                <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <Image
                        className="rounded"
                        src="/images/Hito/Hito-haccp.png" // Route of the image file
                        height={1557} // Desired size with correct aspect ratio
                        width={2049} // Desired size with correct aspect ratio
                        alt="HACCPイメージ"
                    />
                </div>
                <p className="font-ud max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
                    また、2021年6月から、食品を扱うあらゆる業者に<span className="text-cyan-500">「HACCP（ハサップ）」</span>に沿った衛生管理制度が、完全義務化されました。<br></br>
                    HACCP（ハサップ）とは、食品の各製造過程で異物混入や食中毒菌などの汚染等の危害が発生する恐れがないか予測・分析し、事前に阻止するための食品衛生管理の手法で、<span className="text-cyan-500">HACCPに沿った衛生管理を実施するには、「いつ・どこの部屋に・だれが入ったのか」</span>を管理する必要があります。
                </p>
            </div>
        </div>
    );
}