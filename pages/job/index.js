import Head from "next/head";
import Navbar from "../../components/job-content/Navbar";
import Hero from "../../components/job-content/Hero";
import Features from "../../components/job-content/Features";
import Footer from "../../components/Footer";
import { NextSeo } from "next-seo";

export default function Job() {
  return (
    <div className="">
      <>
        <NextSeo
          title="ビーコア株式会社"
          description="現場のニッチなお悩みをIoTの力で解決します"
          openGraph={{
            url: "https://www.bcore.biz/job/",
            title: "ビーコア採用情報サイト",
            description: "ビーコアでは一緒に働く仲間を募集しています。",
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
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
