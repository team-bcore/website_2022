import Image from "next/image";

export default function Message() {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
      <div className="py-8 grid gap-10 lg:grid-cols-2">
        <div className="pt-12 lg:pr-10">
          <div className="">
            <p className="inline-block px-3 py-px mb-4 text-base font-ud tracking-wider text-teal-900 uppercase rounded-full bg-amber-300">
              代表からのメッセージ
            </p>
          </div>
          <p className="pt-2 mb-3 font-ud text-gray-800 text-lg">
            ビーコア株式会社 代表取締役社長
          </p>
          <h5 className="text-gray-800 mb-3 text-2xl font-noto leading-none sm:text-3xl">
            水野廉郎 Yasuro Mizuno
          </h5>
          <hr className="mb-4 border-gray-300" />
          <p className="text-gray-700 font-ud leading-relaxed">
            我が国を取り巻く状況は厳しく、国際競争力の低下、G7で最低の労働生産性と情けない状況になっています。我慢や忍耐を強いられる単純作業、見直されない定型業務の繰り返し、なかなか進まないデジタル化、新しい技術導入への抵抗感、・・・そういった不合理や不条理の積み重なりや過去のやり方へのしがみつきがその要因と考えられます。
            <br></br>
            我々が目指すのは、技術と創意工夫により、社会で働く人々を無理・無駄・不合理から開放する一助となることです。
            ここ数年の画像処理技術やエッジコンピューティングの進化はめざましく、我々が得意とする技術でワクワクするようなソリューションを創る会社を目指しています。新しい技術はどんどん試したい学びたい、無駄や不合理が大嫌い、人を喜ばせることが大好き、そういう人材を求めています。チャレンジ精神旺盛な方、大歓迎です。
          </p>
        </div>
        <div className="pt-8">
          <div className="relative w-full aspect-[4/3] drop-shadow-lg"> {/* アスペクト比を4:3に設定 */}
            <Image
              src="/images/Job/ceo.jpg"
              alt="CEO"
              fill
              className="object-cover rounded shadow-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}