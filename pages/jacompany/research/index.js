import Navbar from "../../../components/Navbar";
import Research from "../../../components/company/Research";
import Navresearch from "../../../components/company/Navresearch";
import Footer from "../../../components/Footer";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default function Jacompany() {
  return (
    <div className="">
      <>
        <NextSeo
          title="ビーコア株式会社"
          description="現場のニッチなお悩みをIoTの力で解決します"
          openGraph={{
            url: "https://www.bcore.biz/jacompany/research",
            title: "R&D（研究開発）",
            description: "ビーコアの研究開発の情報をご覧いただけます。",
            images: [
              {
                url: "https://bcore.biz/images/SEO/research-card.png",
                width: 800,
                height: 600,
                alt: "R&Dイメージ",
                type: "image/png",
              },
              {
                url: "https://bcore.biz/images/SEO/research-card.png",
                width: 900,
                height: 800,
                alt: "R&Dイメージ",
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
      <Research />
      <Navresearch />
      <Footer />
    </div>
  );
}
