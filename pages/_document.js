import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        <-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'[);
})(window,document,'script','dataLayer','GTM-MHQFJVF5');</script>
<-- End Google Tag Manager -->
          <link
            href="https://fonts.googleapis.com/css2?family=BIZ+UDPGothic:wght@700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
        <-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MHQFJVF5"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
