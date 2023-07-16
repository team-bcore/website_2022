import Navbar from "../../components/Navbar";
import Archive from "../../components/company/Archive";
import Patent from "../../components/company/Patent";
import Navinformation from "../../components/company/Navinformation";
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
          canonical="https://www.bcore.biz/jacompany/information"
          openGraph={{
            url: "https://www.bcore.biz/jacompany/information",
            title: "各種資料・特許情報",
            description:
              "ソリューションに関する各種資料、メディア掲載情報、国内外で取得した特許の情報を掲載しています。",
            images: [
              {
                url: "https://bcore.biz/images/SEO/info-card.png",
                width: 800,
                height: 600,
                alt: "各種資料・特許情報イメージ",
                type: "image/png",
              },
              {
                url: "https://bcore.biz/images/SEO/info-card.png",
                width: 900,
                height: 800,
                alt: "各種資料・特許情報イメージ",
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
      <Archive />
      <Patent />
      <Navinformation />
      <Footer />
    </div>
  );
}
