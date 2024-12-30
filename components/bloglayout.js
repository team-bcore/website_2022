import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Footerjp from "../components/Footerjp";

const name = "ビーコアのブログ";
export const siteTitle = "ビーコア株式会社";

export default function Layout({ children, home }) {
  return (
    (<div className="bg-gray-100">
      <div className="pt-8">
        <div className={styles.container}>
          <header className={styles.header}>
            {home ? (
              <>
                <Image
                  priority
                  src="/images/blogpage-circle.png"
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
                  src="/images/blogpage-circle.png"
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt={name}
                />
                <h2 className={utilStyles.headingLg}>
                  <span className="font-noto text-gray-900">
                    ビーコアのブログ
                  </span>
                </h2>
              </>
            )}
          </header>
          <main>{children}</main>
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/blogpage" className="font-ud text-gray-900">
                ← ブログ一覧へ戻る
              </Link>
            </div>
          )}
        </div>
        <Footerjp />
      </div>
    </div>)
  );
}
