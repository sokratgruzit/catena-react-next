import { React } from 'react';
import { useSwiper } from 'swiper/react';
import styles from './SlideIcons.module.css';

export default function SlideIcons() {
  const swiper = useSwiper();
  return (
    <>
      <div className={styles.icons}>
        <button className={styles.icon} onClick={() => swiper.slidePrev()}>
          <svg
            width='14'
            height='11'
            viewBox='0 0 14 11'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0.476562 5.97192C0.476562 5.74173 0.568005 5.52097 0.730775 5.3582L4.86284 1.22614C5.20179 0.887187 5.75134 0.887187 6.09029 1.22614C6.42924 1.56509 6.42924 2.11464 6.09029 2.45359L2.57195 5.97192L6.09029 9.49026C6.42924 9.82921 6.42924 10.3788 6.09029 10.7177C5.75134 11.0567 5.20179 11.0567 4.86284 10.7177L0.730775 6.58565C0.568005 6.42288 0.476562 6.20212 0.476562 5.97192Z'
              fill='#627EEA'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0.589844 5.97215C0.589844 5.4928 0.978432 5.10421 1.45778 5.10421L12.9146 5.10421C13.3939 5.10421 13.7825 5.4928 13.7825 5.97215C13.7825 6.4515 13.3939 6.84009 12.9146 6.84009L1.45778 6.84009C0.978433 6.84009 0.589844 6.4515 0.589844 5.97215Z'
              fill='#627EEA'
            />
          </svg>
        </button>
        <button className={styles.icon} onClick={() => swiper.slideNext()}>
          <svg
            width='15'
            height='11'
            viewBox='0 0 15 11'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M14.0898 5.97192C14.0898 5.74173 13.9984 5.52097 13.8356 5.3582L9.70357 1.22614C9.36462 0.887187 8.81507 0.887187 8.47612 1.22614C8.13717 1.56509 8.13717 2.11464 8.47612 2.45359L11.9945 5.97192L8.47612 9.49026C8.13717 9.82921 8.13717 10.3788 8.47612 10.7177C8.81507 11.0567 9.36462 11.0567 9.70357 10.7177L13.8356 6.58565C13.9984 6.42288 14.0898 6.20212 14.0898 5.97192Z'
              fill='#627EEA'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M13.9766 5.97215C13.9766 5.4928 13.588 5.10421 13.1086 5.10421L1.65185 5.10421C1.1725 5.10421 0.783914 5.4928 0.783914 5.97215C0.783914 6.4515 1.1725 6.84009 1.65185 6.84009L13.1086 6.84009C13.588 6.84009 13.9766 6.4515 13.9766 5.97215Z'
              fill='#627EEA'
            />
          </svg>
        </button>
      </div>
    </>
  );
}
