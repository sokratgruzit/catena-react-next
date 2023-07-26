import { useState } from 'react';

import styles from '../styles/Download.module.css';

const Download = ({ buttonClass, buttonTitle }) => {
  const [firstAnimation, setFirstAnimation] = useState(false);
  const [active, setActive] = useState(false);

  const visibilityChanged = () => {};

  const handleFirstAnimation = () => {
    setTimeout(() => {
      setFirstAnimation(true);
    }, 100);
  };

  const handleDownload = (url, filename) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(blobUrl);
      })
      .catch(error => {
        console.error('Error fetching the file:', error);
      });
  };

  const itemData = [
    {
      links: [{ url: '/images/guidelines/firstUsage.png', text: 'Download image 1' }],
    },
  ];

  return (
    <div className='resources'>
      {itemData.map((item, index) => (
        <div className='item' key={index}>
          {item.links.map((link, linkIndex) => (
            <button
              key={linkIndex}
              onClick={() => handleDownload(link.url, link.text)}
              className={`${styles.button} ${styles[buttonClass]}`}
            >
              {buttonTitle}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Download;
