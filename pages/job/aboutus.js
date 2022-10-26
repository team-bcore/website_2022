import Head from "next/head";
import Navbar2 from "../../components/job-content/Navbar2";
import Heroaboutus from "../../components/job-content/Heroaboutus";
import Contentaboutus from "../../components/job-content/Contentaboutus";
import Message from "../../components/job-content/Message";
import Featuresaboutus from "../../components/job-content/Featuresaboutus";
import Footer from "../../components/Footer";

export default function Aboutus() {
    return (
        <div className="">
            <Navbar2 />
            <Heroaboutus />
            <Contentaboutus />
            <Message />
            <Featuresaboutus />
            <Footer />
        </div>
    );
}