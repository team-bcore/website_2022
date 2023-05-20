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
          canonical="https://www.bcore.biz/research/6d"
          openGraph={{
            url: "https://www.bcore.biz/research/6d",
            title: "カラービット6D測位 colobit Six Dimension Survey",
            description: "屋内大空間での高精度な自己位置推定技術の提供へ向けて",
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
            屋内大空間での高精度な自己位置推定技術の提供へ向けて<br></br>
          </h2>
          <p className="font-noto text-gray-900 text-2xl">
            カラービット6D測位 colobit Six Dimension Survey
          </p>
          <br></br>
          <p className="font-ud text-gray-700 text-base">2022年5月</p>
          <hr className="w-full my-6 border-gray-300" />
          <p className="my-2 font-noto text-gray-900 text-base">
            1）技術開発の背景
          </p>
          <p className="font-ud text-gray-700 text-base">
            建物内部の車両や人の位置測位を画像処理技術で実施する場合、管理対象となる車両や人にマーカーを貼り付け、施設内に設置した多数のカメラでマーカーを読取り運用するモデルが採択されてきた。しかしながら、床面積の広い大規模空間での運用では、カメラ台数が非常に多くなりマーカーの設置場所にも苦慮するという事情があり、小規模なエリアでしか画像処理方式での位置測位は行われてこなかった。
            <br></br>
            画像処理方式での位置測位は、誤差の少ない高い精度を追求できる余地が大きく、大空間での運用の厳しさをクリアする方法を試行錯誤してきた。発想を逆転し、動体にカメラを取り付け、標識となるマーカーを多数設置する方式を検討した結果、カラービット6D測位技術が生まれた。
          </p>
          <p className="mt-4 mb-2 font-noto text-gray-900 text-base">
            1-1）屋内大空間での位置測位（IPS Indoor Positioning System）
            の必要性
          </p>
          <p className="font-ud text-gray-700 text-base">
            屋内位置測位
            （IPS）とは、GPSを使用することができない屋内空間において、建物内部のヒトや車両、モノの位置情報を測定、推定する技術である。工場や物流センター等の、床面積が10,000㎡を超えるような屋内大空間内部の位置情報を正確に知りたいというニーズは大きく、今後の生産性向上や経営合理化に必須の技術と考えられている。
            <br></br>
            現在はさまざまな技術を用いて屋内位置測位が行われているが、精度的には数mから1m程度の誤差があるのが一般的である。非常に良好な状況でも10cmを下回る誤差の実現は現在の技術では実現困難と思われる。広大なエリアで大まかな位置やエリアを知るには有効だが、車両の無人運転や自動ピッキングの用途を考えれば、精度が相当に高くなければ採用はされないと考えられる。弊社では、東海地方に100,000㎡規模の物流施設を所有される会社の多大なるご支援をいただき、誤差の平均値5cm未満の精度での位置測位手法の開発を画像処理技術で実現すべく2019年より検証作業を継続的に続けてきた。
          </p>
          <Image
            className="rounded"
            src="/images/Research/6d-pic.png" // Route of the image file
            height={2284} // Desired size with correct aspect ratio
            width={4062} // Desired size with correct aspect ratio
            alt="6Dイメージ"
          />
          <p className="mt-4 mb-2 font-noto text-gray-900 text-base">
            1-2）屋内大空間での自己位置測位の現状
          </p>
          <p className="font-ud text-gray-700 text-base">
            従来の屋内大空間 (倉庫、工場等)
            における位置測位は、複数の基地からの電波強度をもとに自己位置を測位する技術（RFID・ビーコン等）により行われることが一般的である。しかし、電波強度は室内にある金属の影響で反射・干渉・回折などにより大きく変動することがあるため、数センチ単位の誤差が要求される精度の高い測位を実現することは困難を極める。電波は人間の目では見ることができないため、キャリブレーション作業は複雑で、機器の調整には熟練度が必要とされる。また、トラブルの際には原因がどこにあるのか特定しづらい。
            <br></br>
            そこで、ビーコアでは調整の困難かつ高い精度が出にくい電波系技術ではなく、カメラ内で画像処理が可能なAIカメラと、このカメラで検知可能な自動認識コード「カラービット」、さらにカメラの姿勢計算を行う画像処理技術を用いて自己位置計測を行う技術を確立した。屋内大空間での高精度な自己位置推定技術の提供へ向け、東海地方の大規模倉庫にて2019年より実証実験を開始し現在も継続している。
          </p>
          <p className="mt-4 mb-2 font-noto text-gray-900 text-base">
            1-3）カメラの姿勢計算と自己位置推定
          </p>
          <p className="font-ud text-gray-700 text-base">
            カメラの姿勢計算とは、大きさや形が既知の物体をカメラで撮影したとき、カメラでの見え方から既知の物体までの3次元的な距離（XYZ3軸）や向き（PTR3軸）を求める計算のことを指す。姿勢計算の一般的な使用例の一つとして、正方形のARマーカーの上に、3Dモデルをマーカーの上にいるようにディスプレイ上で表現する技術がある。ARマーカーは正方形であるという既知の情報を元にARマーカー上に3Dモデルを表示するだけなので実空間上の座標や大きさが分からなくても姿勢計算は成立する。
            <br></br>
            しかし、ARマーカーを使ってカメラ自身の実空間上の位置座標や向きを求める場合は、四スミの実空間上の座標情報が必要となる。しかし座標情報があったとしても精度は不十分であり、さらに精度を求めるには十分な大きさが必要になる。
            姿勢計算を使って自己位置推定を行う技術を、弊社では単眼カメラによる6D測位と呼んでいる。
          </p>
          <p className="mt-4 mb-2 font-noto text-gray-900 text-base">
            1-4）カラービット利用の優位性
          </p>
          <p className="font-ud text-gray-700 text-base">
            カラービットとは、ビーコア株式会社が独自に開発した自動認識コードである。色の並び順を画像処理することでIDに変換する。ひも状で、分岐しないような形状であればどんな形でも成立する。IDを表示する以外にも、色の塊の中心位置の画面上の座標を求められるため、どのような形状でカメラがタグを認識したのかを把握することができる。
            <br></br>
            複数一括読取りに適しており、画面内にあるカラービットは一定の大きさより大きければすべて同時に認識できる特徴を持つ。タグ形状の歪みにも強い特徴を持ち、広角カメラでの画面端で樽型や糸巻き型に歪んでいる場合でも均質に読み取りすることができる。同様にローリングシャッターによる画像の歪みにも対応できる。このような特徴により、バーコード、QRコードなどの二次元コード、RFIDやビーコンでは適用が難しかった場面でも有効な技術である。
            <br></br>
            二次元コードやARマーカーで高精度な自己位置推定を行なう場合、1-3に記述したようにコード自体の形状を極めて大きくする必要がある。二次元コードやARマーカーは原則として正方形なので、実際に大きなタグを実空間上に多数貼り付けすることは実効性が乏しい。一方でカラービットは、ひも状の形状認識が可能という特性上、直線形状のコードは狭小エリアにも設置できるという長所がある。細長い形状であれば、工場や倉庫内の柱や梁などに貼り付けることができるようになるため、面的な専有領域が大きいARマーカーや二次元コードと比較すると設置難易度は大きく下がる。タグ製作コストも面積が小さくなるためより安価になるというメリットがある。
            <br></br>
            これらの観点から、カメラの姿勢計算を用いて自己位置推定を行う場合に利用するコードとしてカラービットは極めて適しているといえる。
          </p>
          <p className="mt-4 mb-2 font-noto text-gray-900 text-base">
            1-5）単眼カメラによる6D測位 基本原理
          </p>
          <p className="font-ud text-gray-700 text-base">
            実際に屋内で単眼カメラによる6D測位を行うための定義、手順は以下のようになる。
          </p>
          <br></br>
          <p className="font-ud text-gray-700 text-base underline underline-offset-1">
            定義
          </p>
          <p className="font-ud text-gray-700 text-base">
            ・
            XYZの座標系は右手座標系で、屋内平面図を見下ろしたときの横方向をX、縦方向をY、高さ方向をZと定義する。
            <br></br>・
            座標原点（0,0,0）は基準にしやすい屋内の任意の位置とする。座標系の観点から図面上一番左下の床面位置を基準にするとよい。
            <br></br>・
            カメラの向いている方向は、Z軸を中心に回転する方向をPAN（XY平面上の方角）、カメラの光軸を中心に回転する方向をROLL、Z軸とカメラの光軸の両方に直行する軸を中心に回転する方向をTILT（カメラ向きの上下の傾き）と定義する。
          </p>
          <br></br>
          <p className="font-noto text-gray-700 text-base underline underline-offset-1">
            事前準備
          </p>
          <p className="font-ud text-gray-700">
            ・ 基準となるカラービットタグを複数設置<br></br>・
            IDごとにカラービットタグの位置座標（X,Y,Z）を紐づけ<br></br>・
            IoTカメラ内にカラービットタグの位置情報をすべて記録<br></br>・
            IoTカメラのレンズ歪み係数を計測<br></br>・
            IoTカメラ内にレンズ歪み係数を記録<br></br>
          </p>
          <br></br>
          <p className="font-ud text-gray-700 text-base underline underline-offset-1">
            測位
          </p>
          <p className="font-ud text-gray-700">
            ・ 測位する場所へ移動する<br></br>・
            複数のカラービットタグがカメラ画面内に入るように撮影<br></br>・
            画像解析を行い、写ったカラービット®︎タグの情報から6D測位を行い、自己位置を推定し、結果をサーバーに出力する
          </p>
          <p className="mt-4 mb-2 font-noto text-gray-900 text-base">
            2）実証試験の概要
          </p>
          <p className="font-ud text-gray-700">
            当初は施設内の高さ5.5mの梁下にカメラを設置し、搬送車の荷台部分に装着したカラービット®︎タグを読取り、搬送車の自己位置推定をする方式を提案していた。しかしこの方式では、床面積が広大な大規模倉庫において、必要なカメラ台数も多くなり、コストパフォーマンスが悪いことが分かった。そこで、カメラ台数を削減する案として移動体である搬送車にカメラを設置し、倉庫内の通路に張り付けたカラービットタグを読取る方式で検証を重ねた。
            <br></br>
            倉庫内の実証実験エリアのスケールダウン模型をビーコア社内に構築して検証を実施した結果、走行中の搬送車の自己位置推定が可能であることが分かった。現在は実運用に向け、システムの安定性向上の検証を現場にて実施中である。
          </p>
          <p className="mt-4 mb-2 font-noto text-gray-900 text-base">
            2-1）施設の規模
          </p>
          <p className="font-ud text-gray-700">
            施設内には、通路幅約2.5m、通路長約40mの東西に延びた通路が40通路程ある。これらの通路を挟んだ両側に商材を保管している棚が多数設置されている。さらに通路幅5.5m、通路長約80mの南北に延びた通路が5以上ある。これらの通路を自動搬送車が走行し商材のピッキングや棚卸し作業を行っている。
          </p>
          <p className="mt-4 mb-2 font-noto text-gray-900 text-base">
            2-2）自己位置推定に使用するタグ設置
          </p>
          <p className="font-ud text-gray-700">
            自己位置推定にはカラービットタグを利用する。カラービットタグの設置にはいくつか条件がある。スケールダウン模型を使ったビーコア社内での検証時には考慮しきれなかった点を実際の施設内で確認を行った。
          </p>
          <p className="mt-4 mb-2 font-noto text-gray-900 text-base">
            2-2-1）カラービットタグの設置方向
          </p>
          <p className="font-ud text-gray-700">
            複数のカラービットタグで自己位置推定を行うためには全てのタグを同一方向に設置する必要があった。異なる方向のカラービットタグが混在していた場合に自己位置推定の精度が低下する。
            また、水平方向と鉛直方向で比較試験を行ったところ、鉛直方向に統一したほうがより高速での搬送車の移動でも自己位置推定が可能ということが分かった。
          </p>
          <p className="mt-4 mb-2 font-noto text-gray-900 text-base">
            2-2-2）カラービットタグの設置場所
          </p>
          <p className="font-ud text-gray-700">
            カラービットタグは等間隔に配置せずとも、設置方向が統一されていれば自由に設置することが出来る。施設内のカラービットタグを貼り付けることが出来る柵、商材が収納されている棚の骨組み部分、建屋間の壁面などスペースなどを有効に活用してタグを配置した。南北通路に設置したカラービットタグは2m〜7mほど離して設置している。
          </p>
          <p className="mt-4 mb-2 font-noto text-gray-900 text-base">
            2-2-3）カラービットタグサイズ
          </p>
          <p className="pb-4 font-ud text-gray-700">
            当初、カラービットタグサイズW300mm/L1000mm、搬送車の速度時速4kmから実験を開始した。このタグサイズで実証実験を行ったところ、自己位置推定は出来たが自己位置推定時のデータ数が少ないことが懸念された。その後、データ数を増やすためにカラービットタグサイズを1.5倍のW450mm/1500mmまで拡大した。これにより自己位置推定時のデータ数は全体の30%以上取得出来るようになった。なお、この時の搬送車速度はさらに上がっており、時速10kmでの検証を行っていたことが後から判明した。
          </p>
          <Image
            className="rounded"
            src="/images/Research/6d-tag.png" // Route of the image file
            height={1080} // Desired size with correct aspect ratio
            width={1920} // Desired size with correct aspect ratio
            alt="カラービットタグイメージ"
          />
          <p className="mt-4 mb-2 font-noto text-gray-900 text-base">
            2-2-4）カラービットタグの設置方法
          </p>
          <p className="font-ud text-gray-700">
            カラービットタグサイズが大きくなったことから、自重により折れ曲がる懸念があった。タグは自己位置推定する際に、倒れたり折れ曲がることにより高精度な自己位置推定結果を出せないため、折れ曲がらないように現場にて創意工夫をして設置を行った。
          </p>
          <p className="mt-4 mb-2 font-noto text-gray-900 text-base">
            2-3）搬送車へのIoTカメラ設置
          </p>
          <p className="font-ud text-gray-700">
            IoTカメラについては「Vieureka」を利用している。高性能なCPUが内蔵されたカメラであり、ACアダプタまたはLANケーブルを用いたPoE給電により起動する。実証実験が始まった当初は、スマートフォンを自動搬送車に設置して自己位置推定を行う案もあったが、比較を行いVieurekaを用いた自己位置推定を行うこととなった。搬送車への取り付け時には、走行時の振動の影響を受けないような設置を工夫した。
          </p>
          <p className="mt-4 mb-2 font-noto text-gray-900 text-base">
            Vieurekaを利用する3つのメリット
          </p>
          <p className="font-ud text-gray-700">
            1.保守作業、メンテナンスの容易さ<br></br>
            Vieurekaの場合、アップデート作業はすべて遠隔から実施出来る。障害通知も自動で行われ、軽微な障害は自動で復旧される。スマートフォンでは頻繁に発生するOSアップデートの都度、動作検証や作業員による手動点検が必要となる。
            <br></br>
            <br></br>
            2.自動起動 <br></br>
            Vieurekaの場合、電源投入と同時に内蔵のソフトウェアも全て自動起動される。途中でソフトウェアが停止しても自動で復旧する。スマートフォンでは、画面が消える、アプリが落ちるなどの事象発生後は作業員が手動で復旧する必要がある。{" "}
            <br></br>
            <br></br>
            3.ソフトウェア開発のし易さと配布の容易さ <br></br>
            Vieurekaの場合、Pythonを用いた開発が容易であり、Vieurekaが提供するプラットフォームを利用すれば一斉配布も簡単にできる。スマートフォンではアプリケーションの開発環境や動作条件はハードウェアに依存するため、アプリケーションを開発しても維持するのが難しくコストが発生する。アプリケーションの一斉配布も難しく、Apple社を選択すると審査も必要となる。
          </p>
          <p className="mt-4 mb-2 font-noto text-gray-900 text-base">
            2-4）自己位置推定結果のデータ送信方式
          </p>
          <p className="font-ud text-gray-700">
            Vieurekaからサーバーへ直接データを送信する方式を採用しており、Vieurekaは同一ネットワーク配下にいる外部機器と双方向通信が可能である。通信装置を介することでクラウドサーバーに対してデータ送信を行うことも可能である。実証実験時にはjson形式のデータ送信を行っている。
          </p>
          <p className="mt-4 mb-2 font-noto text-gray-900 text-base">
            2-5）実証試験の経緯
          </p>
          <p className="font-ud text-gray-700">
            （2021年2月1日プレスリリース情報）<br></br>・
            期間　2019年11月より開始し現在も稼働中<br></br>・
            場所　東海地方　屋内搬送機で入出庫する大規模倉庫（床面積　100,000㎡規模）
            <br></br>・
            実績　時速12km走行時の搬送車の自己位置推定を誤差の平均値±7mm、最大誤差±160mmで実現
            <br></br>
            <br></br>
            （2022年4月現在の実証実験結果）<br></br>
            実証実験では図1に示すような通路で行われている。<br></br>
            <Image
              className="rounded"
              src="/images/Research/6d-1.png" // Route of the image file
              height={1385} // Desired size with correct aspect ratio
              width={2984} // Desired size with correct aspect ratio
              alt="図1"
            />
            <p className="font-ud text-sm text-center text-gray-700">
              図1） 南北通路 カラービットタグ設置位置と走行ライン
            </p>
            <br></br>
            <br></br>
            <p className="font-ud text-gray-700">
              時速12km走行時の搬送車の自己位置推定は、平均絶対誤差52mm、誤差の平均値±1mm（図2）まで精度が向上している。
            </p>
            <br></br>
            <Image
              className="rounded"
              src="/images/Research/6d-2.png" // Route of the image file
              height={2024} // Desired size with correct aspect ratio
              width={3704} // Desired size with correct aspect ratio
              alt="図1"
            />
            <p className="font-ud text-sm text-center text-gray-700">
              図2） 走行ライン走行時の誤差量
            </p>
            <br></br>
            <br></br>
            <p className="font-ud text-gray-700">
              さらに、自己位置推定時のデータ数は全体の90%以上を取得出来るようになった。取得したデータ数の内、約60%が±50mmの範囲に収まる結果を得られている。（図3）
            </p>
            <br></br>
            <Image
              className="rounded"
              src="/images/Research/6d-3.png" // Route of the image file
              height={2354} // Desired size with correct aspect ratio
              width={3778} // Desired size with correct aspect ratio
              alt="図1"
            />
            <p className="font-ud text-sm text-center text-gray-700">
              図3） データ数と誤差範囲
            </p>
            <br></br>
          </p>
          <p className="mt-4 mb-2 font-noto text-gray-900 text-base">
            2-6）今後の展望
          </p>
          <p className="font-ud text-gray-700">
            実証実験当初の目的は屋内搬送車の軌跡トラッキングであった。実証実験を重ねるうちに軌跡トラッキングの精度はクリアし、次に搬送車の自己位置推定補正に使用できる精度が求められた。実証実験を重ねることで、搬送車の速度を時速12kmまで上げても問題ないことが分かりこれもクリアした。現在は搬送車の無人運転で使用できる精度の自己位置推定へとゴールは変化している。現時点ではまだ目標ゴールは未達の状況だが、更なる実証実験を重ね将来的には移動体の完全自動運転への要素技術としての適用が期待される。現時点では、屋内搬送車を想定しているが人の自己位置測位にも応用可能な技術なので、作業員の行動把握等にも利用可能と考えている。
          </p>
          <br></br>
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
