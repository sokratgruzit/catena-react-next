import { useState } from 'react';
import { Button } from '@catena-network/catena-ui-module';
import styles from '../styles/Banner.module.css';

export default function Banner() {
  const [firstAnimation, setFirstAnimation] = useState(false);
  // const [active, setActive] = useState(false);
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
      links: [{ url: '/images/catena-logo-versions.zip', text: 'catena-logo-versions' }],
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <h2 className='font-40 '>Download All Logos</h2>
        <div className={styles.mainContainerDownload}>
          {/* <a href='/resources/core-logo-pack.zip' target='_blank' className={styles.button}>
            Download
          </a> */}
          {/* <Download buttonClass='bluebtn' buttonTitle='Download' /> */}
          {itemData.map((item, index) => (
            <div className='item' key={index} data-aos="fade-up">
              {item.links.map((link, linkIndex) => (
                <Button
                  onClick={() => handleDownload(link.url, link.text)}
                  key={linkIndex}
                  label={'Download'}
                  size={'btn-lg'}
                  type={'btn-primary'}
                  arrow={false}
                  element={'button'}
                  disabled={false}
                  className={styles.blueBtn}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
