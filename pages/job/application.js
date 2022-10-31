import Head from "next/head";
import Navbar2 from "../../components/job-content/Navbar2";
import Heroapplication from "../../components/job-content/Heroapplication";
import Contentapplication from "../../components/job-content/Contentapplication";
import Featuresapplication from "../../components/job-content/Featuresapplication";
import Footer from "../../components/Footer";
import { NextSeo } from "next-seo";

export default function Application() {
    return (
        <div className="">
            <>
        <NextSeo
          title="モノ常時管理システム"
          description="エッジAIカメラがモノ（在庫）を24時間365日見まもることで、人の手に頼らない在庫管理の自動化が実現できます。"
          openGraph={{
            url: "https://www.bcore.biz/mono-monitoring/",
            title: "モノ常時管理システム",
            description:
              "エッジAIカメラ「Vieureka」が、人の代わりにカラービット®︎が貼られたモノの動きを常に見まもり記録します。カラービット®︎は、IoTカメラで認識しやすいマーカーで、バーコードやQRコード、電子タグでは適用が難しかった場面でも使用できるコードです。",
            images: [
              {
                url: "https://bcore.biz/images/SEO/monom-card.png",
                width: 800,
                height: 600,
                alt: "モノ常時管理システム",
                type: "image/png",
              },
              {
                url: "https://bcore.biz/images/SEO/monom-card.png",
                width: 900,
                height: 800,
                alt: "モノ常時管理システム",
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
            {/* <>
                <NextSeo
                    title="ビーコア株式会社"
                    description="現場のニッチなお悩みをIoTの力で解決します"
                    openGraph={{
                        url: "https://www.bcore.biz/job/application",
                        title: "募集要項",
                        description: "現在募集中の職種について知ることができます。",
                        images: [
                            {
                                url: "https://bcore.biz/images/SEO/job-seo-image.png",
                                width: 800,
                                height: 600,
                                alt: "採用情報イメージ",
                                type: "image/png",
                            },
                            //   {
                            //     url: "https://bcore.biz/images/SEO/mission-card.png",
                            //     width: 900,
                            //     height: 800,
                            //     alt: "ポリシーイメージ",
                            //     type: "large_image/png",
                            //   },
                        ],
                        site_name: "",
                    }}
                    twitter={{
                        handle: "colorbit_bcore",
                        site: "https://twitter.com/colorbit_bcore",
                        cardType: "summary_large_image",
                    }}
                />
            </> */}
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar2 />
            <Heroapplication />
            <Contentapplication />
            <Featuresapplication />
            <Footer />
        </div>
    );
}