import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Features1() {
  const { t } = useTranslation("ichi-features1");
  return (
    <div className="bg-gray-100">
      <div className="bg-white px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-2">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-base font-ud tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              {t("title")}
            </p>
          </div>
          <span className="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-ud bg-indigo-400 text-white rounded">
            {t("point-1")}
          </span>
          <h5 className="text-2xl font-noto leading-none text-slate-800">
            <br></br>
            {t("feature-text")}
          </h5>
        </div>
        <div className="mx-auto lg:max-w-2xl">
          <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
            <Image
              className="rounded"
              src="/images/Ichi/Features1.png" // Route of the image file
              height={1080} // Desired size with correct aspect ratio
              width={1920} // Desired size with correct aspect ratio
              alt="位置管理比較イメージ1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
