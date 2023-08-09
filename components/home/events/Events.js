import React from 'react';
import Boxs from './components/Boxs';

const Events = ({ events }) => {
  return (
    <div className='pT-180' >
      <Boxs events={events} /> {/* Pass the event data as a prop to the Boxs component */}
    </div>
  );
};

export default Events;
