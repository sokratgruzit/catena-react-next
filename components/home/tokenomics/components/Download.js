/* eslint-disable @next/next/no-img-element */
import styles from './Tokenomics.module.css';

function Download() {
  return (
    <div className={`${styles.p280} ${styles.flexColumn}`}>
      <h2 className={` ttl font-40 ${styles.flex} ${styles.alignItemsCenter}`}>
        Download <img className={`${styles.catena_logo}`} src='/images/logo_dwn.svg' alt='logo' />
        <span className={`ttl font-40 ${styles.orange}`}>CATENA</span>&nbsp;Wallet App
      </h2>
      <div className={`${styles.flex} ${styles.downloadIcons}`}>
        <svg width='170' height='56' viewBox='0 0 170 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect width='169.02' height='56' rx='7' fill='#162029' fillOpacity='0.05' />
          <rect x='0.5' y='0.5' width='168.02' height='55' rx='6.5' stroke='#162029' strokeOpacity='0.05' />
          <path
            d='M65.7839 21.3415H61.1172V34.2222H65.7839C70.0521 34.2222 72.7839 31.5095 72.7839 27.7724C72.7839 24.0163 70.2039 21.3415 65.7839 21.3415ZM65.6321 32.2683H63.1849V23.2764H65.6131C68.9708 23.2764 70.6402 24.9837 70.6402 27.7724C70.5454 30.8645 68.6104 32.2683 65.6321 32.2683Z'
            fill='#162029'
          />
          <path
            d='M79.7649 34.5068C82.7432 34.5068 85.1334 32.1924 85.1334 29.3279C85.1334 26.4634 82.7432 24.1301 79.7649 24.1301C76.7866 24.1301 74.3963 26.4634 74.3963 29.3279C74.3963 32.1924 76.7866 34.5068 79.7649 34.5068ZM79.7649 32.6667C77.8299 32.6667 76.3692 31.168 76.3692 29.3279C76.3692 27.4688 77.8299 25.9702 79.7649 25.9702C81.6998 25.9702 83.1606 27.4688 83.1606 29.3279C83.1606 31.168 81.6998 32.6667 79.7649 32.6667Z'
            fill='#162029'
          />
          <path
            d='M89.8941 35L92.5689 28.4553L95.3385 35L99.1326 24.4146H96.9889L95.1868 30.0867L92.5878 24.0163L90.1976 30.0677L88.2437 24.4146H86.1L89.8941 35Z'
            fill='#162029'
          />
          <path
            d='M106.437 24.1111C104.047 24.1111 103.383 25.6287 103.383 25.6287V24.4146H101.334V34.2222H103.383V28.7019C103.383 26.8618 104.711 25.9322 106.134 25.9322C107.481 25.9322 108.334 26.8238 108.334 28.3984V34.2222H110.383V28.1897C110.383 25.4959 108.638 24.1111 106.437 24.1111Z'
            fill='#162029'
          />
          <path d='M113.225 34.2222H115.274V21L113.225 21.3415V34.2222Z' fill='#162029' />
          <path
            d='M122.911 34.5068C125.889 34.5068 128.28 32.1924 128.28 29.3279C128.28 26.4634 125.889 24.1301 122.911 24.1301C119.933 24.1301 117.542 26.4634 117.542 29.3279C117.542 32.1924 119.933 34.5068 122.911 34.5068ZM122.911 32.6667C120.976 32.6667 119.515 31.168 119.515 29.3279C119.515 27.4688 120.976 25.9702 122.911 25.9702C124.846 25.9702 126.307 27.4688 126.307 29.3279C126.307 31.168 124.846 32.6667 122.911 32.6667Z'
            fill='#162029'
          />
          <path
            d='M134.928 34.5068C136.522 34.5068 137.565 33.8808 138.21 33.2168L138.191 34.2222H140.259V24.4146H138.229V25.3631C137.546 24.6802 136.351 24.1301 134.928 24.1301C131.931 24.1301 129.806 26.4634 129.806 29.3279C129.806 32.1924 131.931 34.5068 134.928 34.5068ZM135.08 32.6856C133.24 32.6856 131.855 31.168 131.855 29.3089C131.855 27.4499 133.24 25.9512 135.08 25.9512C136.901 25.9512 138.343 27.1843 138.343 29.3089C138.343 31.4526 136.901 32.6856 135.08 32.6856Z'
            fill='#162029'
          />
          <path
            d='M147.674 34.5068C149.267 34.5068 150.311 33.8808 150.956 33.2168L150.937 34.2222H153.023V21L150.975 21.3415V25.3631C150.292 24.6802 149.097 24.1301 147.674 24.1301C144.677 24.1301 142.552 26.4634 142.552 29.3279C142.552 32.1924 144.677 34.5068 147.674 34.5068ZM147.826 32.6856C145.986 32.6856 144.544 31.168 144.544 29.3089C144.544 27.4499 145.986 25.9512 147.826 25.9512C149.647 25.9512 151.089 27.1843 151.089 29.3089C151.089 31.4526 149.647 32.6856 147.826 32.6856Z'
            fill='#162029'
          />
          <path
            d='M40.1931 24.8897C39.9211 24.8897 39.6552 24.8091 39.429 24.6579C39.2028 24.5068 39.0266 24.292 38.9224 24.0407C38.8183 23.7893 38.7911 23.5128 38.8442 23.246C38.8972 22.9792 39.0282 22.7341 39.2206 22.5418C39.4129 22.3494 39.658 22.2184 39.9248 22.1654C40.1916 22.1123 40.4682 22.1395 40.7195 22.2436C40.9708 22.3477 41.1856 22.524 41.3367 22.7502C41.4879 22.9764 41.5685 23.2423 41.5685 23.5143C41.5685 23.8791 41.4236 24.2289 41.1657 24.4869C40.9078 24.7448 40.5579 24.8897 40.1931 24.8897ZM24.9566 24.8897C24.6845 24.8897 24.4186 24.8091 24.1924 24.6579C23.9662 24.5068 23.79 24.292 23.6859 24.0407C23.5818 23.7893 23.5545 23.5128 23.6076 23.246C23.6607 22.9792 23.7917 22.7341 23.984 22.5418C24.1764 22.3494 24.4214 22.2184 24.6882 22.1654C24.955 22.1123 25.2316 22.1395 25.4829 22.2436C25.7342 22.3477 25.949 22.524 26.1002 22.7502C26.2513 22.9764 26.3319 23.2423 26.3319 23.5143C26.3319 23.8791 26.187 24.2289 25.9291 24.4869C25.6712 24.7448 25.3213 24.8897 24.9566 24.8897ZM40.6855 16.5851L43.4528 11.8125C43.5073 11.6824 43.5118 11.5367 43.4655 11.4035C43.4192 11.2703 43.3253 11.1588 43.2018 11.0906C43.0783 11.0224 42.934 11.0022 42.7965 11.0339C42.6591 11.0656 42.5382 11.1469 42.457 11.2623L39.6595 16.0927C37.44 15.0707 35.0252 14.5423 32.5817 14.544C30.1372 14.5379 27.7194 15.0537 25.4902 16.057L22.6927 11.2431C22.6115 11.1277 22.4906 11.0463 22.3532 11.0146C22.2157 10.9829 22.0714 11.0031 21.9479 11.0714C21.8244 11.1396 21.7305 11.251 21.6842 11.3842C21.6379 11.5175 21.6424 11.6631 21.6969 11.7932L24.4477 16.5659C22.0669 17.8645 20.0475 19.7364 18.5725 22.0121C17.0974 24.2878 16.2133 26.8955 16 29.5991H49.1167C48.909 26.8979 48.0285 24.2916 46.5553 22.018C45.0822 19.7444 43.0633 17.8757 40.6828 16.5824'
            fill='#3DDC84'
          />
          <path
            d='M16 45.0023H18.0045L19.0305 42.4611H24.1917L25.2177 45.0023H27.2222L22.4555 34.2852H20.7667L16 45.0023ZM19.6776 40.8512L21.619 36.2897L23.5446 40.8512H19.6776Z'
            fill='#162029'
          />
          <path
            d='M34.0081 34.2852H28.9731V45.0023H30.6935V41.3247H33.9607C36.1389 41.3247 37.7961 39.9199 37.7961 37.8049C37.7961 35.6899 36.1546 34.2852 34.0081 34.2852ZM33.8818 39.7463H30.6935V35.8951H33.8818C35.0498 35.8951 36.0284 36.6685 36.0284 37.8365C36.0284 38.9887 35.0498 39.7463 33.8818 39.7463Z'
            fill='#162029'
          />
          <path
            d='M39.9939 45.0023H41.6985V41.1668L43.1349 39.8094L46.9703 45.0023H49.1169L44.3818 38.6257L49.1169 34.2852H46.8756L41.6985 39.1623V34.2852H39.9939V45.0023Z'
            fill='#162029'
          />
        </svg>
        <svg width='170' height='56' viewBox='0 0 170 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect x='0.0214844' width='169.91' height='56' rx='7' fill='#162029' fillOpacity='0.05' />
          <rect x='0.521484' y='0.5' width='168.91' height='55' rx='6.5' stroke='#162029' strokeOpacity='0.05' />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M85.2622 29.6671C82.4563 29.6671 80.182 31.8939 80.182 34.9653C80.182 38.0088 82.4712 40.2634 85.2622 40.2634C88.068 40.2634 90.3423 38.0212 90.3423 34.9653C90.3423 31.8939 88.068 29.6671 85.2622 29.6671ZM85.2622 38.164C83.7271 38.164 82.4058 36.8348 82.4058 34.9529C82.4058 33.0429 83.7301 31.7417 85.2622 31.7417C86.7972 31.7417 88.1185 33.0429 88.1185 34.9529C88.1214 36.8473 86.7972 38.164 85.2622 38.164ZM74.1784 29.6671C71.3725 29.6671 69.0982 31.8939 69.0982 34.9653C69.0982 38.0088 71.3874 40.2634 74.1784 40.2634C76.9842 40.2634 79.2586 38.0212 79.2586 34.9653C79.2586 31.8939 76.9812 29.6671 74.1784 29.6671ZM74.1784 38.164C72.6433 38.164 71.3221 36.8348 71.3221 34.9529C71.3221 33.0429 72.6463 31.7417 74.1784 31.7417C75.7134 31.7417 77.0347 33.0429 77.0347 34.9529C77.0347 36.8473 75.7134 38.164 74.1784 38.164ZM60.9895 31.2852V33.5274H66.135C65.9776 34.7852 65.5798 35.7137 64.9711 36.3504C64.2169 37.1392 63.053 37.9963 61.0013 37.9963C57.8392 37.9963 55.3659 35.3255 55.3659 32.0181C55.3659 28.7106 57.8392 26.0398 61.0013 26.0398C62.7086 26.0398 63.9527 26.7448 64.8761 27.6454L66.3963 26.0553C65.1136 24.7696 63.4063 23.7852 61.0132 23.7852C56.6753 23.7852 53.0352 27.4808 53.0352 32.0057C53.0352 36.5429 56.6723 40.2261 61.0132 40.2261C63.3559 40.2261 65.1136 39.4249 66.5032 37.9156C67.9194 36.4342 68.3678 34.3442 68.3678 32.6578C68.3678 32.133 68.3292 31.6609 68.249 31.2603H60.9865C60.9895 31.2572 60.9895 31.2852 60.9895 31.2852ZM114.936 33.0305C114.511 31.8411 113.228 29.6547 110.598 29.6547C107.991 29.6547 105.823 31.8007 105.823 34.9529C105.823 37.928 107.967 40.251 110.85 40.251C113.166 40.251 114.514 38.7696 115.069 37.9001L113.35 36.6951C112.78 37.5802 111.987 38.1609 110.862 38.1609C109.725 38.1609 108.929 37.6206 108.401 36.5553L115.173 33.6206C115.173 33.6237 114.936 33.0305 114.936 33.0305ZM108.029 34.8007C107.976 32.7541 109.55 31.7137 110.675 31.7137C111.563 31.7137 112.302 32.1702 112.554 32.8348L108.029 34.8007ZM102.528 39.9342H104.752V24.369H102.528V39.9342ZM98.8756 30.8442H98.7955C98.2937 30.2199 97.3406 29.6547 96.1232 29.6547C93.5965 29.6547 91.2687 31.9808 91.2687 34.9684C91.2687 37.9435 93.5846 40.2417 96.1232 40.2417C97.3257 40.2417 98.2937 39.6734 98.7955 39.0367H98.8756V39.7976C98.8756 41.8193 97.8424 42.9094 96.1767 42.9094C94.8139 42.9094 93.9677 41.8845 93.6232 41.0274L91.6903 41.8721C92.2456 43.2696 93.7272 44.9994 96.1737 44.9994C98.7806 44.9994 100.99 43.3939 100.99 39.4777V29.9715H98.8875V30.8442C98.8905 30.8442 98.8756 30.8442 98.8756 30.8442ZM96.3222 38.164C94.7871 38.164 93.5045 36.8224 93.5045 34.9684C93.5045 33.0988 94.7871 31.7448 96.3222 31.7448C97.8424 31.7448 99.0211 33.1143 99.0211 34.9684C99.036 36.8224 97.8454 38.164 96.3222 38.164ZM125.348 24.369H120.031V39.9342H122.255V34.0398H125.351C127.813 34.0398 130.233 32.1734 130.233 29.2106C130.233 26.2479 127.822 24.369 125.348 24.369ZM125.414 31.8659H122.252V26.5243H125.414C127.079 26.5243 128.021 27.9622 128.021 29.1951C128.021 30.4156 127.068 31.8659 125.414 31.8659ZM139.146 29.6392C137.531 29.6392 135.865 30.3876 135.176 32.0181L137.148 32.8752C137.572 32.0181 138.35 31.7261 139.173 31.7261C140.325 31.7261 141.489 32.4466 141.515 33.7324V33.897C141.118 33.6609 140.245 33.3007 139.199 33.3007C137.071 33.3007 134.912 34.5181 134.912 36.8007C134.912 38.8907 136.658 40.2324 138.603 40.2324C140.096 40.2324 140.919 39.5274 141.432 38.7106H141.512V39.9156H143.656V33.9529C143.656 31.1765 141.685 29.6392 139.146 29.6392ZM138.867 38.164C138.139 38.164 137.121 37.7914 137.121 36.8348C137.121 35.6299 138.392 35.1734 139.476 35.1734C140.455 35.1734 140.919 35.3938 141.501 35.6982C141.34 37.0957 140.212 38.1516 138.867 38.164ZM151.477 29.9715L148.923 36.723H148.843L146.198 29.9715H143.805L147.774 39.4094L145.512 44.6547H147.828L153.935 29.9715H151.477ZM131.459 39.9342H133.683V24.369H131.459V39.9342Z'
            fill='#162029'
          />
          <path
            d='M89.1675 19.0528C88.0897 19.0528 87.1811 18.6584 86.4626 17.882C85.75 17.1273 85.3521 16.087 85.3699 15.0248C85.3699 13.8913 85.7381 12.9317 86.4626 12.1708C87.1782 11.3944 88.0867 11 89.1645 11C90.2304 11 91.139 11.3944 91.8694 12.1708C92.5939 12.9565 92.962 13.9161 92.962 15.0248C92.9501 16.1615 92.582 17.1211 91.8694 17.8789C91.1538 18.6615 90.2453 19.0528 89.1675 19.0528ZM57.0978 19.0528C56.0438 19.0528 55.1293 18.6646 54.3811 17.8975C53.6388 17.1335 53.2617 16.1677 53.2617 15.0279C53.2617 13.8882 53.6388 12.9224 54.3811 12.1584C55.1145 11.3913 56.029 11.0031 57.0978 11.0031C57.6204 11.0031 58.1281 11.1118 58.6151 11.3323C59.0931 11.5466 59.4821 11.8385 59.7701 12.1957L59.8413 12.2857L59.0367 13.1118L58.9536 13.0093C58.4993 12.4441 57.8906 12.1677 57.086 12.1677C56.3674 12.1677 55.7409 12.4348 55.2243 12.9627C54.7047 13.4938 54.4405 14.1894 54.4405 15.0311C54.4405 15.8727 54.7047 16.5683 55.2243 17.0994C55.7409 17.6273 56.3674 17.8944 57.086 17.8944C57.852 17.8944 58.4963 17.6273 58.9981 17.0994C59.295 16.7888 59.4791 16.354 59.5444 15.8043H56.9642V14.6429H60.6519L60.6667 14.7484C60.6935 14.9441 60.7202 15.146 60.7202 15.3323C60.7202 16.4037 60.4114 17.2702 59.7998 17.9099C59.105 18.6677 58.1964 19.0528 57.0978 19.0528ZM99.7376 18.8882H98.6004L95.1176 13.059L95.1473 14.1087V18.8851H94.0101V11.1677H95.3076L95.3433 11.2267L98.6182 16.7174L98.5885 15.6708V11.1677H99.7376V18.8882ZM80.6223 18.8882H79.4703V12.3292H77.472V11.1677H82.6176V12.3292H80.6193V18.8882H80.6223ZM76.5338 18.8882H75.3847V11.1677H76.5338V18.8882ZM70.0759 18.8882H68.9269V12.3292H66.9287V11.1677H72.0742V12.3292H70.0759V18.8882ZM66.2012 18.8758H61.795V11.1677H66.2012V12.3292H62.947V14.4472H65.8835V15.5963H62.947V17.7143H66.2012V18.8758ZM87.3058 17.0838C87.8195 17.6211 88.443 17.8913 89.1675 17.8913C89.9127 17.8913 90.5214 17.6273 91.0291 17.0838C91.5339 16.5559 91.7892 15.8634 91.7892 15.0279C91.7892 14.1925 91.5339 13.4969 91.0321 12.972C90.5184 12.4348 89.8919 12.1646 89.1704 12.1646C88.4252 12.1646 87.8165 12.4286 87.3118 12.972C86.807 13.5 86.5517 14.1925 86.5517 15.0279C86.5517 15.8634 86.804 16.559 87.3058 17.0838Z'
            fill='#162029'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M16.5648 11.9549C16.2204 12.3431 16.0215 12.9363 16.0215 13.7127V41.25C16.0215 42.0264 16.2204 42.6195 16.5767 42.9922L16.6688 43.0761L31.4194 27.6475V27.3028L16.6569 11.8711L16.5648 11.9549Z'
            fill='url(#paint0_linear_205_1307)'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M36.3281 32.8045L31.4082 27.6586V27.2983L36.3281 22.1523L36.4349 22.2207L42.2545 25.6803C43.9201 26.6617 43.9201 28.2828 42.2545 29.2766L36.4349 32.7362L36.3281 32.8045Z'
            fill='url(#paint1_linear_205_1307)'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M36.4339 32.7382L31.4072 27.4805L16.5645 43.0053C17.1078 43.614 18.0193 43.6823 19.0377 43.0892L36.4339 32.7382Z'
            fill='url(#paint2_linear_205_1307)'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M36.4339 22.2209L19.0377 11.8855C18.0193 11.2768 17.1048 11.3607 16.5645 11.9694L31.4072 27.4787L36.4339 22.2209Z'
            fill='url(#paint3_linear_205_1307)'
          />
          <path
            opacity='0.2'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M36.3269 32.625L19.0495 42.8921C18.0845 43.4728 17.2234 43.4325 16.6682 42.9045L16.5762 43.0008L16.6682 43.0846C17.2234 43.6095 18.0845 43.6529 19.0495 43.0722L36.4456 32.7368L36.3269 32.625Z'
            fill='#162029'
          />
          <path
            opacity='0.12'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M42.2537 29.0985L36.3125 32.6264L36.4194 32.7382L42.2389 29.2786C43.0732 28.7817 43.483 28.1295 43.483 27.4805C43.4325 28.0767 43.0079 28.642 42.2537 29.0985Z'
            fill='#162029'
          />
          <path
            opacity='0.25'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M19.0381 12.0671L42.2538 25.8622C43.008 26.3063 43.4325 26.887 43.4979 27.4802C43.4979 26.8311 43.0881 26.1789 42.2538 25.6821L19.0381 11.887C17.3724 10.8901 16.0215 11.7224 16.0215 13.7131V13.8932C16.0215 11.8994 17.3724 11.0827 19.0381 12.0671Z'
            fill='#162029'
          />
          <defs>
            <linearGradient
              id='paint0_linear_205_1307'
              x1='30.0963'
              y1='13.4156'
              x2='6.3329'
              y2='19.4692'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#00A0FF' />
              <stop offset='0.00657' stopColor='#00A1FF' />
              <stop offset='0.2601' stopColor='#00BEFF' />
              <stop offset='0.5122' stopColor='#00D2FF' />
              <stop offset='0.7604' stopColor='#00DFFF' />
              <stop offset='1' stopColor='#00E3FF' />
            </linearGradient>
            <linearGradient
              id='paint1_linear_205_1307'
              x1='44.4267'
              y1='27.4785'
              x2='15.6173'
              y2='27.4785'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFE000' />
              <stop offset='0.4087' stopColor='#FFBD00' />
              <stop offset='0.7754' stopColor='#FFA500' />
              <stop offset='1' stopColor='#FF9C00' />
            </linearGradient>
            <linearGradient
              id='paint2_linear_205_1307'
              x1='33.7006'
              y1='30.3414'
              x2='13.4455'
              y2='62.9346'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FF3A44' />
              <stop offset='1' stopColor='#C31162' />
            </linearGradient>
            <linearGradient
              id='paint3_linear_205_1307'
              x1='12.8269'
              y1='2.7945'
              x2='21.8638'
              y2='17.3516'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#32A071' />
              <stop offset='0.0685' stopColor='#2DA771' />
              <stop offset='0.4762' stopColor='#15CF74' />
              <stop offset='0.8009' stopColor='#06E775' />
              <stop offset='1' stopColor='#00F076' />
            </linearGradient>
          </defs>
        </svg>
        <svg width='164' height='56' viewBox='0 0 164 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect x='0.931641' width='162.56' height='56' rx='7' fill='#162029' fillOpacity='0.05' />
          <rect x='1.43164' y='0.5' width='161.56' height='55' rx='6.5' stroke='#162029' strokeOpacity='0.05' />
          <path
            d='M65.7037 40.4464H62.9925L61.5074 35.8944H56.3453L54.9306 40.4464H52.291L57.4054 24.9492H60.5643L65.7037 40.4464ZM61.0597 33.9846L59.7167 29.938C59.5746 29.5246 59.3084 28.551 58.9156 27.0185H58.8678C58.7114 27.6777 58.4595 28.6512 58.1133 29.938L56.7942 33.9846H61.0597Z'
            fill='#162029'
          />
          <path
            d='M78.8564 34.7223C78.8564 36.6227 78.3299 38.1249 77.277 39.2277C76.3339 40.2094 75.1627 40.6997 73.7647 40.6997C72.2557 40.6997 71.1717 40.171 70.5115 39.1136H70.4638V45.0002H67.9185V32.951C67.9185 31.7563 67.8863 30.53 67.8242 29.2724H70.0627L70.2047 31.0436H70.2525C71.1013 29.7091 72.3894 29.043 74.1181 29.043C75.4695 29.043 76.5977 29.5635 77.5002 30.6057C78.4052 31.6491 78.8564 33.0209 78.8564 34.7223ZM76.2634 34.8131C76.2634 33.7254 76.0127 32.8288 75.5089 32.1231C74.9586 31.3871 74.2196 31.0191 73.2932 31.0191C72.6652 31.0191 72.0946 31.2241 71.5848 31.6282C71.0738 32.0357 70.7396 32.5679 70.5832 33.227C70.5044 33.5345 70.465 33.786 70.465 33.984V35.8472C70.465 36.66 70.7205 37.3459 71.2314 37.906C71.7424 38.4661 72.4061 38.7456 73.2227 38.7456C74.1814 38.7456 74.9275 38.3846 75.4612 37.665C75.996 36.9441 76.2634 35.9939 76.2634 34.8131Z'
            fill='#162029'
          />
          <path
            d='M92.033 34.7223C92.033 36.6227 91.5065 38.1249 90.4523 39.2277C89.5104 40.2094 88.3392 40.6997 86.9413 40.6997C85.4323 40.6997 84.3483 40.171 83.6893 39.1136H83.6415V45.0002H81.0963V32.951C81.0963 31.7563 81.064 30.53 81.002 29.2724H83.2404L83.3825 31.0436H83.4302C84.2778 29.7091 85.566 29.043 87.2958 29.043C88.6461 29.043 89.7742 29.5635 90.6792 30.6057C91.5805 31.6491 92.033 33.0209 92.033 34.7223ZM89.44 34.8131C89.44 33.7254 89.1881 32.8288 88.6843 32.1231C88.1339 31.3871 87.3973 31.0191 86.4697 31.0191C85.8406 31.0191 85.2711 31.2241 84.7601 31.6282C84.2492 32.0357 83.9161 32.5679 83.7597 33.227C83.6821 33.5345 83.6415 33.786 83.6415 33.984V35.8472C83.6415 36.66 83.897 37.3459 84.4056 37.906C84.9165 38.465 85.5803 38.7456 86.3993 38.7456C87.3579 38.7456 88.1041 38.3846 88.6377 37.665C89.1726 36.9441 89.44 35.9939 89.44 34.8131Z'
            fill='#162029'
          />
          <path
            d='M106.764 36.101C106.764 37.4192 106.295 38.4918 105.353 39.3197C104.318 40.2245 102.877 40.6764 101.026 40.6764C99.3162 40.6764 97.9456 40.355 96.9082 39.711L97.498 37.6417C98.6154 38.3008 99.8415 38.6315 101.177 38.6315C102.136 38.6315 102.882 38.4196 103.418 37.998C103.952 37.5765 104.218 37.0105 104.218 36.3048C104.218 35.676 103.998 35.1461 103.558 34.7164C103.12 34.2867 102.388 33.8873 101.366 33.5182C98.5843 32.5062 97.1947 31.0238 97.1947 29.0744C97.1947 27.8004 97.6818 26.7559 98.6572 25.9431C99.629 25.1291 100.925 24.7227 102.547 24.7227C103.992 24.7227 105.193 24.9684 106.152 25.4586L105.516 27.4825C104.62 27.0074 103.608 26.7699 102.475 26.7699C101.58 26.7699 100.88 26.9853 100.379 27.4138C99.9549 27.7969 99.7424 28.2639 99.7424 28.8171C99.7424 29.4296 99.9847 29.9361 100.472 30.3344C100.896 30.7024 101.666 31.1006 102.783 31.5304C104.15 32.0672 105.154 32.6949 105.8 33.4145C106.443 34.1319 106.764 35.0297 106.764 36.101Z'
            fill='#162029'
          />
          <path
            d='M115.18 31.1358H112.374V36.5612C112.374 37.9412 112.869 38.6306 113.86 38.6306C114.314 38.6306 114.692 38.5921 114.99 38.5153L115.06 40.4006C114.559 40.5834 113.899 40.6754 113.081 40.6754C112.076 40.6754 111.29 40.3762 110.723 39.7788C110.159 39.1802 109.874 38.1764 109.874 36.7662V31.1335H108.203V29.2703H109.874V27.2242L112.374 26.4883V29.2703H115.18V31.1358Z'
            fill='#162029'
          />
          <path
            d='M127.838 34.7665C127.838 36.4842 127.334 37.8944 126.329 38.9972C125.275 40.1325 123.876 40.6985 122.132 40.6985C120.451 40.6985 119.112 40.1547 118.114 39.067C117.116 37.9794 116.617 36.6064 116.617 34.9517C116.617 33.22 117.131 31.8017 118.161 30.6989C119.189 29.5949 120.576 29.043 122.32 29.043C124.001 29.043 125.354 29.5868 126.374 30.6756C127.351 31.7318 127.838 33.0954 127.838 34.7665ZM125.197 34.8469C125.197 33.8163 124.972 32.9324 124.514 32.1953C123.981 31.3033 123.218 30.8584 122.229 30.8584C121.206 30.8584 120.429 31.3044 119.895 32.1953C119.438 32.9336 119.213 33.8314 119.213 34.8934C119.213 35.924 119.438 36.8079 119.895 37.5439C120.446 38.4359 121.215 38.8807 122.207 38.8807C123.178 38.8807 123.941 38.4265 124.492 37.5206C124.961 36.7695 125.197 35.8763 125.197 34.8469Z'
            fill='#162029'
          />
          <path
            d='M136.112 31.4558C135.86 31.4104 135.591 31.3871 135.309 31.3871C134.414 31.3871 133.722 31.7167 133.234 32.3769C132.811 32.9592 132.598 33.6952 132.598 34.5837V40.447H130.054L130.078 32.7915C130.078 31.5036 130.046 30.3309 129.982 29.2735H132.199L132.292 31.4116H132.363C132.632 30.6768 133.055 30.0852 133.636 29.6415C134.203 29.2421 134.815 29.043 135.475 29.043C135.71 29.043 135.923 29.0593 136.112 29.0884V31.4558Z'
            fill='#162029'
          />
          <path
            d='M147.494 34.3324C147.494 34.7773 147.464 35.1522 147.4 35.4585H139.765C139.794 36.5624 140.163 37.4067 140.873 37.989C141.516 38.5095 142.348 38.7703 143.37 38.7703C144.501 38.7703 145.532 38.5945 146.46 38.2417L146.858 39.9651C145.774 40.4263 144.495 40.6557 143.018 40.6557C141.241 40.6557 139.847 40.1456 138.832 39.1267C137.82 38.1077 137.312 36.7394 137.312 35.023C137.312 33.3379 137.784 31.9347 138.728 30.8156C139.717 29.6208 141.053 29.0234 142.734 29.0234C144.385 29.0234 145.635 29.6208 146.484 30.8156C147.156 31.7647 147.494 32.9385 147.494 34.3324ZM145.066 33.6884C145.083 32.9525 144.917 32.3167 144.572 31.7798C144.132 31.0893 143.455 30.7446 142.544 30.7446C141.712 30.7446 141.035 31.0811 140.518 31.7565C140.094 32.2934 139.842 32.9373 139.765 33.6873H145.066V33.6884Z'
            fill='#162029'
          />
          <path
            d='M60.2184 15.4138C60.2184 16.7844 59.797 17.8162 58.9553 18.509C58.1757 19.1484 57.0679 19.4686 55.6329 19.4686C54.9214 19.4686 54.3125 19.4383 53.8027 19.3778V11.8888C54.4677 11.784 55.184 11.7305 55.9576 11.7305C57.3245 11.7305 58.3548 12.0204 59.0496 12.6004C59.828 13.256 60.2184 14.1934 60.2184 15.4138ZM58.8992 15.4476C58.8992 14.5591 58.6581 13.8778 58.1757 13.4027C57.6934 12.9287 56.9891 12.6912 56.0615 12.6912C55.6675 12.6912 55.332 12.7168 55.0539 12.7704V18.4636C55.2079 18.4869 55.4896 18.4974 55.8991 18.4974C56.8566 18.4974 57.5955 18.2377 58.1161 17.7184C58.6366 17.199 58.8992 16.4421 58.8992 15.4476Z'
            fill='#162029'
          />
          <path
            d='M67.2131 16.6119C67.2131 17.4562 66.966 18.1479 66.4717 18.6905C65.9536 19.2483 65.2672 19.5267 64.41 19.5267C63.5838 19.5267 62.926 19.26 62.4354 18.7243C61.9459 18.1898 61.7012 17.5156 61.7012 16.7027C61.7012 15.8526 61.9531 15.1551 62.4593 14.6136C62.9654 14.0721 63.6459 13.8008 64.5031 13.8008C65.3292 13.8008 65.993 14.0675 66.4956 14.602C66.9731 15.1213 67.2131 15.7921 67.2131 16.6119ZM65.9154 16.6515C65.9154 16.1449 65.8032 15.7106 65.5799 15.3484C65.3173 14.9106 64.9436 14.6916 64.4577 14.6916C63.9551 14.6916 63.5731 14.9106 63.3105 15.3484C63.086 15.7106 62.975 16.1519 62.975 16.6736C62.975 17.1802 63.0872 17.6145 63.3105 17.9767C63.5815 18.4145 63.9587 18.6335 64.4458 18.6335C64.9233 18.6335 65.2982 18.4111 65.568 17.9651C65.7996 17.5959 65.9154 17.158 65.9154 16.6515Z'
            fill='#162029'
          />
          <path
            d='M76.5914 13.9141L74.8305 19.4035H73.6844L72.955 17.0198C72.7699 16.4247 72.6195 15.8332 72.5025 15.2463H72.4798C72.3712 15.8495 72.2208 16.4399 72.0274 17.0198L71.2526 19.4035H70.0933L68.4375 13.9141H69.7233L70.3596 16.5237C70.5136 17.1409 70.6401 17.729 70.7416 18.2856H70.7643C70.8574 17.8268 71.0114 17.2422 71.2287 16.5354L72.0274 13.9152H73.0469L73.8121 16.4795C73.9972 17.1048 74.1476 17.7069 74.2634 18.2868H74.298C74.3828 17.722 74.5105 17.1199 74.6801 16.4795L75.3629 13.9152H76.5914V13.9141Z'
            fill='#162029'
          />
          <path
            d='M83.0774 19.4016H81.8263V16.2575C81.8263 15.2886 81.4491 14.8042 80.6922 14.8042C80.3209 14.8042 80.0212 14.9369 79.7884 15.2036C79.558 15.4703 79.441 15.7847 79.441 16.1445V19.4005H78.1899V15.4807C78.1899 14.9986 78.1744 14.4758 78.1445 13.9098H79.244L79.3026 14.7681H79.3372C79.4828 14.5014 79.7001 14.2813 79.9854 14.1055C80.3245 13.9005 80.7041 13.7969 81.1196 13.7969C81.6448 13.7969 82.0818 13.9622 82.4292 14.2941C82.8614 14.7005 83.0774 15.3072 83.0774 16.1131V19.4016Z'
            fill='#162029'
          />
          <path d='M86.5273 19.4028H85.2773V11.3945H86.5273V19.4028Z' fill='#162029' />
          <path
            d='M93.8928 16.6119C93.8928 17.4562 93.6457 18.1479 93.1514 18.6905C92.6333 19.2483 91.9457 19.5267 91.0897 19.5267C90.2623 19.5267 89.6045 19.26 89.1151 18.7243C88.6256 18.1898 88.3809 17.5156 88.3809 16.7027C88.3809 15.8526 88.6328 15.1551 89.1389 14.6136C89.6451 14.0721 90.3256 13.8008 91.1816 13.8008C92.0089 13.8008 92.6715 14.0675 93.1753 14.602C93.6528 15.1213 93.8928 15.7921 93.8928 16.6119ZM92.5939 16.6515C92.5939 16.1449 92.4817 15.7106 92.2584 15.3484C91.997 14.9106 91.6221 14.6916 91.1374 14.6916C90.6336 14.6916 90.2516 14.9106 89.9901 15.3484C89.7657 15.7106 89.6547 16.1519 89.6547 16.6736C89.6547 17.1802 89.7669 17.6145 89.9901 17.9767C90.2611 18.4145 90.6384 18.6335 91.1255 18.6335C91.603 18.6335 91.9767 18.4111 92.2465 17.9651C92.4793 17.5959 92.5939 17.158 92.5939 16.6515Z'
            fill='#162029'
          />
          <path
            d='M99.9483 19.402H98.8249L98.7317 18.7697H98.6971C98.3127 19.274 97.7647 19.5267 97.0532 19.5267C96.522 19.5267 96.0922 19.3601 95.7687 19.0294C95.475 18.729 95.3281 18.3552 95.3281 17.9115C95.3281 17.2407 95.6146 16.7295 96.1913 16.3755C96.7667 16.0215 97.5761 15.848 98.6183 15.8561V15.7537C98.6183 15.0305 98.2291 14.6695 97.4496 14.6695C96.8944 14.6695 96.405 14.8057 95.9824 15.0759L95.7281 14.2747C96.251 13.9592 96.8968 13.8008 97.6585 13.8008C99.1293 13.8008 99.8671 14.5577 99.8671 16.0716V18.0931C99.8671 18.6416 99.8945 19.0783 99.9483 19.402ZM98.6494 17.5156V16.669C97.2693 16.6457 96.5793 17.0148 96.5793 17.7752C96.5793 18.0617 96.6581 18.276 96.8192 18.4192C96.9804 18.5624 97.1857 18.6335 97.4305 18.6335C97.705 18.6335 97.9617 18.5485 98.1957 18.3796C98.4309 18.2096 98.5754 17.9942 98.6291 17.7298C98.6422 17.6704 98.6494 17.5982 98.6494 17.5156Z'
            fill='#162029'
          />
          <path
            d='M107.058 19.4028H105.948L105.889 18.5213H105.854C105.5 19.1921 104.896 19.5274 104.047 19.5274C103.369 19.5274 102.804 19.2677 102.356 18.7484C101.909 18.229 101.686 17.5548 101.686 16.7268C101.686 15.8383 101.928 15.1186 102.415 14.569C102.887 14.0566 103.464 13.8004 104.152 13.8004C104.908 13.8004 105.437 14.0484 105.737 14.5457H105.761V11.3945H107.014V17.9239C107.014 18.4584 107.028 18.951 107.058 19.4028ZM105.761 17.0878V16.1725C105.761 16.0141 105.749 15.886 105.727 15.7882C105.656 15.4948 105.505 15.2479 105.274 15.0487C105.041 14.8496 104.761 14.7495 104.437 14.7495C103.971 14.7495 103.605 14.93 103.337 15.2921C103.07 15.6543 102.935 16.1166 102.935 16.6814C102.935 17.224 103.063 17.6642 103.32 18.0031C103.591 18.3641 103.956 18.5446 104.413 18.5446C104.824 18.5446 105.152 18.3944 105.402 18.0928C105.643 17.8144 105.761 17.4791 105.761 17.0878Z'
            fill='#162029'
          />
          <path
            d='M117.758 16.6119C117.758 17.4562 117.511 18.1479 117.017 18.6905C116.499 19.2483 115.813 19.5267 114.955 19.5267C114.13 19.5267 113.472 19.26 112.98 18.7243C112.491 18.1898 112.246 17.5156 112.246 16.7027C112.246 15.8526 112.498 15.1551 113.004 14.6136C113.51 14.0721 114.191 13.8008 115.049 13.8008C115.874 13.8008 116.539 14.0675 117.041 14.602C117.518 15.1213 117.758 15.7921 117.758 16.6119ZM116.462 16.6515C116.462 16.1449 116.349 15.7106 116.126 15.3484C115.862 14.9106 115.49 14.6916 115.003 14.6916C114.501 14.6916 114.119 14.9106 113.855 15.3484C113.631 15.7106 113.52 16.1519 113.52 16.6736C113.52 17.1802 113.632 17.6145 113.855 17.9767C114.126 18.4145 114.504 18.6335 114.991 18.6335C115.468 18.6335 115.844 18.4111 116.114 17.9651C116.345 17.5959 116.462 17.158 116.462 16.6515Z'
            fill='#162029'
          />
          <path
            d='M124.486 19.4016H123.236V16.2575C123.236 15.2886 122.859 14.8042 122.101 14.8042C121.73 14.8042 121.43 14.9369 121.199 15.2036C120.967 15.4703 120.851 15.7847 120.851 16.1445V19.4005H119.599V15.4807C119.599 14.9986 119.585 14.4758 119.555 13.9098H120.653L120.712 14.7681H120.746C120.893 14.5014 121.11 14.2813 121.394 14.1055C121.735 13.9005 122.113 13.7969 122.53 13.7969C123.054 13.7969 123.491 13.9622 123.838 14.2941C124.272 14.7005 124.486 15.3072 124.486 16.1131V19.4016Z'
            fill='#162029'
          />
          <path
            d='M132.906 14.8281H131.528V17.4949C131.528 18.1726 131.773 18.5115 132.258 18.5115C132.482 18.5115 132.668 18.4928 132.815 18.4544L132.848 19.3802C132.6 19.471 132.276 19.5164 131.876 19.5164C131.381 19.5164 130.997 19.3697 130.719 19.0763C130.44 18.7828 130.301 18.289 130.301 17.5962V14.8281H129.479V13.914H130.301V12.9079L131.527 12.5469V13.9128H132.905V14.8281H132.906Z'
            fill='#162029'
          />
          <path
            d='M139.528 19.4028H138.276V16.282C138.276 15.298 137.899 14.8054 137.143 14.8054C136.563 14.8054 136.166 15.0907 135.949 15.6613C135.912 15.7812 135.891 15.9279 135.891 16.1003V19.4017H134.641V11.3945H135.891V14.7029H135.914C136.308 14.1008 136.873 13.8004 137.605 13.8004C138.123 13.8004 138.552 13.9658 138.892 14.2976C139.316 14.711 139.528 15.3259 139.528 16.1387V19.4028Z'
            fill='#162029'
          />
          <path
            d='M146.361 16.4003C146.361 16.6192 146.344 16.8032 146.314 16.9534H142.562C142.579 17.4961 142.758 17.9095 143.105 18.196C143.423 18.4522 143.832 18.5802 144.334 18.5802C144.889 18.5802 145.395 18.4941 145.851 18.3206L146.047 19.1683C145.513 19.3942 144.885 19.5072 144.158 19.5072C143.287 19.5072 142.6 19.2568 142.104 18.7561C141.605 18.2554 141.357 17.5834 141.357 16.7403C141.357 15.9124 141.588 15.223 142.052 14.6733C142.537 14.0864 143.192 13.793 144.02 13.793C144.829 13.793 145.444 14.0864 145.859 14.6733C146.195 15.1391 146.361 15.7156 146.361 16.4003ZM145.167 16.0847C145.176 15.7226 145.094 15.4105 144.925 15.1473C144.707 14.8084 144.377 14.6384 143.929 14.6384C143.521 14.6384 143.188 14.8038 142.933 15.1356C142.726 15.4 142.603 15.7156 142.562 16.0847H145.167Z'
            fill='#162029'
          />
          <path
            d='M37.628 26.8006C37.5934 23.0474 40.7786 21.2214 40.9242 21.1364C39.1203 18.571 36.3244 18.2205 35.3419 18.1925C32.9936 17.9515 30.7157 19.5632 29.5195 19.5632C28.2994 19.5632 26.4573 18.2158 24.472 18.2554C21.9172 18.2939 19.5271 19.7367 18.2163 21.9772C15.5111 26.5455 17.5287 33.2589 20.1205 36.9515C21.417 38.76 22.932 40.7793 24.9149 40.7082C26.8549 40.6302 27.5796 39.5018 29.9207 39.5018C32.2403 39.5018 32.9208 40.7082 34.9431 40.6628C37.0252 40.6302 38.336 38.8462 39.5871 37.0214C41.0854 34.9486 41.6871 32.9072 41.711 32.8024C41.662 32.7861 37.6674 31.299 37.628 26.8006Z'
            fill='#162029'
          />
          <path
            d='M33.8084 15.7617C34.8518 14.4889 35.5658 12.7572 35.3676 11C33.8574 11.0652 31.9687 12.0189 30.8812 13.2638C29.9189 14.3608 29.0594 16.1588 29.2814 17.8496C30.9779 17.9731 32.7197 17.0147 33.8084 15.7617Z'
            fill='#162029'
          />
        </svg>
      </div>
    </div>
  );
}

export default Download;
