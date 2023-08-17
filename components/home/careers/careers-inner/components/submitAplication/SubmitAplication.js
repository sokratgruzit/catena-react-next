import { Input, Button, HelpText } from '@catena-network/catena-ui-module';
import React from 'react';
import { Quiz } from '@catena-network/catena-ui-module';
import { useState } from 'react';
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
  const [depositAmount, setDepositAmount] = useState(5);
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

      // formData.append("name", application.name);
      // formData.append("email", application.email);
      // formData.append("descr", application.descr);
      // // formData.append("question1");
      // // formData.append("question2");
      // formData.append("language", application.language);
      // formData.append("info", application.info);
      // formData.append("gitHub", application.gitHub);
      // formData.append("linkedin", application.linkedin);
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
    else {
      setApplication((prev) => ({ ...prev, file: e }));
      console.log(application.file, 'file');
    }
  }

  let helpTexts = {
    amount: {
      validationType: "number",
      success: "amount is valid",
      failure:
        "must be a number and multiple of 5000 (e.g 5000, 10000, 15000))",
    },
    email: {
      validationType: "email",
      success: "Email is valid",
      failure: "Invalid email format",
    },
  };

  const validationErrors = useValidation(
    {
      amount: depositAmount || "",
      email: email || "",
    },
    helpTexts
  );

  const changeHandler = (i, e) => {
    console.log(i.target.value);
    const { name, value } = i.target;

    if (name === "amount") {
      setDepositAmount(value);
    } else if (name === "email") {
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
              inputType={"text"}
              placeholder={"0000"}
              name={"amount"}
              label={"Amount"}
              onChange={changeHandler}
              emptyFieldErr={false}
              value={depositAmount}
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
              subLabel={""}
              placeholder={'Enter..'}
              validation={"email"}
              value={email}
              // onChange={(e) => { handlerChange(e) }}
              onChange={changeHandler}
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
              label={'PHONE NUMBER'}
              name={'phone'}
              // value={''}application
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
              name={"gitHub"}
              // value={value}console.log(e.target.value);
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
            {/* {showSuccessMessage && <div style={{ color: 'green' }}>your application is sucsessful</div>} */}
            {successMessage && <div className="success-message">{successMessage}</div>}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitApplication;