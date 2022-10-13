import Head from "next/head";
import Hero from "../../components/job-content/Hero";
import Features from "../../components/job-content/Features";
import Footer from "../../components/Footer";

export default function Job() {
    return (
        <div className="">
        <Hero />
        <Features />
        <Footer />
        </div>
    );
}