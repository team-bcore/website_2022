import Link from "next/link";

export default function Research() {
  return (
    (<div className="px-4 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <h2 className="mb-8 text-3xl font-noto tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          R&D（研究開発）
        </h2>
        <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
          ビーコアの研究開発の情報をご覧いただけます。
        </p>
        <hr className="w-full my-8 border-gray-300" />
        <div className="text-left">
          <span className="inline-block py-1.5 px-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-800 text-white rounded">
            New
          </span>
          <p className="pt-2 font-noto text-base text-gray-800 md:text-lg">
            自動車工場でのヒューマンエラーを排除する「カラービット」とiPhoneを活用したホースと継手の正常接続確認
          </p>
          <Link
            href="research/cb-match"
            className="inline-flex items-center font-ud transition-colors duration-200 text-gray-700 hover:text-blue-400">
            
              →詳しく見る
            
          </Link>
          <hr className="w-full my-4 border-gray-300" />
          <p className="pt-2 font-noto text-base text-gray-800 md:text-xl">
            colorbit 6 Dimention Survey
          </p>
          <Link
            href="research/6d"
            className="inline-flex items-center font-ud transition-colors duration-200 text-gray-700 hover:text-blue-400">
            
              →詳しく見る
            
          </Link>
          <hr className="w-full my-4 border-gray-300" />
        </div>
      </div>
    </div>)
  );
}
