import React from 'react';

export default function ProductLogos() {
  const data  = [{
    productLogos: "Product Logos",
    productLogosText: "CORE is a decentralized network, and it is constantly growing through community contributions. We have many projects under the CORE Multichain. Here are current working versions of these project logos.",
  }]
  return (
   <div>{data.map((item, index)=> {
    return(<div key={index}> <div
      data-aos="fade-up"
      className="logo-variants__container guidline__flex pT-160 pB-160"
    >
      <div className="logo-variants__products-container">
        <h3 className="font-51">{ item.productLogos }</h3>
        <div className="logo-variants__products-description">
          { item.productLogosText }
        </div>
        <div className="logo-variants__products-logoes">
          <div className="logo-variants__products-logo">
            <svg
              width="110"
              height="110"
              viewBox="0 0 110 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5542 101.341L19.2546 94.9095H8.22412L5.88551 101.341H0L10.2119 74.0569H17.2667L27.4787 101.341H21.5542ZM10.134 89.6087H17.3057L13.7199 79.7085L10.134 89.6087Z"
                fill="white"
              />
              <path
                d="M46.458 74.0569H52.1096V90.3102C52.1096 94.026 51.0702 96.8713 48.9915 98.8462C46.9127 100.821 44.1973 101.808 40.8453 101.808C37.4933 101.808 34.7779 100.821 32.6991 98.8462C30.6204 96.8713 29.581 94.026 29.581 90.3102V74.0569H35.2326V89.9984C35.2326 94.3378 37.1035 96.5076 40.8453 96.5076C44.5871 96.5076 46.458 94.3378 46.458 89.9984V74.0569Z"
                fill="white"
              />
              <path
                d="M73.5317 101.341L66.4769 91.5185H63.3977V101.341H57.824V74.0569H69.556C72.4663 74.0569 74.7399 74.8624 76.377 76.4735C78.04 78.0585 78.8715 80.2152 78.8715 82.9436C78.8715 85.1263 78.3388 86.9063 77.2734 88.2834C76.2081 89.6606 74.701 90.5961 72.7521 91.0898L80.3916 101.341H73.5317ZM63.3977 79.3577V86.6464H68.9324C70.3615 86.6464 71.4269 86.3346 72.1285 85.711C72.8561 85.0614 73.2199 84.1649 73.2199 83.0216C73.2199 81.8782 72.8561 80.9818 72.1285 80.3322C71.4009 79.6825 70.3356 79.3577 68.9324 79.3577H63.3977Z"
                fill="white"
              />
              <path
                d="M104.076 101.341L101.776 94.9095H90.7454L88.4068 101.341H82.5213L92.7332 74.0569H99.7881L110 101.341H104.076ZM92.6553 89.6087H99.827L96.2412 79.7085L92.6553 89.6087Z"
                fill="white"
              />
              <path
                d="M45.6181 20.1994C47.9307 30.5295 39.779 36.1324 35.4141 37.6426L50.2973 46.1233C49.679 36.4679 56.8423 30.4714 60.5013 28.6801L45.6181 20.1994Z"
                fill="white"
              />
              <ellipse
                rx="9.57248"
                ry="9.63556"
                transform="matrix(0.504935 -0.863157 0.868847 0.495081 40.7082 45.5552)"
                fill="white"
              />
              <ellipse
                rx="9.57248"
                ry="9.63556"
                transform="matrix(0.504935 -0.863157 0.868847 0.495081 55.2082 20.7676)"
                fill="white"
              />
              <ellipse
                rx="9.57248"
                ry="9.63556"
                transform="matrix(-0.504935 -0.863157 -0.868847 0.495081 69.2205 45.5552)"
                fill="white"
              />
            </svg>
          </div>
          <div className="logo-variants__products-logo">
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.99458 87.0065C6.68324 84.3435 10.0121 83.012 13.981 83.012C17.95 83.012 21.2788 84.3435 23.9675 87.0065C26.6561 89.6696 28.0005 92.9728 28.0005 96.9162C28.0005 100.86 26.6561 104.163 23.9675 106.826C21.2788 109.489 17.95 110.82 13.981 110.82C10.0121 110.82 6.68324 109.489 3.99458 106.826C1.33153 104.163 0 100.86 0 96.9162C0 92.9728 1.33153 89.6696 3.99458 87.0065ZM20.0113 90.6938C18.4237 89.055 16.4136 88.2356 13.981 88.2356C11.5484 88.2356 9.52554 89.055 7.91234 90.6938C6.32475 92.3326 5.53096 94.4068 5.53096 96.9162C5.53096 99.4256 6.32475 101.5 7.91234 103.138C9.52554 104.777 11.5484 105.597 13.981 105.597C16.4136 105.597 18.4237 104.777 20.0113 103.138C21.6245 101.5 22.4311 99.4256 22.4311 96.9162C22.4311 94.4068 21.6245 92.3326 20.0113 90.6938Z"
                fill="white"
              />
              <path
                d="M48.139 110.359L41.1869 100.68H38.1526V110.359H32.66V83.4729H44.2212C47.0892 83.4729 49.3297 84.2667 50.9429 85.8543C52.5817 87.4162 53.4011 89.5416 53.4011 92.2302C53.4011 94.3812 52.8762 96.1352 51.8263 97.4923C50.7765 98.8494 49.2913 99.7713 47.3708 100.258L54.8991 110.359H48.139ZM38.1526 88.6966V95.8791H43.6067C45.015 95.8791 46.0649 95.5718 46.7563 94.9573C47.4732 94.3171 47.8317 93.4337 47.8317 92.307C47.8317 91.1804 47.4732 90.2969 46.7563 89.6568C46.0393 89.0166 44.9894 88.6966 43.6067 88.6966H38.1526Z"
                fill="white"
              />
              <path
                d="M58.2413 110.359V83.4729H63.7338V110.359H58.2413Z"
                fill="white"
              />
              <path
                d="M80.7855 95.7639H95.4963V110.359H90.8104V105.827C90.1702 107.312 89.0435 108.516 87.4303 109.438C85.8428 110.359 83.9479 110.82 81.7458 110.82C77.956 110.82 74.7808 109.514 72.2202 106.903C69.6596 104.265 68.3793 100.949 68.3793 96.9546C68.3793 92.9344 69.6852 89.6056 72.297 86.9681C74.9345 84.3307 78.2633 83.012 82.2835 83.012C85.4587 83.012 88.2113 83.8826 90.5415 85.6238C92.8973 87.3394 94.4721 89.5928 95.2659 92.3839H89.3892C88.7491 91.0779 87.8016 90.0665 86.5469 89.3495C85.3178 88.6069 83.8839 88.2356 82.2451 88.2356C79.7613 88.2356 77.7512 89.055 76.2148 90.6938C74.6784 92.3326 73.9102 94.4452 73.9102 97.0314C73.9102 99.5408 74.64 101.628 76.0996 103.292C77.5847 104.931 79.6076 105.75 82.1683 105.75C84.0375 105.75 85.6635 105.277 87.0462 104.329C88.429 103.382 89.3508 102.063 89.8117 100.373H80.7855V95.7639Z"
                fill="white"
              />
              <path
                d="M103.994 87.0065C106.683 84.3435 110.012 83.012 113.981 83.012C117.95 83.012 121.278 84.3435 123.967 87.0065C126.656 89.6696 128 92.9728 128 96.9162C128 100.86 126.656 104.163 123.967 106.826C121.278 109.489 117.95 110.82 113.981 110.82C110.012 110.82 106.683 109.489 103.994 106.826C101.331 104.163 99.9995 100.86 99.9995 96.9162C99.9995 92.9728 101.331 89.6696 103.994 87.0065ZM120.011 90.6938C118.423 89.055 116.413 88.2356 113.981 88.2356C111.548 88.2356 109.525 89.055 107.912 90.6938C106.324 92.3326 105.53 94.4068 105.53 96.9162C105.53 99.4256 106.324 101.5 107.912 103.138C109.525 104.777 111.548 105.597 113.981 105.597C116.413 105.597 118.423 104.777 120.011 103.138C121.624 101.5 122.431 99.4256 122.431 96.9162C122.431 94.4068 121.624 92.3326 120.011 90.6938Z"
                fill="white"
              />
              <ellipse
                cx="63.5707"
                cy="41.0061"
                rx="28.8071"
                ry="24.0059"
                fill="#9B99FF"
              />
              <ellipse
                cx="57.8105"
                cy="41.0063"
                rx="20.1649"
                ry="16.8041"
                fill="#010918"
              />
            </svg>
          </div>
          <div className="logo-variants__products-logo">
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.8681 105.531C18.3042 105.766 17.7363 105.978 17.1646 106.165C16.5928 106.353 16.0015 106.514 15.3905 106.647C14.7796 106.788 14.1335 106.894 13.452 106.964C12.7785 107.035 12.054 107.07 11.2786 107.07C9.63378 107.07 8.11822 106.894 6.73189 106.541C5.3534 106.189 4.16289 105.66 3.16035 104.955C2.16564 104.243 1.39024 103.358 0.834144 102.3C0.278048 101.235 0 99.9936 0 98.576C0 97.1583 0.278048 95.9208 0.834144 94.8634C1.39024 93.7982 2.16564 92.9132 3.16035 92.2083C4.16289 91.4955 5.3534 90.9629 6.73189 90.6105C8.11822 90.258 9.63378 90.0818 11.2786 90.0818C12.054 90.0818 12.7785 90.117 13.452 90.1875C14.1335 90.258 14.7796 90.3638 15.3905 90.5047C16.0015 90.6379 16.5928 90.7984 17.1646 90.9864C17.7363 91.1744 18.3042 91.3859 18.8681 91.6208V95.5448C18.4217 95.302 17.9517 95.0632 17.4583 94.8282C16.9648 94.5854 16.4205 94.37 15.8252 94.182C15.23 93.9862 14.576 93.8296 13.8632 93.7121C13.1505 93.5868 12.3477 93.5241 11.4548 93.5241C10.0841 93.5241 8.94453 93.6651 8.03598 93.947C7.13526 94.229 6.41469 94.605 5.87425 95.0749C5.33382 95.5448 4.95395 96.0853 4.73465 96.6962C4.51534 97.2993 4.40569 97.9259 4.40569 98.576C4.40569 99.0067 4.45268 99.4336 4.54667 99.8565C4.64066 100.272 4.79731 100.667 5.01661 101.043C5.23592 101.411 5.5218 101.752 5.87425 102.065C6.22671 102.379 6.66532 102.649 7.19009 102.876C7.71485 103.103 8.32578 103.283 9.02285 103.416C9.72777 103.542 10.5384 103.604 11.4548 103.604C12.3477 103.604 13.1505 103.549 13.8632 103.44C14.576 103.322 15.23 103.17 15.8252 102.982C16.4205 102.794 16.9648 102.582 17.4583 102.347C17.9517 102.104 18.4217 101.858 18.8681 101.607V105.531Z"
                fill="white"
              />
              <path
                d="M36.0209 103.581H27.0216L25.506 106.635H20.6421L29.0893 90.493H33.9532L42.4004 106.635H37.5365L36.0209 103.581ZM28.5841 100.432H34.4819L31.5447 94.4875L28.5841 100.432Z"
                fill="white"
              />
              <path
                d="M53.1502 94.0058V106.635H48.7916V94.0058H41.9422V90.493H60.0114V94.0058H53.1502Z"
                fill="white"
              />
              <path
                d="M62.9015 106.635V90.493H79.2437V93.9353H67.3777V96.6022H78.6328V100.045H67.3777V103.193H79.4082V106.635H62.9015Z"
                fill="white"
              />
              <path
                d="M98.8754 106.635L87.9846 95.5448V106.635H83.6259V90.493H88.3605L99.2631 101.631V90.493H103.598V106.635H98.8754Z"
                fill="white"
              />
              <path
                d="M121.621 103.581H112.621L111.106 106.635H106.242L114.689 90.493H119.553L128 106.635H123.136L121.621 103.581ZM114.184 100.432H120.082L117.144 94.4875L114.184 100.432Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M76.9594 68.0819C90.2368 68.0819 101 57.3184 101 44.0411C101 30.7637 90.2368 20.0002 76.9594 20.0002C66.6021 20.0002 57.7746 26.5499 54.3927 35.7333C55.8035 36.1461 57.0651 36.9085 58.0772 37.9203C61.3801 39.7835 66.4887 41.1391 71.4741 38.2684C73.0587 36.4993 75.3607 35.3861 77.9226 35.3861C82.7025 35.3861 86.5773 39.2609 86.5773 44.0408C86.5773 48.8207 82.7025 52.6955 77.9226 52.6955C75.9651 52.6955 74.1595 52.0456 72.7095 50.9499C69.3386 49.2621 63.2491 47.7417 57.3116 50.8417C56.4546 51.5172 55.4669 52.0342 54.3926 52.3485C57.7744 61.5321 66.602 68.0819 76.9594 68.0819Z"
                fill="#E96B6B"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M75.4837 35.7339C72.102 26.5502 63.2743 20.0002 52.9168 20.0002C39.6394 20.0002 28.876 30.7637 28.876 44.0411C28.876 57.3184 39.6394 68.0819 52.9168 68.0819C63.2745 68.0819 72.1023 61.5317 75.4839 52.3477C74.4687 52.0503 73.5308 51.572 72.7076 50.9498C69.3364 49.2619 63.246 47.7414 57.3079 50.8425C55.8351 52.0031 53.9763 52.6955 51.9557 52.6955C47.1758 52.6955 43.301 48.8207 43.301 44.0408C43.301 39.261 47.1758 35.3861 51.9557 35.3861C54.3448 35.3861 56.5079 36.3542 58.0739 37.9195C61.3768 39.7831 66.4862 41.1395 71.4722 38.2683C72.5334 37.0836 73.9164 36.193 75.4837 35.7339Z"
                fill="#00FFF0"
              />
            </svg>
          </div>
          <div className="logo-variants__products-logo">
            <svg
              width="110"
              height="110"
              viewBox="0 0 110 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M96.2918 79.5071L54.9273 7.73462L13.7559 79.2175C19.4996 76.8524 32.5316 73.7634 54.9273 73.7634C78.2401 73.7151 91.1273 77.0938 96.2918 79.5071Z"
                fill="url(#paint0_linear)"
              />
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M96.1473 79.4588L54.9276 23.8074L13.9492 79.1209C19.7895 76.7559 32.8215 73.7151 54.8793 73.7151C77.999 73.7151 90.8862 77.0455 96.1473 79.4588Z"
                fill="url(#paint1_linear)"
              />
              <path
                opacity="0.7"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M95.7595 79.2659L54.926 39.8804L14.4785 78.9281C20.5601 76.6113 33.4473 73.7153 54.926 73.7153C77.4665 73.7153 90.3054 76.9009 95.7595 79.2659Z"
                fill="url(#paint2_linear)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M93.9261 78.5417L54.9267 55.9529L16.5547 78.1555C23.2637 75.9835 35.62 73.6667 54.9267 73.6667C75.2469 73.715 87.6997 76.3214 93.9261 78.5417Z"
                fill="url(#paint3_linear)"
              />
              <path
                d="M4.6336 88.7747H8.01226L12.6459 102.338H9.46026L8.54319 99.2968H4.10266L3.1856 102.338H0L4.6336 88.7747ZM7.86746 97.1248L6.27466 91.912L4.68186 97.1248H7.86746Z"
                fill="white"
              />
              <path
                d="M13.9502 102.338V88.7747H19.6939C20.3214 88.7747 20.9489 88.9195 21.4798 89.1608C22.0107 89.4021 22.4934 89.7883 22.8795 90.2227C23.2657 90.6571 23.5553 91.1397 23.7966 91.7189C23.9897 92.2499 24.1345 92.8291 24.1345 93.4083C24.1345 94.1805 23.9414 94.9045 23.6035 95.6285C23.2657 96.3525 22.7347 96.8835 22.1073 97.3179C21.4798 97.7523 20.7075 97.9936 19.8387 97.9936H17.0875V102.386H13.9502V102.338ZM17.0875 95.2424H19.6457C19.887 95.2424 20.1283 95.1941 20.3214 95.0493C20.5145 94.9045 20.7075 94.7115 20.8041 94.4219C20.9489 94.1323 20.9971 93.7944 20.9971 93.4083C20.9971 92.9739 20.9006 92.636 20.7558 92.3464C20.611 92.0568 20.4179 91.8637 20.2249 91.7672C19.9835 91.6224 19.7905 91.5741 19.5491 91.5741H17.1358V95.2424H17.0875Z"
                fill="white"
              />
              <path
                d="M35.2825 99.5864V102.338H25.8223V88.7747H35.1377V91.5259H28.9113V94.1805H34.2207V96.7387H28.9113V99.6347H35.2825V99.5864Z"
                fill="white"
              />
              <path
                d="M37.166 102.338V88.7747H40.3033V102.338H37.166Z"
                fill="white"
              />
              <path
                d="M42.8613 102.338V88.7747H48.9429C49.5704 88.7747 50.1496 88.9195 50.6805 89.1608C51.2115 89.4021 51.6941 89.7883 52.0803 90.2227C52.4664 90.6571 52.756 91.1397 52.9973 91.7189C53.2387 92.2499 53.3352 92.8291 53.3352 93.36C53.3352 93.9392 53.2387 94.4701 53.0456 94.9528C52.8525 95.4355 52.6112 95.9181 52.2733 96.3042C51.9355 96.6904 51.5493 97.0282 51.1149 97.2696L54.0592 102.338H50.6805L48.1224 97.9453H45.9987V102.338H42.8613ZM45.9987 95.2424H48.8464C49.0877 95.2424 49.3291 95.1459 49.5221 95.0011C49.7152 94.8563 49.86 94.6149 50.0048 94.3253C50.1496 94.0357 50.1979 93.6979 50.1979 93.36C50.1979 92.9739 50.1013 92.6843 49.9565 92.3947C49.8117 92.1051 49.6187 91.912 49.4256 91.7672C49.2325 91.6224 48.9912 91.5259 48.7499 91.5259H45.9987V95.2424Z"
                fill="white"
              />
              <path
                d="M61.3946 102.434C60.381 102.434 59.4639 102.241 58.6434 101.855C57.8229 101.469 57.1471 100.938 56.5197 100.31C55.9405 99.6347 55.4578 98.9107 55.1682 98.0901C54.8303 97.2696 54.6855 96.4008 54.6855 95.532C54.6855 94.6149 54.8303 93.7461 55.1682 92.9739C55.5061 92.1533 55.9887 91.4293 56.5679 90.8019C57.1471 90.1744 57.8711 89.6435 58.6917 89.3056C59.5122 88.9195 60.4293 88.7747 61.3946 88.7747C62.4082 88.7747 63.3253 88.9677 64.0975 89.3539C64.9181 89.74 65.5938 90.2709 66.2213 90.9467C66.8005 91.6224 67.2831 92.3464 67.5727 93.1669C67.9106 93.9875 68.0554 94.808 68.0554 95.6768C68.0554 96.5939 67.9106 97.4627 67.5727 98.2349C67.2349 99.0554 66.7522 99.7794 66.173 100.407C65.5455 101.034 64.8698 101.565 64.0493 101.951C63.2287 102.241 62.3599 102.434 61.3946 102.434ZM57.8711 95.532C57.8711 96.0629 57.9677 96.5456 58.1125 97.0283C58.2573 97.5109 58.4986 97.9453 58.7882 98.3315C59.0778 98.7176 59.4639 99.0072 59.8983 99.2485C60.3327 99.4899 60.8637 99.5864 61.3946 99.5864C61.9738 99.5864 62.5047 99.4899 62.9391 99.2485C63.3735 99.0072 63.7597 98.7176 64.0493 98.2832C64.3389 97.8971 64.5802 97.4627 64.725 96.9317C64.8698 96.4491 64.9663 95.9181 64.9663 95.4355C64.9663 94.9045 64.8698 94.4219 64.725 93.9392C64.5802 93.4565 64.3389 93.0221 64.0493 92.636C63.7597 92.2499 63.3735 91.9603 62.9391 91.7189C62.5047 91.5259 61.9738 91.3811 61.4429 91.3811C60.8637 91.3811 60.3327 91.4776 59.8983 91.7189C59.4639 91.9603 59.0778 92.2499 58.7882 92.636C58.4986 93.0221 58.2573 93.4565 58.1125 93.9392C57.9194 94.5667 57.8711 95.0493 57.8711 95.532Z"
                fill="white"
              />
              <path
                d="M75.6347 102.434C74.7659 102.434 73.8971 102.289 73.1249 101.951C72.3526 101.614 71.6286 101.131 71.0494 100.503C70.4702 99.876 69.9875 99.152 69.6497 98.2832C69.3118 97.4144 69.167 96.4974 69.167 95.4355C69.167 94.4702 69.3601 93.6014 69.6979 92.7808C70.0358 91.9603 70.5185 91.2363 71.0977 90.6088C71.7251 89.9814 72.4009 89.4987 73.2214 89.1608C74.0419 88.823 74.9107 88.6299 75.8761 88.6299C77.131 88.6299 78.1929 88.9195 79.1582 89.4504C80.1235 89.9813 80.7992 90.7053 81.2819 91.6224L78.9651 93.36C78.6755 92.7808 78.2411 92.2981 77.6619 91.9603C77.0827 91.6224 76.4553 91.4294 75.7795 91.4294C75.2969 91.4294 74.8142 91.5259 74.3798 91.7672C73.9454 91.9603 73.6075 92.2499 73.2697 92.636C72.9801 93.0222 72.7387 93.4565 72.5457 93.9392C72.4009 94.4219 72.3043 94.9528 72.3043 95.532C72.3043 96.1112 72.4009 96.6421 72.5939 97.1731C72.787 97.6557 73.0283 98.0901 73.3179 98.4763C73.6558 98.8624 73.9937 99.1037 74.4281 99.3451C74.8625 99.5381 75.3451 99.6347 75.8761 99.6347C76.5035 99.6347 77.131 99.4899 77.7102 99.152C78.2894 98.8141 78.8203 98.3315 79.3512 97.704V100.793C78.2894 101.903 77.0345 102.434 75.6347 102.434ZM79.1582 97.5109H76.5518V95.2424H81.7646V102.338H79.1582V97.5109Z"
                fill="white"
              />
              <path
                d="M89.6798 102.434C88.6662 102.434 87.7491 102.241 86.9286 101.855C86.108 101.469 85.4323 100.938 84.8048 100.31C84.2256 99.6347 83.743 98.9107 83.4534 98.0901C83.1155 97.2696 82.9707 96.4008 82.9707 95.532C82.9707 94.6149 83.1155 93.7461 83.4534 92.9739C83.7912 92.1533 84.2739 91.4293 84.8531 90.8019C85.4323 90.1744 86.1563 89.6435 86.9768 89.3056C87.7974 88.9195 88.7144 88.7747 89.6798 88.7747C90.6934 88.7747 91.6104 88.9677 92.3827 89.3539C93.2032 89.74 93.879 90.2709 94.5064 90.9467C95.0856 91.6224 95.5683 92.3464 95.8579 93.1669C96.1958 93.9875 96.3406 94.808 96.3406 95.6768C96.3406 96.5939 96.1958 97.4627 95.8579 98.2349C95.52 99.0554 95.0374 99.7794 94.4582 100.407C93.8307 101.034 93.155 101.565 92.3344 101.951C91.5622 102.241 90.6934 102.434 89.6798 102.434ZM86.2046 95.532C86.2046 96.0629 86.3011 96.5456 86.4459 97.0283C86.5907 97.5109 86.832 97.9453 87.1216 98.3315C87.4112 98.7176 87.7974 99.0072 88.2318 99.2485C88.6662 99.4899 89.1971 99.5864 89.728 99.5864C90.3072 99.5864 90.8382 99.4899 91.2726 99.2485C91.707 99.0072 92.0931 98.7176 92.3827 98.2832C92.6723 97.8971 92.9136 97.4627 93.0584 96.9317C93.2032 96.4491 93.2998 95.9181 93.2998 95.4355C93.2998 94.9045 93.2032 94.4219 93.0584 93.9392C92.9136 93.4565 92.6723 93.0221 92.3827 92.636C92.0931 92.2499 91.707 91.9603 91.2726 91.7189C90.8382 91.5259 90.3072 91.3811 89.7763 91.3811C89.1971 91.3811 88.6662 91.4776 88.2318 91.7189C87.7974 91.9603 87.4112 92.2499 87.1216 92.636C86.832 93.0221 86.5907 93.4565 86.4459 93.9392C86.2528 94.5667 86.2046 95.0493 86.2046 95.532Z"
                fill="white"
              />
              <path
                d="M101.312 94.5667V102.338H98.1748V88.7747H100.636L106.863 96.7387V88.7747H110V102.338H107.442L101.312 94.5667Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="55.0238"
                  y1="7.73641"
                  x2="55.0238"
                  y2="79.5053"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6AF6FF" />
                  <stop offset="0.4844" stopColor="#5200FF" />
                  <stop
                    offset="1"
                    stopColor="#220069"
                    stopOpacity="0"
                  />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="55.0551"
                  y1="23.8195"
                  x2="55.0551"
                  y2="79.4357"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6AF6FF" />
                  <stop offset="0.4844" stopColor="#5200FF" />
                  <stop
                    offset="1"
                    stopColor="#220069"
                    stopOpacity="0"
                  />
                </linearGradient>
                <linearGradient
                  id="paint2_linear"
                  x1="55.1162"
                  y1="39.903"
                  x2="55.1162"
                  y2="79.2698"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6AF6FF" />
                  <stop offset="0.4844" stopColor="#5200FF" />
                  <stop
                    offset="1"
                    stopColor="#220069"
                    stopOpacity="0"
                  />
                </linearGradient>
                <linearGradient
                  id="paint3_linear"
                  x1="55.2479"
                  y1="55.9861"
                  x2="55.2479"
                  y2="78.5521"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6AF6FF" />
                  <stop offset="0.4844" stopColor="#5200FF" />
                  <stop
                    offset="1"
                    stopColor="#220069"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div></div>)
   })}</div>
  );
}
