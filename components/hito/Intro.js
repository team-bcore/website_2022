import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Intro() {
  const { t } = useTranslation("hito-intro");
  return (
    <div className="bg-sky-100">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto sm:text-center lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-noto text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-3xl md:mx-auto">
              <span className="relative inline-block">
                <span className="relative">
                  {t("title-1")}
                  <br></br>
                  {t("title-2")}
                </span>
              </span>
            </h2>
            <p className="font-ud text-base text-gray-700 md:text-lg">
              {t("sub-title")}
            </p>
          </div>
          <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
            <Image
              className="rounded"
              src="/images/Hito/Hito-haccp.png" // Route of the image file
              height={1557} // Desired size with correct aspect ratio
              width={2049} // Desired size with correct aspect ratio
              alt="HACCPイメージ"
            />
          </div>
          <p className="font-ud max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
            {t("explanation-1")}
            <span className="text-indigo-500">{t("explanation-2")}</span>
            {t("explanation-3")}
            <br></br>
            <span className="text-indigo-500">{t("explanation-4")}</span>
            {t("explanation-5")}
          </p>
        </div>
      </div>
    </div>
  );
}
