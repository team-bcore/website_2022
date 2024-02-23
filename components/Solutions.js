import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Solutions() {
  const { t } = useTranslation("solutions");
  return (
    <div className="bg-Home-bg bg-cover xl:bg-no-repeat">
      <div className="font-ud mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16 md:py-16">
        <div className="pt-32 max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h1 className="max-w-lg mb-6 font-noto text-gray-900 leading-none md:mx-auto">
            <span className="relative inline-block">
              <span className="relative text-5xl sm:text-7xl">
                {t("tag-line")}
              </span>
            </span>{" "}
          </h1>
          <p className="font-noto text-base text-gray-900 md:text-lg">
            {t("sub-title")}
            <br></br>
            <br></br>
            <span className="text-2xl text-gray-900">{t("question")} </span>
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
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="mb-2 font-noto text-2xl leading-5 text-slate-900">
                {t("solution-1")}
              </h2>
              <p className="mb-3 font-ud text-md text-slate-800">
                {t("solution-1-text")}
                <br></br>
                <br></br>
              </p>
            </div>
            <Link href="/hito">
              <a className="text-lg inline-flex items-center transition-colors duration-200 text-gray-800 hover:text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                {t("solution-1-button")}
              </a>
            </Link>
          </div>
          <div className="bg-white bg-opacity-70 flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-yellow-500">
                <div className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="mb-2 font-noto text-2xl leading-5 text-slate-900">
                {t("solution-2")}
              </h2>
              <p className="mb-3 font-ud text-md text-slate-800">
                {t("solution-2-text")}
              </p>
            </div>
            <Link href="/mono-monitoring">
              <a className="text-lg inline-flex items-center transition-colors duration-200 text-gray-800 hover:text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                {t("solution-2-button")}
              </a>
            </Link>
          </div>
          <div className="bg-white bg-opacity-70 flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-500">
                <div className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="mb-2 font-noto text-2xl leading-5 text-slate-900">
                {t("solution-3")}
              </h2>
              <p className="mb-3 font-ud text-md text-slate-800">
                {t("solution-3-text")}
              </p>
            </div>
            <Link href="/ichiservice">
              <a className="text-lg inline-flex items-center font-semibold transition-colors duration-200 text-gray-800 hover:text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                {t("solution-3-button")}
              </a>
            </Link>
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
              <h2 className="mb-2 font-noto text-2xl leading-5 text-slate-900">
                {t("solution-4")}
              </h2>
              <p className="mb-3 font-ud text-md text-slate-800">
                {t("solution-4-text")}
              </p>
            </div>
            <a
              href="https://www.mitsushiru.tech/"
              aria-label=""
              className="text-lg inline-flex items-center font-semibold transition-colors duration-200 text-gray-800 hover:text-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              {t("solution-4-button")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
