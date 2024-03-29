import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Overview() {
  const { t } = useTranslation("mono-monitoring-overview");
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-base font-ud tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            {t("title")}
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-noto text-3xl font-bold leading-none tracking-tight text-slate-800 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">
              {t("text-1")}
              </span>
            </span>{" "}
          </h2>
          <p className="font-ud text-gray-700 md:text-lg">
          {t("text-2")}
            <br></br>
            {t("text-3")}
          </p>
        </div>
        {/* <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    
                </div> */}
      </div>
      <div className="relative">
        <Image
          className="rounded"
          src="/images/Monom/Overview.png" // Route of the image file
          height={1080} // Desired size with correct aspect ratio
          width={1920} // Desired size with correct aspect ratio
          alt="モノ常時管理イメージ"
        />
      </div>
    </div>
  );
}
