import Image from "next/image";

export default function Mission() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <h2 className="mb-8 text-3xl font-noto tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          ミッションとポリシー
        </h2>
        <p className="font-noto text-gray-900 text-2xl sm:px-4">ミッション</p>
        <p className="font-ud text-base text-gray-700 md:text-lg sm:px-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
        <hr className="w-full my-8 border-gray-300" />
        <p className="font-noto text-gray-900 text-2xl sm:px-4">
          ３つのポリシー
        </p>
        <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
          1.仮説に基づいて検証
        </p>
        <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
          ビーコアはまるで小さな実験室。プロジェクトごとに縮尺模型を作り、実験・検証を重ねます。お客様からのいいね！をいただくために。
        </p>
        <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
          2.フットワークは常に軽く
        </p>
        <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
          アイデアを持ち寄り、とにかく実験してみる。
          常にスピーディさを忘れずに、すぐに行動に移します。
        </p>
        <p className="pt-4 font-ud text-base text-gray-900 md:text-lg sm:px-4">
          3.お客様のプライバシーを第一に
        </p>
        <p className="pt-2 font-ud text-base text-gray-700 md:text-lg sm:px-4">
          私たちは、お客様の大切な情報を保護するために、プライバシーマークを取得し運用しています。
        </p>
      </div>
    </div>
  );
}
