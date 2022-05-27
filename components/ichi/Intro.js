
import Image from "next/image";

export default function Intro() {
    return (
       
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                <div className="max-w-screen-sm sm:text-center sm:mx-auto">
                    <a
                        href="/"
                        aria-label="View"
                        className="inline-block mb-5 rounded-full sm:mx-auto"
                    >
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                    </a>
                    <h2 className="mb-4 font-noto text-slate-800 sm:text-4xl sm:leading-none">
                        工場、倉庫などの大空間で<br></br>ヒト・モノを見える化し、作業効率の改善を促進します
                    </h2>
                    <p className="text-base font-ud text-gray-700 md:text-lg sm:px-4">
                        工場、倉庫などの広い空間を複数のIoTカメラで監視します。<br></br>
                        測位に電波は使わず、画像処理技術だけで、位置情報のマッピングが行えます。
                        誤差数センチの位置精度で工場や倉庫内のモノ・ヒトの所在を可視化し、
                        無駄や課題が見える化されることで、最適化や作業効率の改善がとても簡単になります。
                    </p>
                    <hr className="w-full my-8 border-gray-300" />
                    <p className="my-8 text-base font-noto text-slate-800 md:text-xl sm:px-4">
                        お困りではないですか？
                    </p>
                    <ul className="list-none selection:">
                        <li className="text-base font-ud text-slate-800 md:text-lg sm:px-4">
                            「どこ」に「なに」が「いくつ」あるのか分からない</li>
                        <li className="text-base font-ud text-slate-800 md:text-lg sm:px-4">
                            「いつ」そのエリアに置いたか分からない
                        </li>
                        <li className="text-base font-ud text-slate-800 md:text-lg sm:px-4">
                            状況を確認するために、作業員が広い敷地を行ったり来たり
                        </li>
                        <li className="text-base font-ud text-slate-800 md:text-lg sm:px-4">
                            欲しいモノがなかなか見つからず、徘徊してしまう
                        </li>
                        <li className="text-base font-ud text-slate-800 md:text-lg sm:px-4">
                            「ある」はずの場所に「ない」
                        </li>
                    </ul>
                    <div className="">
                    <Image
                    className="rounded"
                    src="/images/Ichi/Intro.png" // Route of the image file
                    height={1080} // Desired size with correct aspect ratio
                    width={1920} // Desired size with correct aspect ratio
                    alt="位置管理お困りごとイメージ"
                />
                    </div>
                </div>
            </div>
       
    );
}