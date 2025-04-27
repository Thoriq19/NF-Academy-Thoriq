import Contact from "../components/shared/Contact";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Heroes from "../components/shared/Heroes";
import Product from "../components/shared/Product";
import Services from "../components/shared/Services";
import Team from "../components/shared/Team";

export default function Home (){
    return(
        <>
      <Header/>
      <Heroes/>
      <Product/>
      <Services/>
      <Team/>
      <Contact/>
      <Footer/>
        </>
    )
}