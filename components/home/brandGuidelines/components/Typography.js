import styles from '../styles/Typography.module.css';

export default function Typography() {
  return (
    <div className={styles.typography}>
      <div className={styles.line}>
        <svg width='36' height='20' viewBox='0 0 36 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            opacity='0.3'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M9.10239 0.704102L0.964844 19.0001H6.22676L7.78676 15.1361H14.2854L15.8454 19.0001H21.1073L12.9697 0.704102H9.10239ZM11.0481 4.75213L13.9761 11.6881H13.9761L11.0481 4.7521L11.0481 4.75213ZM12.4685 10.6881H9.60847L11.0443 7.31448L12.4685 10.6881ZM23.2997 16.8655C21.8808 15.6647 21.0304 13.8465 21.0304 11.8081C21.0304 9.54311 22.0804 7.5406 23.7937 6.35724C22.0804 7.5406 21.0304 9.5431 21.0304 11.8081C21.0304 13.8465 21.8808 15.6647 23.2997 16.8655ZM31.6864 6.79208C31.6864 6.79209 31.6864 6.79209 31.6864 6.7921V5.5921H31.6864V6.79208ZM30.6193 19.0001L30.6252 18.6884C29.7852 19.0933 28.7549 19.3601 27.5104 19.3601C23.1348 19.3601 20.0304 15.9526 20.0304 11.8081C20.0304 7.66847 23.1301 4.2321 27.5104 4.2321C28.6861 4.2321 29.7725 4.49249 30.6864 4.91686V4.5921H35.2544V19.0001H30.6193ZM30.8304 11.7841C30.8304 12.9069 30.4585 13.7054 29.9305 14.2228C29.3969 14.7456 28.6276 15.0561 27.7024 15.0561C25.9823 15.0561 24.6224 13.6411 24.6224 11.7841C24.6224 9.93464 25.9751 8.5361 27.7024 8.5361C28.6277 8.5361 29.398 8.8467 29.932 9.36781C30.4602 9.88324 30.8304 10.6757 30.8304 11.7841ZM30.395 15.1486C31.2771 14.422 31.8304 13.2778 31.8304 11.7841C31.8304 10.2721 31.2533 9.11701 30.3382 8.39571C31.2533 9.11701 31.8304 10.2721 31.8304 11.7841C31.8304 13.2778 31.2771 14.422 30.395 15.1486ZM28.5413 15.9838C28.2709 16.0317 27.9904 16.0561 27.7024 16.0561C27.7024 16.0561 27.7024 16.0561 27.7024 16.0561C27.9904 16.0561 28.2709 16.0317 28.5413 15.9838Z'
            fill='#00050F'
          />
        </svg>
        <h6>Typography</h6>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Typography</h2>
        <div className={styles.typefaces}>
          <h4>About Typefaces</h4>
          <p>
            CATENA uses Lack and Noto Sans font family. Lack is a brave, contemporary and experimental typeface and
            comes in a single weight with its italic.Noto is a global font collection for writing in all modern and
            ancient languages. It has italic styles, multiple weights and widths.
          </p>
        </div>
      </div>
    </div>
  );
}
