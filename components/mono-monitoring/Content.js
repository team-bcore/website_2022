import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Content() {
  const { t } = useTranslation("mono-monitoring-content");
  return (
    <div className="bg-amber-300">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
            <span className="inline-block mb-1 sm:mb-4">Our Contents</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
          <p className="font-ud text-gray-700 lg:text-base lg:max-w-md">
            {t("text")}
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">
          <a
            href="https://youtu.be/ICQEIb9mL_U"
            aria-label="View Item"
            target="_blank"
          >
            <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2 hover:shadow-2xl">
              <Image
                className="rounded"
                src="/images/Monom/content-1.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt="モノ常時管理Youtubeサムネイル"
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-ud text-gray-100">
                  {t("title-1")}
                </p>
                <p className="font-ud text-base tracking-wide text-gray-300">
                  {t("text-1")}
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://youtu.be/wbLdsRAJsog"
            aria-label="View Item"
            target="_blank"
          >
            <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2 hover:shadow-2xl">
              <Image
                className="rounded"
                src="/images/Monom/content-2.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt="モノ常時管理Youtubeサムネイル"
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-ud text-gray-100">
                  {t("title-2")}
                </p>
                <p className="font-ud text-base tracking-wide text-gray-300">
                  {t("text-2")}
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://note.com/b_core/n/nbdd62df31c62"
            aria-label="View Item"
            target="_blank"
          >
            <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2 hover:shadow-2xl">
              <Image
                className="rounded"
                src="/images/Monom/content-3.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt="noteイメージ"
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-ud text-gray-100">
                  {t("title-3")}
                </p>
                <p className="font-ud text-base tracking-wide text-gray-300">
                  {t("text-3")}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
