import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'next-i18next'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation('common');
  return (
    (<div className="">
      <nav className="bg-white bg-opacity-80 shadow-sm fixed w-full z-10 ">
        <div className="w-full">
          <div className="flex items-center h-12 w-full">
            <div className="flex items-center mx-10  justify-between w-full">
              <div className="pt-1 flex justify-center items-center flex-shrink-0">
                <Link href="/">

                  <Image
                    src="/images/Footer/logo.svg" // Route of the image file
                    height={31.7} // Desired size with correct aspect ratio
                    width={100} // Desired size with correct aspect ratio
                    alt="bcore_logo"
                  />

                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/* <Link
                    href="/"
                  >
                    <a className="cursor-pointer hover:bg-lime-500 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                  </Link> */}
                  <Link
                    href="/hito"
                    className="cursor-pointer font-ud text-md text-slate-800 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">

                    {t('hito')}

                  </Link>
                  <Link
                    href="/mono-monitoring"
                    className="cursor-pointer font-ud text-md text-slate-800 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">

                    {t('mono')}

                  </Link>
                  <Link
                    href="/ichiservice"
                    className="cursor-pointer font-ud text-md text-slate-800 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">

                    {t('ichi')}

                  </Link>
                  <Link
                    href="/sixdof"
                    className="cursor-pointer font-ud text-md text-slate-800 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">

                    {t('sixdof')}

                  </Link>
                  {/* <Link href="/mono">
                    <a className="cursor-pointer font-ud text-md text-slate-800 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
                    {t('iphone-mono')}
                    </a>
                  </Link> */}
                  <Link
                    href="https://www.mitsushiru.tech/"
                    className="cursor-pointer font-ud text-md text-slate-800 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">

                    {t('mitsu')}

                  </Link>
                  <Link
                    href="/jacompany"
                    className="cursor-pointer font-ud text-md text-slate-800 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">

                    {t('introduction')}

                  </Link>
                  <Link
                    href="/newspage"
                    className="cursor-pointer font-ud text-md text-slate-800 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">

                    {t('news')}

                  </Link>
                  <Link
                    href="/blogpage"
                    className="cursor-pointer font-ud text-md text-slate-800 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">

                    {t('blog')}

                  </Link>
                  <Link
                    href="/job"
                    className="cursor-pointer font-ud text-md text-slate-800 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">

                    {t('recruit')}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="-mt-1 w-4 h-4 inline-block"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>

                  </Link>
                  <Link
                    href="/contact"
                    className="cursor-pointer bg-slate-800 font-ud text-md text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-500 shadow-lg shadow-gray-400/50">

                    {t('contact')}

                  </Link>
                </div>
              </div>
            </div>
            <div className="mr-10 flex lg:hidden md:-mt-1">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div ref={ref} className="bg-white px-2 pt-2 pb-3 sm:px-3 ">
                <Link
                  href="/hito"
                  className="cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">

                  {t('r-hito')}

                </Link>
                <Link
                  href="/mono-monitoring"
                  className="cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">

                  {t('r-mono')}

                </Link>
                <Link
                  href="/ichiservice"
                  className="cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">

                  {t('r-ichi')}

                </Link>
                <Link
                  href="/sixdof"
                  className="cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">

                  {t('r-sixdof')}

                </Link>
                <a href="https://www.mitsushiru.tech/">
                  <a className="cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">
                  {t('r-mitsu')}
                  </a>
                </a>
                <Link
                  href="/jacompany"
                  className="cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">

                  {t('introduction')}

                </Link>
                <Link
                  href="/newspage"
                  className="cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">

                  {t('r-news')}

                </Link>
                <Link
                  href="/blogpage"
                  className="cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">

                  {t('r-blog')}

                </Link>
                <Link
                  href="/job"
                  className="cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">

                  {t('r-recruit')}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="-mt-1 w-4 h-4 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>

                </Link>
                <Link
                  href="/contact"
                  className="bg-gray-200 cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">

                  {t('r-contact')}

                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>)
  );
}

export default Navbar;
