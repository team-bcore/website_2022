import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Intro() {
  const { t } = useTranslation("ichi-intro");
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <div className="inline-block mb-5 rounded-full sm:mx-auto">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
        <h2 className="mb-4 font-noto text-slate-800 sm:text-4xl sm:leading-none">
          {t("title-1")}
          <br></br>
          {t("title-2")}
        </h2>
        <p className="text-base font-ud text-gray-700 md:text-lg sm:px-4">
          {t("text-1")}
          <br></br>
          {t("text-2")}
        </p>
        <hr className="w-full my-8 border-gray-300" />
        <p className="my-8 text-base font-noto text-slate-800 md:text-xl sm:px-4">
          {t("challenge-title")}
        </p>
        <ul className="list-none selection:">
          <li className="text-base font-ud text-slate-800 md:text-lg sm:px-4">
            {t("challenge-1")}
          </li>
          <li className="text-base font-ud text-slate-800 md:text-lg sm:px-4">
            {t("challenge-2")}
          </li>
          <li className="text-base font-ud text-slate-800 md:text-lg sm:px-4">
            {t("challenge-3")}
          </li>
          <li className="text-base font-ud text-slate-800 md:text-lg sm:px-4">
            {t("challenge-4")}
          </li>
          <li className="text-base font-ud text-slate-800 md:text-lg sm:px-4">
            {t("challenge-5")}
          </li>
        </ul>
        <div className="">
          <Image
            className="rounded"
            src="/images/Ichi/Intro.png" // Route of the image file
            height={1080} // Desired size with correct aspect ratio
            width={1920} // Desired size with correct aspect ratio
            alt="位置管理お困りごとイメージ"
          />
        </div>
      </div>
    </div>
  );
}
