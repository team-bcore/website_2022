import Layout from "../../components/bloglayout";
import { getAllPostIds, getPostData } from "../../lib/blogposts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import Cta from "../../components/Cta";

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post({ postData }) {
    const { code, frontmatter } = postData;
    const Component = useMemo(() => getMDXComponent(code), [code]);
    return (
      <Layout>
        <div className="px-2 py-4 mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-screen-3xl lg:py-8">
          <div className="max-w-screen-sm sm:text-center sm:mx-auto">
            <div className="prose lg:prose-lg">
              <h2 className="font-noto text-left">{frontmatter.title}</h2>
              <p className="font-ud text-left">{frontmatter.description}</p>
              <p className="font-ud text-right">{frontmatter.date}</p>
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