import Image from "next/image";

export default function Content() {
  return (
    <div className="bg-sky-300">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
            <span className="inline-block mb-1 sm:mb-4">Our Contents</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
          <p className="font-ud text-gray-700 lg:text-base lg:max-w-md">
            入退室管理システムをYouTube動画やブログ記事で詳しくご紹介しています
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-2 sm:row-gap-6 sm:grid-cols-2">
          <a
            href="https://youtu.be/ya7BIv7U9RU"
            aria-label="View Item"
            target="_blank"
          >
            <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2 hover:shadow-2xl">
              <Image
                className="rounded"
                src="/images/Hito/content-1.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt="入退室管理Youtubeサムネイル"
              />
              <div className="absolute inset-0 px-6 py-4 transition-op認証・ハンズacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-ud text-gray-100">
                  画像処理によるハンズフリーの入退室管理システム
                </p>
                <p className="font-ud text-base tracking-wide text-gray-300">
                  YouTube動画（35秒）
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://note.com/b_core/n/nbdd62df31c62"
            aria-label="View Item"
            target="_blank"
          >
            <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2 hover:shadow-2xl">
              <Image
                className="rounded"
                src="/images/hito/content-2.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt="noteイメージ"
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-ud text-gray-100">
                  入退室管理の選び方〜安心の見える化という新たなニーズ
                </p>
                <p className="font-ud text-base tracking-wide text-gray-300">
                  noteブログ記事
                </p>
              </div>
            </div>
          </a>
        </div>
        {/* <div className="text-center">
      <a
        href="/"
        aria-label=""
        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
      >
        View gallery
        <svg
          className="inline-block w-3 ml-2"
          fill="currentColor"
          viewBox="0 0 12 12"
        >
          <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
        </svg>
      </a>
    </div> */}
      </div>
    </div>
  );
}
