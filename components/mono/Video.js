import Image from "next/image";

export default function Video() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-base font-ud tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            彩色兼備 モノ管理システム
          </p>
        </div>
        <h2 className="max-w-lg mb-6 first:text-3xl font-noto leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">
              One-Tapで一括読取り<br></br>簡単、時短のモノ管理
            </span>
          </span>
        </h2>
        <p className="font-ud text-base text-gray-700 md:text-lg">
          カラービット®︎モノ管理システムを、40秒の動画でご紹介しています。
        </p>
      </div>
      <div className="mx-auto lg:max-w-2xl">
        <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
          <Image
            className="rounded"
            src="/images/Mono/mono-video.png" // Route of the image file
            height={952} // Desired size with correct aspect ratio
            width={1932} // Desired size with correct aspect ratio
            alt="位置管理システムイメージ"
          />
          <a
            href="https://youtu.be/J0CfNevSrLw"
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
  );
}
