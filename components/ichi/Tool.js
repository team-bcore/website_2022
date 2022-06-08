import Image from "next/image";

export default function Tool() {
  return (
    <div className="bg-Tool-ichi bg-no-repeat bg-cover">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="text-center max-w-lg mb-6 font-noto text-3xl font-bold leading-none tracking-tight text-slate-800 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            使用するIoTカメラ・対応可能なツールについて
            <span className="relative"></span>
          </span>{" "}
        </h2>
        <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
          <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
              <Image
                className="rounded"
                src="/images/Ichi/VRK.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt="VRKイメージ"
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
              <h5 className="mb-2 text-xl font-ud leading-none sm:text-2xl">
                エッジAIカメラ「Vieureka」
              </h5>
              <p className="mb-5 font-ud text-gray-700">
                パナソニック株式会社の技術から生まれたエッジAIカメラ「Vieureka」を使用しています。
                <br></br>
                <br></br>
              </p>
              <a href="https://www.vieureka.com/">
                <p className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-400 hover:bg-gray-400 focus:shadow-outline focus:outline-none">Read more</p>
              </a>
            </div>
          </div>
          <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
              <Image
                className="rounded"
                src="/images/Ichi/motion-board.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt="motion-boardイメージ"
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
              <h5 className="mb-2 text-xl font-ud leading-none sm:text-2xl">
                MOTION BOARD
              </h5>
              <p className="mb-5 font-ud text-gray-700">
                ウイングアーク1st株式会社の提供するBIツール「MotionBoard」に対応。
                データを可視化してよりわかりやすく情報を共有できます。
              </p>
              <a href="https://www.wingarc.com/product/motionboard/">
                <p className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-400 hover:bg-gray-400 focus:shadow-outline focus:outline-none">Read more</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
