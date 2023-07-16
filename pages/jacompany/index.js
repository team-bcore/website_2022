import Head from "next/head";
import Navbar from "../../components/Navbar";
import Policy from "../../components/company/Policy";
import Features from "../../components/company/Features";
import Footer from "../../components/Footer";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'footer',
        'company-policy'
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
          canonical="https://www.bcore.biz/jacompany/"
          openGraph={{
            url: "https://www.bcore.biz/jacompany/",
            title: "会社情報",
            description: "ビーコアの会社情報をご覧いただけます",
            images: [
              {
                url: "https://bcore.biz/images/SEO/company-card.png",
                width: 800,
                height: 600,
                alt: "会社情報イメージ",
                type: "image/png",
              },
              {
                url: "https://bcore.biz/images/SEO/company-card.png",
                width: 900,
                height: 800,
                alt: "会社情報イメージ",
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
      <Policy />
      <Features />
      <Footer />
    </div>
  );
}
