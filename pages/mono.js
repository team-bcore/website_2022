import Navbar from "../components/Navbar";
import Hero from "../components/mono/Hero";
import Video from "../components/mono/Video";
import Merit from "../components/mono/Merit";
import Usecase from "../components/mono/Usecase";
import Price from "../components/mono/Price";
import Steps from "../components/mono/Steps";
import Faqs from "../components/mono/Faqs";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'cta',
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default function Mono() {
  return (
    <div className="">
      <>
        <NextSeo
          title="iPhoneを使ったモノ管理"
          description="お手持ちのiPhoneでカラービット®︎タグを画像処理により一括認識します。読み取ったデータはクラウドで一元管理でき、どこからでもアクセス可能。すぐに利用開始できます。"
          canonical="https://www.bcore.biz/mono"
          openGraph={{
            url: "https://www.bcore.biz/mono/",
            title: "iPhoneによるモノ管理システム",
            description:
              "たくさんのモノの管理に、もはや専用の端末は必要ありません。お手持ちのiPhoneでカラービット®︎タグを画像処理により一括認識します。読み取ったデータはクラウドで一元管理でき、どこからでもアクセス可能。すぐに利用開始できます。",
            images: [
              {
                url: "https://bcore.biz/images/SEO/mono-card.png",
                width: 800,
                height: 600,
                alt: "スマホによるモノ管理イメージ",
                type: "image/png",
              },
              {
                url: "https://bcore.biz/images/SEO/mono-card.png",
                width: 900,
                height: 800,
                alt: "スマホによるモノ管理イメージ",
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
      <Video />
      <Merit />
      <Usecase />
      <Price />
      <Steps />
      <Faqs />
      <Cta />
      <Footer />
    </div>
  );
}
