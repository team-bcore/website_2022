import Head from "next/head";
import Navbar2 from "../../components/job-content/Navbar2";
import Heroaboutus from "../../components/job-content/Heroaboutus";
import Contentaboutus from "../../components/job-content/Contentaboutus";
import Message from "../../components/job-content/Message";
import Featuresaboutus from "../../components/job-content/Featuresaboutus";
import Footerjp from "../../components/Footerjp";
import { NextSeo } from "next-seo";

export default function Aboutus() {
  return (
    <div className="">
      <>
        <NextSeo
          title="ビーコア株式会社"
          description="現場のニッチなお悩みをIoTの力で解決します"
          canonical="https://www.bcore.biz/job/aboutus"
          openGraph={{
            url: "https://www.bcore.biz/job/aboutus",
            title: "ビーコアについて",
            description:
              "ビーコアの事業内容、ミッションとポリシー、トップからのメッセージをご覧いただけます。",
            images: [
              {
                url: "https://bcore.biz/images/SEO/job-seo-image.png",
                width: 800,
                height: 420,
                alt: "採用情報イメージ",
                type: "image/png",
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
      <Navbar2 />
      <Heroaboutus />
      <Contentaboutus />
      <Message />
      <Featuresaboutus />
      <Footerjp />
    </div>
  );
}
