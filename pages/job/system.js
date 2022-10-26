import Head from "next/head";
import Navbar2 from "../../components/job-content/Navbar2";
import Herosystem from "../../components/job-content/Herosystem";
import Contentsystem from "../../components/job-content/Contentsystem";
import Featuressystem from "../../components/job-content/Featuressystem";
import Footer from "../../components/Footer";

export default function System() {
    return (
        <div className="">
            <Navbar2 />
            <Herosystem />
            <Contentsystem />
            <Featuressystem />
            <Footer />
        </div>
    );
}