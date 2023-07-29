import { Input, Button } from '@catena-network/catena-ui-module';
import React from 'react';
import { Quiz } from '@catena-network/catena-ui-module';
import { useState } from 'react';
import styles from './SubmitAplication.module.css';

const TEMPRORAYDATA = [
  {
    question: "Are you OK with being paid in cyrpto?",
    answer: [
      { option: "Yes" },
      { option: "No" },
    ]
  },
  {
    question: "Do you require Visa sponsorship to work in your location?",
    answer: [
      { option: "No" },
      { option: "Yes, sponsorship is required" },
    ]
  },

]

const SubmitAplication = ({ title }) => {

  const [selectedAnswers, setSelectedAnswers] = useState([]);


  const handleOptionChange = (questionIndex, optionIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(updatedAnswers);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    console.log(selectedAnswers);
  };

  return (
    <div className={styles.submitWrapper}>
      <div className='container_bordered'>
        <h2 className={styles.font__51}>{title}</h2>
        <div className='container_bordered-child'>
          <div className={styles.infoImport}>
            <Input
              type={"default"}
              // value={value}
              icon={true}
              emptyFieldErr={false}
              inputType={"text"}
              placeholder={"Enter.."}
              label={"FULL NAME"}
              subLabel={"example"}
              onChange={() => { console.log('rame'); }}
            />

            <Input
              type={"default"}
              icon={false}
              label={'E-MAIL'}
              editable={true}
              // value={""}
              subLabel={""}
              placeholder={'Enter..'}
              onChange={() => { console.log('rame'); }}

            />

            <Input
              type={'label-input-phone-number'}
              label={'PHONE NUMBER'}
              onChange={() => { console.log('rame'); }}
            />

            <Input
              type={'textarea'}
              label={'Describe any experience with cryptocurrency'}
              name={'textarea input'}
              rows={10}
              cols={20}
              placeholder={'Enter..'}
              resize={'none'}
              customStyles={{ resize: "none", height: "126px" }}
            />

            <Quiz
              selectedAnswers={selectedAnswers}
              handleOptionChange={handleOptionChange}
              quizData={TEMPRORAYDATA}
              // handlerSubmit={submitHendler}
              customStyles={{
                width: "100%",
                backgroundColor: "#F3E4D2",
                padding: "0",
                color: "#162029"
              }}
            />

            <Input
              type={'textarea'}
              label={'Languages you can speak/write at a Business level'}
              name={'textarea input'}
              rows={10}
              cols={20}
              placeholder={'Enter..'}
              resize={'none'}
              customStyles={{ resize: "none", height: "126px" }}
            />

            <Input
              type={'textarea'}
              label={'Additional information'}
              name={'textarea input'}
              rows={10}
              cols={20}
              placeholder={'Enter..'}
              resize={'none'}
              customStyles={{ resize: "none", height: "126px" }}
            />

            <Input
              type={'default'}
              // value={value}
              icon={true}
              emptyFieldErr={false}
              inputType={'text'}
              placeholder={'Enter..'}
              label={'Github'}
              subLabel={''}
            />

            <Input
              type={'default'}
              // value={value}
              icon={true}
              emptyFieldErr={false}
              inputType={'text'}
              placeholder={'Enter..'}
              label={'Linkedin'}
              subLabel={''}
            />

            <Input
              type={"label-input-upload-document"}
              emptyFieldErr={true}
              htmlFor={""}
              customStyles={{ width: "fit-content" }}
            />

            <Button
              label={'submit Now'}
              size={'btn-lg'}
              type={'btn-primary'}
              arrow={'arrow-right'}
              element={'button'}
              disabled={false}
              onClick={() => { console.log('rame'); }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitAplication;
