import Navbar from "../../components/Navbar";
import Office from "../../components/company/Office";
import Navoffice from "../../components/company/Navoffice";
import Footer from "../../components/Footer";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Jacompany() {
  return (
    <div className="">
      <>
        <NextSeo
          title="ビーコア株式会社"
          description="現場のニッチなお悩みをIoTの力で解決します"
          canonical="https://www.bcore.biz/jacompany/office"
          openGraph={{
            url: "https://www.bcore.biz/jacompany/office",
            title: "オフィス紹介",
            description:
              "東京・西神田にあるビーコアのオフィスと、実験・製作のためのラボ（研究室）を紹介します。",
            images: [
              {
                url: "https://bcore.biz/images/SEO/office-card.png",
                width: 800,
                height: 600,
                alt: "オフィス紹介イメージ",
                type: "image/png",
              },
              {
                url: "https://bcore.biz/images/SEO/office-card.png",
                width: 900,
                height: 800,
                alt: "オフィス紹介イメージ",
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
      <Office />
      <Navoffice />
      <Footer />
    </div>
  );
}
