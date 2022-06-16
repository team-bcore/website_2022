import Image from "next/image";
import Head from "next/head";
import Layout, { siteTitle } from "../components/bloglayout";
import utilStyles from "../styles/utils.module.css";
import { getSortedNewsData } from "../lib/posts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <Navbar />
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p className="font-ud text-gray-700">
            テクノロジー、デザイン、ビジネスなどさまざまなトピックについて書いています。
            <br></br>
            ビーコアのブログへGo! 👇
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
