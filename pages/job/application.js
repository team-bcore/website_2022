import Head from "next/head";
import Navbar2 from "../../components/job-content/Navbar2";
import Heroapplication from "../../components/job-content/Heroapplication";
import Contentapplication from "../../components/job-content/Contentapplication";
import Featuresapplication from "../../components/job-content/Featuresapplication";
import Footer from "../../components/Footer";

export default function Aboutus() {
    return (
        <div className="">
            <Navbar2 />
            <Heroapplication />
            <Contentapplication />
            <Featuresapplication />
            <Footer />
        </div>
    );
}