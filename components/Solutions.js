import Link from "next/link";
import Image from "next/image";

export default function Solutions() {
  return (
    <div className="bg-Home-bg bg-cover xl:bg-no-repeat ">
      <div className="pt-20 bg-blue-400">
      
      <p className="py-1 text-white text-center font-noto text-base md:text-lg">
      <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">New</span>
       ビーコアはWebサイトの【URLとデザイン】を刷新しました。
      </p>
      </div>
      <div className="font-ud mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
        <div className="my-8 max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h1 className="max-w-lg mb-6 font-noto text-gray-900 leading-none md:mx-auto">
            <span className="relative inline-block">
              <span className="relative text-5xl sm:text-7xl">
                現場のニッチなお悩みをIoTの力で解決します
              </span>
            </span>{" "}
          </h1>
          <p className="font-noto text-base text-gray-900 md:text-lg">
            私たちは、弊社が独自に開発した自動認識コード「カラービット®︎」やAIカメラを用いて、現場でのニッチなお悩みを解決し、業務の効率化を促進するソリューションを提供しております。
            <br></br>
            <br></br>
            <span className="text-2xl text-gray-900">
              このような現場のお悩みありませんか？{" "}
            </span>
          </p>
        </div>
        <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white bg-opacity-70 bg-flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-sky-500">
                <div className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
              </div>
              <h6 className="mb-2 font-noto text-2xl leading-5 text-slate-900">
                入退室管理
              </h6>
              <p className="mb-3 font-ud text-md text-slate-800">
                食品工場のような、マスクの着用で顔認証が使えない施設でも、非接触の入退室管理がしたい。
              </p>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-gray-800 hover:text-indigo-500"
            >
              Learn More
            </a>
          </div>
          <div className="bg-white bg-opacity-70 flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-yellow-500">
                <div className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                </div>
              </div>
              <h6 className="mb-2 font-noto text-2xl leading-5 text-slate-900">
                モノ（在庫）の管理
              </h6>
              <p className="mb-3 font-ud text-md text-slate-800">
                厄介な在庫管理を自動化することで、従業員の負担を軽減させたい。
              </p>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-gray-800 hover:text-indigo-500"
            >
              Learn More
            </a>
          </div>
          <div className="bg-white bg-opacity-70 flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-500">
                <div className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <h6 className="mb-2 font-noto text-2xl leading-5 text-slate-900">
                位置の見える化
              </h6>
              <p className="mb-3 font-ud text-md text-slate-800">
                広い工場や倉庫内のモノ・ヒトの位置を見える化して業務を効率化したい。
              </p>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-gray-800 hover:text-indigo-500"
            >
              Learn More
            </a>
          </div>
          <div className="bg-white bg-opacity-70 flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-lime-500">
                <div className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <h6 className="mb-2 font-noto text-2xl leading-5 text-slate-900">
                混雑度の見える化
              </h6>
              <p className="mb-3 font-ud text-md text-slate-800">
                気になる施設の混雑度を見える化して、お客様に安心・安全な空間を提供したい。
              </p>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-gray-800 hover:text-indigo-500"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
