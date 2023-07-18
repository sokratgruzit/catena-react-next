import styles from './tokenomics.module.css';

function Download() {
  return (
    <div className={`${styles.download__container} pB-160 pT-160 `}>
      <div className={styles.donwnloadBg}>
        <img src='' alt='tronlink-bg' className={`${styles.donwnloadBg} img `} />
      </div>
      <div className={styles.download__inner}>
        <h2 className={`${styles.download__title} font-51 `}>
          Download
          <img src='' alt='tronlink' className={styles.download__img} />
          tronlink Tronlink App
        </h2>
        <div className={styles.download__buttonsContainer}>
          <a
            target='_blank'
            href='https://apps.apple.com/us/app/tronlink-trx-bttWallet/id1453530188'
            className={styles.download__button}
          >
            <svg width='183' height='60' viewBox='0 0 183 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M11.7509 59.9969C11.2781 59.9969 10.8166 59.9907 10.3475 59.9801C9.37566 59.9673 8.40609 59.8818 7.44674 59.7242C6.5522 59.5685 5.68562 59.2789 4.87561 58.8648C4.07302 58.4542 3.34099 57.9158 2.70757 57.2703C2.06498 56.6323 1.52999 55.8924 1.12381 55.0798C0.713155 54.2619 0.428957 53.3853 0.281116 52.4804C0.12146 51.5081 0.0350804 50.5249 0.0227202 49.5394C0.012881 49.2086 0 48.1071 0 48.1071V11.8729C0 11.8729 0.0137191 10.7883 0.0227978 10.4697C0.0346326 9.48575 0.12051 8.50411 0.279688 7.5333C0.427802 6.62593 0.71222 5.74676 1.1231 4.92622C1.52778 4.11421 2.0598 3.37372 2.69852 2.73347C3.33652 2.08714 4.07089 1.54596 4.87485 1.12968C5.683 0.716972 6.54794 0.429362 7.44067 0.276488C8.40317 0.117384 9.37611 0.0313648 10.3513 0.019152L11.7517 0H171.241L172.658 0.0199206C173.624 0.0315265 174.588 0.116778 175.542 0.27495C176.444 0.429742 177.318 0.719359 178.135 1.13428C179.746 1.97321 181.056 3.30048 181.883 4.93005C182.287 5.74492 182.567 6.61692 182.714 7.51645C182.875 8.49523 182.965 9.48458 182.983 10.4766C182.988 10.9208 182.988 11.398 182.988 11.8729C183 12.4611 183 13.0209 183 13.5854V46.4129C183 46.9828 183 47.5388 182.988 48.0994C182.988 48.6095 182.988 49.0768 182.982 49.5577C182.964 50.5321 182.875 51.5038 182.716 52.465C182.572 53.3764 182.289 54.2599 181.878 55.0845C181.469 55.8882 180.937 56.6218 180.302 57.258C179.668 57.9071 178.935 58.4486 178.131 58.8619C177.315 59.2791 176.443 59.5698 175.542 59.7242C174.583 59.8826 173.613 59.9681 172.641 59.9801C172.187 59.9907 171.711 59.9969 171.248 59.9969L169.566 60L11.7509 59.9969Z'
                fill='#262C38'
              />
              <path
                d='M37.4381 29.8246C37.4555 28.4632 37.8133 27.1283 38.4782 25.9442C39.1431 24.7601 40.0936 23.7652 41.2412 23.0521C40.5122 21.9998 39.5504 21.1337 38.4323 20.5228C37.3142 19.9119 36.0706 19.5728 34.8001 19.5327C32.0901 19.2452 29.4629 21.1717 28.0818 21.1717C26.6741 21.1717 24.5479 19.5612 22.2583 19.6088C20.7773 19.6572 19.334 20.0925 18.0689 20.8722C16.8039 21.652 15.7602 22.7497 15.0397 24.0583C11.9186 29.52 14.2467 37.5469 17.2365 41.9617C18.7324 44.1235 20.4806 46.5383 22.7681 46.4527C25.0066 46.3588 25.8427 45.01 28.5447 45.01C31.2217 45.01 32.006 46.4527 34.34 46.3982C36.742 46.3588 38.2554 44.2268 39.6988 42.0445C40.7736 40.5042 41.6006 38.8017 42.1493 37.0003C40.7538 36.4037 39.5629 35.4052 38.7251 34.1291C37.8873 32.8531 37.4397 31.3561 37.4381 29.8246Z'
                fill='white'
              />
              <path
                d='M33.0297 16.6292C34.3394 15.0401 34.9846 12.9977 34.8284 10.9355C32.8275 11.148 30.9792 12.1145 29.6518 13.6426C29.0029 14.3891 28.5058 15.2576 28.1891 16.1983C27.8724 17.1391 27.7422 18.1338 27.8061 19.1254C28.8069 19.1358 29.797 18.9166 30.7018 18.4842C31.6066 18.0518 32.4026 17.4176 33.0297 16.6292Z'
                fill='white'
              />
              <path
                d='M64.2944 41.1954H56.9485L55.1844 46.4601H52.073L59.0309 26.9819H62.2636L69.2215 46.4601H66.057L64.2944 41.1954ZM57.7093 38.766H63.5322L60.6617 30.2217H60.5813L57.7093 38.766Z'
                fill='white'
              />
              <path
                d='M84.2483 39.3619C84.2483 43.775 81.9113 46.6103 78.3846 46.6103C77.4913 46.6576 76.6028 46.4496 75.8209 46.0102C75.0391 45.5707 74.3955 44.9177 73.9638 44.1257H73.897V51.1597H71.0129V32.2606H73.8046V34.6226H73.8576C74.3092 33.8345 74.9637 33.1848 75.7515 32.7427C76.5393 32.3006 77.4309 32.0826 78.3315 32.112C81.8977 32.112 84.2483 34.9611 84.2483 39.3619ZM81.2839 39.3619C81.2839 36.4868 79.8138 34.5966 77.5708 34.5966C75.3672 34.5966 73.8849 36.5266 73.8849 39.3619C73.8849 42.2233 75.3672 44.1396 77.5708 44.1396C79.8138 44.1396 81.2838 42.2631 81.2838 39.3619H81.2839Z'
                fill='white'
              />
              <path
                d='M99.7137 39.3619C99.7137 43.775 97.3759 46.6103 93.8492 46.6103C92.9559 46.6576 92.0674 46.4496 91.2855 46.0102C90.5037 45.5707 89.8601 44.9177 89.4284 44.1257H89.3616V51.1597H86.4775V32.2606H89.2692V34.6226H89.3222C89.7738 33.8345 90.4283 33.1848 91.2161 32.7427C92.0039 32.3006 92.8955 32.0826 93.7961 32.112C97.3623 32.112 99.7137 34.9611 99.7137 39.3619ZM96.7485 39.3619C96.7485 36.4868 95.2784 34.5966 93.0354 34.5966C90.8318 34.5966 89.3496 36.5266 89.3496 39.3619C89.3496 42.2233 90.8318 44.1396 93.0354 44.1396C95.2784 44.1396 96.7485 42.2631 96.7485 39.3619Z'
                fill='white'
              />
              <path
                d='M109.933 41.0346C110.147 42.9661 112.003 44.2344 114.54 44.2344C116.971 44.2344 118.72 42.9661 118.72 41.2244C118.72 39.7125 117.665 38.8073 115.168 38.1869L112.67 37.5788C109.131 36.7149 107.488 35.0421 107.488 32.3278C107.488 28.9671 110.386 26.6587 114.499 26.6587C118.573 26.6587 121.365 28.9671 121.459 32.3278H118.547C118.373 30.384 116.783 29.2106 114.46 29.2106C112.136 29.2106 110.547 30.3978 110.547 32.1256C110.547 33.5027 111.562 34.313 114.046 34.9333L116.169 35.4603C120.123 36.4054 121.765 38.0107 121.765 40.8598C121.765 44.5039 118.894 46.7863 114.326 46.7863C110.052 46.7863 107.167 44.5575 106.98 41.0344L109.933 41.0346Z'
                fill='white'
              />
              <path
                d='M127.992 28.8999V32.2606H130.664V34.569H127.992V42.398C127.992 43.6142 128.527 44.181 129.702 44.181C130.019 44.1754 130.336 44.1529 130.65 44.1135V46.4081C130.122 46.5079 129.586 46.553 129.049 46.5429C126.204 46.5429 125.094 45.463 125.094 42.7089V34.569H123.052V32.2606H125.094V28.8999H127.992Z'
                fill='white'
              />
              <path
                d='M132.21 39.3619C132.21 34.8937 134.814 32.0859 138.874 32.0859C142.948 32.0859 145.539 34.8936 145.539 39.3619C145.539 43.8424 142.961 46.6379 138.874 46.6379C134.788 46.6379 132.21 43.8424 132.21 39.3619ZM142.601 39.3619C142.601 36.2968 141.211 34.4878 138.874 34.4878C136.537 34.4878 135.147 36.3106 135.147 39.3619C135.147 42.4392 136.537 44.2345 138.874 44.2345C141.211 44.2345 142.601 42.4392 142.601 39.3619H142.601Z'
                fill='white'
              />
              <path
                d='M147.917 32.2604H150.668V34.6776H150.734C150.921 33.9227 151.358 33.2555 151.974 32.7883C152.589 32.321 153.345 32.0822 154.114 32.1118C154.447 32.1107 154.778 32.1472 155.102 32.2206V34.9472C154.683 34.8176 154.245 34.7581 153.806 34.771C153.387 34.7539 152.97 34.8285 152.582 34.9899C152.194 35.1513 151.846 35.3956 151.56 35.706C151.275 36.0164 151.059 36.3855 150.928 36.7881C150.797 37.1907 150.754 37.6172 150.801 38.0383V46.4616H147.917L147.917 32.2604Z'
                fill='white'
              />
              <path
                d='M168.4 42.2907C168.012 44.8687 165.528 46.6379 162.35 46.6379C158.262 46.6379 155.725 43.8699 155.725 39.4293C155.725 34.9749 158.276 32.0859 162.229 32.0859C166.116 32.0859 168.561 34.7849 168.561 39.0908V40.0895H158.637V40.2656C158.591 40.7883 158.656 41.3148 158.827 41.8102C158.998 42.3056 159.271 42.7586 159.628 43.139C159.986 43.5195 160.419 43.8187 160.9 44.0168C161.381 44.2149 161.898 44.3074 162.417 44.2881C163.098 44.3526 163.782 44.1931 164.367 43.8332C164.951 43.4733 165.405 42.9323 165.661 42.2907L168.4 42.2907ZM158.65 38.0522H165.675C165.701 37.5823 165.63 37.112 165.468 36.6709C165.305 36.2299 165.055 35.8275 164.731 35.489C164.407 35.1506 164.018 34.8834 163.587 34.7043C163.157 34.5251 162.694 34.4378 162.229 34.4479C161.759 34.4451 161.293 34.5363 160.859 34.7163C160.424 34.8963 160.029 35.1615 159.696 35.4966C159.364 35.8316 159.1 36.23 158.921 36.6687C158.741 37.1073 158.649 37.5775 158.65 38.0522V38.0522Z'
                fill='white'
              />
              <path
                d='M57.3485 12.3226C57.9531 12.2788 58.5599 12.3711 59.1249 12.5929C59.69 12.8148 60.1993 13.1606 60.6162 13.6055C61.033 14.0504 61.3469 14.5832 61.5353 15.1656C61.7237 15.7479 61.7819 16.3653 61.7057 16.9731C61.7057 19.9632 60.1068 21.6819 57.3485 21.6819H54.0037V12.3226H57.3485ZM55.4419 20.3583H57.1878C57.6199 20.3844 58.0523 20.3128 58.4535 20.1487C58.8547 19.9846 59.2147 19.7322 59.5073 19.4097C59.7998 19.0873 60.0175 18.703 60.1445 18.2848C60.2716 17.8666 60.3048 17.425 60.2417 16.9922C60.3002 16.5611 60.2636 16.1223 60.1346 15.7071C60.0056 15.292 59.7874 14.9108 59.4955 14.591C59.2037 14.2711 58.8454 14.0204 58.4465 13.8569C58.0475 13.6934 57.6177 13.6211 57.1878 13.6452H55.4419V20.3583Z'
                fill='white'
              />
              <path
                d='M63.3303 18.1471C63.2864 17.683 63.3389 17.2147 63.4845 16.7722C63.6302 16.3298 63.8657 15.923 64.176 15.5779C64.4863 15.2329 64.8645 14.9572 65.2864 14.7685C65.7083 14.5799 66.1645 14.4824 66.6259 14.4824C67.0872 14.4824 67.5434 14.5799 67.9653 14.7685C68.3872 14.9572 68.7655 15.2329 69.0757 15.5779C69.386 15.923 69.6216 16.3298 69.7672 16.7722C69.9128 17.2147 69.9654 17.683 69.9214 18.1471C69.9662 18.6118 69.9143 19.0807 69.769 19.5239C69.6238 19.967 69.3884 20.3746 69.078 20.7203C68.7677 21.066 68.3892 21.3423 67.9668 21.5314C67.5445 21.7204 67.0877 21.8181 66.6259 21.8181C66.164 21.8181 65.7072 21.7204 65.2849 21.5314C64.8626 21.3423 64.484 21.066 64.1737 20.7203C63.8633 20.3746 63.6279 19.967 63.4827 19.5239C63.3374 19.0807 63.2855 18.6118 63.3303 18.1471ZM68.5029 18.1471C68.5029 16.6161 67.8224 15.7208 66.6281 15.7208C65.4293 15.7208 64.755 16.6161 64.755 18.1472C64.755 19.6904 65.4294 20.5789 66.6281 20.5789C67.8224 20.5788 68.5029 19.6843 68.5029 18.1471H68.5029Z'
                fill='white'
              />
              <path
                d='M78.6829 21.6817H77.2522L75.8079 16.4798H75.6988L74.2605 21.6817H72.8435L70.9172 14.6187H72.3161L73.5679 20.0082H73.671L75.1077 14.6187H76.4308L77.8676 20.0082H77.9767L79.2225 14.6187H80.6016L78.6829 21.6817Z'
                fill='white'
              />
              <path
                d='M82.2217 14.6184H83.5493V15.7404H83.6524C83.8272 15.3374 84.1221 14.9996 84.4959 14.774C84.8697 14.5485 85.3038 14.4464 85.7378 14.4821C86.0778 14.4562 86.4192 14.508 86.7367 14.6337C87.0543 14.7593 87.3397 14.9555 87.572 15.2078C87.8043 15.4601 87.9775 15.762 88.0787 16.0911C88.1799 16.4202 88.2065 16.7681 88.1566 17.1091V21.6814H86.7774V17.4591C86.7774 16.324 86.2894 15.7596 85.2695 15.7596C85.0386 15.7487 84.8081 15.7884 84.5939 15.876C84.3796 15.9636 84.1866 16.0969 84.0282 16.2669C83.8697 16.4369 83.7494 16.6396 83.6757 16.8609C83.6019 17.0823 83.5764 17.3172 83.6008 17.5495V21.6814H82.2217L82.2217 14.6184Z'
                fill='white'
              />
              <path d='M90.3542 11.8613H91.7334V21.6816H90.3542V11.8613Z' fill='white' />
              <path
                d='M93.6503 18.1473C93.6064 17.6831 93.659 17.2147 93.8047 16.7723C93.9503 16.3298 94.1859 15.923 94.4962 15.578C94.8065 15.2329 95.1848 14.9572 95.6067 14.7685C96.0286 14.5799 96.4849 14.4824 96.9463 14.4824C97.4076 14.4824 97.8639 14.5799 98.2858 14.7685C98.7077 14.9572 99.086 15.2329 99.3963 15.578C99.7066 15.923 99.9422 16.3298 100.088 16.7723C100.234 17.2147 100.286 17.6831 100.242 18.1473C100.287 18.6119 100.235 19.0809 100.09 19.524C99.9444 19.9672 99.709 20.3747 99.3985 20.7204C99.0881 21.0662 98.7096 21.3424 98.2873 21.5315C97.865 21.7205 97.4082 21.8182 96.9463 21.8182C96.4844 21.8182 96.0276 21.7205 95.6052 21.5315C95.1829 21.3424 94.8044 21.0662 94.494 20.7204C94.1836 20.3747 93.9482 19.9672 93.8029 19.524C93.6576 19.0809 93.6056 18.6119 93.6503 18.1473ZM98.8229 18.1473C98.8229 16.6163 98.1424 15.7209 96.9482 15.7209C95.7494 15.7209 95.075 16.6163 95.075 18.1473C95.075 19.6906 95.7494 20.579 96.9482 20.579C98.1424 20.579 98.8229 19.6844 98.8229 18.1473H98.8229Z'
                fill='white'
              />
              <path
                d='M101.694 19.6843C101.694 18.413 102.631 17.68 104.293 17.5758L106.186 17.4656V16.8559C106.186 16.1099 105.698 15.6887 104.756 15.6887C103.986 15.6887 103.452 15.9744 103.299 16.4737H101.964C102.105 15.2606 103.234 14.4824 104.819 14.4824C106.571 14.4824 107.56 15.3639 107.56 16.8559V21.6818H106.232V20.6892H106.123C105.901 21.0453 105.59 21.3355 105.222 21.5303C104.853 21.7252 104.439 21.8176 104.024 21.7982C103.73 21.829 103.434 21.7974 103.153 21.7053C102.873 21.6132 102.614 21.4628 102.395 21.2636C102.176 21.0645 102 20.821 101.879 20.549C101.758 20.277 101.695 19.9825 101.694 19.6843ZM106.186 19.0808V18.4903L104.48 18.6006C103.518 18.6657 103.081 18.9966 103.081 19.6192C103.081 20.2549 103.627 20.6248 104.377 20.6248C104.597 20.6473 104.819 20.6249 105.03 20.5589C105.241 20.4929 105.437 20.3846 105.606 20.2405C105.774 20.0965 105.913 19.9196 106.013 19.7203C106.112 19.5211 106.172 19.3036 106.186 19.0808Z'
                fill='white'
              />
              <path
                d='M109.372 18.147C109.372 15.9152 110.507 14.5014 112.273 14.5014C112.71 14.481 113.143 14.5868 113.523 14.8062C113.902 15.0256 114.212 15.3497 114.416 15.7405H114.519V11.8613H115.898V21.6816H114.576V20.5657H114.467C114.248 20.9539 113.927 21.2739 113.54 21.4911C113.153 21.7083 112.715 21.8145 112.273 21.798C110.495 21.7981 109.372 20.3842 109.372 18.147ZM110.797 18.147C110.797 19.6451 111.495 20.5466 112.664 20.5466C113.826 20.5466 114.545 19.6321 114.545 18.1532C114.545 16.6811 113.819 15.7536 112.664 15.7536C111.503 15.7536 110.797 16.6612 110.797 18.147H110.797Z'
                fill='white'
              />
              <path
                d='M121.604 18.1471C121.56 17.683 121.613 17.2147 121.758 16.7722C121.904 16.3298 122.14 15.923 122.45 15.5779C122.76 15.2329 123.138 14.9572 123.56 14.7685C123.982 14.5799 124.438 14.4824 124.9 14.4824C125.361 14.4824 125.817 14.5799 126.239 14.7685C126.661 14.9572 127.039 15.2329 127.35 15.5779C127.66 15.923 127.895 16.3298 128.041 16.7722C128.187 17.2147 128.239 17.683 128.195 18.1471C128.24 18.6118 128.188 19.0807 128.043 19.5239C127.898 19.967 127.662 20.3746 127.352 20.7203C127.042 21.066 126.663 21.3423 126.241 21.5314C125.818 21.7204 125.362 21.8181 124.9 21.8181C124.438 21.8181 123.981 21.7204 123.559 21.5314C123.136 21.3423 122.758 21.066 122.448 20.7203C122.137 20.3746 121.902 19.967 121.757 19.5239C121.611 19.0807 121.559 18.6118 121.604 18.1471ZM126.777 18.1471C126.777 16.6161 126.096 15.7208 124.902 15.7208C123.703 15.7208 123.029 16.6161 123.029 18.1472C123.029 19.6904 123.703 20.5789 124.902 20.5789C126.096 20.5788 126.777 19.6843 126.777 18.1471Z'
                fill='white'
              />
              <path
                d='M130.046 14.6184H131.373V15.7404H131.476C131.651 15.3374 131.946 14.9996 132.32 14.774C132.694 14.5485 133.128 14.4464 133.562 14.4821C133.902 14.4562 134.243 14.508 134.561 14.6337C134.878 14.7593 135.164 14.9555 135.396 15.2078C135.628 15.4601 135.801 15.762 135.903 16.0911C136.004 16.4202 136.03 16.7681 135.981 17.1091V21.6814H134.601V17.4591C134.601 16.324 134.113 15.7596 133.093 15.7596C132.863 15.7487 132.632 15.7884 132.418 15.876C132.204 15.9636 132.011 16.0969 131.852 16.2669C131.694 16.4369 131.573 16.6396 131.5 16.8609C131.426 17.0823 131.4 17.3172 131.425 17.5495V21.6814H130.046V14.6184Z'
                fill='white'
              />
              <path
                d='M143.774 12.8599V14.6505H145.288V15.8246H143.774V19.4565C143.774 20.1963 144.075 20.5203 144.762 20.5203C144.937 20.5197 145.113 20.509 145.288 20.4881V21.6492C145.04 21.694 144.789 21.7178 144.537 21.7204C143.004 21.7204 142.393 21.1751 142.393 19.8134V15.8246H141.283V14.6505H142.393V12.8599H143.774Z'
                fill='white'
              />
              <path
                d='M147.171 11.8613H148.538V15.7536H148.648C148.831 15.3468 149.134 15.0071 149.515 14.7807C149.896 14.5543 150.338 14.4522 150.778 14.4883C151.117 14.4697 151.455 14.5268 151.769 14.6555C152.083 14.7842 152.365 14.9813 152.594 15.2328C152.824 15.4843 152.996 15.784 153.098 16.1105C153.201 16.4369 153.23 16.7821 153.185 17.1215V21.6816H151.804V17.4653C151.804 16.3372 151.285 15.7658 150.31 15.7658C150.073 15.7462 149.835 15.7791 149.612 15.8623C149.388 15.9456 149.186 16.077 149.018 16.2476C148.851 16.4182 148.722 16.6237 148.641 16.8498C148.56 17.0758 148.53 17.317 148.551 17.5565V21.6816H147.171L147.171 11.8613Z'
                fill='white'
              />
              <path
                d='M161.227 19.7744C161.039 20.4199 160.633 20.9783 160.08 21.3518C159.526 21.7253 158.86 21.8903 158.199 21.8177C157.738 21.83 157.281 21.7409 156.858 21.5566C156.435 21.3722 156.057 21.0971 155.75 20.7502C155.442 20.4033 155.214 19.9931 155.079 19.5479C154.945 19.1027 154.908 18.6332 154.97 18.1721C154.909 17.7096 154.947 17.2391 155.081 16.7926C155.215 16.3461 155.443 15.9339 155.748 15.584C156.054 15.2341 156.43 14.9546 156.852 14.7645C157.274 14.5744 157.731 14.4781 158.193 14.4821C160.137 14.4821 161.31 15.8247 161.31 18.0426V18.529H156.375V18.6072C156.354 18.8663 156.386 19.1272 156.47 19.3731C156.554 19.619 156.688 19.8444 156.863 20.0349C157.038 20.2254 157.251 20.3768 157.488 20.4794C157.724 20.582 157.979 20.6335 158.236 20.6306C158.566 20.6706 158.901 20.6106 159.197 20.4581C159.493 20.3056 159.737 20.0676 159.899 19.7743L161.227 19.7744ZM156.375 17.4981H159.905C159.922 17.2611 159.891 17.023 159.811 16.7991C159.732 16.5753 159.608 16.3706 159.446 16.1983C159.284 16.026 159.088 15.8898 158.871 15.7985C158.654 15.7073 158.42 15.663 158.185 15.6684C157.946 15.6654 157.71 15.7107 157.489 15.8015C157.268 15.8924 157.067 16.0271 156.898 16.1976C156.73 16.3682 156.597 16.5711 156.507 16.7944C156.417 17.0178 156.372 17.257 156.375 17.4981H156.375Z'
                fill='white'
              />
            </svg>
          </a>
          <a
            target='_blank'
            href='https://play.google.com/store/apps/details?id=com.tronlinkpro.wallet&hl=en&gl=US'
            className={styles.download__button}
          >
            <svg width='202' height='60' viewBox='0 0 202 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M194.519 0H7.48148C3.34957 0 0 3.35786 0 7.5V52.5C0 56.6421 3.34957 60 7.48148 60H194.519C198.65 60 202 56.6421 202 52.5V7.5C202 3.35786 198.65 0 194.519 0Z'
                fill='#262C38'
              />
              <path
                d='M70.9544 15.36C70.9789 15.9101 70.8922 16.4594 70.6993 16.975C70.5064 17.4906 70.2114 17.9617 69.8321 18.36C69.4071 18.7999 68.8941 19.1449 68.3268 19.3724C67.7595 19.5998 67.1508 19.7047 66.5403 19.68C65.9263 19.6937 65.316 19.5809 64.7472 19.3487C64.1784 19.1165 63.6632 18.7698 63.2335 18.33C62.7902 17.8987 62.4404 17.3804 62.2061 16.8074C61.9718 16.2344 61.858 15.6191 61.8718 15C61.8559 14.3784 61.9687 13.7602 62.2031 13.1845C62.4375 12.6087 62.7883 12.088 63.2335 11.655C63.9001 11.002 64.7443 10.5611 65.6601 10.3876C66.5759 10.2141 67.5224 10.3158 68.3807 10.68C68.9203 10.9023 69.4016 11.2462 69.7872 11.685L68.9942 12.48C68.6971 12.1211 68.3206 11.8367 67.8946 11.6492C67.4686 11.4617 67.0049 11.3764 66.5403 11.4C66.0729 11.3977 65.6099 11.49 65.179 11.6714C64.748 11.8529 64.3581 12.1197 64.0325 12.4559C63.707 12.792 63.4525 13.1907 63.2843 13.6278C63.1162 14.065 63.0378 14.5317 63.0539 15C63.0441 15.6992 63.2411 16.3856 63.62 16.9727C63.9989 17.5598 64.5428 18.0213 65.183 18.2988C65.8233 18.5764 66.5312 18.6577 67.2174 18.5324C67.9037 18.4072 68.5376 18.081 69.0391 17.595C69.5005 17.0941 69.7707 16.446 69.8022 15.765H66.5403V14.685H70.8945C70.928 14.9086 70.948 15.134 70.9544 15.36Z'
                fill='white'
                stroke='white'
                strokeWidth='0.2'
                strokeMiterlimit='10'
              />
              <path
                d='M77.8075 11.61H73.7675V14.46H77.4483V15.54H73.7675V18.39H77.8075V19.5H72.6003V10.5H77.8075V11.61Z'
                fill='white'
                stroke='white'
                strokeWidth='0.2'
                strokeMiterlimit='10'
              />
              <path
                d='M82.7152 19.5H81.5631V11.61H79.0493V10.5H85.2889V11.61H82.7152V19.5Z'
                fill='white'
                stroke='white'
                strokeWidth='0.2'
                strokeMiterlimit='10'
              />
              <path
                d='M89.688 19.5V10.5H90.8401V19.5H89.688Z'
                fill='white'
                stroke='white'
                strokeWidth='0.2'
                strokeMiterlimit='10'
              />
              <path
                d='M95.9574 19.5H94.8053V11.61H92.2915V10.5H98.4562V11.61H95.9574V19.5Z'
                fill='white'
                stroke='white'
                strokeWidth='0.2'
                strokeMiterlimit='10'
              />
              <path
                d='M110.142 18.3302C109.71 18.7638 109.197 19.1078 108.632 19.3424C108.067 19.5771 107.462 19.6979 106.851 19.6979C106.239 19.6979 105.634 19.5771 105.069 19.3424C104.504 19.1078 103.991 18.7638 103.559 18.3302C103.124 17.8951 102.782 17.375 102.556 16.8022C102.329 16.2294 102.222 15.6161 102.242 15.0002C102.222 14.3844 102.329 13.771 102.556 13.1982C102.782 12.6254 103.124 12.1053 103.559 11.6702C103.982 11.2244 104.493 10.8726 105.06 10.6374C105.627 10.4023 106.237 10.2891 106.851 10.3052C107.463 10.2955 108.071 10.4116 108.637 10.6463C109.204 10.8811 109.716 11.2295 110.142 11.6702C110.573 12.109 110.911 12.6297 111.137 13.2016C111.363 13.7736 111.473 14.3851 111.459 15.0002C111.479 15.6161 111.372 16.2294 111.146 16.8022C110.919 17.375 110.578 17.8951 110.142 18.3302ZM104.412 17.5802C104.73 17.904 105.11 18.1611 105.529 18.3366C105.948 18.5121 106.397 18.6025 106.851 18.6025C107.304 18.6025 107.754 18.5121 108.172 18.3366C108.591 18.1611 108.971 17.904 109.29 17.5802C109.621 17.2398 109.881 16.8358 110.053 16.3925C110.225 15.9493 110.307 15.4757 110.292 15.0002C110.299 14.5204 110.208 14.0443 110.025 13.6008C109.843 13.1573 109.572 12.7556 109.23 12.4202C108.911 12.0964 108.531 11.8393 108.113 11.6638C107.694 11.4883 107.245 11.3979 106.791 11.3979C106.337 11.3979 105.888 11.4883 105.469 11.6638C105.05 11.8393 104.671 12.0964 104.352 12.4202C104.031 12.7656 103.782 13.1717 103.621 13.6148C103.459 14.0579 103.387 14.5289 103.409 15.0002C103.395 15.4757 103.476 15.9493 103.648 16.3925C103.821 16.8358 104.08 17.2398 104.412 17.5802Z'
                fill='white'
                stroke='white'
                strokeWidth='0.2'
                strokeMiterlimit='10'
              />
              <path
                d='M113.09 19.5V10.5H114.482L118.851 17.505V15.765V10.5H120.003V19.5H118.806L114.242 12.165V13.89V19.5H113.09Z'
                fill='white'
                stroke='white'
                strokeWidth='0.2'
                strokeMiterlimit='10'
              />
              <path
                d='M101.958 32.6249C100.697 32.6279 99.4653 33.0055 98.4188 33.7101C97.3722 34.4147 96.5575 35.4146 96.0778 36.5834C95.5981 37.7521 95.4749 39.0373 95.7237 40.2762C95.9726 41.5152 96.5823 42.6523 97.4759 43.5439C98.3694 44.4354 99.5066 45.0413 100.744 45.285C101.981 45.5286 103.262 45.3991 104.426 44.9127C105.589 44.4263 106.583 43.605 107.281 42.5525C107.979 41.5 108.35 40.2637 108.347 38.9999C108.359 38.1568 108.202 37.3198 107.885 36.5389C107.567 35.758 107.097 35.049 106.501 34.4541C105.905 33.8593 105.195 33.3908 104.415 33.0766C103.634 32.7623 102.798 32.6087 101.958 32.6249ZM101.958 42.8699C101.185 42.9241 100.414 42.7439 99.7445 42.353C99.0752 41.962 98.5388 41.3782 98.2049 40.6775C97.871 39.9769 97.755 39.1917 97.8722 38.4241C97.9893 37.6565 98.3341 36.942 98.8617 36.3734C99.3893 35.8049 100.075 35.4086 100.83 35.236C101.586 35.0635 102.375 35.1227 103.097 35.406C103.818 35.6893 104.437 36.1835 104.875 36.8244C105.312 37.4654 105.547 38.2234 105.549 38.9999C105.573 39.4919 105.498 39.9838 105.33 40.4465C105.161 40.9092 104.902 41.3335 104.567 41.6941C104.233 42.0548 103.829 42.3447 103.381 42.5466C102.933 42.7485 102.449 42.8585 101.958 42.8699ZM88.0121 32.6249C86.7514 32.6279 85.5199 33.0055 84.4733 33.7101C83.4267 34.4147 82.612 35.4146 82.1323 36.5834C81.6526 37.7521 81.5294 39.0373 81.7782 40.2762C82.0271 41.5152 82.6368 42.6523 83.5304 43.5439C84.4239 44.4354 85.5611 45.0413 86.7982 45.285C88.0352 45.5286 89.3166 45.3991 90.4802 44.9127C91.6438 44.4263 92.6374 43.605 93.3353 42.5525C94.0333 41.5 94.4042 40.2637 94.4013 38.9999C94.4135 38.1568 94.2563 37.3198 93.9392 36.5389C93.622 35.758 93.1513 35.049 92.5552 34.4541C91.9591 33.8593 91.2496 33.3908 90.4691 33.0766C89.6886 32.7623 88.853 32.6087 88.0121 32.6249ZM88.0121 42.8699C87.2393 42.9241 86.4682 42.7439 85.799 42.353C85.1297 41.962 84.5933 41.3782 84.2594 40.6775C83.9255 39.9769 83.8096 39.1917 83.9267 38.4241C84.0438 37.6565 84.3886 36.942 84.9162 36.3734C85.4438 35.8049 86.1298 35.4086 86.885 35.236C87.6403 35.0635 88.4298 35.1227 89.151 35.406C89.8723 35.6893 90.4918 36.1835 90.9291 36.8244C91.3664 37.4654 91.6013 38.2234 91.6032 38.9999C91.6273 39.4919 91.5529 39.9838 91.3843 40.4465C91.2158 40.9092 90.9565 41.3335 90.6218 41.6941C90.2871 42.0548 89.8838 42.3447 89.4356 42.5466C88.9873 42.7485 88.5033 42.8585 88.0121 42.8699ZM71.4331 34.5899V37.2899H77.8971C77.7958 38.5616 77.2684 39.7616 76.4008 40.6949C75.7524 41.3572 74.9725 41.8756 74.1116 42.2167C73.2508 42.5577 72.328 42.7138 71.4032 42.6749C69.4983 42.6749 67.6715 41.9163 66.3246 40.5661C64.9776 39.2158 64.221 37.3844 64.221 35.4749C64.221 33.5653 64.9776 31.734 66.3246 30.3837C67.6715 29.0335 69.4983 28.2749 71.4032 28.2749C73.2293 28.2477 74.9926 28.9429 76.311 30.2099L78.2113 28.3049C77.3195 27.4206 76.2606 26.7237 75.0967 26.2549C73.9328 25.7862 72.6873 25.555 71.4331 25.5749C70.1029 25.523 68.7759 25.7408 67.5317 26.2153C66.2875 26.6899 65.1516 27.4113 64.1922 28.3364C63.2327 29.2615 62.4694 30.3713 61.9481 31.5992C61.4267 32.8271 61.158 34.1479 61.158 35.4824C61.158 36.8169 61.4267 38.1377 61.9481 39.3656C62.4694 40.5935 63.2327 41.7033 64.1922 42.6284C65.1516 43.5535 66.2875 44.2749 67.5317 44.7494C68.7759 45.2239 70.1029 45.4418 71.4331 45.3899C72.7131 45.4411 73.9894 45.2204 75.1782 44.7421C76.367 44.2639 77.4415 43.5389 78.331 42.6149C79.9023 40.8845 80.7396 38.6087 80.6653 36.2699C80.6706 35.707 80.6255 35.1447 80.5306 34.5899H71.4331ZM139.23 36.6899C138.84 35.539 138.11 34.5341 137.138 33.8082C136.165 33.0823 134.996 32.6696 133.784 32.6249C132.965 32.6233 132.155 32.79 131.404 33.1147C130.652 33.4394 129.975 33.9152 129.414 34.5127C128.853 35.1102 128.42 35.8167 128.142 36.5885C127.864 37.3603 127.747 38.181 127.799 38.9999C127.786 40.3692 128.215 41.7058 129.023 42.8103C129.83 43.9147 130.972 44.7276 132.279 45.1276C133.585 45.5276 134.986 45.4931 136.271 45.0294C137.556 44.5658 138.657 43.6977 139.41 42.5549L137.24 41.0549C136.917 41.5953 136.458 42.0416 135.909 42.3494C135.361 42.6573 134.742 42.816 134.113 42.8099C133.464 42.8367 132.823 42.6663 132.273 42.3209C131.723 41.9756 131.29 41.4715 131.031 40.8749L139.545 37.3499L139.23 36.6899ZM130.552 38.8199C130.521 38.3547 130.584 37.8882 130.737 37.4477C130.889 37.0072 131.127 36.6017 131.438 36.2551C131.749 35.9085 132.126 35.6277 132.547 35.4293C132.968 35.2309 133.424 35.1189 133.889 35.0999C134.369 35.0691 134.848 35.1806 135.266 35.4207C135.683 35.6607 136.021 36.0186 136.238 36.4499L130.552 38.8199ZM123.639 44.9999H126.437V26.2499H123.639V44.9999ZM119.06 34.0499H118.955C118.531 33.5863 118.012 33.2193 117.434 32.9735C116.855 32.7277 116.232 32.6088 115.604 32.6249C113.969 32.7044 112.427 33.4115 111.297 34.5998C110.168 35.788 109.538 37.3662 109.538 39.0074C109.538 40.6485 110.168 42.2268 111.297 43.415C112.427 44.6033 113.969 45.3104 115.604 45.3899C116.238 45.4026 116.868 45.2748 117.447 45.0155C118.026 44.7562 118.541 44.3719 118.955 43.8899H119.06V44.8049C119.06 47.2499 117.758 48.5549 115.664 48.5549C114.964 48.5395 114.284 48.3159 113.712 47.9127C113.139 47.5094 112.699 46.9445 112.447 46.2899L110.023 47.2949C110.471 48.4233 111.25 49.3887 112.257 50.0637C113.264 50.7386 114.452 51.0912 115.664 51.0749C118.941 51.0749 121.649 49.1399 121.649 44.4299V32.9999H119.06V34.0499ZM115.843 42.8699C114.863 42.8086 113.943 42.375 113.27 41.6574C112.597 40.9398 112.223 39.9921 112.223 39.0074C112.223 38.0227 112.597 37.075 113.27 36.3574C113.943 35.6398 114.863 35.2062 115.843 35.1449C116.322 35.1656 116.792 35.2828 117.226 35.4893C117.659 35.6959 118.046 35.9877 118.364 36.3474C118.682 36.7071 118.925 37.1272 119.078 37.5829C119.231 38.0386 119.291 38.5205 119.255 38.9999C119.296 39.4809 119.239 39.9653 119.087 40.4236C118.936 40.882 118.694 41.3048 118.375 41.6666C118.056 42.0283 117.667 42.3215 117.232 42.5283C116.797 42.7351 116.324 42.8513 115.843 42.8699ZM152.338 26.2499H145.634V44.9999H148.433V37.8899H152.338C153.135 37.9473 153.936 37.8394 154.69 37.573C155.444 37.3065 156.135 36.8872 156.721 36.3411C157.306 35.7951 157.773 35.134 158.092 34.3991C158.411 33.6643 158.576 32.8714 158.576 32.0699C158.576 31.2684 158.411 30.4755 158.092 29.7406C157.773 29.0058 157.306 28.3447 156.721 27.7986C156.135 27.2526 155.444 26.8333 154.69 26.5668C153.936 26.3003 153.135 26.1925 152.338 26.2499ZM152.338 35.2499H148.433V28.8599H152.398C153.247 28.8599 154.061 29.1981 154.662 29.8001C155.262 30.4021 155.6 31.2185 155.6 32.0699C155.6 32.9212 155.262 33.7377 154.662 34.3397C154.061 34.9417 153.247 35.2799 152.398 35.2799L152.338 35.2499ZM169.605 32.5649C168.586 32.5019 167.571 32.7397 166.686 33.2489C165.8 33.7581 165.083 34.5164 164.622 35.4299L167.091 36.4649C167.341 36.014 167.715 35.6451 168.169 35.4029C168.623 35.1607 169.138 35.0554 169.65 35.0999C170.005 35.0583 170.365 35.088 170.709 35.1874C171.052 35.2867 171.373 35.4536 171.651 35.6784C171.93 35.9033 172.161 36.1814 172.331 36.4967C172.501 36.812 172.607 37.1581 172.643 37.5149V37.6949C171.743 37.2208 170.741 36.9736 169.725 36.9749C167.061 36.9749 164.338 38.4749 164.338 41.2049C164.364 41.7851 164.507 42.3542 164.757 42.8782C165.007 43.4022 165.359 43.8705 165.793 44.2553C166.228 44.6401 166.734 44.9335 167.284 45.1181C167.833 45.3027 168.414 45.3747 168.992 45.3299C169.694 45.3688 170.394 45.2199 171.019 44.8983C171.645 44.5767 172.174 44.0941 172.553 43.4999H172.643V44.9999H175.336V37.7849C175.336 34.4999 172.852 32.5949 169.665 32.5949L169.605 32.5649ZM169.261 42.8399C168.348 42.8399 167.076 42.3749 167.076 41.2499C167.076 39.7499 168.662 39.2399 170.069 39.2399C170.958 39.2179 171.836 39.4355 172.613 39.8699C172.519 40.6845 172.133 41.4373 171.528 41.989C170.923 42.5406 170.139 42.8535 169.321 42.8699L169.261 42.8399ZM185.152 32.9999L181.95 41.1299H181.86L178.538 32.9999H175.545L180.528 44.3699L177.685 50.6849H180.678L188.264 32.9999H185.152ZM160.014 44.9999H162.797V26.2499H160.014V44.9999Z'
                fill='white'
              />
              <path
                d='M15.6213 11.3101C15.1443 11.9012 14.909 12.6517 14.9629 13.4101V46.5901C14.912 47.3556 15.1647 48.1104 15.6662 48.6901L15.7709 48.8101L34.2651 30.2251V29.7751L15.726 11.2051L15.6213 11.3101Z'
                fill='url(#paint0_linear)'
              />
              <path
                d='M40.4 36.4201L34.2651 30.2251V29.7751L40.4 23.5801L40.5346 23.6701L47.8814 27.8401C49.9762 29.0251 49.9762 30.9751 47.8814 32.1751L40.5645 36.3451L40.4 36.4201Z'
                fill='url(#paint1_linear)'
              />
              <path
                d='M40.5796 36.345L34.2652 30L15.6213 48.69C16.0442 49.0673 16.5853 49.2843 17.1511 49.3035C17.7168 49.3227 18.2714 49.1428 18.7187 48.795L40.5796 36.345Z'
                fill='url(#paint2_linear)'
              />
              <path
                d='M40.5796 23.6697L18.7187 11.2197C18.2743 10.8671 17.7202 10.6828 17.1537 10.6993C16.5872 10.7157 16.0446 10.9319 15.6213 11.3097L34.2652 29.9997L40.5796 23.6697Z'
                fill='url(#paint3_linear)'
              />
              <path
                opacity='0.2'
                d='M40.4 36.1948L18.7187 48.5698C18.2877 48.8959 17.7624 49.0723 17.2224 49.0723C16.6824 49.0723 16.1571 48.8959 15.7261 48.5698L15.6213 48.6748L15.7261 48.7948C16.1571 49.1209 16.6824 49.2973 17.2224 49.2973C17.7624 49.2973 18.2877 49.1209 18.7187 48.7948L40.5796 36.3448L40.4 36.1948Z'
                fill='black'
              />
              <path
                opacity='0.12'
                d='M15.6213 48.4802C15.1407 47.8853 14.9051 47.1286 14.9629 46.3652V46.5902C14.912 47.3558 15.1648 48.1105 15.6662 48.6902L15.7709 48.5852L15.6213 48.4802Z'
                fill='black'
              />
              <path
                opacity='0.12'
                d='M47.8814 31.95L40.3999 36.195L40.5346 36.345L47.8814 32.16C48.3151 31.9762 48.6913 31.6785 48.9704 31.2984C49.2495 30.9183 49.4212 30.4697 49.4675 30C49.3739 30.4269 49.1816 30.8257 48.9061 31.1644C48.6306 31.5031 48.2796 31.7722 47.8814 31.95Z'
                fill='black'
              />
              <path
                opacity='0.25'
                d='M18.7186 11.43L47.8814 28.05C48.2797 28.2278 48.6307 28.4968 48.9062 28.8356C49.1817 29.1743 49.3739 29.5731 49.4675 30C49.4212 29.5302 49.2495 29.0817 48.9704 28.7016C48.6913 28.3214 48.3151 28.0238 47.8814 27.84L18.7186 11.22C16.6387 10.02 14.9629 11.01 14.9629 13.41V13.635C14.9629 11.235 16.6387 10.245 18.7186 11.43Z'
                fill='white'
              />
              <defs>
                <linearGradient
                  id='paint0_linear'
                  x1='32.6192'
                  y1='13.0651'
                  x2='7.44927'
                  y2='38.1729'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#00A0FF' />
                  <stop offset='0.01' stopColor='#00A1FF' />
                  <stop offset='0.26' stopColor='#00BEFF' />
                  <stop offset='0.51' stopColor='#00D2FF' />
                  <stop offset='0.76' stopColor='#00DFFF' />
                  <stop offset='1' stopColor='#00E3FF' />
                </linearGradient>
                <linearGradient
                  id='paint1_linear'
                  x1='50.6197'
                  y1='30.0001'
                  x2='14.4242'
                  y2='30.0001'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FFE000' />
                  <stop offset='0.41' stopColor='#FFBD00' />
                  <stop offset='0.78' stopColor='#FFA500' />
                  <stop offset='1' stopColor='#FF9C00' />
                </linearGradient>
                <linearGradient
                  id='paint2_linear'
                  x1='37.153'
                  y1='33.45'
                  x2='3.01318'
                  y2='67.4906'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FF3A44' />
                  <stop offset='1' stopColor='#C31162' />
                </linearGradient>
                <linearGradient
                  id='paint3_linear'
                  x1='10.923'
                  y1='0.26971'
                  x2='26.1629'
                  y2='15.472'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#32A071' />
                  <stop offset='0.07' stopColor='#2DA771' />
                  <stop offset='0.48' stopColor='#15CF74' />
                  <stop offset='0.8' stopColor='#06E775' />
                  <stop offset='1' stopColor='#00F076' />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </div>
        <div className={styles.download__videoButton}>
          <svg width='12' height='14' viewBox='0 0 12 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M12 7L3.01142e-07 13.9282L9.06825e-07 0.0717964L12 7Z' fill='#FF7152' />
          </svg>
          WATCH INSTRUCTIONS VIDEO
        </div>
      </div>
      <audio>
        <source src='' type='audio/mpeg' />
      </audio>
    </div>
  );
}

export default Download;
