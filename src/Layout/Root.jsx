import { Outlet } from "react-router-dom";
import Navbar from "../Component/Shared/Navbar";
import Footer from "../Component/Shared/Footer";
import TestimonialsSection from "../Component/Home/Testimonials";
import FAQSection from "../Component/Home/FAQ";
import NewsletterSection from "../Component/Home/NewsLetter";
import HowToUse from "../Component/Home/HowToUse";

const Root = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar/>
      <Outlet></Outlet>
      <TestimonialsSection></TestimonialsSection>
      <FAQSection></FAQSection>
      <HowToUse></HowToUse>
      <NewsletterSection></NewsletterSection>
      <Footer/>
    </div>
  );
};

export default Root;