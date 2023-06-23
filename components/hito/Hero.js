import { useTranslation } from "next-i18next";

export default function Hero() {
  const { t } = useTranslation("hito-hero");
  return (
    <div className="bg-Hito-top bg-cover bg-center">
      <div className="">
        <div className="px-4 pt-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-40">
          <div className="max-w-xl mb-1 md:mx-auto sm:text-center lg:max-w-2xl md:mb-1">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-base font-ud tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                {t("sub-title")}
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-noto text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <span className="relative">{t("title")}</span>
              </span>{" "}
            </h2>
            <p className="font-ud text-base text-gray-800 md:text-lg">
              {t("overview-1")}
              <br></br>
              {t("overview-2")}
              <br></br>
              {t("overview-3")}
            </p>
          </div>
        </div>
      </div>
      <div className="py-16 relative px-4 sm:px-0">
        <div className="absolute inset-0 h-1/2" />
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-blue-400">
              <svg
                className="w-10 h-10 text-white"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <p className="font-noto tracking-wide text-sky-600">
              {t("feature-1")}
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-blue-400">
              <svg
                className="w-10 h-10 text-white"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <p className="font-noto tracking-wide text-sky-600">
              {t("feature-2")}
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-blue-400">
              <svg
                className="w-10 h-10 text-white"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <p className="font-noto tracking-wide text-sky-600">
              {t("feature-3")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
