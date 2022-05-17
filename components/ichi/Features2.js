import Image from "next/image";

export default function Features2() {
    return (
        <div className="px-4 py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-1">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-ud bg-indigo-400 text-white rounded">ポイント2</span>
          <h5 className="mb-4 text-2xl font-noto leading-none text-slate-800">  
          <br></br>
          誤差数センチの高精度な位置測位で、正確な状況把握ができます
          </h5>
          
        </div>
        <div className="mx-auto lg:max-w-2xl">
          <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
          <Image
                    className="rounded"
                    src="/images/Ichi/Features2.png" // Route of the image file
                    height={1080} // Desired size with correct aspect ratio
                    width={1920} // Desired size with correct aspect ratio
                    alt="位置管理比較イメージ2"
                />
          </div>
        </div>
      </div>      
    );
}