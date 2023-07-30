import { useState } from 'react';

import axios from 'axios';

import { Input, Button } from '@catena-network/catena-ui-module';
import { Quiz } from '@catena-network/catena-ui-module';

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
      { option: "Yes, sponsorship is required" },
      { option: "No" },
    ]
  },

]

const SubmitAplication = ({ title }) => {

  const [triggerValidation, setTriggerValidation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [applicantData, setApplicantData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    experience_with_cryptocurrency: "",
    languages_speak_write: "",
    additional_information: "",
    github: "",
    linkedin: "",
    cv: "",
    job_id: "",
    quiz_answers: selectedAnswers
  });

  const handleOptionChange = (questionIndex, optionIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(updatedAnswers);
  };

  const handlerSubmit2 = (e) => {
    e.preventDefault();

    console.log(selectedAnswers);
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    console.log(applicantData, 'data')
    setIsLoading(true);
    setTriggerValidation(true)

    try {
      await axios
        .post(`${API_URL}/submit_application`, { applicantData })
        .then((res) => {
          console.log(res);
          triggerValidation(false);
          setIsLoading(false);
        })
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.submitWrapper}>
      <div className='container_bordered'>
        <h2 className={styles.font__51}>{"title"}</h2>
        <div className='container_bordered-child'>
          <div className={styles.infoImport}>
            <Input
              type={"default"}
              value={applicantData.full_name}
              icon={true}
              emptyFieldErr={triggerValidation && applicantData.full_name === "" ? true : false}
              inputType={"text"}
              placeholder={"Enter.."}
              label={"FULL NAME"}
              subLabel={""}
              onChange={(e) => {
                setApplicantData({
                  ...applicantData,
                  full_name: e.target.value,
                });
              }}
            />
            <Input
              type={"default"}
              icon={false}
              value={applicantData.email}
              label={'E-MAIL'}
              subLabel={""}
              emptyFieldErr={triggerValidation && applicantData.email === "" ? true : false}
              placeholder={'Enter..'}
              onChange={(e) => {
                setApplicantData({
                  ...applicantData,
                  email: e.target.value,
                });
              }}
            />
            <Input
              type={'label-input-phone-number'}
              label={'PHONE NUMBER'}
              value={applicantData.phone_number}
              emptyFieldErr={triggerValidation && applicantData.phone_number === "" ? true : false}
              onChange={(e) => {
                setApplicantData({
                  ...applicantData,
                  phone_number: e,
                });
              }}
            />
            <Input
              type={'textarea'}
              label={'Describe any experience with cryptocurrency'}
              name={'textarea input'}
              value={applicantData.experience_with_cryptocurrency}
              emptyFieldErr={triggerValidation && applicantData.experience_with_cryptocurrency === "" ? true : false}
              rows={10}
              cols={20}
              placeholder={'Enter..'}
              resize={'none'}
              customStyles={{ resize: "none", height: "126px" }}
              onChange={(e) => {
                setApplicantData({
                  ...applicantData,
                  experience_with_cryptocurrency: e.target.value,
                });
              }} />

            <Quiz
              selectedAnswers={selectedAnswers}
              handleOptionChange={handleOptionChange}
              quizData={TEMPRORAYDATA}
              // emptyFieldErr={triggerValidation && applicantData.full_name === "" ? true : false}
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
              value={applicantData.languages_speak_write}
              emptyFieldErr={triggerValidation && applicantData.languages_speak_write === "" ? true : false}
              rows={10}
              cols={20}
              placeholder={'Enter..'}
              resize={'none'}
              customStyles={{ resize: "none", height: "126px" }}
              onChange={(e) => {
                setApplicantData({
                  ...applicantData,
                  languages_speak_write: e.target.value,
                });
              }}
            />
            <Input
              type={'textarea'}
              label={'Additional information'}
              name={'textarea input'}
              value={applicantData.additional_information}
              emptyFieldErr={triggerValidation && applicantData.additional_information === "" ? true : false}
              rows={10}
              cols={20}
              placeholder={'Enter..'}
              resize={'none'}
              customStyles={{ resize: "none", height: "126px" }}
              onChange={(e) => {
                setApplicantData({
                  ...applicantData,
                  additional_information: e.target.value,
                });
              }}
            />
            <Input
              type={'default'}
              value={applicantData.github}
              emptyFieldErr={triggerValidation && applicantData.github === "" ? true : false}
              icon={true}
              inputType={'text'}
              placeholder={'Enter..'}
              label={'Github'}
              subLabel={''}
              onChange={(e) => {
                setApplicantData({
                  ...applicantData,
                  github: e.target.value,
                });
              }}
            />
            <Input
              type={'default'}
              value={applicantData.linkedin}
              icon={true}
              emptyFieldErr={triggerValidation && applicantData.linkedin === "" ? true : false}
              inputType={'text'}
              placeholder={'Enter..'}
              label={'Linkedin'}
              subLabel={''}
              onChange={(e) => {
                setApplicantData({
                  ...applicantData,
                  linkedin: e.target.value,
                });
              }}
            />
            <Input
              type={"label-input-upload-document"}
              // emptyFieldErr={triggerValidation && applicantData.cv === "" ? true : false}
              htmlFor={""}
              emptyFieldErr={false}
              onChange={(i) => {
                setApplicantData({
                  ...applicantData,
                  cv: i,
                });
              }}
              customStyles={{ width: "fit-content" }}
            />
            <Button
              label={!isLoading ? 'submit Now' : "Loading..."}
              size={'btn-lg'}
              type={'btn-primary'}
              arrow={'arrow-right'}
              element={'button'}
              disabled={isLoading}
              onClick={handlerSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitAplication;
