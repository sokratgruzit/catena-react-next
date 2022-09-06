import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { OpenSvg, SmlArrowSvg } from '../../svg';
import Button from '../../UI/button/Button';

const ReactQuill =
  typeof window === 'object' ? require('react-quill') : () => false;

import 'react-quill/dist/quill.snow.css';

import styles from './Form.module.css';
import FormChoice from '../components/formChoice/FormChoice';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    body: '',
    choices: ['', ''],
    startDate: null,
    startTime: null,
    endDate: null,
    endTime: null,
    snapshot: 0,
  });

  const handleChoiceInput = (e, index) => {
    setFormData(prevState => ({
      ...prevState,
      choices: prevState.choices.map((item, id) =>
        id === index ? e.target.value : item,
      ),
    }));
  };

  const handleAddChoice = () => {
    setFormData(prevState => ({
      ...prevState,
      choices: [...prevState.choices, ''],
    }));
  };

  const handleCloseInput = index => {
    setFormData(prevState => ({
      ...prevState,
      choices: prevState.choices.filter((e, id) => id !== index),
    }));
  };

  return (
    <div className={` container container-margin ${styles.wrapper}`}>
      <div className={styles.galaxy}>
        <Image
          layout='fill'
          objectFit='contain'
          src={'/images/voting/form/galaxy.png'}
          quality={100}
          alt=''
        />
      </div>
      <div className={styles.roundGalaxy}>
        <Image
          layout='fill'
          objectFit='contain'
          src={'/images/voting/form/roundGalaxy.png'}
          quality={100}
          alt=''
        />
      </div>
      <div className={styles.gradient}></div>
      <div className={styles.ProposalForm}>
        <div className={styles.header}>
          <Link href='/voting'>
            <div className={styles.backBtn}>
              <SmlArrowSvg className={styles.arrowSvg} />
              <p className={styles.blueHover}>Back</p>
            </div>
          </Link>
          <div>
            <h1 className='font_30'>Make a Proposal</h1>
          </div>
        </div>
        <div className={styles.inner}>
          <form>
            <div className={styles.title}>
              <label>
                <p className='font_12'>Title</p>
                <input className={styles.input} type='text' name='title' />
              </label>
            </div>
            <div className={styles.content}>
              <p className='font_12'>Content</p>
              <p className='font_10'>Tip: write in Markdown!</p>
              <ReactQuill
                modules={Form.modules}
                onChange={e =>
                  setFormData(prevState => ({ ...prevState, body: e }))
                }
              />
              <span className={styles.bottomBorder}></span>
            </div>
            <div className={styles.choices}>
              <p className='font_12'>Choices</p>
              {formData.choices.map((choice, index) => {
                return (
                  <FormChoice
                    key={index}
                    index={index}
                    choice={choice}
                    handleChoiceInput={handleChoiceInput}
                    handleCloseInput={handleCloseInput}
                  />
                );
              })}
              <Button
                title={'+ Add Choice'}
                type={'white__border'}
                onClick={handleAddChoice}
                className={styles.addChoice}
              />
              <span className={styles.bottomBorder}></span>
            </div>
            <div className={styles.actions}>
              <p>ACTIONS</p>
              <div className={styles.actionsWrap}>
                <div className={styles.date}>
                  <p className='font_12'>Start Date</p>
                  <input type='date'></input>
                </div>
                <div className={styles.time}>
                  <p className='font_12'>Start Time</p>
                  <input type='time' className={styles.timePicker}></input>
                </div>
              </div>
              <div className={`${styles.actionsWrap} ${styles.marginTop}`}>
                <div className={styles.date}>
                  <p className='font_12'>Start Date</p>
                  <input type='date'></input>
                </div>
                <div className={styles.time}>
                  <p className='font_12'>Start Time</p>
                  <input type='time'></input>
                </div>
              </div>
            </div>
            <div className={styles.snapShot}>
              <p>Snapshot</p>
              <a className={styles.openLink} href='##'>
                16672898
                <OpenSvg className={styles.openSvg} />
              </a>
            </div>
            <Button
              title={'Connect Wallet'}
              type={'blue'}
              className={styles.connectWallet}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

Form.modules = {
  toolbar: [
    ['bold', 'italic', 'underline'],
    [({ list: 'ordered' }, { list: 'bullet' })],
    [{ script: 'sub' }, { script: 'super' }],
    ['link'],
  ],
};

export default Form;

// cleaning of classes end, need to correct routes of every proposal its coming from /voting
