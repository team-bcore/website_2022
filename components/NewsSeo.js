import { NextSeo } from "next-seo";

export default function NewsSeo({ frontmatter }) {
  const title = frontmatter.title;

  return (
    <NextSeo
      title={frontmatter.title}
      description="NEWS"
      openGraph={{
        url: "https://www.bcore.biz/news",
        title: title,
        description:
          "プレスリリース・イベント情報・その他のお知らせ",
        images: [
          {
            url: "https://bcore.biz/images/SEO/news-seo-card.png",
            width: 800,
            height: 600,
            alt: "ニュースページイメージ",
            type: "image/png",
          },
          {
            url: "https://bcore.biz/images/SEO/news-seo-card.png",
            width: 900,
            height: 800,
            alt: "ニュースページイメージ",
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
