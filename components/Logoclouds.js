import Image from "next/image";
import Link from "next/link";

export default function Logoclouds() {
  return (
    <div className="">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <h2 className="mb-4 text-4xl font-noto text-slate-800 leading-none">
              <br className="hidden md:block" />
              取引先企業・{" "}
              <span className="inline-block text-deep-purple-accent-400">
                パートナーシップ
              </span>
            </h2>
            <p className="mb-6 font-ud text-md text-slate-800">
              私たちのソリューションは、幅広い業界のさまざまなお客様に導入いただいております。
              <br></br>
              また、エッジAIカメラ「Vieureka」プラットフォームのパートナー企業として、
              共にイノベーションを生み出しています。
              <br></br>
              <br></br>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <a href="https://www.vieureka.com/" target="_blank">
                <span className="hover:text-gray-500">
                  Vieurekaプラットフォームについて
                </span>
              </a>
            </p>
            <hr className="mb-5 border-gray-300" />
          </div>
          <div>
            <div className="object-cover w-full h-56 rounded shadow-lg sm:h-96">
              <Image
                src="/images/Home/Logoclouds.png" // Route of the image file
                height={2250} // Desired size with correct aspect ratio
                width={3375} // Desired size with correct aspect ratio
                alt="Logo-clouds"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
