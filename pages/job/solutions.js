import Head from "next/head";
import Navbar from "../../components/job-content/Navbar";
import Herosolutions from "../../components/job-content/Herosolutions";
import Contentsolutions from "../../components/job-content/Contentsolutions";
import Featuressolutions from "../../components/job-content/Featuressolutions";
import Footer from "../../components/Footer";

export default function Solutions() {
    return (
        <div className="">
            <Navbar />
            <Herosolutions />
            <Contentsolutions />
            <Featuressolutions />
            <Footer />
        </div>
    );
}