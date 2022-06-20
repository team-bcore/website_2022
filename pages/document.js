import Navbar from "../components/Navbar";
import Doc from "../components/Doc";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Document() {
  return (
    <div className="">
      <>
        <NextSeo nofollow={true} />
        <p>This page is not followed</p>
      </>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Doc />
      <Footer />
    </div>
  );
}
