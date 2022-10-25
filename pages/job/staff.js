import Head from "next/head";
import Navbar from "../../components/job-content/Navbar";
import Herostaff from "../../components/job-content/Herostaff";
import Contentstaff from "../../components/job-content/Contentstaff";
import Footer from "../../components/Footer";

export default function Solutions() {
    return (
        <div className="">
            <Navbar />
            <Herostaff/>
            <Contentstaff/>
            <Footer />
        </div>
    );
}