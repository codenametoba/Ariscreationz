import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
// import Testimonial from "./components/Testimonial";
import Cta from "./components/Cta";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import AppWithPopup from "./modal/AppWithPopup";
import ReviewSection from "./components/ReviewSection";

const App = () => {
  // const showSection = (id) => {
  //   document.querySelectorAll(".section").forEach((section) => {
  //     section.style.display = "none";
  //   });

  //   const sectionToShow = document.getElementById(id);
  //   if (sectionToShow) {
  //     sectionToShow.style.display = "block";
  //   }
  // };
  return (
    <>
    <AppWithPopup/>
    <Navbar/>
    <Hero/>
    <Services/>
    <About/>
    <Portfolio/>
    {/* <Testimonial/> */}
    <ReviewSection/>
    <Cta/>
    <Contact/>
    <Faq/>
    <Footer/>
    

    </>
  )
}

export default App