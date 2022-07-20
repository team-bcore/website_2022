import { NextSeo } from "next-seo";

export default function BlogSeo({ frontmatter }) {
    const title = frontmatter.title

    return (
        <NextSeo
            title={frontmatter.title}
            description="テクノロジー、デザイン、ビジネスなどの情報を発信。時に趣味や、何気ないふだんの出来事についても書いていきます。"
            openGraph={{
                url: "https://www.bcore.biz/blogpage",
                title: title,
                description:
                    "テクノロジー、デザイン、ビジネスなどの情報を発信。時に趣味や、何気ないふだんの出来事についても書いていきます。",
                images: [
                    {
                        url: "https://bcore.biz/images/blogpage-circle.png",
                        width: 800,
                        height: 600,
                        alt: "ブログページイメージ",
                        type: "image/png",
                    },
                    {
                        url: "https://bcore.biz/images/blogpage-circle.png",
                        width: 900,
                        height: 800,
                        alt: "ブログページイメージ",
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
    );
}
