import Image from "next/image";

export default function Footer() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="text-center mb-12 font-sans text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl sm:leading-none">
        <span className="relative inline-block">
          <span className="font-noto relative">私たちが選ばれる理由</span>
        </span>
      </h2>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <Image
            src="/images/Home/vrk.jpg" // Route of the image file
            height={1429} // Desired size with correct aspect ratio
            width={1600} // Desired size with correct aspect ratio
            alt="Vieureka"
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-base font-ud tracking-wide uppercase text-gray-700">
              理由その１
            </p>
            <p className="inline-block mb-3 text-2xl leading-8 font-noto text-slate-800">
              エッジAIカメラ「Vieureka」を採用
            </p>
            <p className="mb-2 font-ud text-md text-slate-800">
              エッジAIカメラの運用数シェアNo.1*。存在感や圧迫感を抑えたデザインで、より生活に馴染むスタイルを実現します。
              <br></br>
              <span className="text-xs">*ミック経済研究所“エッジAIコンピューティング市場の実態と将来展望2021年度版”エッジAIカメラのベンダシェア</span>
            </p>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <Image
            src="/images/Home/support.png" // Route of the image file
            height={1429} // Desired size with correct aspect ratio
            width={1600} // Desired size with correct aspect ratio
            alt="サポート"
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-base font-ud tracking-wide uppercase text-gray-700">
              理由その2
            </p>
            <p className="inline-block mb-3 text-2xl leading-8 font-noto text-slate-800">
              安心のサポート体制
              <br></br>
              <br></br>
            </p>
            <p className="mb-2 font-ud text-md text-slate-800">
              カメラの管理は、私たちにお任せください。「Vieureka」の提供する遠隔監視プラットフォームで管理されているので、迅速にトラブル対応します。ほとんど全ての維持管理はビーコアが遠隔で行います。
            </p>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <Image
            src="/images/Home/support-2.jpeg" // Route of the image file
            height={1429} // Desired size with correct aspect ratio
            width={1600} // Desired size with correct aspect ratio
            alt="サポート"
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-base font-ud tracking-wide uppercase text-gray-700">
              理由その3
            </p>
            <p className="inline-block mb-3 text-2xl leading-8 font-noto text-slate-800">
              迅速・丁寧に対応します
              <br></br>
              <br></br>
            </p>
            <p className="mb-2 font-ud text-md text-slate-800">
              私たちは、さまざまなアイデアや技術を持ち寄って、プロジェクトごとに縮尺模型を作り、実験・検証を重ね、お客様の課題解決のためのコンサルティングに当たります。常にフットワークを軽く、スピーディーに対応します。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
