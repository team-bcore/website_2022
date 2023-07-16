import Navbar from "../../components/Navbar";
import Mission from "../../components/company/Mission";
import Navmission from "../../components/company/Navmission";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Footer from "../../components/Footer";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'footer',
      ])),
      
    },
  }
}

export default function Jacompany() {
  return (
    <div className="">
      <>
        <NextSeo
          title="ビーコア株式会社"
          description="現場のニッチなお悩みをIoTの力で解決します"
          canonical="https://www.bcore.biz/jacompany/mission"
          openGraph={{
            url: "https://www.bcore.biz/jacompany/mission",
            title: "ミッションとポリシー",
            description: "ビーコアが掲げるミッションとポリシー",
            images: [
              {
                url: "https://bcore.biz/images/SEO/mission-card.png",
                width: 800,
                height: 600,
                alt: "ポリシーイメージ",
                type: "image/png",
              },
              {
                url: "https://bcore.biz/images/SEO/mission-card.png",
                width: 900,
                height: 800,
                alt: "ポリシーイメージ",
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
      <Mission />
      <Navmission />
      <Footer />
    </div>
  );
}
