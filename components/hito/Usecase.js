import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Usecase() {
  const { t } = useTranslation("hito-usecase");
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-noto text-3xl font-bold leading-none tracking-tight text-slate-900 sm:text-4xl md:mx-auto">
        {t("title")}
        </h2>
      </div>
      <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
        <div className="transition duration-300 transform bg-white rounded hover:-translate-y-1 hover:shadow md:text-center">
          <div className="relative">
            <Image
              className="rounded"
              src="/images/Hito/gate.png" // Route of the image file
              height={1080} // Desired size with correct aspect ratio
              width={1920} // Desired size with correct aspect ratio
              alt="五洋建設エントランス"
            />
          </div>
          <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
            <h5 className="mb-2 text-xl font-noto leading-none sm:text-2xl">
            {t("usecase-1")}
            </h5>
            <p className="font-ud mb-5 text-gray-700">
            {t("usecase-1-text")}
              <br></br>
              <br></br>
              {t("usecase-1-text2")}
            </p>
          </div>
        </div>
        <div className="transition duration-300 transform bg-white rounded hover:-translate-y-1 hover:shadow md:text-center">
          <div className="relative">
            <Image
              className="rounded"
              src="/images/Hito/factory.png" // Route of the image file
              height={1080} // Desired size with correct aspect ratio
              width={1920} // Desired size with correct aspect ratio
              alt="東京フードエントランス"
            />
          </div>
          <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
            <h5 className="mb-2 text-xl font-noto leading-none sm:text-2xl">
            {t("usecase-2")}
            </h5>
            <p className="font-ud mb-5 text-gray-700">
            {t("usecase-2-text")}
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              {t("usecase-2-text2")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
