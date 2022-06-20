import Image from "next/image";
import Head from "next/head";
import Layout, { siteTitle } from "../components/bloglayout";
import utilStyles from "../styles/utils.module.css";
import { getSortedNewsData } from "../lib/posts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export async function getStaticProps() {
  const allNewsData = getSortedNewsData();
  return {
    props: {
      allNewsData,
    },
  };
}

export default function Newspage({ allNewsData }) {
  return (
    <div className="-mt-12">
      <>
       <NextSeo
        title="ビーコア株式会社"
        description="現場のニッチなお悩みをIoTの力で解決します"
        openGraph={{
          url: "https://www.bcore.biz/blog",
          title: "ビーコアのブログ",
          description:
            "テクノロジー、デザイン、ビジネスなどさまざまなトピックについて書いています。",
          images: [
            {
              url: "https://bcore.biz/images/SEO/blog-card.png",
              width: 800,
              height: 600,
              alt: "ブログイメージ",
              type: "image/png",
            },
            {
              url: "https://bcore.biz/images/SEO/blog-card.png",
              width: 900,
              height: 800,
              alt: "ブログイメージ",
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
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p className="font-ud text-gray-700">
            テクノロジー、デザイン、ビジネスなどさまざまなトピックについて書いています。
            <br></br>
            ビーコアのブログへGo! <span className="animate-bounce">👇</span>
          </p>
        </section>
        <section>
          <a href="https://note.com/b_core">
            <Image
              className="rounded"
              src="/images/Company/logo_tagline.png" // Route of the image file
              height={563} // Desired size with correct aspect ratio
              width={1000} // Desired size with correct aspect ratio
              alt="ビーコアnoteロゴ"
            />
          </a>
        </section>

        {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>
          <span className="font-noto text-gray-900">最新の投稿</span>
        </h2>
        <ul className={utilStyles.list}>
          {allNewsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/news/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
      </Layout>
      <Footer />
    </div>
  );
}
