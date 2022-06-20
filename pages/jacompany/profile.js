import Navbar from "../../components/Navbar";
import Profile from "../../components/company/Profile";
import Navprofile from "../../components/company/Navprofile";
import Footer from "../../components/Footer";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Jacompany() {
  return (
    <div className="">
      <>
       <NextSeo
        title="ビーコア株式会社"
        description="現場のニッチなお悩みをIoTの力で解決します"
        openGraph={{
          url: "https://www.bcore.biz/jacompany/profile",
          title: "会社概要",
          description:
            "正式名称、設立年月日、資本金、事業内容、主要取引先などをご覧いただけます。",
          images: [
            {
              url: "https://bcore.biz/images/SEO/profile-card.png",
              width: 800,
              height: 600,
              alt: "会社概要イメージ",
              type: "image/png",
            },
            {
              url: "https://bcore.biz/images/SEO/profile-card.png",
              width: 900,
              height: 800,
              alt: "会社概要イメージ",
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
      <Profile />
      <Navprofile />
      <Footer />
    </div>
  );
}
