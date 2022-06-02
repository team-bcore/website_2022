import Image from "next/image";

export default function Patent() {
    return (
        <div className="px-4 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40">
            <div className="max-w-screen-sm sm:text-center sm:mx-auto">
                <h2 className="mb-8 text-3xl font-noto tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    R&D（研究開発）
                </h2>
                <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
                    ビーコアの研究開発の情報をご覧いただけます。
                    </p>
                <hr className="w-full my-8 border-gray-300" />
                <div className="text-left">
                    <p className="pt-2 font-ud text-base text-gray-700 md:text-lg">
                    colorbit 6 Dimention Survey  
                    </p>
                    <a
                            href="research/6d"
                            aria-label=""
                            className="inline-flex items-center font-ud transition-colors duration-200 text-gray-700 hover:text-gray-400"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>詳しく見る
                        </a>
                   
                    <hr className="w-full my-4 border-gray-300" />
                </div>
            </div>
        </div>
    );
}