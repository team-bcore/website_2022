import Link from "next/link";
import Image from "next/image";

export default function Cta() {
  return (
    <div className="bg-Home-contact bg-no-repeat bg-cover bg-opacity-20">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-lg sm:text-center sm:mx-auto">
          <a
            href="/"
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-4"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500">
              <div className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </a>
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            <span className="relative inline-block">
              <span className="font-noto relative">
                現場のニッチなお悩みはIoTの力で解決しましょう
              </span>
            </span>
          </h2>
          <p className="font-ud text-base text-white md:text-lg">
            導入について、お見積もり等お気軽にお問い合わせください
          </p>
          <hr className="my-8 border-gray-300" />
          <div className="flex items-center mb-3 sm:justify-center">
            <Link href="/contact">
              <a className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-slate-600 hover:bg-gray-500 focus:shadow-outline focus:outline-none font-ud">
                お問い合わせをする
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
