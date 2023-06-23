import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Face() {
  const { t } = useTranslation("hito-face");
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-base font-ud tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              {t("sub-title")}
            </p>
          </div>
          <h2 className="max-w-lg mb-6 text-3xl font-noto leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative"></span>
            </span>{" "}
            {t("title-1")}
            <br></br>
            {t("title-2")}
          </h2>
          <p className="font-ud text-base text-gray-700 md:text-lg">
            {t("title-text-1")}
            <br></br>
            {t("title-text-2")}
          </p>
        </div>
        <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
          <Image
            className="rounded"
            src="/images/Hito/face.png" // Route of the image file
            height={1080} // Desired size with correct aspect ratio
            width={1920} // Desired size with correct aspect ratio
            alt="HACCPイメージ"
          />
        </div>
      </div>
    </div>
  );
}
