import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    (<div className="">
      <nav className="bg-stone-800 fixed w-full z-10 ">
        <div className="w-full">
          <div className="flex items-center h-12 w-full">
            <div className="flex items-center mx-5 justify-between w-full">
              <div className="pt-1 flex justify-center items-center flex-shrink-0">
                <Link href="/">

                  <Image
                    src="/images/Footer/logo.svg" // Route of the image file
                    height={31.7} // Desired size with correct aspect ratio
                    width={100} // Desired size with correct aspect ratio
                    alt="bcore_logo"
                  />

                </Link>
                <Link
                  href="/job"
                  className="text-white
               font-ud text-xl pl-4">
                  ビーコア採用サイト
                                      <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="inline-block w-6 h-6 -mt-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>

                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/* <Link
                    href="/"
                  >
                    <a className="cursor-pointer hover:bg-lime-500 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="mr-4 flex lg:hidden md:-mt-1">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-rught justify-center rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-white"
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
                  href="job/aboutus"
                  className="cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">
                  
                    ビーコアについて
                  
                </Link>
                <Link
                  href="job/solutions"
                  className="cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">
                  
                    提供するソリューション
                  
                </Link>
                <Link
                  href="job/system"
                  className="cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">
                  
                    ビーコアを支える仕事
                  
                </Link>
                <Link
                  href="job/staff"
                  className="cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">
                  
                    スタッフ紹介
                  
                </Link>
                <Link
                  href="job/privacy"
                  className="cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">
                  
                    採用活動における個人情報の取り扱いについて
                  
                </Link>
                <Link
                  href="job/application"
                  className="bg-gray-200 cursor-pointer text-gray-700 font-ud hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">
                  
                    募集要項
                  
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
