
import { Helmet } from 'react-helmet';
import Banner from '../../Component/Home/Banner';
import CategoryCard from '../../Component/Home/CategoryCard';
import Meds from '../../Component/Home/Meds';
import OfferSlider from '../../Component/Home/OfferSlider';
import PressKit from '../PressKitt';
import NewsletterSection from '../../Component/Home/NewsLetter';
import TestimonialsSection from '../../Component/Home/Testimonials';
import FAQSection from '../../Component/Home/FAQ';
import HowToUse from '../../Component/Home/HowToUse';

const Home = () => {

  return (
    <div className="">
      <Helmet>
        <title>TradeNest | Get, Give, and Succeed</title>
      </Helmet>
      <Banner />

      <OfferSlider />
      <Meds />
      <TestimonialsSection></TestimonialsSection>
      <FAQSection></FAQSection>
      <HowToUse></HowToUse>
      <NewsletterSection></NewsletterSection>
    </div>
  );
};

export default Home;