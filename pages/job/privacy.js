import Head from "next/head";
import Navbar2 from "../../components/job-content/Navbar2";
import Heroprivacy from "../../components/job-content/Heroprivacy";
import Contentprivacy from "../../components/job-content/Contentprivacy";
import Featuresprivacy from "../../components/job-content/Featuresprivacy";
import Footer from "../../components/Footer";

export default function System() {
    return (
        <div className="">
            <Navbar2 />
            <Heroprivacy />
            <Contentprivacy />
            <Featuresprivacy />
            <Footer />
        </div>
    );
}