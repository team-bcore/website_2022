import Head from "next/head";
import { getSortedNewsData } from "../lib/posts";
import News from "../components/News";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Solutions from "../components/Solutions";
import Logoclouds from "../components/Logoclouds";
import Cta from "../components/Cta";
import Why from "../components/Why";
import Colorbit from "../components/Colorbit";
import { NextSeo } from "next-seo";
import Contents from "../components/Contents";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  const allNewsData = getSortedNewsData();
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'solutions',
        'why',
        'colorbit',
        'logoclouds',
        'news',
        'contents',
        'cta',
        'common',
      ])),
      allNewsData,// Will be passed to the page component as props
    },
  }
}

export default function Home({ allNewsData }) {
  return (
    <div className="">
      <>
        <NextSeo
          title="ビーコア株式会社"
          description="現場のニッチなお悩みをIoTの力で解決します"
          canonical="https://www.bcore.biz"
          openGraph={{
            url: "https://www.bcore.biz",
            title: "ビーコア株式会社",
            description:
              "私たちは、独自に開発した自動認識コード「カラービット®︎」やエッジAIカメラを用いて、現場でのニッチなお悩みを解決し、業務の効率化を促進するソリューションを提供しています。",
            images: [
              {
                url: "https://bcore.biz/images/SEO/top-card.png",
                width: 800,
                height: 600,
                alt: "ビーコア株式会社イメージ",
                type: "image/png",
              },
              {
                url: "https://bcore.biz/images/SEO/top-card.png",
                width: 900,
                height: 800,
                alt: "ビーコア株式会社イメージ",
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
      <Solutions />
      <Why />
      <Colorbit />
      <Logoclouds />
      <News allNewsData={allNewsData} />
      <Contents />
      <Cta />
      <Footer />
    </div>
  );
}
