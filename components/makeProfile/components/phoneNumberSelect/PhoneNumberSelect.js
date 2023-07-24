import { useState, useRef, useEffect } from 'react';

import { countryData } from '../countries';

import styles from './PhoneNumberSelect.module.css';

const PhoneNumberSelect = ({ handleFullMobileNumberChange, value }) => {
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showList, setShowList] = useState(false);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const handleSelect = country => {
    setSelectedCountry(country);
    setShowList(false);
  };

  useEffect(() => {
    if (value) {
      setPhoneNumber(value.split(' ')[2]);
      setSelectedCountry(countryData.find(country => country.code === value.split(' ')[1]));
    }
  }, [value]);

  useEffect(() => {
    countryData.sort((a, b) => {
      if (a.country[0] < b.country[0]) {
        return -1;
      }
      if (a.country[0] > b.country[0]) {
        return 1;
      }
      return 0;
    });

    handleFullMobileNumberChange(`${selectedCountry?.flag} ${selectedCountry?.code} ${phoneNumber}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry, phoneNumber]);

  const handleInputChange = e => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setPhoneNumber(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.selectContainer}>
        <span className={styles.selectButton} onClick={() => setShowList(prev => !prev)}>
          {selectedCountry ? <span>{selectedCountry?.flag}</span> : <span className={styles.placeholder}>Select</span>}
          <span className={styles.arrowIcon}>
            {/* <ArrowSml
              className={`${showList ? styles.arrowUp : styles.arrowDown} ${
                styles.arrowSml
              } `}
            /> */}
            <svg
              width='10'
              height='5'
              viewBox='0 0 10 5'
              fill='white'
              xmlns='http://www.w3.org/2000/svg'
              className={`${showList ? styles.arrowUp : styles.arrowDown} ${styles.arrowSml} `}
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0.209209 0.198521C0.488155 -0.0661736 0.940416 -0.0661736 1.21936 0.198521L4.7475 3.5464C4.88522 3.67709 5.11478 3.67709 5.2525 3.5464L8.78064 0.198521C9.05958 -0.0661736 9.51184 -0.0661736 9.79079 0.198521C10.0697 0.463215 10.0697 0.892369 9.79079 1.15706L6.26265 4.50495C5.56704 5.16502 4.43296 5.16502 3.73735 4.50495L0.209209 1.15706C-0.0697365 0.892369 -0.0697365 0.463215 0.209209 0.198521Z'
              />
            </svg>
          </span>
        </span>
        {showList && (
          <ul className={styles.selectList} ref={listRef}>
            <h3 className={styles.selectCoutnryTitle}>Select Country</h3>
            {countryData.map(country => (
              <li
                key={country.country}
                onClick={() => handleSelect(country)}
                className={`${selectedCountry?.name === country.name ? styles.selectedOption : null} ${
                  styles.listCountryOption
                }
                `}
              >
                <p>{country.flag}</p>
                <p className='country-name'> {country.country}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.selectedCountryCode}>{selectedCountry?.code}</div>
        <input
          ref={inputRef}
          className={styles.phoneNumberInput}
          type='tel'
          value={phoneNumber}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default PhoneNumberSelect;
