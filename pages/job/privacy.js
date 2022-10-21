import Head from "next/head";
import Navbar from "../../components/job-content/Navbar";
import Heroprivacy from "../../components/job-content/Heroprivacy";
import Contentprivacy from "../../components/job-content/Contentprivacy";
import Footer from "../../components/Footer";

export default function System() {
    return (
        <div className="">
            <Navbar />
            <Heroprivacy />
            <Contentprivacy />
            <Footer />
        </div>
    );
}