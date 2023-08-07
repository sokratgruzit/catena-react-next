import { Input, Button } from '@catena-network/catena-ui-module';
import React from 'react';
import { Quiz } from '@catena-network/catena-ui-module';
import { useState } from 'react';
import styles from './SubmitAplication.module.css';
import { lang } from 'moment';
import createAxiosInstance from '../../../../../../pages/api/axios';

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

const SubmitApplication = ({ title }) => {

  const axios = createAxiosInstance();

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [application, setApplication] = useState({
    name: '',
    email: '',
    descr: '',
    question1: '',
    question2: '',
    language: '',
    info: '',
    gitHub: '',
    linkedin: '',
    file: '',
    jobId: '',
  });
  const [phone, setPhone] = useState(null);


  const handleOptionChange = (questionIndex, optionIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(updatedAnswers);
    console.log(selectedAnswers);
  };

  const submitHandler = async () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
    console.log(application);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    if (application.file) {
      const formData = new FormData();

      const logoDotIndex = application.file.name.lastIndexOf(".");
      const logoExt = application.file.name.substring(logoDotIndex + 1);
      const newLogoName = Date.now() + "-application-pdf." + logoExt;

      formData.append("name", application.name);
      formData.append("email", application.email);
      formData.append("descr", application.descr);
      // formData.append("question1");
      // formData.append("question2");
      formData.append("language", application.language);
      formData.append("info", application.info);
      formData.append("gitHub", application.gitHub);
      formData.append("linkedin", application.linkedin);
      formData.append("imgFolder", "application");
      formData.append("image", application.file, newLogoName);

      try {
        await axios
          .post("http://localhost:4003/upload-many", formData, config)
          .then(async (res) => {
            let status = res.data.status;

            if (status) {
              await axios
                .post("http://localhost:4003/application/create", {
                  name: application.name,
                  email: application.email,
                  phone: 'mgsm',
                  descr: application.descr,
                  question1: 'quesytion1',
                  question2: 'question2',
                  language: application.language,
                  info: application.info,
                  gitHub: application.gitHub,
                  linkedin: application.linkedin,
                  file: 'image',
                  jobId: 'jobId',
                })
                .then(() => {

                });
            }
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Images requeired");
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    console.log(selectedAnswers);
  };

  const handlerChange = (e) => {
    // setApplication({code: e.code, number: e.number,}, e.target.value)
    if (e?.target?.name === "name") {
      setApplication((prev) => ({ ...prev, name: e.target.value }));
      console.log(application, 'name');
    }
    if (e?.target?.name === "email") {
      setApplication((prev) => ({ ...prev, email: e.target.value }));
      console.log(application, 'email');
    }
    if (e?.target?.name === "descr") {
      setApplication((prev) => ({ ...prev, descr: e.target.value }));
      console.log(application, 'descr');
    }
    if (e?.target?.name === "language") {
      setApplication((prev) => ({ ...prev, language: e.target.value }));
      console.log(application, 'language');
    }
    if (e?.target?.name === "info") {
      setApplication((prev) => ({ ...prev, info: e.target.value }));
      console.log(application, 'info');
    }
    if (e?.target?.name === "gitHub") {
      setApplication((prev) => ({ ...prev, gitHub: e.target.value }));
      console.log(application, 'gitHub');
    }
    if (e?.target?.name === "linkedin") {
      setApplication((prev) => ({ ...prev, linkedin: e.target.value }));
      console.log(application, 'linkedin');
    }
    else {
      setApplication((prev) => ({ ...prev, file: e }));
      console.log(application.file, 'file');
    }
  }

  return (
    <div className={styles.submitWrapper}>
      <div className='container_bordered'>
        <h2 className={styles.font__51}>{title}</h2>
        <div className='container_bordered-child'>
          <div className={styles.infoImport}>
            <Input
              type={"default"}
              name={"name"}
              // value={value}
              icon={true}
              emptyFieldErr={false}
              inputType={"text"}
              placeholder={"Enter.."}
              label={"FULL NAME"}
              subLabel={""}
              onChange={(e) => { handlerChange(e) }}
            />

            <Input
              type={"default"}
              name={"email"}
              icon={false}
              label={'E-MAIL'}
              editable={true}
              // value={""}
              subLabel={""}
              placeholder={'Enter..'}
              onChange={(e) => { handlerChange(e) }}
            />

            <Input
              type={'label-input-phone-number'}
              label={'PHONE NUMBER'}
              name={'phone'}
              // value={''}application
              onChange={(e) => { setPhone(e) }}
            />

            <Input
              type={'textarea'}
              label={'Describe any experience with cryptocurrency'}
              name={'descr'}
              rows={10}
              cols={20}
              placeholder={'Enter..'}
              resize={'none'}
              customStyles={{ resize: "none", height: "126px" }}
              onChange={(e) => { handlerChange(e) }}
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
              name={'language'}
              rows={10}
              cols={20}
              placeholder={'Enter..'}
              resize={'none'}
              customStyles={{ resize: "none", height: "126px" }}
              onChange={(e) => { handlerChange(e) }}
            />

            <Input
              type={'textarea'}
              label={'Additional information'}
              name={'info'}
              rows={10}
              cols={20}
              placeholder={'Enter..'}
              resize={'none'}
              customStyles={{ resize: "none", height: "126px" }}
              onChange={(e) => { handlerChange(e) }}
            />

            <Input
              type={'default'}
              name={"gitHub"}              // value={value}console.log(e.target.value);
              icon={true}
              emptyFieldErr={false}
              inputType={'text'}
              placeholder={'Enter..'}
              label={'Github'}
              subLabel={''}
              onChange={(e) => { handlerChange(e) }}
            />

            <Input
              type={'default'}
              name={'linkedin'}
              // value={value}
              icon={true}
              emptyFieldErr={false}
              inputType={'text'}
              placeholder={'Enter..'}
              label={'Linkedin'}
              subLabel={''}
              onChange={(e) => { handlerChange(e) }}
            />

            <Input
              type={"label-input-upload-document"}
              name={"file"}
              emptyFieldErr={true}
              htmlFor={""}
              customStyles={{ width: "fit-content" }}
              onChange={(e) => { handlerChange(e) }}
            />

            <Button
              label={'submit Now'}
              size={'btn-lg'}
              type={'btn-primary'}
              arrow={'arrow-right'}
              element={'button'}
              disabled={false}
              onClick={submitHandler}
            />
            {showSuccessMessage && <div style={{color: 'green'}}>your application is sucsessful</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitApplication;
