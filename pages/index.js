import BuyCore from '../components/homeOld/buyCore/BuyCore';
import CoreApps from '../components/homeOld/coreApps/CoreApps';
import HomeLanding from '../components/homeOld/homeLanding/HomeLanding';
import HomeTrust from '../components/homeOld/homeTrust/HomeTrust';
import Trade from '../components/homeOld/trade/Trade';

const Home = () => {
  return (
    <main className='container'>
      <HomeLanding />
      <HomeTrust />
      <Trade />
      <BuyCore />
      <CoreApps />
    </main>
  );
};

export default Home;
