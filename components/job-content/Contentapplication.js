import Link from "next/link";

export default function Contentprivacy() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <p className="pb-8 text-left font-ud text-lg text-gray-700 md:text-xl">
          現在募集中の職種について
        </p>
        <p className="pb-8 text-left font-ud text-base text-gray-700 md:text-lg">
          求人サイト「エンゲージ」から応募ができます。<br></br>
          また、オンラインでのカジュアル面談も実施しています。弊社のお問い合わせフォームよりお気軽にお問い合わせください。
          <br></br>
          <br></br>→{" "}
          <a
            href="https://en-gage.net/b-core_career/widget/?banner=1"
            className="text-sky-500 hover:text-amber-300"
          >
            エンゲージから応募する
          </a>
          <br></br>→{" "}
          <Link
            href="../contact"
            className="text-left font-ud text-base text-sky-500 md:text-lg hover:text-amber-300"
          >
            お問い合わせフォームからカジュアル面談を申し込む
          </Link>
        </p>
        <hr className="mb-4 border-gray-300" />
        <div className="pt-8 text-left">
          <p className="inline-block px-3 py-px mb-4 tracking-wider rounded-full bg-amber-400 font-ud text-base text-white md:text-lg">
            NEW
          </p>
        </div>
        <p className="pb-8 text-left font-ud text-xl text-gray-700 md:text-2xl">
          インフラエンジニア
        </p>
        <p className="text-left font-ud text-base text-gray-700 md:text-lg">
          【仕事の内容】
        </p>
        <p className="pb-8 text-left font-ud text-base text-gray-700 md:text-lg">
          独自の画像処理技術『カラービット』を用いた従業員管理システムのサーバ管理・運用保守などを中心にお任せします。
          <br></br>
          その他大手メーカー向けの企画書作成等のサポートもして頂く予定です。
          <br></br>
          将来的には、当社システムの運用保守の設計・計画等を上司となる担当者と組み立てて頂きたいです。
          <br></br>■ 入社後は国内建設業の施設案件等に従事して頂きます。
        </p>
        <p className="text-left font-ud text-base text-gray-700 md:text-lg">
          【配属先情報】
        </p>
        <p className="pb-8 text-left font-ud text-base text-gray-700 md:text-lg">
          開発エンジニア　5名<br></br>■
          カラービットを活用した自作デモキットが配置された打合せルーム兼作業スペースのある本社オフィスの他、3Dプリンターなどの設備のあるラボ（実験スペース）が近くにあります。
        </p>
        <p className="text-left font-ud text-base text-gray-700 md:text-lg">
          【必要なスキル・経験】
        </p>
        <p className="pb-8 text-left font-ud text-base text-gray-700 md:text-lg">
          以下のスキルまたは知識を有する方が望ましいです。
          <br></br>・基本情報技術者または同等のスキルの保持
          <br></br>・LAMP環境を有するインフラの設計または保守運用経験者
          <br></br>・ネットワーク設計構築運用の経験者
          <br></br>
          <br></br>■
          最先端技術に興味のある方/新しいもので技術開発したい方にオススメ
          <br></br>■ 画像認識の知識や技術のある方大歓迎です！
          <br></br>■
          専門性が高く高度な技術を有するより、多くの技術に携わってきている方が望ましい。
        </p>
        <p className="text-left font-ud text-base text-gray-700 md:text-lg">
          【更にこんなスキル・経験があると嬉しい】
        </p>
        <p className="pb-8 text-left font-ud text-base text-gray-700 md:text-lg">
          ・ITサービスマネジメント業務または同等の決裁業務経験者
          <br></br>・大きな会社で一般的に行われているコスト管理の基本が分かる方
          <br></br>・R言語等、統計解析系・データ分析系の知識がある方
        </p>
      </div>
    </div>
  );
}
