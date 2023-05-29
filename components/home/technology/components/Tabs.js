import React, { useState } from "react";

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = index => {
    setActiveTab(index);
  };

  return (
    <div>
      <ul className='tab-list'>
        {tabs.map((tab, index) => (
          <li key={index} className={index === activeTab ? "active" : ""} onClick={() => handleTabClick(index)}>
            {tab.title}
          </li>
        ))}
      </ul>
      <div className='tab-content'>
        <h3>{tabs[activeTab].heading}</h3>
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
}
