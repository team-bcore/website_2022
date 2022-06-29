import Head from "next/head";
import Layout, { siteTitle } from "../components/bloglayout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostData } from "../lib/blogposts";
import Link from "next/link";
import Date from "../components/date";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export async function getStaticProps() {
  const allPostData = getSortedPostData();
  return {
    props: {
      allPostData,
    },
  };
}

export default function Blogpage({ allPostData }) {
  return (
    <div className="">
      <>
        <NextSeo
          title="ビーコア株式会社"
          description="現場のニッチなお悩みをIoTの力で解決します"
          openGraph={{
            url: "https://www.bcore.biz/newspage/",
            title: "ニュース",
            description: "イベント情報やお知らせをご覧いただけます。",
            images: [
              {
                url: "https://bcore.biz/images/SEO/news-card.png",
                width: 800,
                height: 600,
                alt: "ビーコア株式会社イメージ",
                type: "image/png",
              },
              {
                url: "https://bcore.biz/images/SEO/news-card.png",
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
      <div className="pt-8">
        <Layout home>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <section className={utilStyles.headingMd} py-24>
            <p className="text-center font-ud text-gray-800">
              ビーコアのブログ
            </p>
            <hr className="w-full my-8 border-gray-300" />
          </section>
          <section
            className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
          >
            <span className="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-cyan-600 text-white rounded">
              New
            </span>
            <h2 className={utilStyles.headingLg}>
              <span className="font-noto"></span>
            </h2>
            <ul className={utilStyles.list}>
              {allPostData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/blogs/${id}`}>
                    <a className="font-ud hover:text-cyan-600">{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </Layout>
      </div>
       <Footer />
    </div>
  );
}
