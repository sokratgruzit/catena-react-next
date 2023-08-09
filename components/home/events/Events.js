import React from 'react';
import Boxs from './components/Boxs';

const Events = ({ events }) => {
  return <Boxs events={events} /> /* Pass the event data as a prop to the Boxs component */
};

export default Events;
