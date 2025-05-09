import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("common");
  return (
    (<div className="relative bg-slate-50">
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <Link href="/" className="inline-flex items-center">

              <Image
                src="/images/Footer/logo.svg" // Route of the image file
                height={63.5} // Desired size with correct aspect ratio
                width={200} // Desired size with correct aspect ratio
                alt="bcore_logo"
              />

            </Link>
            <div className="mt-4 lg:max-w-sm">
              <p className="font-ud text-base text-gray-700 md:text-lg">
              {t("company-name")}
              </p>
              <p className="mt-4">
                <a href="https://www.jipdec.or.jp/index.html">
                  <Image
                    src="/images/Footer/pmark-03.png" // Route of the image file
                    height={56} // Desired size with correct aspect ratio
                    width={56} // Desired size with correct aspect ratio
                    alt="Pマークロゴ"
                  />
                </a>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-noto text-xl leading-5 text-slate-800">
              {t("services")}
              </p>
              <ul className="mt-2 space-y-2">
                <li className="font-ud text-md text-slate-800">
                  <Link href="/hito">
                    {t("hito")}
                  </Link>
                </li>
                <li className="font-ud text-md text-slate-800">
                  <Link href="/mono-monitoring">
                    {t("mono")}
                  </Link>
                </li>
                <li className="font-ud text-md text-slate-800">
                  <Link href="/ichiservice">
                    {t("ichi")}
                  </Link>
                </li>
                <li className="font-ud text-md text-slate-800">
                  <Link href="/mono">
                    {t("footer-iphone")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                <br></br>
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="https://www.mitsushiru.tech/">
                    <p className="font-ud text-md text-slate-800">
                      {t("mitsu")}
                    </p>
                  </a>
                </li>
                <li className="font-ud text-md text-slate-800">
                  <Link href="/sixdof">
                    {t("sixdof")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-noto text-xl leading-5 text-slate-800">
                {t("RD")}
              </p>
              <ul className="mt-2 space-y-2">
                <li className="font-ud text-md text-slate-800">
                  <Link href="/jacompany/research/">
                    {t("our-RD")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-noto text-xl leading-5 text-slate-800">
                {t("about-us")}
              </p>
              <ul className="mt-2 space-y-2">
                <li className="font-ud text-md text-slate-800">
                  <Link href="/jacompany">
                    {t("company")}
                  </Link>
                </li>
                <li className="font-ud text-md text-slate-800">
                  <Link href="/newspage">
                    {t("news")}
                  </Link>
                </li>
                <li className="font-ud text-md text-slate-800">
                  <Link href="/blogpage">
                    {t("blog")}
                  </Link>
                </li>
                <li className="font-ud text-md text-slate-800">
                  <Link href="/privacy-policy">
                    {t("privacy-policy")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm font-ud text-gray-800">
            © Copyright B-CORE Inc. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="https://twitter.com/colorbit_bcore"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5"
                alt="Twitter-icon"
              >
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/b.core_colorbit/?igshid=1gc6othh65147"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg
                viewBox="0 0 30 30"
                fill="currentColor"
                className="h-6"
                alt="instagram-icon"
              >
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/colorbit.b.core/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5"
                alt="facebook-icon"
              >
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>)
  );
}
