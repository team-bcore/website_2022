import Image from "next/image";

export default function Usecase() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-noto text-3xl font-bold leading-none tracking-tight text-slate-900 sm:text-4xl md:mx-auto">
          導入事例
        </h2>
      </div>
      <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
        <div className="transition duration-300 transform bg-white rounded hover:-translate-y-1 hover:shadow md:text-center">
          <div className="relative">
            <Image
              className="rounded"
              src="/images/Hito/gate.png" // Route of the image file
              height={1080} // Desired size with correct aspect ratio
              width={1920} // Desired size with correct aspect ratio
              alt="五洋建設エントランス"
            />
          </div>
          <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
            <h5 className="mb-2 text-xl font-noto leading-none sm:text-2xl">
              五洋建設株式会社 様
            </h5>
            <p className="font-ud mb-5 text-gray-700">
              海洋土木最大手ゼネコンの五洋建設株式会社様では、セキュリティゲートと連動した入退場管理システムを本社ビルに導入されました。国内の全支店並びに国際部門(シンガポール/香港)にも導入され、ドアやゲートを通過した職員やゲストの情報がモニタリングシステムで一元管理されています。
              <br></br>
              <br></br>
              ＊彩色兼備シリーズ リリース前の導入実績です
            </p>
          </div>
        </div>
        <div className="transition duration-300 transform bg-white rounded hover:-translate-y-1 hover:shadow md:text-center">
          <div className="relative">
            <Image
              className="rounded"
              src="/images/Hito/factory.png" // Route of the image file
              height={1080} // Desired size with correct aspect ratio
              width={1920} // Desired size with correct aspect ratio
              alt="東京フードエントランス"
            />
          </div>
          <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
            <h5 className="mb-2 text-xl font-noto leading-none sm:text-2xl">
              東京フード株式会社 様
            </h5>
            <p className="font-ud mb-5 text-gray-700">
              製菓・製パン業界に幅広い食品素材を提供している東京フード株式会社様は同社工場にVieurekaプラットフォームとカラービットによる入退室管理システムを導入されました。
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              ＊彩色兼備シリーズ リリース前の導入実績です
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
