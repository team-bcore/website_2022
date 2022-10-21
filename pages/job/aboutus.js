import Head from "next/head";
import Navbar from "../../components/job-content/Navbar";
import Heroaboutus from "../../components/job-content/Heroaboutus";
import Contentaboutus from "../../components/job-content/Contentaboutus";
import Message from "../../components/job-content/Message";
import Featuresaboutus from "../../components/job-content/Featuresaboutus";
import Footer from "../../components/Footer";

export default function Aboutus() {
    return (
        <div className="">
            <Navbar />
            <Heroaboutus />
            <Contentaboutus />
            <Message />
            <Featuresaboutus />
            <Footer />
        </div>
    );
}