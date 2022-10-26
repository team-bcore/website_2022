import Head from "next/head";
import Navbar2 from "../../components/job-content/Navbar2";
import Herosolutions from "../../components/job-content/Herosolutions";
import Contentsolutions from "../../components/job-content/Contentsolutions";
import Featuressolutions from "../../components/job-content/Featuressolutions";
import Footer from "../../components/Footer";

export default function Solutions() {
    return (
        <div className="">
            <Navbar2 />
            <Herosolutions />
            <Contentsolutions />
            <Featuressolutions />
            <Footer />
        </div>
    );
}