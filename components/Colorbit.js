import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Colorbit() {
  const { t } = useTranslation("colorbit");
  return (
    <div className="relative flex flex-col-reverse py-16 lg:py-16 lg:flex-col 2xl:my-16">
      <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
        <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
          <h2 className="mb-5 text-3xl font-noto tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
            {t("title")}
          </h2>
          <p className="font-ud mb-5 text-base text-gray-700 md:text-lg">
            {t("text-1")}
            <br></br>
            {t("text-2")}
          </p>
        </div>
      </div>
      <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <Image
          className="rounded"
          src="/images/Home/colorbit.png" // Route of the image file
          height={969} // Desired size with correct aspect ratio
          width={1508} // Desired size with correct aspect ratio
          alt="カラービットイメージ"
        />
      </div>
    </div>
  );
}
