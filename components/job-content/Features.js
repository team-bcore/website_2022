import Link from "next/link";

export default function Features() {
    return (
        <div className="bg-amber-300">
            <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-4 row-gap-5 sm:grid-cols-1 lg:grid-cols-3">
                    <div className="flex flex-col justify-between p-5 border-gray-700 border-2 rounded shadow-sm">
                        <div>
                            <h6 className="text-gray-700 mb-2 font-noto leading-5 text-xl">
                                ビーコアについて
                            </h6>
                            <p className="text-gray-700 mb-3 font-ud text-base mt-8">
                                ビーコアの事業内容、ミッションとポリシー、トップからのメッセージをご覧いただけます。
                            </p>
                        </div>
                        <Link href="job/aboutus">
                            <a className="inline-flex items-center font-ud transition-colors duration-200 text-gray-700 hover:text-gray-500">
                                →詳しく見る
                            </a>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-between p-5 border-gray-700 border-2 rounded shadow-sm">
                        <div>
                            <h6 className="text-gray-700 mb-2 font-noto leading-5 text-xl">
                                提供するソリューション
                            </h6>
                            <p className="text-gray-700 mb-3 font-ud text-base mt-8">
                                ビーコアが提供する各ソリューションの特徴などを知ることができます。
                            </p>
                        </div>
                        <Link href="">
                            <a className="inline-flex items-center font-ud transition-colors duration-200 text-gray-700 hover:text-gray-500">
                                →詳しく見る
                            </a>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-between p-5 border-gray-700 border-2 rounded shadow-sm">
                        <div>
                            <h6 className="text-gray-700 mb-2 font-noto leading-5 text-xl">
                                ビーコアを支える仕事
                            </h6>
                            <p className="text-gray-700 mb-3 font-ud text-base mt-8">
                                組織体制と各チームの仕事内容、業務やキャリア形成を支える制度について知ることができます。
                            </p>
                        </div>
                        <Link href="">
                            <a className="inline-flex items-center font-ud transition-colors duration-200 text-gray-700 hover:text-gray-500">
                                →詳しく見る
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="pt-4 grid gap-4 row-gap-5 sm:grid-cols-1 lg:grid-cols-3">
                    <div className="flex flex-col justify-between p-5 border-gray-700 border-2 rounded shadow-sm">
                        <div>
                            <h6 className="text-gray-700 mb-2 font-noto leading-5 text-xl">
                                スタッフ紹介
                            </h6>
                            <p className="text-gray-700 mb-3 font-ud text-base mt-8">
                                ビーコアのメンバーが経験してきた仕事、それぞれの働き方や価値観などを知ることができます。
                            </p>
                        </div>
                        <Link href="">
                            <a className="inline-flex items-center font-ud transition-colors duration-200 text-gray-700 hover:text-gray-500">
                                →詳しく見る
                            </a>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-between p-5 border-gray-700 border-2 rounded shadow-sm">
                        <div>
                            <h6 className="text-gray-700 mb-2 font-noto leading-5 text-xl">
                                採用活動における個人情報の取り扱いについて
                            </h6>
                            <p className="text-gray-700 mb-3 font-ud text-base mt-8">

                            </p>
                        </div>
                        <Link href="">
                            <a className="inline-flex items-center font-ud transition-colors duration-200 text-gray-700 hover:text-gray-500">
                                →詳しく見る
                            </a>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-between p-5 bg-slate-50 border-gray-700 border-2 rounded shadow-sm">
                        <div>
                            <h6 className="text-gray-700 mb-2 font-noto leading-5 text-xl">
                                エントリーフォーム
                            </h6>
                            <p className="text-gray-700 mb-3 font-ud text-base mt-8">
                                現在、採用を行っている
                                職種とエントリーフォーム

                            </p>
                        </div>
                        <Link href="">
                            <a className="inline-flex items-center font-ud transition-colors duration-200 text-gray-700 hover:text-gray-500">
                                →詳しく見る
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}