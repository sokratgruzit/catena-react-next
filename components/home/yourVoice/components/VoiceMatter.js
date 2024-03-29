import { Input, Button, HelpText, HelpCard } from '@catena-network/catena-ui-module';
import { useState, useEffect } from 'react';
import { useValidation } from '../../../../hooks/useValidation';
import createAxiosInstance from '../../../../pages/api/axios';
import { useDispatch } from 'react-redux';

import styles from './VoiceMatters.module.css';

const VoiceMatter = () => {
  const [active, setActive] = useState(false)
  const [result, setResult] = useState("")
  const [email, setEmail] = useState("");
  const [emptyField, setEmptyField] = useState("")
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    suggestion: '',
  });

  const dispatch = useDispatch();
  const [pageReady, setPageReady] = useState(false);
  let microSchemes;
  if (window.innerWidth > 1240) {
    microSchemes = [
      [1, 2, 10, 11, 12, 13, 14, 15, 16, 17, 18, 22, 23, 24],
    ];
  }

  if (window.innerWidth < 1240) {
    microSchemes = [
      [1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    ];
  }

  const setScheme = (num) => {
    dispatch({
      type: "SET_MICHROSCHEME_ARRAY",
      microschemeArray: microSchemes[num]
    });
  }

  useEffect(() => {
    setTimeout(() => {
      setPageReady(true);
      dispatch({
        type: "SET_MICHROSCHEME_ARRAY",
        microschemeArray: microSchemes[0]
      });
    }, 400);
  }, []);

  const axios = createAxiosInstance();

  const chngeHandler = e => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value)
    }
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!validationErrors?.email?.failure && formData.email && formData.name && formData.suggestion) {
      axios.post(`${process.env.NEXT_PUBLIC_URL}/your-voice/create-feedback`, formData)
        .then(res => {
          setResult("success")
          console.log(res);
        })
        .catch(err => {
          setResult("error")
          console.log(err);
        })
        .then(res => {
          setActive(true)
          setTimeout(() => {
            setActive(false)
          }, 2000);
        })
      setEmail("");
      setFormData({
        email: '',
        name: '',
        suggestion: '',
      });
      setEmptyField(false);
    } else {
      setEmptyField(true);
      if (!formData.name.trim() && !formData.email.trim() && !formData.suggestion.trim()) {
        setFormData(prevState => ({
          ...prevState,
          name: "",
          suggestion: "",
          email: ""
        }));

        setEmptyField(true);
      }
      console.log('Invalid format. Data not sent.');
    }

  };

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

  return (
    <div className={`${styles.main} container`}>
      <HelpCard
        result={result}
        body={"notification"}
        active={active}
      />
      <div className={`${styles.box} `}>
        <h1 className={`${styles.container} pB-50 tYAnimation ${pageReady ? 'animate' : ''}`}>
          <div className={`${styles.blackTitle} font-90 ttl`}>Your Voice </div>
          <div className={`${styles.retTitle} font-90 ttl`}> Matter</div>
        </h1>
        <div className={`${styles.Title} delay1 tYAnimation ${pageReady ? 'animate' : ''}`}>
          <h2>
            Community feedback helps CATENA improve and grow. Users who provide feedback on their experience help ensure
            the growth of CATENA and lead us in the direction that the community needs to be. Please use the following
            form to contribute your thoughts to CATENA:
          </h2>
        </div>
      </div>
      <div className={`${styles.bottomBox} tYAnimation ${pageReady ? 'animate' : ''}`}>
        <div className={`${styles.hederBox} `}>
          <form className={styles.from}>
            <Input
              type={"default"}
              name={"email"}
              icon={false}
              label={'EMAIL'}
              editable={true}
              subLabel={""}
              placeholder={'Enter..'}
              validation={"email"}
              value={email}
              onChange={chngeHandler}
              emptyFieldErr={emptyField && !formData.email.trim()}
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
              type={'default'}
              icon={false}
              label={'Name'}
              subLabel={''}
              placeholder={'Enter'}
              value={formData.name}
              emptyFieldErr={emptyField && !formData.name.trim()}
              name='name'
              onChange={chngeHandler}
            />
            <Input
              type={'textarea'}
              label={'Make a suggestion'}
              value={formData.suggestion}
              emptyFieldErr={emptyField && !formData.suggestion.trim()}
              onChange={chngeHandler}
              name='suggestion'
              rows={10}
              cols={20}
              placeholder={'Please describe your feedback in detail with corresponding screenshots'}
              resize={'none'}
              customStyles={{ width: '100%', resize: 'none' }}
            />
            <Button
              label={'Submit'}
              size={'btn-lg'}
              type={'btn-primary'}
              arrow={'arrow-right'}
              element={'button'}
              disabled={false}
              onClick={handleSubmit}
              className={styles.btnBlu}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default VoiceMatter;