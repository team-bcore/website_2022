import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedNewsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import News from '../components/News'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'






export async function getStaticProps() {
  const allNewsData = getSortedNewsData()
  return {
    props: {
      allNewsData
    }
  }
}

export default function Newspage({ allNewsData }) {
  return (
    
  <div className="">
    <Navbar />

    <Layout home>   
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd} py-30 >
        <p className="text-center font-ud text-gray-800">ビーコアからのニュース・お知らせ</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}><span className="font-noto ">News・プレスリリース</span></h2>
        <ul className={utilStyles.list}>
          {allNewsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/news/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>

    <Footer />>
    </div>
  );
}