import Image from "next/image";

export default function Content() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h5 className="text-center mb-3 text-3xl font-noto text-slate-800 leading-none sm:text-4xl">
            CONTENTS
          </h5>
      <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
        <div className="bg-Content1-monomonitoring bg-no-repeat bg-cover flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide uppercase">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
              説明動画1
            </p>
            <p className="max-w-md mb-6 font-noto leading-none sm:text-4xl">

            </p>
            <p className="mb-6 text-base font-ud text-gray-700 md:text-lg sm:mb-8">
              カメラが常に見まもるモノ常時管理システム
            </p>
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="bg-Content2-monomonitoring bg-no-repeat bg-cover flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide uppercase">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
              説明動画2
            </p>
            <p className="mb-6 text-base font-ud text-gray-700 md:text-lg sm:mb-8">
              在庫管理の世界が変わる 〜 IoTカメラが見まもるモノ常時管理システム
            </p>
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}