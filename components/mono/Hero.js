import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative px-4 pt-24 mx-auto lg:py-40 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-base font-ud tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                彩色兼備ソリューション
              </p>
            </div>
            <h2 className="max-w-lg mb-6 text-4xl font-noto tracking-tight text-slate-900 sm:text-4xl sm:leading-none">
              <span className="inline-block text-deep-purple-accent-400">
                モノ管理システム
              </span>
            </h2>
            <p className="mb-6 text-lg font-ud text-gray-900 md:text-2xl">
              お手持ちのiPhoneで始められる。<br></br>簡単・時短のモノ管理
            </p>
            <p className="text-base font-ud text-gray-900 md:text-base">
              たくさんのモノの管理に、もはや専用の端末は必要ありません。
              <br></br>
              お手持ちのiPhoneでカラービット®︎タグを画像処理により一括認識します。読み取ったデータはクラウドで一元管理でき、どこからでもアクセス可能。すぐに利用開始できます。
            </p>
          </div>
          {/* <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div> */}
        </div>
      </div>
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
        <Image
          className="rounded"
          src="/images/Mono/mono-hero.png" // Route of the image file
          height={1080} // Desired size with correct aspect ratio
          width={1920} // Desired size with correct aspect ratio
          alt="位置管理イメージ"
        />
      </div>
    </div>
  );
}
