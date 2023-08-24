import { Input, Button, HelpText } from '@catena-network/catena-ui-module';
import React from 'react';
import { Quiz } from '@catena-network/catena-ui-module';
import { useState, useEffect } from 'react';
import styles from './SubmitAplication.module.css';
import { lang } from 'moment';
import createAxiosInstance from '../../../../../../pages/api/axios';
import { useValidation } from '../../../../../../hooks/useValidation';

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

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState("");

  const axios = createAxiosInstance();

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [application, setApplication] = useState({
    name: '',
    email: '',
    phone: '',
    descr: '',
    quiz: [],
    language: '',
    info: '',
    gitHub: '',
    linkedin: '',
    file: '',
    jobId: '',
  });



  const handleOptionChange = (questionIndex, optionIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(updatedAnswers);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!validationErrors?.email?.failure && application.name && application.file && application.language && application.descr && application.email && application.phone) {
      console.log('Sending data to the backend:', application)
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }

      setEmail('')
      setApplication({
        name: '',
        email: '',
        phone: '',
        descr: '',
        quiz: [],
        language: '',
        info: '',
        gitHub: '',
        linkedin: '',
        file: '',
        jobId: '',});

      if (application.file) {
        const formData = new FormData();

        const logoDotIndex = application.file.name.lastIndexOf(".");
        const logoExt = application.file.name.substring(logoDotIndex + 1);
        const newLogoName = Date.now() + "-application-pdf." + logoExt;

        formData.append("imgFolder", "application");
        formData.append("image", application.file, newLogoName);

        try {
          await axios
            .post(`${process.env.NEXT_PUBLIC_URL}/upload-many`, formData, config)
            .then(async (res) => {
              let status = res.data.status;

              if (status) {
                await axios
                  .post(`${process.env.NEXT_PUBLIC_URL}/application/create`, {
                    name: application.name,
                    email: application.email,
                    phone: application.phone,
                    descr: application.descr,
                    quiz: selectedAnswers,
                    language: application.language,
                    info: application.info,
                    gitHub: application.gitHub,
                    linkedin: application.linkedin,
                    file: 'image',
                    jobId: 'jobId',
                  })
                  .then(() => {
                    setSuccessMessage('Application submitted successfully!');
                    setErrorMessage('');
                  });
              }
            });
        } catch (err) {
          setErrorMessage('An error occurred while sending your application.');
          setSuccessMessage('');
          console.log(err);
        }
      } else {
        setErrorMessage('An error occurred while processing your application.');
        setSuccessMessage('');
        console.log("Images requeired");
      }
    } else {
      console.log('Invalid format. Data not sent.');
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    console.log(selectedAnswers);
  };

  const handlerChange = (e) => {

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
    // if (e?.target?.name === "file") {
    //   setApplication((prev) => ({ ...prev, file: e }));
    //   console.log(application.file, 'file');
    // }
    else {
      setApplication((prev) => ({ ...prev, file: e }));
      console.log(application.file, 'file');
    }
  }

  let helpTexts = {
    email: {
      validationType: "email",
      success: "Email is valid",
      failure: "Invalid email format",
    },
  };

  const validationErrors = useValidation(
    {
      email: email || "",
    },
    helpTexts
  );

  const changeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value)
    }
  };

  return (
    <div className={styles.submitWrapper}>
      <div className='container_bordered'>
        <h2 className={styles.font__51}>{title}</h2>
        <div className='container_bordered-child'>
          <div className={styles.infoImport}>
            <Input
              type={"default"}
              name={"name"}
              required={true}
              value={application.name}
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
              required={true}
              name={"email"}
              icon={false}
              label={'E-MAIL'}
              editable={true}
              subLabel={""}
              placeholder={'Enter..'}
              validation={"email"}
              value={email}
              onChange={(e) => {
                handlerChange(e)
                changeHandler(e)
              }}
              statusCard={
                validationErrors?.email && (
                  <HelpText
                    status={validationErrors.email.failure ? "error" : "success"}
                    title={validationErrors.email.failure || validationErrors.email.success}
                    fontSize={"font-12"}
                    icon={true}
                  />
                )
              }
            />

            <Input
              type={'label-input-phone-number'}
              required={true}
              label={'PHONE NUMBER'}
              name={'phone'}
              value={application.phone}
              onChange={(e) => { setApplication((prev) => ({ ...prev, phone: e })); }}
              statusCard={
                validationErrors?.amount && (
                  <HelpText
                    status={validationErrors.amount.failure ? "error" : "success"}
                    title={
                      validationErrors.amount.failure ||
                      validationErrors.amount.success
                    }
                    fontSize={"font-12"}
                    icon={true}
                  />
                )
              }
            />

            <Input
              type={'textarea'}
              label={'Describe any experience with cryptocurrency'}
              name={'descr'}
              value={application.descr}
              rows={10}
              cols={20}
              placeholder={'Enter..'}
              resize={'none'}
              customStyles={{ resize: "none", height: "126px" }}
              onChange={(e) => { handlerChange(e) }}
            />

            <Quiz
              selectedAnswers={selectedAnswers}
              required={true}
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
              required={true}
              label={'Languages you can speak/write at a Business level'}
              name={'language'}
              value={application.language}
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
              value={application.info}
              rows={10}
              cols={20}
              placeholder={'Enter..'}
              resize={'none'}
              customStyles={{ resize: "none", height: "126px" }}
              onChange={(e) => { handlerChange(e) }}
            />

            <Input
              type={'default'}
              name={"gitHub"}
              value={application.gitHub}
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
              value={application.linkedin}
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
              required={true}
              name={"file"}
              value={application.file}
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
            {/* {successMessage && <div className="success-message">{successMessage}</div>}
            {errorMessage && <div className="error-message">{errorMessage}</div>} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitApplication;