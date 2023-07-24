import { Input, Button } from '@catena-network/catena-ui-module';
import { useState } from 'react';

import styles from './VoiceMatters.module.css';

const VoiceMatter = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    suggestion: "",
  });

  const chngHandler = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className={`${styles.main} container`}>
      <div className={`${styles.box} `}>
        <div className={styles.container}>
          <img src="/images/VoiceMatter/YourVoiceMatter.png" className={styles.img} />
        </div>
        <div className={styles.Title}>
          <h2>
            Community feedback helps CATENA improve and grow. Users who provide feedback on
            their experience help ensure the growth of CATENA and lead us in the direction that the
            community needs to be. Please use the following form to contribute your thoughts to CATENA:
          </h2>
        </div>
      </div>
      <div className={`${styles.bottomBox} `}>
        <div className={`${styles.hederBox} `}>
          <form>
            <div className={styles.asdwa}>
              <Input
                className={styles.llll}
                type={'default'}
                icon={false}
                label={'EMAIL'}
                subLabel={''}
                placeholder={'Enter'}
                name="email"
                value={formData.email}
                onChange={chngHandler}
              // customStyles={{ width: '500px' }}
              />
            </div>
            <div>
              <Input
                type={'default'}
                icon={false}
                label={'Name'}
                subLabel={''}
                placeholder={'Enter'}
                value={formData.name}
                name="name"
                onChange={chngHandler}
              // customStyles={{ width: '500px' }}
              />
            </div>
            <div>
              <Input
                type={'textarea'}
                label={'Make a suggestion'}
                value={formData.suggestion}
                onChange={chngHandler}
                name="suggestion"
                rows={10}
                cols={20}
                placeholder={'Please describe your feedback in detail with corresponding screenshots'}
                resize={'both'}

              />
              <label>Limit: 1000 characters</label>
            </div>
            <div>
              <Button
                label={'Button'}
                size={'btn-lg'}
                type={'btn-primary'}
                arrow={'arrow-right'}
                element={'button'}
                disabled={false}
                onClick={handleSubmit}
                className={styles.btnBlu}
              />
            </div>
          </form>
        </div>
      </div>
    </div >
  );
};

export default VoiceMatter;
