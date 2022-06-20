import Link from "next/link";

export default function Navmission() {
  return (
    <div className="bg-neutral-900">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <p className="font-noto text-base text-gray-300 md:text-2xl">
            会社紹介
          </p>
        </div>
        <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <h6 className="text-gray-300 mb-2 font-noto leading-5 text-xl">
                ミッションとポリシー
              </h6>
              <p className="text-gray-300 mb-3 font-ud text-base mt-8">
                ビーコアがお客様に掲げる3つのポリシーです。
              </p>
            </div>      
            <Link href="mission">
             <a className="inline-flex items-center font-ud transition-colors duration-200 text-gray-300 hover:text-gray-500">→詳しく見る</a> 
            </Link>  
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <h6 className="text-gray-300 mb-2 font-noto leading-5 text-xl">
                社員紹介
              </h6>
              <p className="text-gray-300 mb-3 font-ud text-base mt-8">
                さまざまな分野のエキスパートがお客様の課題解決にあたる少数精鋭チームです。
              </p>
            </div> 
            <Link href="staff">
             <a className="inline-flex items-center font-ud transition-colors duration-200 text-gray-300 hover:text-gray-500">→詳しく見る</a> 
            </Link>  
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <h6 className="text-gray-300 mb-2 font-noto leading-5 text-xl">
                オフィスとラボの紹介
              </h6>
              <p className="text-gray-300 mb-3 font-ud text-base mt-8">
                東京・西神田にあるビーコアのオフィスと、実験・製作のためのラボ（研究室）を紹介します。
              </p>
            </div>
            <Link href="office">
             <a className="inline-flex items-center font-ud transition-colors duration-200 text-gray-300 hover:text-gray-500">→詳しく見る</a> 
            </Link>  
          </div>
          <div className="bg-gray-700 flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <h6 className="text-gray-300 mb-2 font-noto leading-5 text-xl">
                会社概要
              </h6>
              <p className="text-gray-300 mb-3 font-ud text-base mt-8">
                正式名称、設立年月日、資本金、事業内容、主要取引先などをご覧いただけます。
              </p>
            </div>
          </div>
        </div>
        <div className="pt-4 grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <h6 className="text-gray-300 mb-2 font-noto leading-5 text-xl">
                各種資料・特許情報
              </h6>
              <p className="text-gray-300 mb-3 font-ud text-base mt-8">
                ソリューションに関する各種資料、メディア掲載情報、国内外で取得した特許の情報を掲載しています。
              </p>
            </div>
            <Link href="information">
             <a className="inline-flex items-center font-ud transition-colors duration-200 text-gray-300 hover:text-gray-500">→詳しく見る</a> 
            </Link>  
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <h6 className="text-gray-300 mb-2 font-noto leading-5 text-xl">
                R&D
              </h6>
              <p className="text-gray-300 mb-3 font-ud text-base mt-8">
                ビーコアの研究開発の情報をご覧いただけます。
              </p>
            </div>
            <Link href="research">
             <a className="inline-flex items-center font-ud transition-colors duration-200 text-gray-300 hover:text-gray-500">→詳しく見る</a> 
            </Link>  
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <h6 className="text-gray-300 mb-2 font-noto leading-5 text-xl">
                ニュース
              </h6>
              <p className="text-gray-300 mb-3 font-ud text-base mt-8">
                イベント情報やお知らせをご覧いただけます。
              </p>
            </div>
            <Link href="/newspage">
             <a className="inline-flex items-center font-ud transition-colors duration-200 text-gray-300 hover:text-gray-500">→詳しく見る</a> 
            </Link>  
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <h6 className="text-gray-300 mb-2 font-noto leading-5 text-xl">
                ブログ
              </h6>
              <p className="text-gray-300 mb-3 font-ud text-base mt-8">
                テクノロジー、デザイン、ビジネスなどさまざまなトピックについて書いています。
              </p>
            </div>
            <Link href="/blog">
             <a className="inline-flex items-center font-ud transition-colors duration-200 text-gray-300 hover:text-gray-500">→詳しく見る</a> 
            </Link>  
          </div>
        </div>
      </div>
    </div>
  );
}
