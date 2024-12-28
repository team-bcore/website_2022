import Link from "next/link";

export default function Content() {
  return (
    (<div className="bg-sixdof-content-bg">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
          <div className="py-4">
            <h2 className="font-noto mb-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-none">
              実証実験の実例
            </h2>
            <p className="font-ud text-base text-gray-700 md:text-lg">
              「ビーコアのR&D情報・colorbit 6 Dimention
              Survey」からご覧いただけます。
            </p>
            <div className="pt-8">
              <Link
                href="jacompany/research/6d"
                className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-200 border border-gray-200 rounded-lg shadow-inner group">

                <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span class="font-ud relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  詳しく見る
                </span>

              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}
