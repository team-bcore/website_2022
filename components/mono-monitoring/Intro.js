import { useTranslation } from "next-i18next";

export default function Header() {
  const { t } = useTranslation("mono-monitoring-intro");
  return (
    <div className="">
      <div className="bg-Intro-monomonitoring bg-no-repeat bg-cover px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          <a
            href="/"
            aria-label="View"
            className="inline-block mb-5 rounded-full sm:mx-auto"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-amber-400">
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
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
            </div>
          </a>
          <h2 className="mb-4 font-noto text-slate-800 sm:text-4xl sm:leading-none">
            {t("title-1")}
            <br></br>
            {t("title-2")}
          </h2>
          <p className="text-base font-ud text-gray-700 md:text-lg sm:px-4">
            {t("title-text")}
          </p>
          <hr className="w-full my-8 border-gray-300" />
          <p className="my-8 text-base font-noto text-slate-800 md:text-xl sm:px-4">
            {t("issue-title")}
          </p>
          <ul className="list-none selection:">
            <li className="text-base font-ud text-slate-800 md:text-lg sm:px-4">
              {t("issue-tetx-1")}
            </li>
            <li className="text-base font-ud text-slate-800 md:text-lg sm:px-4">
              {t("issue-tetx-2")}
            </li>
            <li className="text-base font-ud text-slate-800 md:text-lg sm:px-4">
              {t("issue-tetx-3")}
            </li>
            <li className="text-base font-ud text-slate-800 md:text-lg sm:px-4">
              {t("issue-tetx-4")}
            </li>
            <li className="text-base font-ud text-slate-800 md:text-lg sm:px-4">
              {t("issue-tetx-5")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
