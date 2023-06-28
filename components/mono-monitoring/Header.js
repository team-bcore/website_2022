import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Header() {
  const { t } = useTranslation("mono-monitoring-header");
  return (
    <div className="bg-hero-monomonitoring bg-no-repeat bg-cover relative flex flex-col-reverse px-4 py-24 mx-auto lg:block lg:flex-col lg:py-32 xl:py-40 2xl:py-64 md:px-8 sm:max-w-xl md:max-w-full">
      <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
        <Image
          className="rounded"
          src="/images/Monom/Top.png" // Route of the image file
          height={1080} // Desired size with correct aspect ratio
          width={1920} // Desired size with correct aspect ratio
          alt="モノ常時管理イメージ"
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
            <h2 className="max-w-lg mb-6 text-4xl font-noto text-slate-800 sm:text-4xl sm:leading-none">
              {t("title")}
            </h2>
            <p className="text-base text-gray-800 font-ud md:text-lg">
              {t("overview-1")}
              <span className="text-indigo-500 underline decoration-slate-800">
                {t("overview-2")}
              </span>
              {t("overview-3")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
