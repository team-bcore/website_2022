import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Hero() {
  const { t } = useTranslation("ichi-hero");
  return (
    <div className="bg-hero-ichi bg-no-repeat bg-cover relative flex flex-col-reverse px-4 py-24 mx-auto lg:block lg:flex-col lg:py-32 xl:py-40 2xl:py-64 md:px-8 sm:max-w-xl md:max-w-full">
      <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
        <Image
          className="rounded"
          src="/images/Ichi/Top-vrk.png" // Route of the image file
          height={1080} // Desired size with correct aspect ratio
          width={1920} // Desired size with correct aspect ratio
          alt="位置管理イメージ"
        />
      </div>
      <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-base font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                {t("sub-title")}
              </p>
            </div>
            <h2 className="max-w-lg mb-6 text-4xl font-noto text-slate-900 sm:text-4xl sm:leading-none">
              {t("title")}
            </h2>
            <p className="text-base text-gray-900 font-ud md:text-lg">
              {t("text-1")}
              <br></br>
              <span className="text-indigo-600 underline decoration-slate-900">
                {t("text-2")}
              </span>
              <br></br>
              {t("text-3")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
