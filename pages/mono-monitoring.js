import Navbar from "../components/Navbar";
import Header from "../components/mono-monitoring/Header";
import Intro from "../components/mono-monitoring/Intro";
import Propose from "../components/mono-monitoring/Propose";
import Overview from "../components/mono-monitoring/Overview";
import Features1 from "../components/mono-monitoring/Features1";
import Features2 from "../components/mono-monitoring/Features2";
import Features3 from "../components/mono-monitoring/Features3";
import Steps from "../components/mono-monitoring/Steps";
import Cta from "../components/Cta";
import Content from "../components/mono-monitoring/Content";
import Footer from "../components/Footer";

export default function Monom() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Intro />
      <Propose />
      <Overview />
      <Features1 />
      <Features2 />
      <Features3 />
      <Steps />
      <Cta />
      <Content />
      <Footer />
    </div>
  );
}
