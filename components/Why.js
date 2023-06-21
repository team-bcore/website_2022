import Image from "next/image";
import { useTranslation } from 'next-i18next'

export default function Why() {
  const { t } = useTranslation("why");
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="text-center mb-12 font-sans text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl sm:leading-none">
        <span className="relative inline-block">
          <span className="font-noto relative">{t("title")}</span>
        </span>
      </h2>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <Image
            src="/images/Home/vrk.jpg" // Route of the image file
            height={1429} // Desired size with correct aspect ratio
            width={1600} // Desired size with correct aspect ratio
            alt="Vieureka"
          />
          <div className="items-stretch h-full p-5 border border-t-0">
            <p className="mb-3 text-base font-ud tracking-wide uppercase text-gray-700">
              {t("reason-1")}
            </p>
            <p className="inline-block mb-3 text-2xl leading-8 font-noto text-slate-800">
              {t("reason-1-title")}
            </p>
            <p className="mb-2 font-ud text-md text-slate-800">
              {t("reason-1-text")}
              <br></br>
              <span className="text-xs">{t("reason-1-cf")}</span>
            </p>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <Image
            src="/images/Home/support.png" // Route of the image file
            height={1429} // Desired size with correct aspect ratio
            width={1600} // Desired size with correct aspect ratio
            alt="サポート"
          />
          <div className="items-stretch h-full p-5 border border-t-0">
            <p className="mb-3 text-base font-ud tracking-wide uppercase text-gray-700">
              {t("reason-2")}
            </p>
            <p className="inline-block mb-3 text-2xl leading-8 font-noto text-slate-800">
              {t("reason-2-title")}
              <br></br>
              <br></br>
            </p>
            <p className="mb-2 font-ud text-md text-slate-800">
              {t("reason-2-text")}
            </p>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <Image
            src="/images/Home/support-2.jpeg" // Route of the image file
            height={1429} // Desired size with correct aspect ratio
            width={1600} // Desired size with correct aspect ratio
            alt="サポート"
          />
          <div className="items-stretch h-full p-5 border border-t-0">
            <p className="mb-3 text-base font-ud tracking-wide uppercase text-gray-700">
              {t("reason-3")}
            </p>
            <p className="inline-block mb-3 text-2xl leading-8 font-noto text-slate-800">
              {t("reason-3-title")}
              <br></br>
              <br></br>
            </p>
            <p className="mb-2 font-ud text-md text-slate-800">
              {t("reason-3-text")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
