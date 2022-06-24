import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Jacompany() {
    return (
        <div className="">
            <>
                <NextSeo
                    title="ビーコア株式会社"
                    description="現場のニッチなお悩みをIoTの力で解決します"
                    openGraph={{
                        url: "https://www.bcore.biz/research/cb-match",
                        title: "自動車工場でのヒューマンエラーを排除する「カラービット」とiPhoneを活用したホースと継手の正常接続確認",
                        description: "Preventing Human Error at the vehicle manufacturing plant：Using “Colorbit” and iPhones to Check the Proper Connection of Hoses and Fittings",
                        images: [
                            {
                                url: "https://bcore.biz/images/SEO/research-card.png",
                                width: 800,
                                height: 600,
                                alt: "研究開発イメージ",
                                type: "image/png",
                            },
                            {
                                url: "https://bcore.biz/images/SEO/research-card.png",
                                width: 900,
                                height: 800,
                                alt: "研究開発イメージ",
                                type: "large_image/png",
                            },
                        ],
                        site_name: "",
                    }}
                    twitter={{
                        handle: "colorbit_bcore",
                        site: "https://twitter.com/colorbit_bcore",
                        cardType: "summary_large_image",
                    }}
                />
            </>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="px-4 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
                <div className="max-w-screen-sm sm:mx-auto">
                    <h2 className="mb-8 text-3xl font-noto text-gray-900 sm:text-3xl sm:leading-none">
                        自動車工場でのヒューマンエラーを排除する「カラービット」とiPhoneを活用したホースと継手の正常接続確認
                    </h2>
                    <p className="font-noto text-gray-900 text-2xl">
                        Preventing Human Error at the vehicle manufacturing plant:Using “Colorbit” and iPhones to Check the Proper Connection of Hoses and Fittings
                    </p>
                    <br></br>
                    <p className="font-ud text-gray-700 text-base">2022年6月</p>
                    <p className="font-ud text-gray-700 text-base">【B-CORE Inc.】&nbsp;ビーコア㈱&nbsp;&nbsp;水野&nbsp;廉郎&nbsp;&nbsp;飯島&nbsp;圭一朗</p>
                    <p className="font-ud text-gray-700 text-base">【NISSAN MOTOR CO., LTD.】&nbsp;日産自動車㈱ &nbsp;&nbsp;鄧&nbsp;垚&nbsp;&nbsp;佐藤&nbsp;武志</p>
                    <hr className="w-full my-6 border-gray-300" />
                    <p className="my-2 font-noto text-gray-900 text-base">
                        1.はじめに
                    </p>
                    <p className="font-ud text-gray-700 text-base">
                        &nbsp;&nbsp;車両のエンジン部品製造に使用される鋳造用金型には、冷却用ホースと冷却に使用した温水を排出するホースを接続する必要がある。鋳造用金型には継手がついており、ホースの継手の配管作業は作業員が定期的に行っている。
                        <br></br>&nbsp;&nbsp;ホースと継手のつなぎ替え作業の際、配管が正しいかを目視点検を行っていた。その際、ヒューマンエラーによる誤配管が発生することによる損害が起きており、これらヒューマンエラーを完全に排除する目的で、 IT技術によるミスの生じづらい配管確認の検討を行うこととなる。
                        <br></br>&nbsp;&nbsp;当初は2次元コードの導入検討が行われたが、小口径のホースの表面が湾曲しているため、リーダーで読み取らせることが困難であり導入は見送られた。また、 RFID導入は鋳造用金型が金属製かつ水濡れもあるため検討されなかった。そこで、小口径のホースに貼り付けても読取りが容易で自由形状の「カラービット」が着目され、ビーコア㈱開発の可視化ソリューションの採用に至った（図1）。
                    </p>
                    <p className="mt-4 mb-2 font-noto text-gray-900 text-base">
                        2.カラービットとは
                    </p>
                    <p className="font-ud text-gray-700 text-base">
                        &nbsp;&nbsp;カラービットは、ビーコアが独自に開発した自動認識コードである。色の並び順を画像処理することによりIDに変換する。バーコード、QRコードなどの2次元コードやRFID、ビーコンなどの電波を使った技術では適用が難しかった場面でも使用できる技術である。
                    </p>
                    <p className="mt-4 mb-2 font-noto text-gray-900 text-base">
                        3.「カラービット・マッチングアプリ」の3つの特徴
                    </p>
                    <p className="font-ud text-gray-700 text-base pb-4">
                        ①ホースと継手にペアとなるカラービットのシールを貼る。正しく配管されているかを、スマートフォンのアプリで「見える化」し確認ができる。
                        <br></br>②一度に複数セットのホースと継ぎ手の読取りができ、1セットずつの作業よりも作業効率が高い。シールに多少の傷がある場合（図2）や、湾曲部で使用されていても読取りが可能。
                        <br></br>③ホースと継手の接続確認作業のログを画像で保存でき、作業時刻と作業担当者の情報と合わせて外部送信する機能も実装。これにより、いつ誰がどこの接続確認作業をしたのかの記録が正確に保存できる。
                    </p>
                    <Image
                        className="rounded"
                        src="/images/Research/cb-match-1.png" // Route of the image file
                        height={536} // Desired size with correct aspect ratio
                        width={1280} // Desired size with correct aspect ratio
                        alt="CBマッチイメージ1"
                    />
                    <p className="font-ud text-gray-700 text-base text-center pb-6">図1&nbsp;&nbsp;スマートフォン撮像写真（左）と試験装置を撮像している様子</p>
                    <Image
                        className="rounded"
                        src="/images/Research/cb-match-2.jpg" // Route of the image file
                        height={664} // Desired size with correct aspect ratio
                        width={885} // Desired size with correct aspect ratio
                        alt="CBマッチイメージ2"
                    />
                    <p className="font-ud text-gray-700 text-base text-center">図2&nbsp;&nbsp;傷のあるカラービット</p>
                    <br></br>
                    <hr className="w-full my-2 border-gray-300" />
                    <p className="mt-4 mb-2 font-noto text-gray-900 text-base">
                        4.運用試験
                    </p>
                    <p className="font-ud text-gray-700 text-base">
                        &nbsp;&nbsp;日産自動車㈱いわき工場で第一次POC（試験運用）を2019年12月より開始した。当該テスト時に判明した主な課題は3点あった。
                        <br></br>
                        &nbsp;&nbsp;（1）ホースと継ぎ手に貼り付けるシールの最適化
                        <br></br>接着部の材質と油分による汚れなどによりカラービットの貼り付けが標準的なラベル素材では困難であった。ラベルの基材選定や粘着力調整、形状を工夫することで最適化を行った。
                    </p>
                    <p className="font-ud text-gray-700 text-base">
                        &nbsp;&nbsp;（2）スマートフォンの機種選定
                        <br></br>
                        当初、カラービット・マッチングアプリは開発の容易さからAndroid端末を選定して試作を行った。いくつかのAndroid機を準備して最適機種の選定を行ったが、機種ごとにカメラ性能に大きな差があり、エンドユーザーの要求である「継手とホースが密集している状況で複数の配管確認を安定して行うこと」を実現できる機種の選定には至らなかった。
                        <br></br>&nbsp;&nbsp;そこで、カメラ性能が安定しているiPhoneの最新機種を選定し、アプリをAndroidからiOSへと移植することでエンドユーザーの要求基準を満たすことができた。
                    </p>
                    <p className="font-ud text-gray-700 text-base">
                        &nbsp;&nbsp;（3）アプリの現場ニーズの反映
                        <br></br>
                        &nbsp;&nbsp;最初に現場でテストされたのは、ホースと継手に張り付けてあるシールが正しいペアで連結されているかを画面上で表示するシンプルなものであった。現場でのテストを重ねることで、実運用において必要な機能を追加で実装していった。
                        <br></br>
                        &nbsp;&nbsp;現場作業員が使いやすいユーザーインターフェイスへの変更、トレーサビリティ確保のための写真保存機能の追加、画面上の結合判定におけるNG表示をより直感的に把握しやすく表現する機能の追加、作業者履歴が判別できる機能の追加などを実施することで現場ニーズとの合致を図った。
                        <br></br>
                        &nbsp;&nbsp;これら3つの課題をクリアしたことで、現場実運用での使用に耐える仕様となった。現在は今後のグループ内の他工場への水平展開を見据え、横浜工場においても第2次POCを実施中である。
                    </p>
                    <br></br>

                    <p className="mb-2 font-noto text-gray-900 text-base">
                        5.まとめ
                    </p>
                    <p className="font-ud text-gray-700">
                        &nbsp;&nbsp;iPhoneとホースと継ぎ手に貼るペアとなるカラービットのシールを準備さえすれば利用可能なため、国内関連会社、海外工場における運用開始に向けて準備中である。将来的には、日産自動車の製造現場に導入検討しているホロレンズへの実装も含め、ハンズフリー操作が可能なソリューションに組み込んでいくことも考えられる。
                    </p>
                    <br></br>
                    <hr className="w-full my-6 border-gray-300" />
                    <Image
                        className="rounded"
                        src="/images/Research/cb-match-image.JPG" // Route of the image file
                        height={2880} // Desired size with correct aspect ratio
                        width={3840} // Desired size with correct aspect ratio
                        alt="CBマッチイメージ1"
                    />
                    <p className="font-ud text-gray-700 text-base text-center"><a href="https://pub.nikkan.co.jp/magazine_series/detail/0005"><p className="hover:text-blue-600">型技術 2022年7月特別増大号に掲載<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg></p></a></p>
                    <hr className="w-full my-6 border-gray-300" />
                    <Link href="/jacompany/research">
                        <a className="text-gray-700 inline-flex items-center font-ud transition-colors duration-200 hover:text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                                />
                            </svg>
                            研究開発ページメニューへ戻る
                        </a>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}
