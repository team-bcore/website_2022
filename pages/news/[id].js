import Layout from "../../components/layout";
import { getAllNewsIds, getNewsData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import Cta from "../../components/Cta";

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
  const { code, frontmatter } = newsData;
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <Layout>
      <div className="px-2 py-4 mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-screen-3xl lg:py-8">
        <div className="max-w-screen-sm sm:mx-auto">
          <div className="prose lg:prose-lg">
            <h2 className="text-left font-noto">{frontmatter.title}</h2>
            <p className="text-left font-ud">{frontmatter.description}</p>
            <p className="text-right font-ud">{frontmatter.date}</p>
            <article className="font-ud text-left">
              <Component
                components={{
                  Cta,
                }}
              />
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
}