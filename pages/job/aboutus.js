import Head from "next/head";
import Heroaboutus from "../../components/job-content/Heroaboutus";
import Contentaboutus from "../../components/job-content/Contentaboutus";
import Message from "../../components/job-content/Message";
import Footer from "../../components/Footer";

export default function Aboutus() {
    return (
        <div className="">
        <Heroaboutus/>
        <Contentaboutus/>
        <Message/>
        <Footer />
        </div>
    );
}