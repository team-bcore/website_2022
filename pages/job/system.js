import Head from "next/head";
import Navbar from "../../components/job-content/Navbar";
import Herosystem from "../../components/job-content/Herosystem";
import Contentsystem from "../../components/job-content/Contentsystem";

import Footer from "../../components/Footer";

export default function System() {
    return (
        <div className="">
            <Navbar />
            <Herosystem />
            <Contentsystem />
            <Footer />
        </div>
    );
}