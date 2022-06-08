import Head from "next/head";
import Layout, { siteTitle } from "../components/bloglayout";
import utilStyles from "../styles/utils.module.css";
import { getSortedNewsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import News from "../components/News";

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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className="font-ud text-gray-700">
          テクノロジー、デザイン、ビジネスなどさまざまなトピックについて書いています。
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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
      </section>
    </Layout>
  );
}
