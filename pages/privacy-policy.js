import Navbar from "../components/Navbar";
import Privacy from "../components/Privacy";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Jacompany() {
  return (
    <div className="">
      <>
        <NextSeo
          title="プライバシーポリシー"
          description="プライバシーポリシーを掲載しています。"
          openGraph={{
            url: "https://www.bcore.biz/privacy-policy",
            title: "プライバシーポリシー",
            description: "プライバシーポリシー",
            images: [
              {
                url: "https://bcore.biz/images/SEO/privacy-card.png",
                width: 800,
                height: 600,
                alt: "プライバシーポリシーイメージ",
                type: "image/png",
              },
              {
                url: "https://bcore.biz/images/SEO/privacy-card.png",
                width: 900,
                height: 800,
                alt: "プライバシーポリシーイメージ",
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
      <Privacy />
      <Footer />
    </div>
  );
}
