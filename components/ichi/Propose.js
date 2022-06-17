import Image from "next/image";

export default function Purpose() {
  return (
    <div className="bg-neutral-100">
      <div className="after:px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-noto tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              大規模工場・倉庫業務の最適化へ向けて
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-noto text-3xl font-bold leading-none tracking-tight text-slate-800 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              彩色兼備
              位置管理システムを使うことで、このようなメリットがあります
              <span className="relative"></span>
            </span>{" "}
          </h2>
        </div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-5 duration-300 transform  border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-teal-400">
              <svg
                className="w-10 h-10 text-white"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </svg>
            </div>
            <h6 className="mb-2 font-ud leading-5 text-slate-800">
              24時間365日Iotカメラが見守るので、現場の作業員の負担を大幅に軽減できます。
            </h6>
          </div>
          <div className="p-5 duration-300 transform  border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-teal-400">
              <svg
                className="w-10 h-10 text-white"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </svg>
            </div>
            <h6 className="marker:mb-2 font-ud leading-5 text-slate-800">
              リアルタイムに各エリアの状況を見える化するので、最新の状況がチェックできます。
            </h6>
          </div>
          <div className="p-5 duration-300 transform border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-teal-400">
              <svg
                className="w-10 h-10 text-white"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </svg>
            </div>
            <h6 className="mb-2 font-ud leading-5 text-slate-800">
              最新の状況はどこからでもチェック可能。複数のエリアを集中管理できます。
            </h6>
          </div>
        </div>
        <Image
          className="rounded"
          src="/images/Ichi/Propose.png" // Route of the image file
          height={1080} // Desired size with correct aspect ratio
          width={1920} // Desired size with correct aspect ratio
          alt="位置管理システムイメージ"
        />
      </div>
    </div>
  );
}
