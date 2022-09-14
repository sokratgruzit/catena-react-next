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
import FormSelectDate from '../components/formDateInput/FormSelectDate';
import FormSelectTime from '../components/formDateInput/FormSelectTime';

import useConnect from '../../../hooks/use-connect';
import { getFormErrors, mergeDateAndTime } from './helpers';
import FormErrorsText from './FormErrorsText';

const Form = () => {
  const { isActive, handleWalletModal } = useConnect();
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    choices: ['', ''],
    startDate: null,
    startTime: null,
    endDate: null,
    endTime: null,
  });
  const [editedField, setEditedField] = useState();

  const formErrors = getFormErrors(formData);

  const handleOnFormSubmit = e => {
    e.preventDefault();

    const fullStartDate = mergeDateAndTime(
      formData.startDate,
      formData.startTime,
    );
    const fullEndDate = mergeDateAndTime(formData.endDate, formData.endTime);

    console.log(fullStartDate, fullEndDate);

    // try {
    //  send formData
    // } catch (error) {
    // }
  };

  const handleUpdateValue = (objKey, value) => {
    setFormData(prevState => ({
      ...prevState,
      [objKey]: value,
    }));

    setEditedField(prevState => ({
      ...prevState,
      [objKey]: true,
    }));
  };

  const handleAddChoice = () => {
    setFormData(prevState => ({
      ...prevState,
      choices: [...prevState.choices, ''],
    }));
  };

  return (
    <div className={`container ${styles.wrapper}`}>
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
              <p>Back Voting</p>
            </div>
          </Link>
          <h1>Make a Proposal</h1>
        </div>
        <div className={styles.inner}>
          <form onSubmit={handleOnFormSubmit}>
            <div className={styles.title}>
              <h2>TITLE</h2>
              <input
                onChange={e => handleUpdateValue('title', e.target.value)}
                className={styles.input}
                type='text'
                name='title'
              />
              {editedField?.title && formErrors.title && (
                <FormErrorsText text={formErrors.title} />
              )}
            </div>
            <div className={styles.content}>
              <h3>CONTENT</h3>
              <p className={styles.tip}>Tip: write in Markdown!</p>
              <ReactQuill
                modules={Form.modules}
                onChange={e => handleUpdateValue('body', e)}
              />
              {editedField?.body && formErrors.body && (
                <FormErrorsText text={formErrors.body} />
              )}
              <span className={styles.bottomBorder}></span>
            </div>
            <div className={styles.choices}>
              <h3>CHOICES</h3>
              {formData.choices.map((choice, index) => {
                return (
                  <FormChoice
                    key={index}
                    index={index}
                    choice={choice}
                    setFormData={setFormData}
                    setEditedField={setEditedField}
                  />
                );
              })}
              {editedField?.choices && formErrors.choices && (
                <FormErrorsText text={formErrors.choices} />
              )}

              <Button
                title={'+ Add Choice'}
                type={'white__border'}
                onClick={handleAddChoice}
                className={styles.addChoice}
              />
              <span className={styles.bottomBorder}></span>
            </div>
            <div className={styles.actions}>
              <h3>ACTIONS</h3>
              <div className={styles.actionsWrap}>
                <div>
                  <p>Start Date</p>
                  <FormSelectDate
                    placeholderText='YYYY/MM/DD'
                    onChange={date => handleUpdateValue('startDate', date)}
                    selected={formData.startDate}
                  />
                </div>
                <div>
                  <p>Start Time</p>
                  <FormSelectTime
                    placeholderText='00:00'
                    onChange={date => handleUpdateValue('startTime', date)}
                    selected={formData.startTime}
                  />
                </div>
              </div>
              <div className={`${styles.actionsWrap} ${styles.marginTop}`}>
                <div>
                  <p>End Date</p>
                  <FormSelectDate
                    placeholderText='YYYY/MM/DD'
                    onChange={date => handleUpdateValue('endDate', date)}
                    selected={formData.endDate}
                  />
                </div>
                <div>
                  <p>End Time</p>
                  <FormSelectTime
                    placeholderText='00:00'
                    onChange={date => handleUpdateValue('endTime', date)}
                    selected={formData.endTime}
                  />
                </div>
              </div>
              {formErrors?.endDate && (
                <FormErrorsText text={formErrors?.endDate} />
              )}
            </div>
            <div className={styles.snapShot}>
              <p>Snapshot</p>
              <a className={styles.openLink} href='##'>
                16672898
                <OpenSvg className={styles.openSvg} />
              </a>
            </div>
            {isActive ? (
              <button
                className={styles.publishButton}
                disabled={JSON.stringify(formErrors) !== '{}'}
              >
                Publish
              </button>
            ) : (
              <Button
                title={'Connect Wallet'}
                onClick={() => {
                  handleWalletModal(true);
                }}
                type={'blue'}
                className={styles.connectWallet}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

Form.modules = {
  toolbar: [
    ['bold', 'italic'],
    [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
  ],
};

export default Form;

// cleaning of classes end, need to correct routes of every proposal its coming from /voting
