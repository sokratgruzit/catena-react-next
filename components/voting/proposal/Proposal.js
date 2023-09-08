import React, { useState, useEffect } from 'react';
import { Input, Button } from '@catena-network/catena-ui-module';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import styles from './Proposal.module.css';

export default function Proposal() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [time, setTime] = useState('');
  const { quill, quillRef } = useQuill();
  const [value, setValue] = useState();

  React.useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        console.log(quillRef.current.firstChild.innerHTML);
        setValue(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  console.log(value, 'this is quill editor');

  const handleInputChange = event => {
    const inputTime = event.target.value;

    setTime(inputTime);
  };

  const handleStartDateChange = date => {
    setStartDate(date);
  };

  const handleEndDateChange = date => {
    setEndDate(date);
  };

  const handleInputChanges = event => {
    console.log('hi');
  };
  return (
    <div className={`${styles.main} `}>
      <div className={styles.proposalWrapper}>
        <div className={`${styles.proposalIntro} container`}>
          <h1>Make a Proposal</h1>
          <p className='font_30'>
            Scroll presently pads accost twilight byron spasms bate bacchus cottage stainless boils freely lacinia. Fire
            aid easiest accumsan scroll pealed, broke, boils depart.
          </p>
        </div>
        <div className={`${styles.bottomBox}`}>
          <form className={styles.form}>
            <Input
              className={styles.llll}
              type={'default'}
              icon={false}
              label={'title'}
              subLabel={''}
              placeholder={'Enter'}
              name='text'
              onChange={handleInputChanges}
            />
            <Input
              className={styles.llll}
              type={'default'}
              icon={false}
              label={'Content'}
              subLabel={'Tip: Write in Markdown!'}
              placeholder={'Enter'}
              name='text'
              onChange={handleInputChanges}
            />
            <div className={styles.content}>
              <label className={styles.label}>Content</label>
              <label className={styles.subLabel}>Tip: Write in Markdown!</label>
              <div className={styles.contentTextarea}>
                <div ref={quillRef} />
              </div>
            </div>

            <Input
              className={styles.llll}
              type={'default'}
              icon={false}
              label={'Choices'}
              subLabel={''}
              placeholder={'Enter'}
              name='text'
              onChange={handleInputChanges}
            />

            <div className={styles.inputContainer}>
              <label className={styles.label}>Date</label>
              <label className={styles.subLabel}>Start Date</label>
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                dateFormat='MM/dd/yyyy'
                className={styles.datePicker}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.subLabel}>End Date</label>
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                dateFormat='MM/dd/yyyy'
                className={styles.datePicker}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Time</label>
              <label className={styles.subLabel}>Start Time</label>
              <input placeholder='00:00' type='time' required className={styles.input} />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.subLabel}>End Time</label>
              <input placeholder='00:00' type='time' required className={styles.input} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
