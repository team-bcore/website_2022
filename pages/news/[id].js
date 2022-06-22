import Layout from "../../components/layout";
import { getAllNewsIds, getNewsData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticProps({ params }) {
  const newsData = await getNewsData(params.id);
  return {
    props: {
      newsData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllNewsIds();
  return {
    paths,
    fallback: false,
  };
}

export default function News({ newsData }) {
  return (
    <Layout>
      <Head>
        <title>{newsData.title}</title>
      </Head>
      <article>
        <span className="font-noto text-gray-900">
          <h1 className={utilStyles.headingXl}>{newsData.title}</h1>
        </span>
        <div className="py-4">
          <div className={utilStyles.lightText}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="font-noto text-gray-600">
              <Date dateString={newsData.date} />
            </span>
          </div>
        </div>
        <div className="py-4">
          <span className="font-ud text-gray-900">
            <div dangerouslySetInnerHTML={{ __html: newsData.contentHtml }} />
          </span>
        </div>
      </article>
    </Layout>
  );
}
