import Component from './components/Component';
import InformationBox from '../../../components/home/informationBox/InformationBox';
const PaymentProcess = () => {
  return (
    <div style={{ paddingTop: '150px', backgroundColor: '#fff2e4', display: 'flex' }}>
      <div>
        <Component />
      </div>
      <InformationBox />
    </div>
  );
};

export default PaymentProcess;
