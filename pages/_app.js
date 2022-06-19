import "../styles/global.css";
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
    <div className="container">
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'G-EP8V6PRVC6', 'auto');
          ga('send', 'pageview');
        `}
      </Script>
      <Script
        src="https://www.google-analytics.com/analytics.js"
        strategy="afterInteractive"
      />
    </div>
  <Component {...pageProps} />
  </>
  );

  
}
