import React, { useState, useRef, useEffect } from 'react';

import { SearchIcon } from '../../../svg';
import { Tabs } from "@catena-network/catena-ui-module";

import styles from './SearchBar.module.css';

function useOutsideAlerter(ref, setOpenSearchResults) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenSearchResults(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setOpenSearchResults]);
}

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [openSearchResults, setOpenSearchResults] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Search');

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpenSearchResults);

  const navigationHandler = activeItem => {
    setActiveFilter(activeItem);
  };

  return (
    <>
      <div className={styles.section}>
        <div ref={wrapperRef} className={styles.SearchBar}>
          <div style={{ zIndex: openSearchResults ? 101 : 10 }} className={styles.SearchBar__inputWrap}>
            <SearchIcon className={styles.SearchBar__icon} />
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
            <>
              <div className={styles.background}></div>
              <div className={styles.Search__results}>
                <div className={styles.title}>
                <Tabs 
                  onClick={navigationHandler}
                  type={"two-component-tabs-with-text"} 
                  leftBtnText="Search" 
                  rightBtnText="Watchlist"
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
                  <p style={{color: "#162029"}} className={styles.Search__beforeResult}>hghhghgh</p>
                </div>
                <div>
                  <div style={{margin: "30px 0 25px 20px"}} className={styles.Search__resultsRow}>
                    <p>Pools</p>
                    <div className={styles.Search__resultsDiv}>
                      <p>Volume 24H</p>
                      <p>Volume 3H</p>
                      <p>Liquidity</p>
                    </div>
                  </div>
                  <p className={styles.Search__beforeResult}>Search Pools or Tokens</p>
                </div>
                {activeFilter === 'Watchlist' && <div>haha</div>}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
