import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/ichi/Hero";
import Intro from "../components/ichi/Intro";
import Merit from "../components/ichi/Merit";
import Features1 from "../components/ichi/Features1";
import Features2 from "../components/ichi/Features2";
import Features3 from "../components/ichi/Features3";
import Features4 from "../components/ichi/Features4";
import Usecase from "../components/ichi/Usecase";
import Tool from "../components/ichi/Tool";
import Cta from "../components/Cta";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'cta',
        'ichi-hero',
        'ichi-intro',
        'ichi-merit',
        'ichi-features1',
        'ichi-features2',
        'ichi-features3',
        'ichi-features4',
        'ichi-tool',
        'ichi-usecase'
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default function Ichi() {
  return (
    <div className="">
      <>
        <NextSeo
          title="位置管理システム"
          description="エッジAIカメラが工場・倉庫などの大空間でのヒト・モノを24時間365日見守り、可視化することで従来の業務の最適化を容易にし、効率的な業務改革に繋げることができます。"
          canonical="https://www.bcore.biz/ichiservice/"
          openGraph={{
            url: "https://www.bcore.biz/ichiservice/",
            title: "位置管理システム",
            description:
              "エッジAIカメラが工場・倉庫などの大空間でのヒト・モノを24時間365日見守り可視化することで、従来の業務の最適化を容易にし、効率的な業務改革に繋げることができます。",
            images: [
              {
                url: "https://bcore.biz/images/SEO/ichi-card.png",
                width: 800,
                height: 600,
                alt: "位置管理サービスイメージ",
                type: "image/png",
              },
              {
                url: "https://bcore.biz/images/SEO/ichi-card.png",
                width: 900,
                height: 800,
                alt: "位置管理サービスイメージ",
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
      <Merit />
      <Features1 />
      <Features2 />
      <Features3 />
      <Features4 />
      <Tool />
      <Usecase />
      <Cta />
      <Footer />
    </div>
  );
}
