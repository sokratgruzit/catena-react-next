import Banner from './components/Banner';
import ClearSpace from './components/ClearSpace';
import Colors from './components/Colors';
import Fonts from './components/Fonts';
import IntroBanner from './components/IntroBanner';
import LogoUsages from './components/LogoUsages';
import LogoVariations from './components/LogoVariations';
import Partniership from './components/Partniership';
import ProductLogos from './components/ProductLogos';
import Typography from './components/Typography';

function BrandGuidelines() {
  return (
    <div>
      <IntroBanner />
      <svg
        style={{ position: 'absolute', top: '10%', right: '0px', zIndex: '1', maxWidth: '100%', width: '100%' }}
        width='830'
        height='1400'
        viewBox='0 0 830 1400'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          opacity='0.05'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1356.24 457.82C1299.45 303.683 1190.25 174.437 1047.76 92.7217C905.26 11.0059 738.556 -17.97 576.844 10.8692C415.132 39.7084 268.721 124.524 163.257 250.46C57.7934 376.396 0 535.423 0 699.687C0 863.95 57.7934 1022.98 163.257 1148.91C268.721 1274.85 415.132 1359.67 576.844 1388.5C738.556 1417.34 905.26 1388.37 1047.76 1306.65C1190.25 1224.94 1299.45 1095.69 1356.24 941.553C1326.79 933.005 1299.23 918.934 1275.04 900.09C1176.56 851.717 1000.35 806.799 827.586 896.635C783.435 931.794 728.538 950.703 672.1 950.191C638.977 950.191 606.177 943.667 575.575 930.991C544.973 918.315 517.167 899.736 493.745 876.314C470.323 852.892 451.744 825.086 439.068 794.484C426.392 763.882 419.868 731.083 419.868 697.959C419.868 664.836 426.392 632.036 439.068 601.434C451.744 570.832 470.323 543.026 493.745 519.604C517.167 496.182 544.973 477.603 575.575 464.927C606.177 452.251 638.977 445.727 672.1 445.727C705.231 445.517 738.063 451.988 768.637 464.751C799.211 477.515 826.898 496.31 850.045 520.014C946.792 573.571 1095.37 613.306 1238.76 530.38C1269.89 495.119 1310.77 469.87 1356.24 457.82Z'
          fill='url(#paint0_linear_204_1950)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_204_1950'
            x1='774.5'
            y1='0.273309'
            x2='-123.983'
            y2='309.306'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#00FFF0' />
            <stop offset='1' stopColor='#E96B6B' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>

      <svg
        style={{ position: 'absolute', top: '10%', right: '0px', zIndex: '1', maxWidth: '100%', width: '100%' }}
        width='1060'
        height='1361'
        viewBox='0 0 1060 1361'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          opacity='0.03'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1319 445.266C1263.78 295.355 1157.57 169.654 1018.99 90.1791C880.405 10.7041 718.278 -17.4772 561.006 10.5711C403.734 38.6195 261.343 121.109 158.775 243.592C56.2066 366.075 0 520.741 0 680.5C0 840.259 56.2066 994.925 158.775 1117.41C261.343 1239.89 403.734 1322.38 561.006 1350.43C718.278 1378.48 880.405 1350.3 1018.99 1270.82C1157.57 1191.35 1263.78 1065.64 1319 915.734C1290.36 907.42 1263.56 893.735 1240.03 875.408C1144.26 828.361 972.882 784.675 804.864 872.048C761.925 906.243 708.535 924.633 653.647 924.135C621.433 924.135 589.534 917.79 559.772 905.462C530.01 893.133 502.968 875.064 480.189 852.284C457.41 829.504 439.341 802.461 427.013 772.698C414.685 742.935 408.34 711.035 408.34 678.82C408.34 646.604 414.685 614.705 427.013 584.942C439.341 555.178 457.41 528.135 480.189 505.355C502.968 482.576 530.01 464.506 559.772 452.178C589.534 439.849 621.433 433.504 653.647 433.504C685.868 433.3 717.799 439.593 747.533 452.007C777.267 464.421 804.195 482.701 826.706 505.755C920.796 557.842 1065.29 596.488 1204.75 515.836C1235.02 481.542 1274.78 456.985 1319 445.266Z'
          fill='black'
        />
      </svg>

      <div className='container'>
        <ClearSpace />
        <ProductLogos />
      </div>
      <LogoVariations />
      <div className='container '>
        <LogoUsages />
      </div>
      <Partniership />
      <div className='container'>
        <Typography />
        <Fonts />
      </div>
      <Colors />
      <Banner />
    </div>
  );
}

export default BrandGuidelines;
