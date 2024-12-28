import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "./date";

export default function News({ allNewsData }) {
  return (
    (<div className="py-16 bg-blue-100">
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <div className="grid grid-cols-12">
            <div className="col-start-4 col-span-6">
              <h2 className={utilStyles.headingXl}>
                <span className="font-noto">News</span>
              </h2>
              <ul className={utilStyles.list}>
                {allNewsData.slice(0, 3).map(({ id, date, title }) => (
                  <li className={utilStyles.listItem} key={id}>
                    <Link href={`/news/${id}`} className="font-noto">
                      {title}
                    </Link>
                    <br />
                    <small className={utilStyles.lightText}>
                      <p className="font-noto">
                        <Date dateString={date} />
                      </p>
                    </small>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>)
  );
}
