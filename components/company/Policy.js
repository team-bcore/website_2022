import { useTranslation } from "next-i18next";

export default function Policy() {
  const { t } = useTranslation("company-policy");
  return (
    <div className="bg-Company-bg bg-cover bg-no-repeat">
      <div className="px-4 pt-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-40">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col sm:text-center sm:mb-0">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
              {t("title")}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
