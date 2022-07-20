import "../styles/global.css";
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
  usePageViews();
  return (
    <>
      <div className="container">
        <GoogleAnalytics />
      </div>
      <Component {...pageProps} />
    </>
  );
}
