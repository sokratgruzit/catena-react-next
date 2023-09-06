import { Button, Popup, PopupElement } from '@catena-network/catena-ui-module';
import Image from 'next/image';
import { useState } from 'react';

import styles from './MainContainer.module.css';

const MainContainer = ({ active, setActive }) => {
  const [createCodeObject, setCreateCodeObject] = useState({
    emails: [],
  });

  let defaultData = [
    {
      name: 'email1',
      value: 'email1',
    },
    {
      name: 'email2',
      value: 'email2',
    },
    {
      name: 'email3',
      value: 'email3',
    },
    {
      name: 'email4',
      value: 'email4',
    },
  ];

  let handleChange = e => {
    if (!createCodeObject.emails.includes(e.target.value)) {
      return setCreateCodeObject(prev => ({
        ...prev,
        [e.target.name]: [...prev[e.target.name], e.target.value],
      }));
    }
    console.log('email is added already');
  };

  const handleItemRemove = item => {
    setCreateCodeObject(prevState => {
      const updatedEmails = prevState.emails.filter(email => email !== item);
      return { ...prevState, emails: updatedEmails };
    });
  };

  const inputs = [
    {
      title: 'Choose Emails',
      directType: true,
      type: 'lable-input-multi-select',
      name: 'emails',
      placeholder: 'Enter Code',
      required: true,
      validation: 'text',
      successText: 'it is valid',
      failureText: 'its not valid',
      multiplyData: createCodeObject.emails,
      options: defaultData,
      defaultValue: [],
      onChange: e => handleChange(e),
      handleItemRemove: item => handleItemRemove(item),
      onChangeDropdown: value => console.log(value),
    },
    {
      title: 'Choose Emails',
      directType: true,
      type: 'textarea',
      name: 'textarea',
      placeholder: 'Enter Code',
      required: true,
      validation: 'text',
      successText: 'it is valid',
      failureText: 'its not valid',
      onChange: e =>
        setCreateCodeObject({
          ...createCodeObject,
          [e.target.name]: e.target.value,
        }),
    },
  ];
  return (
    <div className='container'>
      <div className={styles.inner}>
        <div className={styles.leftContainer}>
          <h1 className='ttl'>Voting</h1>
          <p className='font_30'>
            Have your say in the future of the
            <a className='font_30' href='##'>
              CATENA
            </a>
            Ecosystem
          </p>
          <Button
            label={'Make a proposal'}
            size={'btn-lg'}
            type={'btn-primary'}
            arrow={'arrow-right'}
            element={'button'}
            disabled={false}
            onClick={() => setActive()}
            customStyles={{ background: '#A6D0DD', border: '1px solid #162029' }}
            className={styles.button}
          />
        </div>
        {active && (
          <Popup
            popUpElement={
              <PopupElement
                inputs={inputs}
                currentObject={createCodeObject}
                setCurrentObject={setCreateCodeObject}
                handleSubmit={() => console.log('submit')}
                submitButtonLabel={'Enter a Code'}
                customStyles={{ gridTemplateColumns: '100%' }}
                popUpElementError={'there is some error'}
              />
            }
            label={'Create Referral Code'}
            handlePopUpClose={() => setActive()}
            customStyles={{ width: '623px' }}
            headerCustomStyles={{ background: '#272C57' }}
          />
        )}
      </div>
    </div>
  );
};

export default MainContainer;
