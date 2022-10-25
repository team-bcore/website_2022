
import Image from "next/image";

export default function Contentaboutus() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
            <div className="max-w-screen-sm sm:text-center sm:mx-auto">
                <p className="pb-8 text-left font-ud text-base text-gray-900 md:text-lg">
                    組織体制と各チームの仕事内容、業務やキャリア形成を支える制度について知ることができます。
                </p>
                <h2 className="pt-8 text-left mb-8 text-3xl font-noto tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    ビーコアの組織図
                </h2>
                <hr className="w-full my-8 border-gray-300" />
                <div>
                    <Image
                        className=""
                        src="/images/Job/team.png" // Route of the image file
                        height={800} // Desired size with correct aspect ratio
                        width={1320} // Desired size with correct aspect ratio
                        alt="team-image"
                    />
                </div>
                <p className="pt-8 text-left font-ud text-base text-gray-900 md:text-lg">
                    私たちは、各分野のエキスパートが一丸となり、お客様の課題を解決するプロダクトを開発し、その価値を提供しています。
                </p>
                <p className="py-4 text-left font-ud text-base text-gray-900 md:text-lg">
                    ビーコアは、技術者を中心として構成されている会社です。 1日に2度の定例ミーティングを開催し、プロジェクトの進捗を共有しています。
                    各人がそれぞれの分野に長けたエンジニアであり、プロジェクト成功のための意見を出し合い開発を進めていくスタイルをとっています。
                </p>
                <h2 className="pt-8 text-left mb-8 text-3xl font-noto tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    業務やキャリアを支える制度
                </h2>
                <hr className="w-full my-8 border-gray-300" />
                <p className="text-left font-ud text-base text-gray-900 md:text-lg">
                【資格取得報奨制度】<br></br>
                従業員が自ら自発的に取得を志し、業務の幅を広げることに貢献する資格であれば積極的に支援しています。
                 制度自体を開始したばかりなので、どの資格を「報奨」対象とするかについては、その都度検討していきます。
                </p>
                <p className="pt-8 text-left font-ud text-base text-gray-900 md:text-lg">
                【従業員の健康促進サポート】<br></br> 従業員が健康で働き続けることが、会社にとっての財産です。そのサポートには積極的です。
                <br></br>①インフルエンザ予防接種補助制度・・・年一度の接種に対して補助制度があります。
                <br></br>②定期歯科検診補助制度・・・年一度の定期検診に対して補助制度があります。
                <br></br>③業務災害総合保険加入　など
                </p>

            </div>
        </div>
    );
}