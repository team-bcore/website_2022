import "../styles/global.css";
import { appWithTranslation } from 'next-i18next';

import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";

const App = ({ Component, pageProps }) => {
  usePageViews();
  return (
    <>
      <div className="container">
        <GoogleAnalytics />
      </div>
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(App);
