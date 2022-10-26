import Head from "next/head";
import Navbar2 from "../../components/job-content/Navbar2";
import Herostaff from "../../components/job-content/Herostaff";
import Contentstaff from "../../components/job-content/Contentstaff";
import Featuresstaff from "../../components/job-content/Featuresstaff";
import Footer from "../../components/Footer";

export default function Solutions() {
    return (
        <div className="">
            <Navbar2 />
            <Herostaff/>
            <Contentstaff/>
            <Featuresstaff/>
            <Footer />
        </div>
    );
}