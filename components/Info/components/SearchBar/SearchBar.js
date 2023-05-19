import React, { useState, useRef, useEffect } from 'react'

import { SearchIcon } from '../../../svg'
import TabFilter from '../../../UI/filters/TabFilter'

import styles from './SearchBar.module.css'

let tabsData = [
  {
    id: 0,
    label: 'Search',
  },
  {
    id: 1,
    label: 'Watchlist',
  },
]

function useOutsideAlerter(ref, setOpenSearchResults) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenSearchResults(false)
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, setOpenSearchResults])
}

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('')
  const [openSearchResults, setOpenSearchResults] = useState(false)
  const [searchMode, setSearchMode] = useState('Search')

  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, setOpenSearchResults)

  const handleSearchModeChange = type => {
    setSearchMode(type)
  }

  // useEffect(() => {
  //   console.log(searchValue);
  // }, [searchValue]);

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
                  <TabFilter
                    data={tabsData}
                    onClick={handleSearchModeChange}
                    activeMenu={searchMode}
                    css={{
                      wrap: styles.Activity__filterWrap,
                      filter: styles.Activity__filter,
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
                  <p className={styles.Search__beforeResult}>Search Pools or Tokens</p>
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
                  <p className={styles.Search__beforeResult}>Search Pools or Tokens</p>
                </div>
                {searchMode === 'Watchlist' && <div>haha</div>}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default SearchBar
