import Navbar from "../../components/Navbar";
import Introduction from "../../components/company/Introduction";
import Navstaff from "../../components/company/Navstaff";
import Footer from "../../components/Footer";
import { NextSeo } from "next-seo";
import Head from "next/head";
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
          canonical="https://www.bcore.biz/jacompany/staff"
          openGraph={{
            url: "https://www.bcore.biz/jacompany/staff",
            title: "スタッフ紹介",
            description:
              "さまざまな分野のエキスパートがお客様の課題解決にあたる少数精鋭チームです。",
            images: [
              {
                url: "https://bcore.biz/images/SEO/staff-card.png",
                width: 800,
                height: 600,
                alt: "スタッフ紹介イメージ",
                type: "image/png",
              },
              {
                url: "https://bcore.biz/images/SEO/staff-card.png",
                width: 900,
                height: 800,
                alt: "スタッフ紹介イメージ",
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
      <Introduction />
      <Navstaff />
      <Footer />
    </div>
  );
}
