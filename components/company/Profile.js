import Image from "next/image";

export default function Profile() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <h2 className="mb-8 text-3xl font-noto tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          会社概要
        </h2>
        <hr className="w-full my-8 border-gray-300" />
        <div className="text-left">
          <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
            会社名
          </p>
          <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
            ビーコア株式会社
          </p>
          <hr className="w-full my-4 border-gray-300" />
          <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
            所在地
          </p>
          <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
            東京都千代田区西神田2-5-6 中西ビル７階
          </p>
          <hr className="w-full my-4 border-gray-300" />
          <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
            設立
          </p>
          <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
            平成18年4月21日
          </p>
          <hr className="w-full my-4 border-gray-300" />
          <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
            資本金
          </p>
          <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
            6927万5千円
          </p>
          <hr className="w-full my-4 border-gray-300" />
          <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
            事業内容
          </p>
          <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
            自動認識技術の研究、開発<br></br>
            上記分野に関わる知的財産権の取得、管理とライセンス供与<br></br>
            上記分野に関わる機器およびソフトウェアの製造、販売<br></br>
            カラービット®を用いたソリューション
          </p>
          <hr className="w-full my-4 border-gray-300" />
          <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
            事業主要取引先
          </p>
          <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
            OKIクロステック株式会社<br></br>五洋建設株式会社<br></br>
            株式会社サトー<br></br>スリーエム ジャパン株式会社<br></br>
            大日本印刷株式会社<br></br>
            東芝システムテクノロジー株式会社<br></br>株式会社トーショー<br></br>
            日鉄ソリューションズ株式会社<br></br>任天堂株式会社<br></br>
            パナソニック株式会社<br></br>
            株式会社日立プラントコンストラクション<br></br>（50音順 敬称略）
          </p>
          <hr className="w-full my-4 border-gray-300" />
          <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
            取引銀行
          </p>
          <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
            みずほ銀行 九段支店<br></br>朝日信用金庫 神田小川町支店
          </p>
          <hr className="w-full my-4 border-gray-300" />
        </div>
      </div>
    </div>
  );
}
