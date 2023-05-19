import React from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const FormSelectDate = props => {
  return <DatePicker minDate={new Date()} dateFormat='PPP' {...props} />
}

export default FormSelectDate
