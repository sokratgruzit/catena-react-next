import { React, useState } from 'react';

import Microscheme from '../../UI/microscheme/Microscheme';

import styles from './MainSlider.module.css';

const MainSlider = () => {
  const [levels, setLevels] = useState([]);
  let setLvl = array => {
    console.log(levels);
    if (levels.length > 0) {
      setLevels([]);
    } else {
      setLevels(array);
    }
  };
  return (
    <>
      <div className='container'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className='font-90'>font-90</h1>
        <h1 className='font-90 ttl'>font-90 title</h1>
        <h2 className='font-40'>font-40</h2>
        <h3 className='font-20'>font-20</h3>
        <div className='text'>
          <ul>
            <li>xai</li>
            <li>xai2</li>
            <li>xai3</li>
          </ul>
          <ol>
            <li>xai</li>
            <li>xai2</li>
            <li>xai3</li>
          </ol>
        </div>
      </div>
      <div className='container_bordered'>
        <div className='container_bordered-child'>
          Help build a borderless, data-responsible economy. Collaborate closely to turn our vision for a better,
          privacy-first world into a reality.Help build a borderless, data-responsible economy. Collaborate closely to
          turn our vision for a better, privacy-first world into a reality.Help build a borderless, data-responsible
          economy. Collaborate closely to turn our vision for a better, privacy-first world into a reality.Help build a
          borderless, data-responsible economy. Collaborate closely to turn our vision for a better, privacy-first world
          into a reality.Help build a borderless, data-responsible economy. Collaborate closely to turn our vision for a
          better, privacy-first world into a reality.
        </div>
      </div>
      {false && <Microscheme lvl={levels} />}
      <div
        className={styles.testBtn}
        onClick={() => {
          setLvl([7, 8, 9, 10]);
        }}
      >
        test
      </div>
    </>
  );
};

export default MainSlider;
