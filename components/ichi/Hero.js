import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-hero-ichi bg-no-repeat bg-cover relative flex flex-col-reverse px-4 py-24 mx-auto lg:block lg:flex-col lg:py-32 xl:py-40 2xl:py-64 md:px-8 sm:max-w-xl md:max-w-full">
      <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
        <Image
          className="rounded"
          src="/images/Ichi/Top-vrk.png" // Route of the image file
          height={1080} // Desired size with correct aspect ratio
          width={1920} // Desired size with correct aspect ratio
          alt="位置管理イメージ"
        />
      </div>
      <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-base font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                彩色兼備ソリューション
              </p>
            </div>
            <h2 className="max-w-lg mb-6 text-4xl font-noto text-slate-900 sm:text-4xl sm:leading-none">
              位置管理システム
            </h2>
            <p className="text-base text-gray-900 font-ud md:text-lg">
              IoTカメラが工場・倉庫などの大空間での<br></br>
              <span className="text-indigo-600 underline decoration-slate-900">
                ヒト・モノを24時間365日見守り、可視化することで
              </span>
              <br></br>
              従来の業務の最適化を容易にし、効率的な業務改革に繋げることができます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
