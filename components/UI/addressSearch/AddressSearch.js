import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './AddressSearch.module.css';
import Button from '../button/Button';

const AddressSearch = props => {
  const nftStatsData = useSelector(state => state.connect.nftStatisticsData);
  const [addresses, setAddresses] = useState([]);
  const [matchedAddress, setMatchedAddress] = useState(null);
  const [btnActive, setActiveBtn] = useState(false);

  useEffect(() => {
    if (nftStatsData) {
      setAddresses(Object.keys(nftStatsData));
    }
  }, [nftStatsData]);

  const searchInputHandler = event => {
    addresses.filter(item => {
      if (item === event.target.value) {
        setActiveBtn(true);
        setMatchedAddress(item);
      }
      if (item.length > event.target.value.length) {
        setActiveBtn(false);
      }
    });
  };

  let obj = '';

  if (props.type === 'market') {
    obj = (
      <div className={styles.Market__searchBar}>
        <input
          onChange={searchInputHandler}
          className={styles.Market__searchInput}
          type='text'
          placeholder='Search Address'
        />
        <Link
          href={`/nfts/${matchedAddress}`}
          className={`${btnActive === true ? styles.Market__searchBtn : styles.Market__searchBtn__disabled}`}
        >
          Search
        </Link>
      </div>
    );
  }
  if (props.type === 'creator') {
    obj = (
      <div className={styles.Creator__searchBar}>
        <input onChange={searchInputHandler} type='text' placeholder='Search Address' />
        <Link
          className={`${btnActive === true ? styles.Creator__searchIcon : styles.Creator__searchIcon__disabled}`}
          href={`/nfts/${matchedAddress}`}
        >
          <div className={`${styles.creatorBtn} ttl`}>
            <Button
              title={'Search'}
              type={'red'}
              customStyles={{
                width: '100%',
                transition: '.5s',
                border: '1px solid #162029',
                padding: '11px 34px',
              }}
            />
          </div>
        </Link>
      </div>
    );
  }

  return <>{obj}</>;
};

export default AddressSearch;
