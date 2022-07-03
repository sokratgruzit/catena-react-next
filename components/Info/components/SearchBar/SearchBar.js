import React, { useState, useRef, useEffect } from 'react';

import TabFilter from '../../../UI/filters/TabFilter';

import styles from './SearchBar.module.css';
import tableStyles from '../../components/InfoRoutes/InfoRoutes.module.css';

let tabsData = [
  {
    id: 0,
    label: 'Search',
  },
  {
    id: 1,
    label: 'Watchlist',
  },
];

function useOutsideAlerter(ref, setOpenSearchResults) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenSearchResults(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setOpenSearchResults]);
}

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [openSearchResults, setOpenSearchResults] = useState(false);
  const [searchMode, setSearchMode] = useState('Search');

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpenSearchResults);

  const handleSearchModeChange = type => {
    setSearchMode(type);
  };

  return (
    <>
      <div className={styles.section}>
        <div ref={wrapperRef} className={styles.SearchBar}>
          <div className={styles.SearchBar__inputWrap}>
            <svg
              className={styles.SearchBar__icon}
              width='13'
              height='13'
              viewBox='0 0 13 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.74428 12.4136C2.59084 12.4136 0.0234375 9.8462 0.0234375 6.69276C0.0234375 3.53933 2.59084 0.971924 5.74428 0.971924C8.89772 0.971924 11.4651 3.53933 11.4651 6.69276C11.4651 9.8462 8.89772 12.4136 5.74428 12.4136ZM5.74428 1.80912C3.04851 1.80912 0.860634 4.00257 0.860634 6.69276C0.860634 9.38295 3.04851 11.5764 5.74428 11.5764C8.44005 11.5764 10.6279 9.38295 10.6279 6.69276C10.6279 4.00257 8.44005 1.80912 5.74428 1.80912Z'
                fill='white'
              />
              <path
                d='M11.6039 12.9718C11.4978 12.9718 11.3918 12.9328 11.3081 12.849L10.1918 11.7328C10.114 11.654 10.0703 11.5477 10.0703 11.437C10.0703 11.3262 10.114 11.2199 10.1918 11.1412C10.3537 10.9793 10.6216 10.9793 10.7834 11.1412L11.8997 12.2574C12.0616 12.4193 12.0616 12.6872 11.8997 12.849C11.816 12.9328 11.7099 12.9718 11.6039 12.9718Z'
                fill='white'
              />
            </svg>

            <input
              className={styles.SearchBar__input}
              type='search'
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              onClick={() => setOpenSearchResults(true)}
              placeholder='Search pools or tokens'
            />
          </div>
          {openSearchResults && (
            <div className={styles.Search__results}>
              <div className={styles.title}>
                <TabFilter
                  data={tabsData}
                  onClick={handleSearchModeChange}
                  activeMenu={searchMode}
                  css={{
                    wrap: styles.Activity__filterWrap,
                    filter: tableStyles.Activity__filter,
                    active: styles.Activity__filterActive,
                    item: styles.Activity__filter__item,
                  }}
                />
              </div>
              <div className={styles.Search__resultsBorder}>
                <div className={styles.Search__resultsRow}>
                  <p>Tokens</p>
                  <div className={styles.Search__resultsDiv}>
                    <p>Price</p>
                    <p>Volume 24H</p>
                    <p>Liquidity</p>
                  </div>
                </div>
                <p className={styles.Search__beforeResult}>
                  Search Pools or Tokens
                </p>
              </div>
              <div>
                <div className={styles.Search__resultsRow}>
                  <p>Pools</p>
                  <div className={styles.Search__resultsDiv}>
                    <p>Volume 24H</p>
                    <p>Volume 3H</p>
                    <p>Liquidity</p>
                  </div>
                </div>
                <p className={styles.Search__beforeResult}>
                  Search Pools or Tokens
                </p>
              </div>
              {searchMode === 'Watchlist' && <div>haha</div>}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
