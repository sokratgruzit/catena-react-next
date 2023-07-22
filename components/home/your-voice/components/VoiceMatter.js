import { Input, Button } from '@catena-network/catena-ui-module';

import styles from './VoiceMatters.module.css';

const VoiceMatter = props => {
  const { title, description } = props;
  const changeHandler = (i, e) => {
    console.log(i.target.value);
  };

  return (
    <div className={styles.main}>

      <div className={`${styles.box} continer`}>
        <div className={styles.container}>
          <img src="/images/VoiceMatter/YourVoiceMatter.png" className={styles.img} />
        </div>
        <div className={styles.Title}>
          <h2 className='font-10'>
            Community feedback helps CATENA improve and grow. Users who provide feedback on
            their experience help ensure the growth of CATENA and lead us in the direction that the
            community needs to be. Please use the following form to contribute your thoughts to CATENA:
          </h2>
        </div>
      </div>

      <div className={`${styles.bottomBox} `}>
        <div className={`${styles.hederBox}`}>
          <form>
            <div className={styles.asdwa}>
              <Input
                className={styles.llll}
                type={'default'}
                icon={false}
                label={'EMAIL'}
                subLabel={''}
                placeholder={'Enter'}
                // value={""}
                onChange={changeHandler}
                customStyles={{ width: '500px' }}
              />
            </div>
            <div>
              <Input
                type={'default'}
                icon={false}
                label={'Name'}
                subLabel={''}
                placeholder={'Enter'}
                // value={""}
                onChange={changeHandler}
                customStyles={{ width: '500px' }}
              />
            </div>
            <div>
              <Input
                type={'textarea'}
                label={'Make a suggestion'}
                // onChange={(e) => console.log(e.target.value)}
                // value={'sad'}
                // readOnly={true}
                name={'textarea input'}
                rows={10}
                cols={20}
                // disabled={true}
                placeholder={'Please describe your feedback in detail with corresponding screenshots'}
                // autoFocus={true}
                // emptyFieldErr={true}
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
                onClick={() => console.log('hi')}
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
