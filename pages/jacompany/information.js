import Navbar from "../../components/Navbar";
import Archive from "../../components/company/Archive";
import Patent from "../../components/company/Patent";
import Navinformation from "../../components/company/Navinformation";
import Footer from "../../components/Footer";

export default function Jacompany() {
  return (
    <div className="">
      <Navbar />
      <Archive />
      <Patent />
      <Navinformation />
      <Footer />
    </div>
  );
}
