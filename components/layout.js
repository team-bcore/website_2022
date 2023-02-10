import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Footer from "../components/Footer";

const name = "ニュース";
export const siteTitle = "ビーコア株式会社";

export default function Layout({ children, home }) {
  return (
    <div className="bg-gray-100">
      <div className="pt-8">
        <div className={styles.container}>
          <header className={styles.header}>
            {home ? (
              <>
                <Image
                  priority
                  src="/images/news-seo-card.png"
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt={name}
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
              </>
            ) : (
              <>
                <Image
                  priority
                  src="/images/news-seo-card.png"
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt={name}
                />
                <h2 className={utilStyles.headingLg}>
                  <span className="font-noto text-gray-900">ニュース</span>
                </h2>
              </>
            )}
          </header>
          <main>{children}</main>
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a className="text-gray-900 font-ud hover:text-gray-600">
                  ← ホームへ戻る
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
