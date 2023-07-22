import Certik from './components/Certik';
import Distribution from './components/Distribution';
import Download from './components/Download';
import EventDetails from './components/EventDetails';
import Schedule from './components/Schedule';
import TokenomicsHead from './components/TokenomicsHead';

function Tokenomics() {
  return (
    <div>
      <div className='container'>
        <TokenomicsHead />
      </div>
      <div className='container_bordered'>
        <Distribution />
      </div>
      <div className='container_bordered'>
        <Schedule />
      </div>
      <div className='container_bordered'>
        <EventDetails />
      </div>
      <div className='container'>
        <Certik />
        <Download />
      </div>
    </div>
  );
}

export default Tokenomics;
