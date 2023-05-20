import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Contact() {
  return (
    <div className="">
      <>
        <NextSeo
          title="お問い合わせフォーム"
          description="各ソリューションへのお申し込み・お問い合わせは、こちらのコンタクトフォームから承っております。"
          canonical="https://www.bcore.biz/contact"
          openGraph={{
            url: "https://www.bcore.biz/contact",
            title: "お問い合わせフォーム",
            description:
              "各ソリューションへのお申し込み・お問い合わせは、こちらのコンタクトフォームから承っております。改めてメールにてご連絡をさせていただきます。",
            images: [
              {
                url: "https://bcore.biz/images/SEO/top-card.png",
                width: 800,
                height: 600,
                alt: "コンタクトイメージ",
                type: "image/png",
              },
              {
                url: "https://bcore.biz/images/SEO/top-card.png",
                width: 900,
                height: 800,
                alt: "コンタクトイメージ",
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
      <Form />
      <Footer />
    </div>
  );
}
