import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Features() {
  const { t } = useTranslation("hito-features");
  return (
    <div className="bg-gradient-to-b from-sky-300 via-teal-100 to-white">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-base font-ud tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              {t("sskenbi")}
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-noto text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">{t("feature")}</span>
            </span>{" "}
          </h2>
          <p className="text-base font-ud text-gray-700 md:text-lg">
            {t("feature-text")}
          </p>
          <Image
            className="rounded"
            src="/images/Hito/Features.png" // Route of the image file
            height={1080} // Desired size with correct aspect ratio
            width={1920} // Desired size with correct aspect ratio
            alt="HACCPイメージ"
          />
        </div>

        <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
          <div className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
            <div className="flex flex-col h-full">
              <Image
                className="rounded"
                src="/images/Hito/vrk.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-noto leading-5">
                    {t("feature-title-1")}
                    <br></br>
                    <br></br>
                  </h6>
                  <p className="font-ud text-sm text-gray-900">
                    {t("feature-text-1")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
            <div className="flex flex-col h-full">
              <Image
                className="rounded"
                src="/images/Hito/nocard.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-noto leading-5">
                    {t("feature-title-2")}
                  </h6>
                  <p className="font-ud text-sm text-gray-900">
                    {t("feature-text-2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
            <div className="flex flex-col h-full">
              <Image
                className="rounded"
                src="/images/Hito/LAN.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-noto leading-5">
                    {t("feature-title-3")}
                    <br></br>
                    <br></br>
                  </h6>
                  <p className="font-ud text-sm text-gray-900">
                    {t("feature-text-3")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
            <div className="flex flex-col h-full">
              <Image
                className="rounded"
                src="/images/Hito/recording.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-noto leading-5">
                    {t("feature-title-4")}
                    <br></br>
                    <br></br>
                  </h6>
                  <p className="font-ud text-sm text-gray-900">
                    {t("feature-text-4")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
            <div className="flex flex-col h-full">
              <Image
                className="rounded"
                src="/images/Hito/compatible.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-noto leading-5">
                    {t("feature-title-5")}
                  </h6>
                  <p className="font-ud text-sm text-gray-900">
                    {t("feature-text-5")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
            <div className="flex flex-col h-full">
              <Image
                className="rounded"
                src="/images/Hito/sharing.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-noto leading-5">
                    {t("feature-title-6")}
                  </h6>
                  <p className="font-ud text-sm text-gray-900">
                    {t("feature-text-6")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <Image
                className="rounded"
                src="/images/Hito/setting.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-noto leading-5">
                    {t("feature-title-7")}
                    <br></br>
                    <br></br>
                  </h6>
                  <p className="font-ud text-sm text-gray-900">
                    {t("feature-text-7")}
                  </p>
                </div>
              </div>
            </div>
          </a>
          <div className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
            <div className="flex flex-col h-full">
              <Image
                className="rounded"
                src="/images/Hito/designed_tag.png" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1920} // Desired size with correct aspect ratio
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-noto leading-5">
                    {t("feature-title-8")}
                    <br></br>
                    <br></br>
                  </h6>
                  <p className="font-ud text-sm text-gray-900">
                    {t("feature-text-8")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
