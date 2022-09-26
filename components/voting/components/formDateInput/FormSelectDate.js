import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import styles from './FormSelectDate.module.css';

const FormSelectDate = props => {
  return <DatePicker minDate={new Date()} dateFormat='PPP' {...props} />;
};

export default FormSelectDate;
