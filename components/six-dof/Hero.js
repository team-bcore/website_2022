import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative">
      <img
        src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75 h-96">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="">
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
    </div>
  );
}
