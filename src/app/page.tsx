import Footer from "@/components/footer";
import Header from "../components/header";
import Section1 from "../components/section1";
import Section2 from "../components/section2";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <Section1 />
      <Section2 />
      <Footer/>
    </div>
  );
}
