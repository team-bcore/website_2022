import Navbar from "../components/Navbar";
import Hero from "../components/mono/Hero";
import Video from "../components/mono/Video";
import Merit from "../components/mono/Merit";
import Usecase from "../components/mono/Usecase";
import Price from "../components/mono/Price";
import Steps from "../components/mono/Steps";
import Faqs from "../components/mono/Faqs";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default function Mono() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Video />
      <Merit />
      <Usecase />
      <Price />
      <Steps />
      <Faqs />
      <Cta />

      <Footer />
    </div>
  );
}
