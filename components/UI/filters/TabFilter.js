import React, { useState } from 'react';

const TabFilter = props => {
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleActiveFilter = label => {
    if (props.allowMultipleTabs) {
      if (activeFilters.includes(label)) {
        setActiveFilters(activeFilters.filter(item => item !== label));
      } else {
        setActiveFilters([...activeFilters, label]);
      }
    } else {
      setActiveFilters([label]);
    }
  };

  const clearAllTabs = () => {
    setActiveFilters([]);
    props.onClick('');
  };

  return (
    <div className={props.css.wrap}>
      <div className={props.css.filter}>
        {props.data.map((tab, index) => {
          const tabContent = tab.svg ? <>{tab.svg}</> : tab.label;
          const isActive = activeFilters.includes(tab.label);

          return (
            <div
              key={index}
              onClick={() => {
                toggleActiveFilter(tab.label);
                props.onClick(tab.label);
              }}
              className={isActive ? `${props.css.active} ${props.css.item}` : props.css.item}
            >
              {tabContent}
              {isActive && props.showCloseButton && (
                <button
                  className={props.css.closeButton}
                  onClick={e => {
                    e.stopPropagation();
                    toggleActiveFilter(tab.label);
                  }}
                >
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z'
                      stroke='#212121'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9.17004 14.8299L14.83 9.16992'
                      stroke='#212121'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M14.83 14.8299L9.17004 9.16992'
                      stroke='#212121'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              )}
            </div>
          );
        })}
      </div>
      {props.showClearButton && (
        <button className={props.css.clearButton} onClick={clearAllTabs}>
          Clear
        </button>
      )}
    </div>
  );
};

export default TabFilter;
