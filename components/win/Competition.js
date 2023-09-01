import Finished from './components/Finished';
import Prizes from './components/Prizes';
import Rank from './components/Rank';
import Rules from './components/Rules';
import Score from './components/Score';
import TradingCompetition from './components/TradingCompetition';

const Competition = () => {
  return (
    <>
      <TradingCompetition />
      <Finished />
      <Score />
      <Rank />
      <Prizes />
      <Rules />
    </>
  );
};

export default Competition;
