import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hitosixdof/Hero";
import Intro from "../components/Hitosixdof/Intro";
import Merit from "../components/Hitosixdof/Merit";
import Features1 from "../components/Hitosixdof/Features1";
import Features2 from "../components/Hitosixdof/Features2";
import Features3 from "../components/Hitosixdof/Features3";
import Features4 from "../components/Hitosixdof/Features4";
import Usecase from "../components/Hitosixdof/Usecase";
import Tool from "../components/Hitosixdof/Tool";
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
        'Hitosixdof-hero',
        'Hitosixdof-intro',
        'Hitosixdof-merit',
        'Hitosixdof-features1',
        'Hitosixdof-features2',
        'Hitosixdof-features3',
        'Hitosixdof-features4',
        'Hitosixdof-tool',
        'Hitosixdof-usecase'
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default function Hitosixdof() {
  return (
    <div className="">
      <>
        <NextSeo
          title="位置管理システム"
          description="エッジAIカメラが工場・倉庫などの大空間でのヒト・モノを24時間365日見守り、可視化することで従来の業務の最適化を容易にし、効率的な業務改革に繋げることができます。"
          canonical="https://www.bcore.biz/hitosixdof/"
          openGraph={{
            url: "https://www.bcore.biz/hitosixdof/",
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
