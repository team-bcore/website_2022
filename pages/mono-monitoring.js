import Navbar from "../components/Navbar";
import Header from "../components/mono-monitoring/Header";
import Intro from "../components/mono-monitoring/Intro";
import Propose from "../components/mono-monitoring/Propose";
import Overview from "../components/mono-monitoring/Overview";
import Features1 from "../components/mono-monitoring/Features1";
import Features2 from "../components/mono-monitoring/Features2";
import Features3 from "../components/mono-monitoring/Features3";
import Steps from "../components/mono-monitoring/Steps";
import Cta from "../components/Cta";
import Content from "../components/mono-monitoring/Content";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Monom() {
  return (
    <div className="">
      <>
        <NextSeo
          title="モノ常時管理システムム"
          description="エッジAIカメラがモノ（在庫）を24時間365日見まもることで、人の手に頼らない在庫管理の自動化が実現できます。"
          openGraph={{
            url: "https://www.bcore.biz/mono-monitoring/",
            title: "モノ常時管理システム",
            description:
              "エッジAIカメラ「Vieureka」が、人の代わりにカラービット®︎が貼られたモノの動きを常に見まもり記録します。カラービット®︎は、IoTカメラで認識しやすいマーカーで、バーコードやQRコード、電子タグでは適用が難しかった場面でも使用できるコードです。",
            images: [
              {
                url: "https://bcore.biz/images/SEO/monom-card.png",
                width: 800,
                height: 600,
                alt: "モノ常時管理システム",
                type: "image/png",
              },
              {
                url: "https://bcore.biz/images/SEO/monom-card.png",
                width: 900,
                height: 800,
                alt: "モノ常時管理システム",
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
      <Header />
      <Intro />
      <Propose />
      <Overview />
      <Features1 />
      <Features2 />
      <Features3 />
      <Steps />
      <Cta />
      <Content />
      <Footer />
    </div>
  );
}
