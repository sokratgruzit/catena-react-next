import Arrivals from './components/Arrivals';
import CollectionsPromo from './components/CollectionsPromo';
import Market from './components/Market';

const Overview = props => {
  return (
    <div>
      <Market />
      <CollectionsPromo />
      <Arrivals {...props} />
    </div>
  );
};

export default Overview;
