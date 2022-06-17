import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/hito/Hero";
import Intro from "../components/hito/Intro";
import Features from "../components/hito/Features";
import Price from "../components/hito/Price";
import Cta from "../components/Cta";
import Content from "../components/hito/Content";
import Usecase from "../components/hito/Usecase";
import Face from "../components/hito/Face";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Hito() {
  return (
    <div className="">
      <>
       <NextSeo
        title="ビーコア株式会社"
        description="現場のニッチなお悩みをIoTの力で解決します"
        openGraph={{
          url: "https://www.bcore.biz/hito/",
          title: "彩色兼備 入退室管理システム",
          description:
            "カラービット入館証の検出からクラウドへのデータ送信までを全てエッジAIカメラが自動で処理することにより入退室を管理します。入館証はカメラに手でかざす必要がなく、ハンズフリー通過が可能なシステムです。",
          images: [
            {
              url: "https://friendly-macaron-19aef4.netlify.app/images/SEO/hito-card.png",
              width: 800,
              height: 600,
              alt: "入退室管理イメージ",
              type: "image/png",
            },
            {
              url: "https://friendly-macaron-19aef4.netlify.app/images/SEO/hito-card.png",
              width: 900,
              height: 800,
              alt: "入退室管理イメージ",
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
      <Hero />
      <Intro />
      <Features />
      <Usecase />
      <Price />
      <Face />
      <Cta />
      <Content />
      <Footer />
    </div>
  );
}
