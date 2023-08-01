import React from 'react';
import Boxs from './components/Boxs';

const Event = ({ event }) => {
  return (
    <div style={{ paddingTop: '200px', background: '#FFF3E5' }}>
      <Boxs event={event} /> {/* Pass the event data as a prop to the Boxs component */}
    </div>
  );
};

export default Event;
