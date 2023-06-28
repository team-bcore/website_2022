import { useTranslation } from "next-i18next";

export default function Purpose() {
  const { t } = useTranslation("mono-monitoring-propose");
  return (
    <div className="bg-Propose-monomonitoring bg-no-repeat bg-cover">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-base font-noto tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              {t("sub-title")}
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-noto text-3xl font-bold leading-none tracking-tight text-slate-800 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative"></span>
            </span>{" "}
            {t("title")}
          </h2>
        </div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-5 duration-300 transform  border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-amber-400">
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
              {t("text-1")}
            </h6>
          </div>
          <div className="p-5 duration-300 transform  border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-amber-400">
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
              {t("text-2")}
            </h6>
          </div>
          <div className="p-5 duration-300 transform border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-amber-400">
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
              {t("text-3")}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
