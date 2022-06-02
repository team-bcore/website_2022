import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedNewsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import News from '../components/News'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Solutions from '../components/Solutions'
import Logoclouds from '../components/Logoclouds'
import Cta from '../components/Cta'
import Why from '../components/Why'
import Colorbit from '../components/Colorbit'



export async function getStaticProps() {
  const allNewsData = getSortedNewsData()
  return {
    props: {
      allNewsData
    }
  }
}

export default function Home({ allNewsData }) {
  return (

    <div className="">
      <Navbar />
      <Solutions />
      <Why />
      <Colorbit />
      <Logoclouds />     
      <News allNewsData={allNewsData} />
      <Cta />
      <Footer />
    </div>

  );
}