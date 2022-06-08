import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/hito/Hero";
import Intro from "../components/hito/Intro";
import Features from "../components/hito/Features";
import Price from "../components/hito/Price";
import Cta from "../components/Cta";
import Content from "../components/hito/Content";
import Usecase from "../components/hito/Usecase";
import Face from "../components/hito/Face";

export default function Hito() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Intro />
      <Features />
      <Usecase />
      <Price />
      <Face />
      <Cta />
      <Content />
      <Footer />
    </div>
  );
}
