import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Usecase() {
  const { t } = useTranslation("ichi-usecase");
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <h2 className="mb-4 text-3xl font-noto tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          {t("title")}
        </h2>
        <Image
          src="/images/Ichi/i-Construction-ichi.png" // Route of the image file
          height={150} // Desired size with correct aspect ratio
          width={150} // Desired size with correct aspect ratio
          alt="i-Construction"
        />
        <p className="font-ud text-base text-gray-700 md:text-lg sm:px-4">
          {t("text")}
        </p>
        <hr className="w-full my-8 border-gray-300" />
      </div>
    </div>
  );
}
