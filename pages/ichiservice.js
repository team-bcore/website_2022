import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/ichi/Hero'
import Intro from '../components/ichi/Intro'
import Merit from '../components/ichi/Merit'
import Features1 from '../components/ichi/Features1'
import Features2 from '../components/ichi/Features2'
import Features3 from '../components/ichi/Features3'
import Features4 from '../components/ichi/Features4'
import Usecase from '../components/ichi/Usecase'
import Tool from '../components/ichi/Tool'
import Cta from '../components/Cta'




export default function Ichi() {
    return (

    <div className="">
        <Navbar />
        <Hero />
        <Intro />
        <Merit />
        <Features1 />
        <Features2 />
        <Features3 />
        <Features4 />
        <Tool />
        <Usecase />
        <Cta />
        <Footer />
      
    </div>

    );}