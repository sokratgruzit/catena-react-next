import { Circle3MoreDetails } from "../../../svg";
import React from "react";
import styles from "./CurrentRanking.module.css";
import { useMobileWidth } from "../../../../hooks/useMobileWidth";

const CurrentRanking = () => {
  const { width } = useMobileWidth();
  return (
    <div className={styles.currentRankingContainer}>
      <header className={styles.header}>
        {width < 1300 && (
          <div className={styles.votingPowerTitle}>
            <h3>VOTING POWER</h3>
            <Circle3MoreDetails />
          </div>
        )}
        Unknown
      </header>
      <div className={styles.rankingBody}>
        {width >= 1300 && (
          <div className={styles.votingPowerTitle}>
            <h3>VOTING POWER</h3>
            <Circle3MoreDetails />
          </div>
        )}
        <div className={styles.votingProgressWrap}>
          <div className={styles.rankingShow}>
            <svg
              width='47'
              height='46'
              viewBox='0 0 47 46'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g filter='url(#filter0_d_533_8572)'>
                <path
                  d='M32.5357 15.1429H29.8527C29.8053 15.1429 29.7599 15.124 29.7264 15.0906C29.6929 15.0571 29.6741 15.0116 29.6741 14.9643C29.6741 14.746 29.6741 14.5625 29.6741 14.425C29.6732 14.0467 29.5222 13.6843 29.2544 13.4172C28.9866 13.15 28.6238 13 28.2455 13V13L18.2549 13.0116C17.877 13.0123 17.5148 13.1627 17.2476 13.4299C16.9804 13.697 16.8298 14.0592 16.829 14.4371C16.829 14.5813 16.829 14.7594 16.829 14.9643C16.829 15.0116 16.8102 15.0571 16.7767 15.0906C16.7432 15.124 16.6978 15.1429 16.6504 15.1429H13.9643C13.7748 15.1429 13.5932 15.2181 13.4592 15.3521C13.3253 15.486 13.25 15.6677 13.25 15.8571V16.5714C13.25 19.0058 14.5893 21.5915 16.6661 22.1674C16.7275 22.1845 16.783 22.2181 16.8267 22.2645C16.8704 22.311 16.9005 22.3685 16.9138 22.4308C17.1714 23.6313 17.9638 24.7746 19.2089 25.717C20.1424 26.4237 21.2558 26.9446 22.2567 27.167C22.3358 27.1847 22.4066 27.2288 22.4573 27.2921C22.508 27.3554 22.5357 27.4341 22.5357 27.5152V31.3929C22.5357 31.4402 22.5169 31.4856 22.4834 31.5191C22.4499 31.5526 22.4045 31.5714 22.3571 31.5714H19.6987C19.3143 31.5714 18.9844 31.867 18.9652 32.2513C18.9605 32.3479 18.9755 32.4444 19.0093 32.535C19.043 32.6257 19.0948 32.7085 19.1615 32.7785C19.2282 32.8485 19.3084 32.9042 19.3973 32.9423C19.4862 32.9804 19.5819 33 19.6786 33H26.8013C27.1857 33 27.5156 32.7045 27.5348 32.3201C27.5395 32.2235 27.5245 32.127 27.4907 32.0364C27.457 31.9458 27.4052 31.863 27.3385 31.793C27.2718 31.723 27.1916 31.6672 27.1027 31.6292C27.0138 31.5911 26.9181 31.5714 26.8214 31.5714H24.1429C24.0955 31.5714 24.0501 31.5526 24.0166 31.5191C23.9831 31.4856 23.9643 31.4402 23.9643 31.3929V27.5152C23.9643 27.4341 23.992 27.3554 24.0427 27.2921C24.0934 27.2288 24.1642 27.1847 24.2433 27.167C25.2442 26.9438 26.3576 26.4237 27.2911 25.717C28.5362 24.7746 29.3286 23.6313 29.5862 22.4308C29.5995 22.3685 29.6296 22.311 29.6733 22.2645C29.717 22.2181 29.7725 22.1845 29.8339 22.1674C31.9107 21.5915 33.25 19.0058 33.25 16.5714V15.8571C33.25 15.6677 33.1747 15.486 33.0408 15.3521C32.9068 15.2181 32.7252 15.1429 32.5357 15.1429ZM16.8214 20.4205C16.8213 20.4518 16.813 20.4825 16.7973 20.5096C16.7816 20.5367 16.759 20.5591 16.7319 20.5747C16.7047 20.5903 16.674 20.5985 16.6427 20.5985C16.6114 20.5985 16.5807 20.5902 16.5536 20.5746C16.0955 20.3018 15.7612 19.8884 15.5652 19.5973C15.0335 18.8076 14.717 17.7817 14.6817 16.7567C14.6808 16.7327 14.6847 16.7087 14.6933 16.6863C14.7019 16.6639 14.7149 16.6434 14.7316 16.6261C14.7482 16.6088 14.7682 16.595 14.7903 16.5856C14.8125 16.5762 14.8362 16.5714 14.8603 16.5714H16.646C16.6933 16.5714 16.7388 16.5902 16.7723 16.6237C16.8057 16.6572 16.8246 16.7026 16.8246 16.75C16.8237 17.9754 16.8214 19.3781 16.8214 20.4205ZM30.9344 19.5973C30.7384 19.8884 30.4045 20.3018 29.9464 20.5746C29.9193 20.5902 29.8885 20.5985 29.8572 20.5985C29.8259 20.5985 29.7951 20.5903 29.7679 20.5746C29.7408 20.5589 29.7183 20.5364 29.7026 20.5093C29.6869 20.4822 29.6786 20.4514 29.6786 20.4201C29.6786 19.2366 29.6786 17.892 29.6763 16.75C29.6763 16.7026 29.6952 16.6572 29.7286 16.6237C29.7621 16.5902 29.8076 16.5714 29.8549 16.5714H31.6406C31.6647 16.5714 31.6884 16.5762 31.7105 16.5856C31.7327 16.595 31.7527 16.6088 31.7693 16.6261C31.786 16.6434 31.799 16.6639 31.8076 16.6863C31.8161 16.7087 31.8201 16.7327 31.8192 16.7567C31.7839 17.7817 31.4665 18.8076 30.9348 19.5973H30.9344Z'
                  fill='#0500FF'
                />
              </g>
              <defs>
                <filter
                  id='filter0_d_533_8572'
                  x='0.25'
                  y='0'
                  width='46'
                  height='46'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'>
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation='6.5' />
                  <feComposite in2='hardAlpha' operator='out' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.0196078 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_533_8572'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_533_8572'
                    result='shape'
                  />
                </filter>
              </defs>
            </svg>
            -
          </div>
          <span className={styles.progressBar}>
            <span
              className={styles.progress}
              style={{
                width: `${(0.3 / 8) * 100}%`,
              }}></span>
          </span>
          <div className={styles.progressBarPoints}>
            <p>-</p>
            <p>-</p>
          </div>
        </div>
      </div>
      <div className={styles.topCorner}></div>
    </div>
  );
};

export default CurrentRanking;