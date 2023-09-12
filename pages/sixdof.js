import { NextSeo } from "next-seo";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "/components/six-dof/Hero";
import Sixdofimage from "/components/six-dof/Sixdofimage";
import Intro from "/components/six-dof/Intro";
import Colorbit2 from "/components/six-dof/Colorbit2";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'cta',
      ])),
      // Will be passed to the page component as props
    },
  };
}

export default function Sixdof() {
  return (
    <div className="">
      <>
        <NextSeo
          title="彩色兼備 6Dof"
          description="電波を使わない・高精度位置測位"
          canonical="https://www.bcore.biz/sixdof"
          openGraph={{
            url: "https://www.bcore.biz/sixdof",
            title: "彩色兼備 6Dof",
            description: "彩色兼備 6Dof",
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
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Hero />    
        <Intro />
        <Colorbit2 />
        <Cta />
        <Footer />
      </>
    </div>
  );
}
