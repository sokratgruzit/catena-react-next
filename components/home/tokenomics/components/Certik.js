import Link from 'next/link';
import { useSelector } from 'react-redux';

import styles from '../Tokenomics.module.css';

function Certik() {
  const activeLang = useSelector(state => state.settings.activeLang);

  return (
    <div>
      <div className={`${styles.pt80}`} data-aos='fade-up'>
        <div className={`${styles.certik_text}`}>
          <p className='ttl'>Notice</p>
          <p>
            Due to the regulatory complexities or restrictions, Restrictions apply for the sale of CATENA tokens to any
            citizen or resident of the USA.
          </p>
        </div>
      </div>
      <div className={`${styles.certik_grid}`} data-aos='fade-up'>
        <div>
          <svg
            className={`${styles.certik_logo}`}
            width='420'
            height='100'
            viewBox='0 0 420 100'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M86.5877 15.3519L87.1144 18.5331C87.5297 21.4925 87.7221 24.4788 87.69 27.4669C87.6866 34.0703 86.889 40.6493 85.3144 47.0627C83.1851 55.7758 79.4763 64.0257 74.3714 71.4042C68.4726 79.878 59.9435 88.2126 47.511 94.9094L45.99 95.7282L44.4691 94.9094C32.0365 88.2126 23.511 79.878 17.6086 71.4042C12.5039 64.0256 8.7951 55.7757 6.66562 47.0627C5.0914 40.6505 4.29382 34.0726 4.29004 27.4704C4.25789 24.4822 4.45029 21.4959 4.86562 18.5366L5.39236 15.3554C5.43733 15.096 5.43044 14.8302 5.37211 14.5734C5.31378 14.3167 5.20515 14.074 5.05249 13.8593C4.89982 13.6447 4.70614 13.4623 4.4826 13.3228C4.25906 13.1833 4.01009 13.0893 3.75002 13.0463C3.48996 13.0033 3.22395 13.0122 2.96732 13.0723C2.7107 13.1325 2.46853 13.2428 2.25478 13.3969C2.04102 13.5509 1.85991 13.7458 1.72187 13.9701C1.58384 14.1944 1.49161 14.4437 1.4505 14.7038L0.923757 17.885C0.470685 21.0596 0.259613 24.2639 0.292362 27.4704C0.294874 34.3978 1.13111 41.2998 2.78306 48.0279C5.03176 57.2157 8.94635 65.9144 14.3331 73.6934C20.5598 82.6446 29.5912 91.446 42.5889 98.4321L45.0586 99.7596C45.3496 99.9166 45.675 99.9989 46.0057 99.9989C46.3364 99.9989 46.6619 99.9166 46.9528 99.7596L49.4191 98.4321C62.4028 91.4425 71.4377 82.6446 77.6749 73.6934C83.0588 65.915 86.971 57.2175 89.2179 48.0314C90.8699 41.3033 91.7062 34.4013 91.7086 27.4739C91.7413 24.2674 91.5302 21.0631 91.0772 17.8885L90.5505 14.7073C90.5094 14.4472 90.4172 14.1979 90.2791 13.9735C90.1411 13.7492 89.96 13.5544 89.7462 13.4004C89.5325 13.2463 89.2903 13.136 89.0337 13.0758C88.777 13.0156 88.511 13.0068 88.251 13.0498C87.9909 13.0928 87.7419 13.1867 87.5184 13.3263C87.2949 13.4658 87.1012 13.6482 86.9485 13.8628C86.7958 14.0774 86.6872 14.3201 86.6289 14.5769C86.5705 14.8337 86.5637 15.0994 86.6086 15.3589L86.5877 15.3519Z'
              fill='#E1AA4C'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M16.3084 13.1847L45.9944 4.12544L76.3432 13.3798C76.8513 13.5315 77.3989 13.476 77.8661 13.2255C78.3333 12.9749 78.6821 12.5497 78.8362 12.0428C78.9903 11.536 78.9371 10.9888 78.6882 10.5211C78.4394 10.0533 78.0151 9.7031 77.5084 9.54704L46.577 0.114985C46.1973 -0.00121888 45.7915 -0.00121888 45.4118 0.114985L15.1397 9.34495C14.8868 9.42049 14.6512 9.5452 14.4466 9.71191C14.242 9.87861 14.0724 10.084 13.9475 10.3164C13.8226 10.5488 13.7449 10.8035 13.7188 11.0659C13.6927 11.3283 13.7188 11.5933 13.7955 11.8457C13.8722 12.0981 13.998 12.3328 14.1658 12.5364C14.3336 12.7401 14.54 12.9086 14.7731 13.0324C15.0063 13.1561 15.2616 13.2327 15.5245 13.2576C15.7873 13.2826 16.0525 13.2554 16.3049 13.1777L16.3084 13.1847Z'
              fill='#E1AA4C'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M1.65036 15.9373L44.2085 98.906C44.3744 99.2302 44.6261 99.5029 44.9362 99.6944C45.2463 99.8858 45.603 99.9888 45.9676 99.992C46.3322 99.9952 46.6906 99.8986 47.0041 99.7127C47.3176 99.5268 47.5741 99.2586 47.7457 98.9373L73.6992 50.453L73.7376 50.3763L90.3492 15.8816C90.5744 15.4055 90.6023 14.86 90.427 14.3635C90.2516 13.867 89.8871 13.4597 89.4128 13.2301C88.9384 13.0006 88.3925 12.9673 87.8938 13.1376C87.395 13.3078 86.9837 13.6679 86.7492 14.1394L70.1655 48.6063L46.0469 93.6934L5.20501 14.1115C5.0873 13.8752 4.92382 13.6646 4.72404 13.4919C4.52426 13.3192 4.29214 13.1878 4.04115 13.1053C3.79015 13.0228 3.52526 12.9909 3.26183 13.0114C2.9984 13.0319 2.74166 13.1044 2.50649 13.2248C2.27132 13.3451 2.06239 13.5108 1.89181 13.7124C1.72124 13.914 1.5924 14.1473 1.51277 14.399C1.43314 14.6506 1.4043 14.9156 1.42792 15.1784C1.45153 15.4413 1.52714 15.6969 1.65036 15.9304V15.9373Z'
              fill='#E1AA4C'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M22.0215 52.8886H69.3483C69.8779 52.8886 70.3859 52.6784 70.7604 52.3043C71.1349 51.9302 71.3453 51.4229 71.3453 50.8938C71.3453 50.3648 71.1349 49.8574 70.7604 49.4833C70.3859 49.1092 69.8779 48.899 69.3483 48.899H22.0215C21.4918 48.899 20.9839 49.1092 20.6093 49.4833C20.2348 49.8574 20.0244 50.3648 20.0244 50.8938C20.0244 51.4229 20.2348 51.9302 20.6093 52.3043C20.9839 52.6784 21.4918 52.8886 22.0215 52.8886ZM154.029 35.676H123.24C122.708 35.6788 122.199 35.8911 121.822 36.2669C121.446 36.6427 121.234 37.1516 121.231 37.683V62.3659C121.234 62.8971 121.447 63.4054 121.823 63.781C122.199 64.1566 122.708 64.3692 123.24 64.3729H154.029V68.5541H123.24C122.428 68.5578 121.623 68.4007 120.872 68.0919C120.12 67.7831 119.438 67.3287 118.863 66.7549C118.289 66.1812 117.834 65.4995 117.525 64.7491C117.216 63.9988 117.059 63.1947 117.062 62.3833V37.7004C117.059 36.889 117.216 36.085 117.525 35.3346C117.834 34.5843 118.289 33.9026 118.863 33.3288C119.438 32.7551 120.12 32.3007 120.872 31.9919C121.623 31.6831 122.428 31.526 123.24 31.5297H154.029V35.676ZM211.841 31.5088V35.69H182.19V47.9095H206.023V52.1255H182.187V64.3659H211.838V68.5471H178.001V31.5088H211.841Z'
              fill='#E1AA4C'
            />
            <path
              d='M272.899 37.7318V48.582C272.902 49.3932 272.745 50.1971 272.435 50.9472C272.126 51.6974 271.671 52.3789 271.097 52.9525C270.522 53.5262 269.84 53.9806 269.089 54.2896C268.338 54.5985 267.533 54.7559 266.721 54.7527H261.059L272.693 68.5332H267.185L255.6 54.7527H241.995C241.322 54.7185 240.652 54.6499 239.986 54.5471V68.5332H235.8V31.5611H266.69C267.502 31.5579 268.307 31.7153 269.058 32.0242C269.809 32.3332 270.491 32.7876 271.065 33.3613C271.64 33.9349 272.094 34.6164 272.404 35.3666C272.713 36.1167 272.871 36.9206 272.867 37.7318H272.899ZM242.009 50.5367H266.721C266.979 50.54 267.235 50.4916 267.474 50.3946C267.713 50.2975 267.93 50.1536 268.112 49.9715C268.294 49.7893 268.438 49.5725 268.536 49.3339C268.633 49.0952 268.681 48.8396 268.678 48.582V37.7318C268.682 37.4704 268.634 37.2108 268.537 36.968C268.44 36.7252 268.296 36.504 268.113 36.3172C267.935 36.1259 267.719 35.9743 267.478 35.8722C267.238 35.7701 266.979 35.7199 266.717 35.7248H242.006C241.474 35.7276 240.964 35.9399 240.588 36.3157C240.212 36.6915 239.999 37.2004 239.996 37.7318V48.582C239.991 48.843 240.041 49.1021 240.143 49.3424C240.245 49.5826 240.398 49.7985 240.589 49.9757C240.777 50.1588 240.999 50.3028 241.243 50.3991C241.486 50.4954 241.747 50.5422 242.009 50.5367Z'
              fill='#E1AA4C'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M295.039 31.5088H332.093V35.69H315.697V68.5506H311.511V35.69H295.039V31.5088ZM354.551 68.5332V31.5088H358.737V68.5332H354.551ZM414.373 31.5088H419.727L404.232 50.021L419.78 68.5332H414.373L400.576 52.129H388.632V68.5332H384.418V31.5088H388.639V47.9095H400.583L414.373 31.5088Z'
              fill='#E1AA4C'
            />
          </svg>
        </div>
        <div className={`${styles.certik}`}>
          <p className={`${styles.certik_description}`}>
            CertiK leads blockchain security by pioneering the use of cutting-edge Formal Verification technology on
            smart contracts and blockchains. Unlike traditional security audits, Formal Verification mathematically
            proves program correctness and hacker-resistance.
          </p>
          <Link href='https://skynet.certik.com/projects/coremultichain' locale={activeLang}>
            <a className={`${styles.certik_line}`} target='_blank'>CATENA on CertiK Platform</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Certik;
