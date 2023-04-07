import Head from "next/head";
import Navbar2 from "../../components/job-content/Navbar2";
import Heroprivacy from "../../components/job-content/Heroprivacy";
import Contentprivacy from "../../components/job-content/Contentprivacy";
import Featuresprivacy from "../../components/job-content/Featuresprivacy";
import Footer from "../../components/Footer";
import { NextSeo } from "next-seo";

export default function Privacy() {
  return (
    <div className="">
      <>
        <NextSeo
          title="ビーコア株式会社"
          description="現場のニッチなお悩みをIoTの力で解決します"
          openGraph={{
            url: "https://www.bcore.biz/job/privacy",
            title: "採用活動における個人情報の取り扱いについて",
            description:
              "採用活動における個人情報の取り扱いについて知ることができます",
            images: [
              {
                url: "https://bcore.biz/images/SEO/job-seo-image.png",
                width: 800,
                height: 420,
                alt: "採用情報イメージ",
                type: "image/png",
              },
              //   {
              //     url: "https://bcore.biz/images/SEO/mission-card.png",
              //     width: 900,
              //     height: 800,
              //     alt: "ポリシーイメージ",
              //     type: "large_image/png",
              //   },
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
      <Heroprivacy />
      <Contentprivacy />
      <Featuresprivacy />
      <Footer />
    </div>
  );
}
