import { useTranslation } from "next-i18next";

export default function Profile() {
  const { t } = useTranslation("company-plofile");
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <h2 className="mb-8 text-3xl font-noto tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        {t("title")}
        </h2>
        <hr className="w-full my-8 border-gray-300" />
        <div className="text-left">
          <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
          {t("name-title")}
          </p>
          <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
          {t("name")}
          </p>
          <hr className="w-full my-4 border-gray-300" />
          <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
          {t("address-title")}
          </p>
          <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
          {t("address")}
          </p>
          <hr className="w-full my-4 border-gray-300" />
          <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
          {t("establish-title")}
          </p>
          <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
          {t("establish")}
          </p>
          <hr className="w-full my-4 border-gray-300" />
          <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
          {t("capital-title")}
          </p>
          <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
          {t("capital")}
          </p>
          <hr className="w-full my-4 border-gray-300" />
          <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
          {t("business-title")}
          </p>
          <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
          {t("business-1")}<br></br>
          {t("business-2")} <br></br>
          {t("business-3")}<br></br>
          {t("business-4")}
          </p>
          <hr className="w-full my-4 border-gray-300" />
          <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
          {t("client-title")}
          </p>
          <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
          {t("client-1")}<br></br>{t("client-2")}<br></br>
          {t("client-3")}<br></br>{t("client-4")}<br></br>
          {t("client-5")} <br></br>
          {t("client-6")}<br></br>{t("client-7")}<br></br>
          {t("client-8")} <br></br>
          {t("client-9")} <br></br>
          {t("client-10")}<br></br>{t("client-11")}<br></br>
          {t("client-12")}<br></br>
          {t("client-13")} <br></br>{t("kei-syouryaku")} 
          </p>
          <hr className="w-full my-4 border-gray-300" />
          <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
          {t("bank-title")}
          </p>
          <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
          {t("bank-1")}<br></br>{t("bank-2")}
          </p>
          <hr className="w-full my-4 border-gray-300" />
        </div>
      </div>
    </div>
  );
}
