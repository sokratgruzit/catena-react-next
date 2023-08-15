import Header from './components/Header';
import Bottom from './components/Bottom';
import InformationBox from '../informationBox/InformationBox';

const Contribute = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <Header />
        <Bottom />
      </div>
      <InformationBox style={{ margin: '200px' }} />
    </div>
  );
};

export default Contribute;
