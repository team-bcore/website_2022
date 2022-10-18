import Image from "next/image";

export default function Contents() {
    return (
        <div className="bg-sky-200">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <p className="inline-block px-3 py-px mb-4 tracking-wider rounded-full bg-blue-600 font-ud text-base text-white md:text-lg">
                        NEW
                    </p>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        お客様の声
                    </h2>
                    <p className="text-base font-ud text-gray-700 md:text-lg">
                        株式会社 新宿中村屋 武蔵工場 様
                    </p>
                    <p className="pt-8 text-base font-ud text-gray-700">
                        カラービット®︎を使用した入退室管理を導入されている株式会社 新宿中村屋 武蔵工場様は、主に全国の有名コンビニエンスストアで販売されている中華まんを製造されています。<br></br>
                        武蔵工場の武川さんに、なぜ導入に至ったか、カラービットを使ってみての感想、継続して利用されている理由などをお話ししていただきました。
                    </p>
                </div>
                <div className="mx-auto lg:max-w-2xl">
                    <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
                        <Image
                            className=""
                            src="/images/Hito/Thumbnail.png" // Route of the image file
                            height={720} // Desired size with correct aspect ratio
                            width={1280} // Desired size with correct aspect ratio
                            alt="新宿中村屋Youtubeサムネイル"
                        />
                        <a
                            href="https://youtu.be/pqOUarZRYHk"
                            aria-label="Play Video"
                            className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                        >
                            <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-red-700 rounded-full shadow-2xl group-hover:scale-110">
                                <svg
                                    className="w-10 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
