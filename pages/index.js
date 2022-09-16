import BuyCore from '../components/home/buyCore/BuyCore';
import CoreApps from '../components/home/coreApps/CoreApps';
import HomeLanding from '../components/home/homeLanding/HomeLanding';
import HomeTrust from '../components/home/homeTrust/HomeTrust';
import Trade from '../components/home/trade/Trade';

const Home = () => {
  return (
    <div className='container'>
      <HomeLanding />
      <HomeTrust />
      <Trade />
      <BuyCore />
      <CoreApps />
    </div>
  );
};

export default Home;
