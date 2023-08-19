import ConfirmationBox from './components/ConfirmationBox';
import InformationBox from '../../../components/home/informationBox/InformationBox';

const Confirmation = () => {
  return (
    <div style={{ display: 'flex', paddingTop: '150px', backgroundColor: '#fff2e4' }}>
      <div>
        <ConfirmationBox />
      </div>
      <InformationBox />
    </div>
  );
};

export default Confirmation;
