import HomeLanding from '../components/home/HomeLanding';
import HomeTrust from '../components/home/HomeTrust';
import Trade from '../components/home/trade/Trade';

const Home = () => {
  return (
    <div className='container'>
      <HomeLanding />
      <HomeTrust />
      <Trade />
    </div>
  );
};

export default Home;
