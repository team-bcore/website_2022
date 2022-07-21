import Image from "next/image";

export default function Contents() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 tracking-wider rounded-full bg-blue-600 font-ud text-base text-white md:text-lg">
            NEW
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          CONTENTS
        </h2>
        <p className="text-base font-ud text-gray-700 md:text-lg">
          ビーコア公式YouTubeチャンネル 『bcoreTV』
          では、各ソリューションを動画でご覧いただけます。<br></br>
          今回は、日産自動車様との取り組み
          【自動車工場でのヒューマンエラーを排除する「カラービット」とiPhoneを活用したホースと継手の正常接続確認】をご紹介します。
        </p>
      </div>
      <div className="mx-auto lg:max-w-2xl">
        <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
          <Image
            className=""
            src="/images/News/Business.png" // Route of the image file
            height={1080} // Desired size with correct aspect ratio
            width={1920} // Desired size with correct aspect ratio
            alt="サムネイル"
          />
          <a
            href="https://youtu.be/o2MzqkOUpH8"
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
