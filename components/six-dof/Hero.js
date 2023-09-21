import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-sixdof-top-bg">
      <div className="h-96">
        <div className="px-8 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
          <div className="xl:py-24 w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <h2 className="first:max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              電波を使わない<br></br>高精度・屋内位置測位
            </h2>
            <h2 className="font-noto max-w-xl mb-4 text-5xl text-gray-100 md:text-7xl">
              彩色兼備 6Dof
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
