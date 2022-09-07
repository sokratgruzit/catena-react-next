import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const FormSelectTime = props => {
  return (
    <DatePicker
      showTimeSelect
      showTimeSelectOnly
      timeCaption={'Time'}
      timeIntervals={15}
      dateFormat='ppp'
      name='endTime'
      {...props}
    />
  );
};

export default FormSelectTime;
