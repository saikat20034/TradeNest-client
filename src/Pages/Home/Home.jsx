
import { Helmet } from 'react-helmet';
import Banner from '../../Component/Home/Banner';
import CategoryCard from '../../Component/Home/CategoryCard';
import Meds from '../../Component/Home/Meds';
import OfferSlider from '../../Component/Home/OfferSlider';

const Home = () => {

  return (
    <div className="">
      <Helmet>
        <title>TradeNest | Get, Give, and Succeed</title>
      </Helmet>
      <Banner />
      {/* <CategoryCard /> */}
      <OfferSlider />
      <Meds />
    </div>
  );
};

export default Home;