import Head from "next/head";
import Navbar2 from "../../components/job-content/Navbar2";
import Herostaff from "../../components/job-content/Herostaff";
import Contentstaff from "../../components/job-content/Contentstaff";
import Featuresstaff from "../../components/job-content/Featuresstaff";
import Footer from "../../components/Footer";
import { NextSeo } from "next-seo";

export default function Staff() {
  return (
    <div className="">
      <>
        <NextSeo
          title="ビーコア株式会社"
          description="現場のニッチなお悩みをIoTの力で解決します"
          openGraph={{
            url: "https://www.bcore.biz/job/staff",
            title: "スタッフの声",
            description:
              "ビーコアのメンバーが経験してきた仕事、それぞれの働き方や価値観などを知ることができます。",
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
      <Herostaff />
      <Contentstaff />
      <Featuresstaff />
      <Footer />
    </div>
  );
}
