import Layout from "../../components/bloglayout";
import { getAllPostIds, getPostData } from "../../lib/blogposts";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import Cta from "../../components/Cta";
import BlogSeo from "../../components/BlogSeo";
import Form from "../../components/Form";
import Comments from "../../components/blog-content/Comments";
import Image_1 from "../../components/blog-content/Image_1";
import Image_2 from "../../components/blog-content/Image_2";
import Caption_museum from "../../components/blog-content/Caption_museum";
import Caption_museum_2 from "../../components/blog-content/Caption_museum_2";
import Ctablog from "../../components/blog-content/Ctablog";

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
      <BlogSeo frontmatter={frontmatter} />
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
                  BlogSeo,
                  Form,
                  Comments,
                  Image_1,
                  Image_2,
                  Caption_museum,
                  Caption_museum_2,
                  Ctablog
                }}
              />
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
}
