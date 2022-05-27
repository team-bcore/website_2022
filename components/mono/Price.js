import Image from "next/image";

export default function Price() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-lg sm:text-center sm:mx-auto">
                <a
                    href="/"
                    aria-label="Go Home"
                    title="Logo"
                    className="inline-block mb-4"
                >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
                        <svg
                            className="w-10 h-10 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                        </svg>
                    </div>
                </a>
                <h2 className="mb-6 font-noto text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-32 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="6b0188f3-b7a1-4e9b-b95e-cad916bb3042"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#6b0188f3-b7a1-4e9b-b95e-cad916bb3042)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">初期費用¥0</span>
                    </span>{' '}
                    <br></br>月々の利用料 ¥50,000〜
                </h2>
                <p className="font-ud text-base text-gray-700 md:text-lg">
                    iPhone２台まで使用可能<br></br>
                    管理タグ数５万点まで
                </p>
                <hr className="my-8 border-gray-300" />
                <div className="flex items-center mb-3 sm:justify-center">
                    <a href="https://apps.apple.com/jp/app/%E5%BD%A9%E8%89%B2%E5%85%BC%E5%82%99/id1454201044" className="mr-3 transition duration-300 hover:shadow-lg">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png"
                            className="object-cover object-top w-32 mx-auto"
                            alt="Appleストア"
                        />
                    </a>

                </div>
                <p className="font-ud selection:max-w-xs text-xs text-gray-600 sm:text-sm sm:max-w-sm sm:mx-auto">
                    彩色兼備アプリは無料で提供しています
                </p>
            </div>
        </div>

    );
}