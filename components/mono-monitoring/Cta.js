import Image from "next/image";

export default function Cta() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <Image
            className="rounded"
            src="/images/Mono/Cta.jpeg" // Route of the image file
            height={4480} // Desired size with correct aspect ratio
            width={6720} // Desired size with correct aspect ratio
            alt="CTA"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-ud tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              DXは現場業務の効率化からスタートします
            </p>
          </div>
          <h5 className="mb-3 text-3xl font-noto text-slate-800 leading-none sm:text-4xl">
            在庫管理をもっと楽にしませんか？
          </h5>

          <div className="flex items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-noto tracking-wide bg-slate-900 text-white transition duration-200 rounded shadow-lg hover:bg-gray-500 focus:shadow-outline focus:outline-none"
            >
              申し込む
            </button>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-gray-700 hover:text-amber-400"
            >
              お役立ち資料ダウンロード
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}