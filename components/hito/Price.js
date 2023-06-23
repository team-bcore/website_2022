import { useTranslation } from "next-i18next";

export default function Price() {
  const { t } = useTranslation("hito-price");
  return (
    <div className="bg-Hito-Price bg-cover">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-lg sm:text-center sm:mx-auto">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500">
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
                    d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </svg>
            </div>
          </div>
          <h2 className="mb-6 font-noto text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            <span className="relative inline-block">
              <span className="relative">{t("initial-cost")}</span>
            </span>{" "}
            <br></br>
            {t("monthly-fee")}
          </h2>
          <p className="inline-block px-3 py-px mb-4 tracking-wider rounded-full bg-blue-600 font-ud text-base text-white md:text-lg">
            {t("set")}
          </p>
          <ul className="font-ud text-gray-700 md:text-md">
            <li>{t("set-1")}</li>
            <li>{t("set-2")}</li>
            <li>{t("set-3")}</li>
          </ul>
          <hr className="my-8 border-gray-300" />
          <p className="inline-block px-3 py-px mb-4 tracking-wider rounded-full bg-blue-600 font-ud text-base text-white md:text-lg">
            {t("fee")}
          </p>
          <ul className="font-ud text-gray-700 md:text-md">
            <li>{t("fee-text1")}</li>
            <li>{t("fee-text2")}</li>
            <li>{t("fee-text3")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
