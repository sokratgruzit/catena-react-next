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
  const [editorContent, setEditorContent] = useState(''); // Store Quill content
  const [choices, setChoices] = useState(['']); // Initialize with one choice

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // This code will only run on the client-side
      const Quill = require('quill'); // Import Quill dynamically on the client-side

      // Initialize the Quill editor
      const quill = new Quill('#editor', {
        theme: 'snow',
        modules: {
          toolbar: [['bold', 'italic'], [{ header: '1' }], [{ list: 'bullet' }, { list: 'ordered' }], ['link']],
        },
      });

      // Add a text-change event listener to update the content
      quill.on('text-change', () => {
        const content = quill.root.innerHTML;
        setEditorContent(content);
      });
    }
  }, []);

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

  const addChoice = () => {
    setChoices([...choices, '']); // Add an empty choice to the array
  };

  const updateChoice = (index, value) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = value;
    setChoices(updatedChoices);
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
              type={'default'}
              icon={false}
              label={'title'}
              subLabel={''}
              placeholder={'Enter'}
              name='text'
              onChange={handleInputChanges}
            />

            <div className={styles.content}>
              <label className={styles.label}>Content</label>
              <label className={styles.subLabel}>Tip: Write in Markdown!</label>
              <div className={styles.contentTextarea}>
                <div id='editor' />
              </div>
            </div>
            <div className={styles.choices}>
              {choices.map((choice, index) => (
                <div key={index}>
                  <Input
                    type='default'
                    icon={false}
                    label={index === 0 ? 'Choices' : ''}
                    subLabel={index === 0 ? '' : ''}
                    value={choice}
                    onChange={e => updateChoice(index, e.target.value)}
                    placeholder={`Enter Choice ${index + 1}`}
                  />
                </div>
              ))}
              <button className={styles.btn} onClick={addChoice}>
                Add Choice
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M6 12H18'
                    stroke='#212121'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M12 18V6'
                    stroke='#212121'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </button>
            </div>
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
