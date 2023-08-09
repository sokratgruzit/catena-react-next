import Card from './components/cards/Card';
import ExchangesCards from './components/exchangesCards/ExchangesCardes';
import Title from './components/title/Title';
import JoinCommunity from '../events/components/JoinCommunity';

const Ecosystem = ({ exchanges }) => {
  return (
    <div className='pT-180'>
      <div className='container' >
        <Title />
        <ExchangesCards data={exchanges} />
        <Card />
      </div>
    </div>
  );
};

export default Ecosystem;
