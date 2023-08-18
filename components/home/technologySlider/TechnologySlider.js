import { React, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../layout/Footer';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import Microscheme from '../../UI/microscheme/Microscheme';

import styles from './TechnologySlider.module.css';

const TechnologySlider = () => {
  const [levels, setLevels] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollBlocker, setScrollBlocker] = useState(true);
  const dispatch = useDispatch();
  const swiperRefPromo = useRef();
  const swiperRefNetwork = useRef();
  const swiperRefConsensus = useRef();
  const swiperRefLayers = useRef();
  let microSchemes;
  if (window.innerWidth > 1240) {
    microSchemes = [
      [1, 2, 7, 8, 9, 10, 11, 13, 14, 15, 23, 24],
      [1, 2, 5, 6, 11, 13, 14, 15, 16, 17, 23, 24],
      [1, 2, 11, 13, 14, 20, 21, 22, 23, 24],
      [1, 2, 5, 6, 13, 14, 15, 16, 17, 23, 24],
    ];
  }
  if (window.innerWidth < 1240) {
    microSchemes = [
      [1, 2, 6, 7, 8, 9, 10, 11, 13, 17, 18, 19, 20, 21, 22, 23, 24],
      [1, 2, 4, 13, 14, 15, 18, 19, 20, 21, 22, 23, 24],
      [1, 2, 6, 7, 10, 11, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      [1, 2, 4, 13, 14, 15, 18, 19, 20, 21, 22, 23, 24],
    ];
  }

  useEffect(() => {
    setActiveSlide(1);
    setTimeout(() => {
      dispatch({
        type: 'SET_MICHROSCHEME_ARRAY',
        microschemeArray: microSchemes[activeSlide],
      });
    }, 500);
  }, []);
  const technologyPromoSlider = [
    {
      title: 'Catena',
      text: 'Catena is a combination of all the latest frameworks and advanced programming languages into one cutting-edge solution. ',
      svg: (
        <svg width='45' height='30' viewBox='0 0 45 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M29.9995 29.9628C32.741 29.963 35.4301 29.2127 37.7747 27.7935C40.1192 26.3743 42.0295 24.3403 43.2979 21.9128C44.5663 19.4852 45.1443 16.7568 44.9692 14.0242C44.794 11.2915 43.8723 8.65903 42.3043 6.41285C40.7363 4.16667 38.582 2.39268 36.0754 1.28368C33.5688 0.174671 30.8058 -0.226941 28.0867 0.122485C25.3676 0.471911 22.7964 1.55901 20.6525 3.26565C18.5086 4.97228 16.874 7.23318 15.9263 9.80264C16.795 10.0582 17.5848 10.529 18.2224 11.1713C20.2964 12.318 23.4814 13.1688 26.5553 11.3933C27.1551 10.7193 27.9143 10.2061 28.7637 9.90041C29.6131 9.59476 30.5255 9.50639 31.4179 9.64338C32.3102 9.78037 33.154 10.1384 33.8723 10.6847C34.5906 11.231 35.1604 11.9483 35.5299 12.771C35.8994 13.5938 36.0568 14.4959 35.9877 15.395C35.9185 16.2941 35.6251 17.1616 35.1341 17.9184C34.6431 18.6751 33.9703 19.2971 33.1769 19.7274C32.3835 20.1578 31.4949 20.3828 30.592 20.3821C29.4196 20.377 28.2788 20.0015 27.333 19.3093C25.222 18.2736 21.4445 17.3118 17.741 19.2354C17.2021 19.6587 16.5857 19.9728 15.9263 20.1601C16.9868 23.0355 18.9046 25.517 21.421 27.2698C23.9375 29.0226 26.9316 29.9625 29.9995 29.9628Z'
            fill='#FF6969'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M29.0735 9.83986C27.8563 6.53954 25.5153 3.77218 22.4606 2.02252C19.406 0.272855 15.8324 -0.347566 12.3658 0.269927C8.89914 0.887421 5.76056 2.70346 3.49973 5.39995C1.23891 8.09644 0 11.5015 0 15.0186C0 18.5358 1.23891 21.9408 3.49973 24.6373C5.76056 27.3338 8.89914 29.1498 12.3658 29.7673C15.8324 30.3848 19.406 29.7644 22.4606 28.0147C25.5153 26.265 27.8563 23.4977 29.0735 20.1974C28.4422 20.0143 27.8515 19.713 27.3329 19.3096C25.2219 18.2738 21.4444 17.3121 17.7409 19.2356C16.7944 19.9884 15.6176 20.3933 14.4078 20.3823C13.6977 20.3823 12.9946 20.2426 12.3386 19.9712C11.6825 19.6998 11.0865 19.302 10.5844 18.8005C10.0823 18.299 9.68399 17.7036 9.41226 17.0484C9.14053 16.3931 9.00067 15.6909 9.00067 14.9816C9.00067 14.2724 9.14053 13.5701 9.41226 12.9149C9.68399 12.2596 10.0823 11.6643 10.5844 11.1628C11.0865 10.6613 11.6825 10.2634 12.3386 9.99203C12.9946 9.72062 13.6977 9.58093 14.4078 9.58093C15.118 9.57644 15.8218 9.71498 16.4772 9.98827C17.1326 10.2616 17.7261 10.664 18.2223 11.1715C20.2963 12.3183 23.4813 13.1691 26.5552 11.3935C27.2351 10.6535 28.1067 10.1158 29.0735 9.83986Z'
            fill='#A6D0DD'
          />
        </svg>
      ),
    },
    {
      title: 'Apeirogon',
      text: 'It is built on top of our in-house Apeirogon blockchain framework - a next-generation framework for enterprise-grade blockchain innovation that is highly compatible with Solidity, Simplicity, and CX. Apeirogon allows any development team to easily build a custom blockchain for their own use case with custom parameter settings such as token supply and token name. It also allows you to add customised protocols to your blockchain and can communicate with both public and private blockchains through its built-in public bridges. ',
      svg: (
        <svg width='50' height='43' viewBox='0 0 50 43' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            opacity='0.3'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M49.4486 43L24.6664 0L0 42.8265C3.44116 41.4095 11.2488 39.5588 24.6664 39.5588C38.6335 39.5299 46.3544 41.5541 49.4486 43Z'
            fill='url(#paint0_linear_1420_728)'
          />
          <path
            opacity='0.5'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M49.3653 42.971L24.6699 9.62943L0.119141 42.7686C3.61813 41.3517 11.4258 39.5299 24.641 39.5299C38.4924 39.5299 46.2133 41.5252 49.3653 42.971Z'
            fill='url(#paint1_linear_1420_728)'
          />
          <path
            opacity='0.7'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M49.1322 42.8556L24.6682 19.2591L0.435547 42.6532C4.07912 41.2652 11.8 39.5302 24.6682 39.5302C38.1726 39.5302 45.8646 41.4387 49.1322 42.8556Z'
            fill='url(#paint2_linear_1420_728)'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M48.0321 42.4215L24.667 28.8882L1.67773 42.1902C5.69724 40.8889 13.1001 39.5009 24.667 39.5009C36.8412 39.5298 44.3018 41.0913 48.0321 42.4215Z'
            fill='url(#paint3_linear_1420_728)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_1420_728'
              x1='24.7243'
              y1='0.00106994'
              x2='24.7243'
              y2='42.9989'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#6AF6FF' />
              <stop offset='0.4844' stopColor='#5200FF' />
              <stop offset='1' stopColor='#220069' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paint1_linear_1420_728'
              x1='24.7463'
              y1='9.63671'
              x2='24.7463'
              y2='42.9572'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#6AF6FF' />
              <stop offset='0.4844' stopColor='#5200FF' />
              <stop offset='1' stopColor='#220069' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paint2_linear_1420_728'
              x1='24.7822'
              y1='19.2727'
              x2='24.7822'
              y2='42.8579'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#6AF6FF' />
              <stop offset='0.4844' stopColor='#5200FF' />
              <stop offset='1' stopColor='#220069' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paint3_linear_1420_728'
              x1='24.8594'
              y1='28.9081'
              x2='24.8594'
              y2='42.4278'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#6AF6FF' />
              <stop offset='0.4844' stopColor='#5200FF' />
              <stop offset='1' stopColor='#220069' stopOpacity='0' />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: 'WebAssembly',
      text: 'Apeirogon is compiled to WebAssembly which is a super performant virtual environment that provides a way to run code written in multiple languages on the web at near native speed. WebAssembly is a fast, efficient, and safe binary instruction format for a stack-based virtual machine. It is a popular choice for the major web browser providers such as Google, Apple, Microsoft, and Mozilla, who all implement it in their web browsers.',
      svg: (
        <svg width='42' height='42' viewBox='0 0 42 42' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M25.8041 0C25.8041 0.0741498 25.8041 0.1483 25.8041 0.226352C25.8041 1.50359 25.2967 2.72852 24.3936 3.63166C23.4905 4.5348 22.2655 5.04219 20.9883 5.04219C19.7111 5.04219 18.4861 4.5348 17.583 3.63166C16.6798 2.72852 16.1725 1.50359 16.1725 0.226352C16.1725 0.1483 16.1725 0.0741498 16.1725 0H0V42H42V0H25.8041ZM20.0439 37.5042L17.9989 27.3847H17.9638L15.751 37.5042H12.9333L9.74094 22.6352H12.5235L14.428 32.7547H14.4631L16.7579 22.6352H19.3609L21.4215 32.8796H21.4566L23.6304 22.6352H26.3622L22.8147 37.5042H20.0439ZM35.3655 37.5042L34.4172 34.1948H29.4101L28.6804 37.5042H25.8978L29.496 22.6352H33.8864L38.2613 37.5042H35.3655Z'
            fill='#654FF0'
          ></path>
          <path d='M31.1688 26.2998L29.9551 31.7557H33.7328L32.3396 26.2998H31.1688Z' fill='#654FF0'></path>
        </svg>
      ),
    },
  ];
  const technologyConsensusSlider = [
    {
      title: 'Validators',
      text: 'Validators are nodes on the CATENA blockchain that validate, process, and attest transactions on the blockchain. Through its democratic consensus mechanism, validators are voted for by community members that have voting rights.',
      svg: (
        <svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='42.0002' cy='42' r='35.6071' stroke='#162029' strokeOpacity='0.3' strokeWidth='2' />
          <circle cx='41.9999' cy='42' r='22.4286' stroke='#162029' strokeOpacity='0.3' strokeWidth='2' />
          <circle cx='16.375' cy='15.6428' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='16.375' cy='68.3572' r='4.125' fill='#FFF3E5' stroke='#FF6969' strokeWidth='2' />
          <circle cx='67.625' cy='15.6428' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='67.625' cy='68.3572' r='4.125' fill='#FFF3E5' stroke='#FF6969' strokeWidth='2' />
          <circle cx='6.125' cy='42' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='77.875' cy='42' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='42' cy='6.125' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='42' cy='77.875' r='4.125' fill='#FFF3E5' stroke='#FF6969' strokeWidth='2' />
          <path
            d='M25.6985 30.8753C26.5519 32.9876 25.5314 35.3918 23.4191 36.2452C21.3068 37.0986 18.9026 36.0781 18.0492 33.9658C17.1958 31.8535 18.2163 29.4494 20.3286 28.5959C22.4409 27.7425 24.845 28.763 25.6985 30.8753Z'
            fill='#FFF3E5'
            stroke='#A6D0DD'
            strokeWidth='2'
          />
          <path
            d='M36.5197 61.2603C37.3732 63.3726 36.3527 65.7768 34.2404 66.6302C32.1281 67.4836 29.7239 66.4631 28.8705 64.3508C28.0171 62.2386 29.0376 59.8344 31.1499 58.981C33.2621 58.1275 35.6663 59.1481 36.5197 61.2603Z'
            fill='#FFF3E5'
            stroke='#A6D0DD'
            strokeWidth='2'
          />
          <path
            d='M55.1301 19.6491C55.9835 21.7614 54.963 24.1656 52.8507 25.019C50.7384 25.8724 48.3343 24.8519 47.4808 22.7396C46.6274 20.6274 47.6479 18.2232 49.7602 17.3698C51.8725 16.5163 54.2767 17.5368 55.1301 19.6491Z'
            fill='#FFF3E5'
            stroke='#A6D0DD'
            strokeWidth='2'
          />
          <circle
            cx='62.806'
            cy='51.3052'
            r='4.125'
            transform='rotate(-22 62.806 51.3052)'
            fill='#FFF3E5'
            stroke='#A6D0DD'
            strokeWidth='2'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M45.9996 48.9826C47.279 48.9827 48.5339 48.6326 49.6281 47.9703C50.7222 47.308 51.6136 46.3588 52.2056 45.226C52.7975 44.0931 53.0672 42.8199 52.9855 41.5446C52.9037 40.2694 52.4736 39.0409 51.7419 37.9927C51.0102 36.9444 50.0048 36.1166 48.835 35.599C47.6653 35.0815 46.3759 34.8941 45.107 35.0572C43.8381 35.2202 42.6382 35.7275 41.6377 36.524C40.6372 37.3204 39.8744 38.3755 39.4321 39.5746C39.8375 39.6938 40.2061 39.9135 40.5037 40.2133C41.4715 40.7484 42.9578 41.1455 44.3923 40.3169C44.6722 40.0023 45.0265 39.7628 45.4229 39.6202C45.8193 39.4776 46.2451 39.4363 46.6615 39.5002C47.078 39.5642 47.4717 39.7312 47.8069 39.9862C48.1421 40.2411 48.4081 40.5759 48.5805 40.9598C48.7529 41.3438 48.8264 41.7648 48.7941 42.1843C48.7618 42.6039 48.6249 43.0088 48.3958 43.3619C48.1667 43.7151 47.8527 44.0053 47.4824 44.2061C47.1122 44.407 46.6975 44.512 46.2762 44.5116C45.729 44.5093 45.1966 44.334 44.7553 44.011C43.7701 43.5277 42.0073 43.0789 40.279 43.9765C40.0275 44.174 39.7398 44.3206 39.4321 44.4081C39.927 45.7499 40.822 46.9079 41.9964 47.7259C43.1707 48.5439 44.5679 48.9825 45.9996 48.9826Z'
            fill='#FF6969'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M45.5676 39.5919C44.9996 38.0518 43.9071 36.7603 42.4816 35.9438C41.0561 35.1273 39.3884 34.8378 37.7707 35.1259C36.1529 35.4141 34.6883 36.2616 33.6332 37.52C32.5782 38.7783 32 40.3673 32 42.0087C32 43.65 32.5782 45.239 33.6332 46.4974C34.6883 47.7557 36.1529 48.6032 37.7707 48.8914C39.3884 49.1795 41.0561 48.89 42.4816 48.0735C43.9071 47.257 44.9996 45.9656 45.5676 44.4254C45.273 44.34 44.9974 44.1994 44.7554 44.0111C43.7702 43.5278 42.0074 43.0789 40.2791 43.9766C39.8374 44.3279 39.2882 44.5168 38.7236 44.5117C38.3923 44.5117 38.0641 44.4465 37.758 44.3199C37.4518 44.1932 37.1737 44.0076 36.9394 43.7735C36.7051 43.5395 36.5192 43.2617 36.3924 42.9559C36.2656 42.6501 36.2003 42.3224 36.2003 41.9914C36.2003 41.6604 36.2656 41.3327 36.3924 41.0269C36.5192 40.7211 36.7051 40.4433 36.9394 40.2093C37.1737 39.9752 37.4518 39.7896 37.758 39.6629C38.0641 39.5363 38.3923 39.4711 38.7236 39.4711C39.0551 39.469 39.3835 39.5336 39.6894 39.6612C39.9952 39.7887 40.2722 39.9765 40.5038 40.2134C41.4716 40.7485 42.9579 41.1455 44.3924 40.3169C44.7097 39.9716 45.1165 39.7207 45.5676 39.5919Z'
            fill='#A6D0DD'
          />
        </svg>
      ),
    },

    {
      title: 'Observer',
      text: 'Observers add to the decentralization and validation of the chain and are either invited by other members in the chain or are members that believe in the project and want to earn rewards in the native token.',
      svg: (
        <svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <line x1='51' y1='42' x2='78' y2='42' stroke='#FF6969' strokeWidth='2' />
          <line x1='6' y1='42' x2='32' y2='42' stroke='#FF6969' strokeWidth='2' />
          <line x1='46.7071' y1='46.2929' x2='68.1627' y2='67.7488' stroke='#FF6969' strokeWidth='2' />
          <line x1='17.251' y1='16.8371' x2='36.7071' y2='36.2929' stroke='#FF6969' strokeWidth='2' />
          <line x1='15.8539' y1='67.7322' x2='37.31' y2='47.2762' stroke='#FF6969' strokeWidth='2' />
          <line x1='48.2929' y1='35.2929' x2='66.7485' y2='16.8371' stroke='#FF6969' strokeWidth='2' />
          <circle cx='42.0002' cy='42' r='35.6071' stroke='#162029' strokeOpacity='0.3' strokeWidth='2' />
          <circle cx='41.9999' cy='42' r='22.4286' stroke='#162029' strokeOpacity='0.3' strokeWidth='2' />
          <circle cx='16.375' cy='15.6428' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='16.375' cy='68.3572' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='67.625' cy='15.6428' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='67.625' cy='68.3572' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='6.125' cy='42' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='77.875' cy='42' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='42' cy='6.125' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='42' cy='77.875' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <path
            d='M25.6985 30.8753C26.5519 32.9876 25.5314 35.3918 23.4191 36.2452C21.3068 37.0986 18.9026 36.0781 18.0492 33.9658C17.1958 31.8535 18.2163 29.4494 20.3286 28.5959C22.4409 27.7425 24.845 28.763 25.6985 30.8753Z'
            fill='#FFF3E5'
            stroke='#A6D0DD'
            strokeWidth='2'
          />
          <path
            d='M36.5197 61.2603C37.3732 63.3726 36.3527 65.7768 34.2404 66.6302C32.1281 67.4836 29.7239 66.4631 28.8705 64.3508C28.0171 62.2386 29.0376 59.8344 31.1499 58.981C33.2621 58.1275 35.6663 59.1481 36.5197 61.2603Z'
            fill='#FFF3E5'
            stroke='#A6D0DD'
            strokeWidth='2'
          />
          <path
            d='M55.1301 19.6491C55.9835 21.7614 54.963 24.1656 52.8507 25.019C50.7384 25.8724 48.3343 24.8519 47.4808 22.7396C46.6274 20.6274 47.6479 18.2232 49.7602 17.3698C51.8725 16.5163 54.2767 17.5368 55.1301 19.6491Z'
            fill='#FFF3E5'
            stroke='#A6D0DD'
            strokeWidth='2'
          />
          <circle
            cx='62.806'
            cy='51.3052'
            r='4.125'
            transform='rotate(-22 62.806 51.3052)'
            fill='#FFF3E5'
            stroke='#A6D0DD'
            strokeWidth='2'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M44.9996 47.9826C46.279 47.9827 47.5339 47.6326 48.6281 46.9703C49.7222 46.308 50.6136 45.3588 51.2056 44.226C51.7975 43.0931 52.0672 41.8199 51.9855 40.5446C51.9037 39.2694 51.4736 38.0409 50.7419 36.9927C50.0102 35.9444 49.0048 35.1166 47.835 34.599C46.6653 34.0815 45.3759 33.8941 44.107 34.0572C42.8381 34.2202 41.6382 34.7275 40.6377 35.524C39.6372 36.3204 38.8744 37.3755 38.4321 38.5746C38.8375 38.6938 39.2061 38.9135 39.5037 39.2133C40.4715 39.7484 41.9578 40.1455 43.3923 39.3169C43.6722 39.0023 44.0265 38.7628 44.4229 38.6202C44.8193 38.4776 45.2451 38.4363 45.6615 38.5002C46.078 38.5642 46.4717 38.7312 46.8069 38.9862C47.1421 39.2411 47.4081 39.5759 47.5805 39.9598C47.7529 40.3438 47.8264 40.7648 47.7941 41.1843C47.7618 41.6039 47.6249 42.0088 47.3958 42.3619C47.1667 42.7151 46.8527 43.0053 46.4824 43.2061C46.1122 43.407 45.6975 43.512 45.2762 43.5116C44.729 43.5093 44.1966 43.334 43.7553 43.011C42.7701 42.5277 41.0073 42.0789 39.279 42.9765C39.0275 43.174 38.7398 43.3206 38.4321 43.4081C38.927 44.7499 39.822 45.9079 40.9964 46.7259C42.1707 47.5439 43.5679 47.9825 44.9996 47.9826Z'
            fill='#FF6969'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M44.5676 38.5919C43.9996 37.0518 42.9071 35.7603 41.4816 34.9438C40.0561 34.1273 38.3884 33.8378 36.7707 34.1259C35.1529 34.4141 33.6883 35.2616 32.6332 36.52C31.5782 37.7783 31 39.3673 31 41.0087C31 42.65 31.5782 44.239 32.6332 45.4974C33.6883 46.7557 35.1529 47.6032 36.7707 47.8914C38.3884 48.1795 40.0561 47.89 41.4816 47.0735C42.9071 46.257 43.9996 44.9656 44.5676 43.4254C44.273 43.34 43.9974 43.1994 43.7554 43.0111C42.7702 42.5278 41.0074 42.0789 39.2791 42.9766C38.8374 43.3279 38.2882 43.5168 37.7236 43.5117C37.3923 43.5117 37.0641 43.4465 36.758 43.3199C36.4518 43.1932 36.1737 43.0076 35.9394 42.7735C35.7051 42.5395 35.5192 42.2617 35.3924 41.9559C35.2656 41.6501 35.2003 41.3224 35.2003 40.9914C35.2003 40.6604 35.2656 40.3327 35.3924 40.0269C35.5192 39.7211 35.7051 39.4433 35.9394 39.2093C36.1737 38.9752 36.4518 38.7896 36.758 38.6629C37.0641 38.5363 37.3923 38.4711 37.7236 38.4711C38.0551 38.469 38.3835 38.5336 38.6894 38.6612C38.9952 38.7887 39.2722 38.9765 39.5038 39.2134C40.4716 39.7485 41.9579 40.1455 43.3924 39.3169C43.7097 38.9716 44.1165 38.7207 44.5676 38.5919Z'
            fill='#A6D0DD'
          />
        </svg>
      ),
    },
    {
      title: 'Defenders',
      text: 'A node type that attests to the validity of blocks as they are formed and before they are submitted to the chains. A Defender fishes out for any illegal blocks formed by malicious actors on the network, and are rewarded for their work.',
      svg: (
        <svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g clipPath='url(#clip0_1424_5910)'>
            <path
              d='M41.7875 0.970459C50.9646 9.67151 61.7848 13.6919 75.6886 13.8216C75.6966 15.8919 75.7372 18.0294 75.7787 20.2158C75.9719 30.3845 76.1847 41.6115 73.2139 52.059C69.572 64.8639 61.1361 76.4843 41.7875 83.2589C22.44 76.4848 14.005 64.8643 10.3637 52.059C7.39308 41.6118 7.60616 30.385 7.79913 20.2165C7.84066 18.0298 7.88121 15.8921 7.88901 13.8216C21.792 13.6919 32.6114 9.67146 41.7875 0.970459Z'
              stroke='#A6D0DD'
              strokeWidth='2'
            />
            <path
              d='M41.7272 62.2999C52.9386 62.2999 62.0272 53.2113 62.0272 42C62.0272 30.7886 52.9386 21.7 41.7272 21.7C30.5159 21.7 21.4272 30.7886 21.4272 42C21.4272 53.2113 30.5159 62.2999 41.7272 62.2999Z'
              stroke='#FF6969'
              strokeWidth='2'
            />
            <path
              d='M32.0001 41.7279L39.0712 48.799L51.7991 36.0711'
              stroke='#A6D0DD'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_1424_5910'>
              <rect width='84' height='84' fill='white' />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: 'Nominators',
      text: 'Members who hold tokens on the chain that nominate staking members as validators for transactions. Nominators receive a part of the reward that their nominated validators receive for their work in successfully nominating validators.',
      svg: (
        <svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M9 16L15 43.5L26.5 9.5' stroke='#162029' strokeOpacity='0.3' strokeWidth='2' />
          <path d='M40 16L54 45.5L75 10' stroke='#162029' strokeOpacity='0.3' strokeWidth='2' />
          <path d='M26 10L31.5 45L59 10' stroke='#162029' strokeOpacity='0.3' strokeWidth='2' />
          <circle cx='9' cy='52' r='2' fill='#162029' />
          <circle cx='9' cy='46' r='2' fill='#162029' />
          <circle cx='9' cy='58' r='2' fill='#162029' />
          <circle cx='9' cy='64' r='2' fill='#162029' />
          <circle cx='9' cy='70' r='2' fill='#162029' />
          <circle cx='9' cy='76' r='2' fill='#162029' />
          <circle cx='9' cy='82' r='2' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 17 54)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 23 54)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 17 48)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 23 48)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 17 60)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 23 60)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 17 66)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 23 66)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 17 72)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 23 72)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 17 78)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 23 78)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 17 84)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 23 84)' fill='#162029' />
          <circle cx='3' cy='52' r='2' transform='rotate(-90 3 52)' fill='#162029' />
          <circle cx='3' cy='46' r='2' transform='rotate(-90 3 46)' fill='#162029' />
          <circle cx='3' cy='58' r='2' transform='rotate(-90 3 58)' fill='#162029' />
          <circle cx='3' cy='64' r='2' transform='rotate(-90 3 64)' fill='#162029' />
          <circle cx='3' cy='70' r='2' transform='rotate(-90 3 70)' fill='#162029' />
          <circle cx='3' cy='76' r='2' transform='rotate(-90 3 76)' fill='#162029' />
          <circle cx='3' cy='82' r='2' transform='rotate(-90 3 82)' fill='#162029' />
          <circle cx='54' cy='52' r='2' fill='#162029' />
          <circle cx='54' cy='46' r='2' fill='#162029' />
          <circle cx='54' cy='58' r='2' fill='#162029' />
          <circle cx='54' cy='64' r='2' fill='#162029' />
          <circle cx='54' cy='70' r='2' fill='#162029' />
          <circle cx='54' cy='76' r='2' fill='#162029' />
          <circle cx='54' cy='82' r='2' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 62 54)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 68 54)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 62 48)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 68 48)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 62 60)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 68 60)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 62 66)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 68 66)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 62 72)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 68 72)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 62 78)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 68 78)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 62 84)' fill='#162029' />
          <circle cx='2' cy='2' r='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 68 84)' fill='#162029' />
          <circle cx='48' cy='52' r='2' transform='rotate(-90 48 52)' fill='#162029' />
          <circle cx='48' cy='46' r='2' transform='rotate(-90 48 46)' fill='#162029' />
          <circle cx='48' cy='58' r='2' transform='rotate(-90 48 58)' fill='#162029' />
          <circle cx='48' cy='64' r='2' transform='rotate(-90 48 64)' fill='#162029' />
          <circle cx='48' cy='70' r='2' transform='rotate(-90 48 70)' fill='#162029' />
          <circle cx='48' cy='76' r='2' transform='rotate(-90 48 76)' fill='#162029' />
          <circle cx='48' cy='82' r='2' transform='rotate(-90 48 82)' fill='#162029' />
          <circle cx='37' cy='52' r='2' fill='#FF7152' />
          <circle cx='37' cy='46' r='2' fill='#FF7152' />
          <circle cx='37' cy='58' r='2' fill='#FF7152' />
          <circle cx='37' cy='64' r='2' fill='#FF7152' />
          <circle cx='37' cy='70' r='2' fill='#FF7152' />
          <circle cx='37' cy='76' r='2' fill='#FF7152' />
          <circle cx='37' cy='82' r='2' fill='#FF7152' />
          <circle cx='31' cy='52' r='2' transform='rotate(-90 31 52)' fill='#FF7152' />
          <circle cx='31' cy='46' r='2' transform='rotate(-90 31 46)' fill='#FF7152' />
          <circle cx='31' cy='58' r='2' transform='rotate(-90 31 58)' fill='#FF7152' />
          <circle cx='31' cy='64' r='2' transform='rotate(-90 31 64)' fill='#FF7152' />
          <circle cx='31' cy='70' r='2' transform='rotate(-90 31 70)' fill='#FF7152' />
          <circle cx='31' cy='76' r='2' transform='rotate(-90 31 76)' fill='#FF7152' />
          <circle cx='31' cy='82' r='2' transform='rotate(-90 31 82)' fill='#FF7152' />
          <circle cx='82' cy='52' r='2' fill='#FF7152' />
          <circle cx='82' cy='46' r='2' fill='#FF7152' />
          <circle cx='82' cy='58' r='2' fill='#FF7152' />
          <circle cx='82' cy='64' r='2' fill='#FF7152' />
          <circle cx='82' cy='70' r='2' fill='#FF7152' />
          <circle cx='82' cy='76' r='2' fill='#FF7152' />
          <circle cx='82' cy='82' r='2' fill='#FF7152' />
          <circle cx='76' cy='52' r='2' transform='rotate(-90 76 52)' fill='#FF7152' />
          <circle cx='76' cy='46' r='2' transform='rotate(-90 76 46)' fill='#FF7152' />
          <circle cx='76' cy='58' r='2' transform='rotate(-90 76 58)' fill='#FF7152' />
          <circle cx='76' cy='64' r='2' transform='rotate(-90 76 64)' fill='#FF7152' />
          <circle cx='76' cy='70' r='2' transform='rotate(-90 76 70)' fill='#FF7152' />
          <circle cx='76' cy='76' r='2' transform='rotate(-90 76 76)' fill='#FF7152' />
          <circle cx='76' cy='82' r='2' transform='rotate(-90 76 82)' fill='#FF7152' />
          <circle cx='10' cy='10' r='8' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='42' cy='10' r='8' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='58' cy='10' r='4' fill='#FFF3E5' stroke='#FF7152' strokeWidth='2' />
          <circle cx='26' cy='10' r='4' fill='#FFF3E5' stroke='#FF7152' strokeWidth='2' />
          <circle cx='74' cy='10' r='8' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
        </svg>
      ),
    },
    {
      title: 'Collators',
      text: 'Collators each supervise a shard of the main chain. They are responsible for the integrity and validity of their shard, and communicate the state of their shard to the main chain.',
      svg: (
        <svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='42.0002' cy='42' r='35.6071' stroke='#162029' strokeOpacity='0.3' strokeWidth='2' />
          <circle cx='41.9999' cy='42' r='22.4286' stroke='#162029' strokeOpacity='0.3' strokeWidth='2' />
          <circle cx='16.375' cy='15.6428' r='4.125' fill='#FFF3E5' stroke='#FF6969' strokeWidth='2' />
          <circle cx='16.375' cy='68.3572' r='4.125' fill='#FFF3E5' stroke='#FF6969' strokeWidth='2' />
          <circle cx='67.625' cy='15.6428' r='4.125' fill='#FFF3E5' stroke='#FF6969' strokeWidth='2' />
          <circle cx='67.625' cy='68.3572' r='4.125' fill='#FFF3E5' stroke='#FF6969' strokeWidth='2' />
          <circle cx='6.125' cy='42' r='4.125' fill='#FFF3E5' stroke='#FF6969' strokeWidth='2' />
          <circle cx='77.875' cy='42' r='4.125' fill='#FFF3E5' stroke='#FF6969' strokeWidth='2' />
          <circle cx='42' cy='6.125' r='4.125' fill='#FFF3E5' stroke='#FF6969' strokeWidth='2' />
          <circle cx='42' cy='77.875' r='4.125' fill='#FFF3E5' stroke='#FF6969' strokeWidth='2' />
          <path
            d='M25.6985 30.8753C26.5519 32.9876 25.5314 35.3918 23.4191 36.2452C21.3068 37.0986 18.9026 36.0781 18.0492 33.9658C17.1958 31.8535 18.2163 29.4494 20.3286 28.5959C22.4409 27.7425 24.845 28.763 25.6985 30.8753Z'
            fill='#FFF3E5'
            stroke='#A6D0DD'
            strokeWidth='2'
          />
          <path
            d='M36.5197 61.2603C37.3732 63.3726 36.3527 65.7768 34.2404 66.6302C32.1281 67.4836 29.7239 66.4631 28.8705 64.3508C28.0171 62.2386 29.0376 59.8344 31.1499 58.981C33.2621 58.1275 35.6663 59.1481 36.5197 61.2603Z'
            fill='#FFF3E5'
            stroke='#A6D0DD'
            strokeWidth='2'
          />
          <path
            d='M55.1301 19.6491C55.9835 21.7614 54.963 24.1656 52.8507 25.019C50.7384 25.8724 48.3343 24.8519 47.4808 22.7396C46.6274 20.6274 47.6479 18.2232 49.7602 17.3698C51.8725 16.5163 54.2767 17.5368 55.1301 19.6491Z'
            fill='#FFF3E5'
            stroke='#A6D0DD'
            strokeWidth='2'
          />
          <circle
            cx='62.806'
            cy='51.3052'
            r='4.125'
            transform='rotate(-22 62.806 51.3052)'
            fill='#FFF3E5'
            stroke='#A6D0DD'
            strokeWidth='2'
          />
          <g clipPath='url(#clip0_1488_9861)'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M45.9996 48.9826C47.279 48.9827 48.5339 48.6326 49.6281 47.9703C50.7222 47.308 51.6136 46.3588 52.2056 45.226C52.7975 44.0931 53.0672 42.8199 52.9855 41.5446C52.9037 40.2694 52.4736 39.0409 51.7419 37.9927C51.0102 36.9444 50.0048 36.1166 48.835 35.599C47.6653 35.0815 46.3759 34.8941 45.107 35.0572C43.8381 35.2202 42.6382 35.7275 41.6377 36.524C40.6372 37.3204 39.8744 38.3755 39.4321 39.5746C39.8375 39.6938 40.2061 39.9135 40.5037 40.2133C41.4715 40.7484 42.9578 41.1455 44.3923 40.3169C44.6722 40.0023 45.0265 39.7628 45.4229 39.6202C45.8193 39.4776 46.2451 39.4363 46.6615 39.5002C47.078 39.5642 47.4717 39.7312 47.8069 39.9862C48.1421 40.2411 48.4081 40.5759 48.5805 40.9598C48.7529 41.3438 48.8264 41.7648 48.7941 42.1843C48.7618 42.6039 48.6249 43.0088 48.3958 43.3619C48.1667 43.7151 47.8527 44.0053 47.4824 44.2061C47.1122 44.407 46.6975 44.512 46.2762 44.5116C45.729 44.5093 45.1966 44.334 44.7553 44.011C43.7701 43.5277 42.0073 43.0789 40.279 43.9765C40.0275 44.174 39.7398 44.3206 39.4321 44.4081C39.927 45.7499 40.822 46.9079 41.9964 47.7259C43.1707 48.5439 44.5679 48.9825 45.9996 48.9826Z'
              fill='#FF6969'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M45.5676 39.5919C44.9996 38.0518 43.9071 36.7603 42.4816 35.9438C41.0561 35.1273 39.3884 34.8378 37.7707 35.1259C36.1529 35.4141 34.6883 36.2616 33.6332 37.52C32.5782 38.7783 32 40.3673 32 42.0087C32 43.65 32.5782 45.239 33.6332 46.4974C34.6883 47.7557 36.1529 48.6032 37.7707 48.8914C39.3884 49.1795 41.0561 48.89 42.4816 48.0735C43.9071 47.257 44.9996 45.9656 45.5676 44.4254C45.273 44.34 44.9974 44.1994 44.7554 44.0111C43.7702 43.5278 42.0074 43.0789 40.2791 43.9766C39.8374 44.3279 39.2882 44.5168 38.7236 44.5117C38.3923 44.5117 38.0641 44.4465 37.758 44.3199C37.4518 44.1932 37.1737 44.0076 36.9394 43.7735C36.7051 43.5395 36.5192 43.2617 36.3924 42.9559C36.2656 42.6501 36.2003 42.3224 36.2003 41.9914C36.2003 41.6604 36.2656 41.3327 36.3924 41.0269C36.5192 40.7211 36.7051 40.4433 36.9394 40.2093C37.1737 39.9752 37.4518 39.7896 37.758 39.6629C38.0641 39.5363 38.3923 39.4711 38.7236 39.4711C39.0551 39.469 39.3835 39.5336 39.6894 39.6612C39.9952 39.7887 40.2722 39.9765 40.5038 40.2134C41.4716 40.7485 42.9579 41.1455 44.3924 40.3169C44.7097 39.9716 45.1165 39.7207 45.5676 39.5919Z'
              fill='#A6D0DD'
            />
          </g>
          <defs>
            <clipPath id='clip0_1488_9861'>
              <rect width='23.4286' height='23.4286' fill='white' transform='translate(30.2856 30.2858)' />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];
  const technologyNetworkSlider = [
    {
      title: 'Pivot Chain',
      text: 'This is the foundation of the Catetna platform. It controls the whole network and is responsible for its security, consensus, and monitoring.',
      svg: (
        <svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='42.0002' cy='42' r='35.6071' stroke='#162029' strokeOpacity='0.3' strokeWidth='2' />
          <circle cx='41.9999' cy='42' r='22.4286' stroke='#162029' strokeOpacity='0.3' strokeWidth='2' />
          <circle cx='16.375' cy='15.6428' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='16.375' cy='68.3572' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='67.625' cy='15.6428' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='67.625' cy='68.3572' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='6.125' cy='42' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='77.875' cy='42' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='42' cy='6.125' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='42' cy='77.875' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <path
            d='M25.6985 30.8753C26.5519 32.9876 25.5314 35.3918 23.4191 36.2452C21.3068 37.0986 18.9026 36.0781 18.0492 33.9658C17.1958 31.8535 18.2163 29.4494 20.3286 28.5959C22.4409 27.7425 24.845 28.763 25.6985 30.8753Z'
            fill='#FFF3E5'
            stroke='#FF6969'
            strokeWidth='2'
          />
          <path
            d='M36.5197 61.2603C37.3732 63.3726 36.3527 65.7768 34.2404 66.6302C32.1281 67.4836 29.7239 66.4631 28.8705 64.3508C28.0171 62.2386 29.0376 59.8344 31.1499 58.981C33.2621 58.1275 35.6663 59.1481 36.5197 61.2603Z'
            fill='#FFF3E5'
            stroke='#FF6969'
            strokeWidth='2'
          />
          <path
            d='M55.1301 19.6491C55.9835 21.7614 54.963 24.1656 52.8507 25.019C50.7384 25.8724 48.3343 24.8519 47.4808 22.7396C46.6274 20.6274 47.6479 18.2232 49.7602 17.3698C51.8725 16.5163 54.2767 17.5368 55.1301 19.6491Z'
            fill='#FFF3E5'
            stroke='#FF6969'
            strokeWidth='2'
          />
          <circle
            cx='62.806'
            cy='51.3052'
            r='4.125'
            transform='rotate(-22 62.806 51.3052)'
            fill='#FFF3E5'
            stroke='#FF6969'
            strokeWidth='2'
          />
          <g clipPath='url(#clip0_1552_1403)'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M45.9996 48.9826C47.279 48.9827 48.5339 48.6326 49.6281 47.9703C50.7222 47.308 51.6136 46.3588 52.2056 45.226C52.7975 44.0931 53.0672 42.8199 52.9855 41.5446C52.9037 40.2694 52.4736 39.0409 51.7419 37.9927C51.0102 36.9444 50.0048 36.1166 48.835 35.599C47.6653 35.0815 46.3759 34.8941 45.107 35.0572C43.8381 35.2202 42.6382 35.7275 41.6377 36.524C40.6372 37.3204 39.8744 38.3755 39.4321 39.5746C39.8375 39.6938 40.2061 39.9135 40.5037 40.2133C41.4715 40.7484 42.9578 41.1455 44.3923 40.3169C44.6722 40.0023 45.0265 39.7628 45.4229 39.6202C45.8193 39.4776 46.2451 39.4363 46.6615 39.5002C47.078 39.5642 47.4717 39.7312 47.8069 39.9862C48.1421 40.2411 48.4081 40.5759 48.5805 40.9598C48.7529 41.3438 48.8264 41.7648 48.7941 42.1843C48.7618 42.6039 48.6249 43.0088 48.3958 43.3619C48.1667 43.7151 47.8527 44.0053 47.4824 44.2061C47.1122 44.407 46.6975 44.512 46.2762 44.5116C45.729 44.5093 45.1966 44.334 44.7553 44.011C43.7701 43.5277 42.0073 43.0789 40.279 43.9765C40.0275 44.174 39.7398 44.3206 39.4321 44.4081C39.927 45.7499 40.822 46.9079 41.9964 47.7259C43.1707 48.5439 44.5679 48.9825 45.9996 48.9826Z'
              fill='#FF6969'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M45.5676 39.5919C44.9996 38.0518 43.9071 36.7603 42.4816 35.9438C41.0561 35.1273 39.3884 34.8378 37.7707 35.1259C36.1529 35.4141 34.6883 36.2616 33.6332 37.52C32.5782 38.7783 32 40.3673 32 42.0087C32 43.65 32.5782 45.239 33.6332 46.4974C34.6883 47.7557 36.1529 48.6032 37.7707 48.8914C39.3884 49.1795 41.0561 48.89 42.4816 48.0735C43.9071 47.257 44.9996 45.9656 45.5676 44.4254C45.273 44.34 44.9974 44.1994 44.7554 44.0111C43.7702 43.5278 42.0074 43.0789 40.2791 43.9766C39.8374 44.3279 39.2882 44.5168 38.7236 44.5117C38.3923 44.5117 38.0641 44.4465 37.758 44.3199C37.4518 44.1932 37.1737 44.0076 36.9394 43.7735C36.7051 43.5395 36.5192 43.2617 36.3924 42.9559C36.2656 42.6501 36.2003 42.3224 36.2003 41.9914C36.2003 41.6604 36.2656 41.3327 36.3924 41.0269C36.5192 40.7211 36.7051 40.4433 36.9394 40.2093C37.1737 39.9752 37.4518 39.7896 37.758 39.6629C38.0641 39.5363 38.3923 39.4711 38.7236 39.4711C39.0551 39.469 39.3835 39.5336 39.6894 39.6612C39.9952 39.7887 40.2722 39.9765 40.5038 40.2134C41.4716 40.7485 42.9579 41.1455 44.3924 40.3169C44.7097 39.9716 45.1165 39.7207 45.5676 39.5919Z'
              fill='#A6D0DD'
            />
          </g>
          <defs>
            <clipPath id='clip0_1552_1403'>
              <rect width='23.4286' height='23.4286' fill='white' transform='translate(30.2856 30.2858)' />
            </clipPath>
          </defs>
        </svg>
      ),
    },

    {
      title: 'PolyChains',
      text: 'Multiple chains that run simultaneously, that either form instances of an existing blockchain or are independent blockchains with their own use cases and tokens',
      svg: (
        <svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='42.0002' cy='42' r='35.6071' stroke='#FF6969' strokeWidth='2' />
          <circle cx='41.9999' cy='42' r='22.4286' stroke='#162029' strokeOpacity='0.3' strokeWidth='2' />
          <circle cx='16.375' cy='15.6428' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='16.375' cy='68.3572' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='67.625' cy='15.6428' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='67.625' cy='68.3572' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='6.125' cy='42' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='77.875' cy='42' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='42' cy='6.125' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='42' cy='77.875' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <path
            d='M25.6985 30.8753C26.5519 32.9876 25.5314 35.3918 23.4191 36.2452C21.3068 37.0986 18.9026 36.0781 18.0492 33.9658C17.1958 31.8535 18.2163 29.4494 20.3286 28.5959C22.4409 27.7425 24.845 28.763 25.6985 30.8753Z'
            fill='#FFF3E5'
            stroke='#A6D0DD'
            strokeWidth='2'
          />
          <path
            d='M36.5197 61.2603C37.3732 63.3726 36.3527 65.7768 34.2404 66.6302C32.1281 67.4836 29.7239 66.4631 28.8705 64.3508C28.0171 62.2386 29.0376 59.8344 31.1499 58.981C33.2621 58.1275 35.6663 59.1481 36.5197 61.2603Z'
            fill='#FFF3E5'
            stroke='#A6D0DD'
            strokeWidth='2'
          />
          <path
            d='M55.1301 19.6491C55.9835 21.7614 54.963 24.1656 52.8507 25.019C50.7384 25.8724 48.3343 24.8519 47.4808 22.7396C46.6274 20.6274 47.6479 18.2232 49.7602 17.3698C51.8725 16.5163 54.2767 17.5368 55.1301 19.6491Z'
            fill='#FFF3E5'
            stroke='#A6D0DD'
            strokeWidth='2'
          />
          <circle
            cx='62.806'
            cy='51.3052'
            r='4.125'
            transform='rotate(-22 62.806 51.3052)'
            fill='#FFF3E5'
            stroke='#A6D0DD'
            strokeWidth='2'
          />
          <g clipPath='url(#clip0_1552_1384)'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M44.9996 47.9826C46.279 47.9827 47.5339 47.6326 48.6281 46.9703C49.7222 46.308 50.6136 45.3588 51.2056 44.226C51.7975 43.0931 52.0672 41.8199 51.9855 40.5446C51.9037 39.2694 51.4736 38.0409 50.7419 36.9927C50.0102 35.9444 49.0048 35.1166 47.835 34.599C46.6653 34.0815 45.3759 33.8941 44.107 34.0572C42.8381 34.2202 41.6382 34.7275 40.6377 35.524C39.6372 36.3204 38.8744 37.3755 38.4321 38.5746C38.8375 38.6938 39.2061 38.9135 39.5037 39.2133C40.4715 39.7484 41.9578 40.1455 43.3923 39.3169C43.6722 39.0023 44.0265 38.7628 44.4229 38.6202C44.8193 38.4776 45.2451 38.4363 45.6615 38.5002C46.078 38.5642 46.4717 38.7312 46.8069 38.9862C47.1421 39.2411 47.4081 39.5759 47.5805 39.9598C47.7529 40.3438 47.8264 40.7648 47.7941 41.1843C47.7618 41.6039 47.6249 42.0088 47.3958 42.3619C47.1667 42.7151 46.8527 43.0053 46.4824 43.2061C46.1122 43.407 45.6975 43.512 45.2762 43.5116C44.729 43.5093 44.1966 43.334 43.7553 43.011C42.7701 42.5277 41.0073 42.0789 39.279 42.9765C39.0275 43.174 38.7398 43.3206 38.4321 43.4081C38.927 44.7499 39.822 45.9079 40.9964 46.7259C42.1707 47.5439 43.5679 47.9825 44.9996 47.9826Z'
              fill='#FF6969'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M44.5676 38.5919C43.9996 37.0518 42.9071 35.7603 41.4816 34.9438C40.0561 34.1273 38.3884 33.8378 36.7707 34.1259C35.1529 34.4141 33.6883 35.2616 32.6332 36.52C31.5782 37.7783 31 39.3673 31 41.0087C31 42.65 31.5782 44.239 32.6332 45.4974C33.6883 46.7557 35.1529 47.6032 36.7707 47.8914C38.3884 48.1795 40.0561 47.89 41.4816 47.0735C42.9071 46.257 43.9996 44.9656 44.5676 43.4254C44.273 43.34 43.9974 43.1994 43.7554 43.0111C42.7702 42.5278 41.0074 42.0789 39.2791 42.9766C38.8374 43.3279 38.2882 43.5168 37.7236 43.5117C37.3923 43.5117 37.0641 43.4465 36.758 43.3199C36.4518 43.1932 36.1737 43.0076 35.9394 42.7735C35.7051 42.5395 35.5192 42.2617 35.3924 41.9559C35.2656 41.6501 35.2003 41.3224 35.2003 40.9914C35.2003 40.6604 35.2656 40.3327 35.3924 40.0269C35.5192 39.7211 35.7051 39.4433 35.9394 39.2093C36.1737 38.9752 36.4518 38.7896 36.758 38.6629C37.0641 38.5363 37.3923 38.4711 37.7236 38.4711C38.0551 38.469 38.3835 38.5336 38.6894 38.6612C38.9952 38.7887 39.2722 38.9765 39.5038 39.2134C40.4716 39.7485 41.9579 40.1455 43.3924 39.3169C43.7097 38.9716 44.1165 38.7207 44.5676 38.5919Z'
              fill='#A6D0DD'
            />
          </g>
          <defs>
            <clipPath id='clip0_1552_1384'>
              <rect width='23.4286' height='23.4286' fill='white' transform='translate(29.2856 29.2858)' />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: 'Bridges',
      text: 'Allow Polychains, both private and public, to connect with other public blockchains like Bitcoin and Ethereum, without the use of oracles',
      svg: (
        <svg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <line x1='42' y1='48' x2='42' y2='75' stroke='#162029' strokeOpacity='0.3' strokeWidth='2' />
          <line x1='42' y1='17' x2='42' y2='41' stroke='#162029' strokeOpacity='0.3' strokeWidth='2' />
          <circle cx='42.0002' cy='44.6071' r='35.6071' stroke='#162029' strokeOpacity='0.3' strokeWidth='2' />
          <circle cx='41.9999' cy='44.6072' r='22.4286' stroke='#162029' strokeOpacity='0.3' strokeWidth='2' />
          <circle cx='6.125' cy='44.6072' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='21.125' cy='44.6072' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='77.875' cy='44.6072' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='63.125' cy='44.6072' r='4.125' fill='#FFF3E5' stroke='#A6D0DD' strokeWidth='2' />
          <circle cx='42.125' cy='78.125' r='4.125' fill='#FFF3E5' stroke='#FF6969' strokeWidth='2' />
          <g clipPath='url(#clip0_1552_1422)'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M45.714 51.6969C46.9934 51.697 48.2483 51.3468 49.3424 50.6845C50.4365 50.0222 51.328 49.0731 51.9199 47.9402C52.5118 46.8073 52.7816 45.5341 52.6998 44.2588C52.6181 42.9836 52.188 41.7551 51.4562 40.7069C50.7245 39.6587 49.7191 38.8308 48.5494 38.3133C47.3797 37.7957 46.0903 37.6083 44.8214 37.7714C43.5524 37.9345 42.3525 38.4418 41.352 39.2382C40.3516 40.0346 39.5887 41.0897 39.1465 42.2888C39.5519 42.4081 39.9205 42.6278 40.218 42.9275C41.1859 43.4626 42.6722 43.8597 44.1067 43.0311C44.3866 42.7166 44.7409 42.4771 45.1373 42.3344C45.5337 42.1918 45.9595 42.1505 46.3759 42.2145C46.7923 42.2784 47.1861 42.4455 47.5213 42.7004C47.8565 42.9554 48.1224 43.2901 48.2949 43.6741C48.4673 44.058 48.5407 44.479 48.5085 44.8986C48.4762 45.3182 48.3393 45.723 48.1101 46.0761C47.881 46.4293 47.567 46.7195 47.1968 46.9204C46.8265 47.1212 46.4118 47.2262 45.9905 47.2259C45.4434 47.2235 44.911 47.0483 44.4696 46.7253C43.4845 46.2419 41.7216 45.7931 39.9933 46.6907C39.7419 46.8883 39.4542 47.0349 39.1465 47.1223C39.6414 48.4642 40.5364 49.6222 41.7107 50.4401C42.8851 51.2581 44.2823 51.6967 45.714 51.6969Z'
              fill='#FF6969'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M45.282 42.3061C44.714 40.766 43.6215 39.4746 42.196 38.658C40.7705 37.8415 39.1028 37.552 37.485 37.8402C35.8673 38.1283 34.4026 38.9758 33.3476 40.2342C32.2925 41.4925 31.7144 43.0816 31.7144 44.7229C31.7144 46.3642 32.2925 47.9532 33.3476 49.2116C34.4026 50.47 35.8673 51.3174 37.485 51.6056C39.1028 51.8938 40.7705 51.6042 42.196 50.7877C43.6215 49.9712 44.714 48.6798 45.282 47.1396C44.9874 47.0542 44.7117 46.9136 44.4697 46.7253C43.4846 46.242 41.7217 45.7932 39.9934 46.6908C39.5518 47.0421 39.0026 47.2311 38.438 47.226C38.1066 47.226 37.7785 47.1608 37.4723 47.0341C37.1662 46.9074 36.888 46.7218 36.6537 46.4878C36.4194 46.2537 36.2336 45.9759 36.1067 45.6701C35.9799 45.3643 35.9147 45.0366 35.9147 44.7056C35.9147 44.3747 35.9799 44.0469 36.1067 43.7411C36.2336 43.4354 36.4194 43.1575 36.6537 42.9235C36.888 42.6895 37.1662 42.5038 37.4723 42.3772C37.7785 42.2505 38.1066 42.1853 38.438 42.1853C38.7694 42.1832 39.0979 42.2479 39.4037 42.3754C39.7096 42.5029 39.9866 42.6907 40.2181 42.9276C41.186 43.4627 42.6723 43.8598 44.1068 43.0312C44.4241 42.6859 44.8308 42.4349 45.282 42.3061Z'
              fill='#A6D0DD'
            />
          </g>
          <g clipPath='url(#clip1_1552_1422)'>
            <path
              d='M42.5 19C47.7467 19 52 14.7467 52 9.5C52 4.25329 47.7467 0 42.5 0C37.2533 0 33 4.25329 33 9.5C33 14.7467 37.2533 19 42.5 19Z'
              fill='#F7931A'
            />
            <path
              d='M46.768 8.32438C46.9545 7.07988 46.0062 6.41072 44.7107 5.96422L45.1311 4.27797L44.1051 4.02266L43.6954 5.66438C43.4258 5.59669 43.1491 5.53375 42.873 5.47081L43.2857 3.81841L42.2597 3.5625L41.8393 5.24816C41.6161 5.19709 41.3964 5.14722 41.1838 5.09378L41.185 5.08844L39.7695 4.73516L39.4964 5.83122C39.4964 5.83122 40.2581 6.00578 40.2421 6.01647C40.6577 6.12038 40.7326 6.39528 40.7201 6.61378L40.2415 8.53456C40.27 8.54169 40.3068 8.55237 40.3484 8.56841L40.2397 8.54169L39.5688 11.2326C39.5177 11.3584 39.3889 11.5478 39.098 11.476C39.1086 11.4908 38.3522 11.2902 38.3522 11.2902L37.8428 12.4646L39.1787 12.7977C39.4269 12.86 39.6703 12.9253 39.9096 12.9865L39.4851 14.6917L40.5105 14.9471L40.9309 13.2608C41.2111 13.3362 41.4831 13.4063 41.7491 13.4728L41.3299 15.1519L42.3559 15.4072L42.7804 13.7055C44.5308 14.0368 45.8465 13.9032 46.4005 12.3203C46.847 11.0461 46.3785 10.3105 45.4576 9.83131C46.1286 9.67694 46.6332 9.23578 46.768 8.32438ZM44.4227 11.6126C44.1062 12.8873 41.9598 12.198 41.264 12.0252L41.828 9.766C42.5239 9.93997 44.7546 10.2838 44.4227 11.6126ZM44.7404 8.30597C44.4512 9.46556 42.6652 8.87597 42.0863 8.73169L42.5969 6.68325C43.1758 6.82753 45.042 7.0965 44.7404 8.30597Z'
              fill='white'
            />
          </g>
          <defs>
            <clipPath id='clip0_1552_1422'>
              <rect width='23.4286' height='23.4286' fill='white' transform='translate(30 33)' />
            </clipPath>
            <clipPath id='clip1_1552_1422'>
              <rect width='19' height='19' fill='white' transform='translate(33)' />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];
  const technologyLayersSlider = [
    {
      title: 'Application',
      text: 'Aura',
      bg: '#2F3F4D',
      svg: (
        <svg width='578' height='56' viewBox='0 0 578 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M50 30V25C50 22.2386 47.7614 20 45 20V20C42.2386 20 40 22.2386 40 25V30'
            stroke='white'
            strokeWidth='3'
          />
          <rect x='35.5' y='30.5' width='19' height='19' rx='3.5' stroke='white' strokeWidth='3' />
          <path d='M6 3H8C10.7614 3 13 5.23858 13 8V21C13 23.7614 10.7614 26 8 26H6' stroke='white' strokeWidth='3' />
          <line x1='19' y1='19.5' x2='30' y2='19.5' stroke='white' strokeWidth='3' />
          <line x1='5' y1='14.5' x2='13' y2='14.5' stroke='white' strokeWidth='3' />
          <line x1='19' y1='24.5' x2='30' y2='24.5' stroke='white' strokeWidth='3' />
          <line x1='19' y1='29.5' x2='30' y2='29.5' stroke='white' strokeWidth='3' />
          <circle cx='3.5' cy='3.5' r='3.5' fill='#FF6969' />
          <circle cx='3.5' cy='14.5' r='3.5' fill='#FF6969' />
          <circle cx='3.5' cy='25.5' r='3.5' fill='#FF6969' />
          <rect x='13.5' y='10.5' width='22' height='28' rx='3.5' stroke='white' strokeWidth='3' />
          <path d='M40.9999 39.6569L44.5354 43.1924L50.1923 37.5355' stroke='white' strokeWidth='3' />
          <path
            d='M224 30V25C224 22.2386 221.761 20 219 20V20C216.239 20 214 22.2386 214 25V30'
            stroke='white'
            strokeWidth='3'
          />
          <rect x='209.5' y='30.5' width='19' height='19' rx='3.5' stroke='white' strokeWidth='3' />
          <path
            d='M180 3H182C184.761 3 187 5.23858 187 8V21C187 23.7614 184.761 26 182 26H180'
            stroke='white'
            strokeWidth='3'
          />
          <line x1='193' y1='19.5' x2='204' y2='19.5' stroke='#FF6969' strokeWidth='3' />
          <line x1='179' y1='14.5' x2='187' y2='14.5' stroke='white' strokeWidth='3' />
          <line x1='193' y1='24.5' x2='204' y2='24.5' stroke='#FF6969' strokeWidth='3' />
          <line x1='193' y1='29.5' x2='204' y2='29.5' stroke='#FF6969' strokeWidth='3' />
          <circle cx='177.5' cy='3.5' r='3.5' fill='white' />
          <circle cx='177.5' cy='14.5' r='3.5' fill='white' />
          <circle cx='177.5' cy='25.5' r='3.5' fill='white' />
          <rect x='187.5' y='10.5' width='22' height='28' rx='3.5' stroke='white' strokeWidth='3' />
          <path d='M215 39.6569L218.535 43.1924L224.192 37.5355' stroke='white' strokeWidth='3' />
          <path
            d='M572 30V25C572 22.2386 569.761 20 567 20V20C564.239 20 562 22.2386 562 25V30'
            stroke='white'
            strokeWidth='3'
          />
          <rect x='557.5' y='30.5' width='19' height='19' rx='3.5' stroke='white' strokeWidth='3' />
          <path
            d='M528 3H530C532.761 3 535 5.23858 535 8V21C535 23.7614 532.761 26 530 26H528'
            stroke='white'
            strokeWidth='3'
          />
          <line x1='541' y1='19.5' x2='552' y2='19.5' stroke='white' strokeWidth='3' />
          <line x1='527' y1='14.5' x2='535' y2='14.5' stroke='white' strokeWidth='3' />
          <line x1='541' y1='24.5' x2='552' y2='24.5' stroke='white' strokeWidth='3' />
          <line x1='541' y1='29.5' x2='552' y2='29.5' stroke='white' strokeWidth='3' />
          <circle cx='525.5' cy='3.5' r='3.5' fill='white' />
          <circle cx='525.5' cy='14.5' r='3.5' fill='white' />
          <circle cx='525.5' cy='25.5' r='3.5' fill='white' />
          <rect x='535.5' y='10.5' width='22' height='28' rx='3.5' stroke='white' strokeWidth='3' />
          <path d='M563 39.6569L566.535 43.1924L572.192 37.5355' stroke='#FF6969' strokeWidth='3' />
          <path
            d='M398 30V25C398 22.2386 395.761 20 393 20V20C390.239 20 388 22.2386 388 25V30'
            stroke='#FF6969'
            strokeWidth='3'
          />
          <rect x='383.5' y='30.5' width='19' height='19' rx='3.5' stroke='white' strokeWidth='3' />
          <path
            d='M354 3H356C358.761 3 361 5.23858 361 8V21C361 23.7614 358.761 26 356 26H354'
            stroke='white'
            strokeWidth='3'
          />
          <line x1='367' y1='19.5' x2='378' y2='19.5' stroke='white' strokeWidth='3' />
          <line x1='353' y1='14.5' x2='361' y2='14.5' stroke='white' strokeWidth='3' />
          <line x1='367' y1='24.5' x2='378' y2='24.5' stroke='white' strokeWidth='3' />
          <line x1='367' y1='29.5' x2='378' y2='29.5' stroke='white' strokeWidth='3' />
          <circle cx='351.5' cy='3.5' r='3.5' fill='white' />
          <circle cx='351.5' cy='14.5' r='3.5' fill='white' />
          <circle cx='351.5' cy='25.5' r='3.5' fill='white' />
          <rect x='361.5' y='10.5' width='22' height='28' rx='3.5' stroke='white' strokeWidth='3' />
          <path d='M389 39.6569L392.535 43.1924L398.192 37.5355' stroke='white' strokeWidth='3' />
          <g filter='url(#filter0_d_1562_6682)'>
            <line
              x1='80'
              y1='27'
              x2='150'
              y2='27'
              stroke='url(#paint0_linear_1562_6682)'
              strokeWidth='2'
              shapeRendering='crispEdges'
            />
          </g>
          <g filter='url(#filter1_d_1562_6682)'>
            <line
              x1='254'
              y1='27'
              x2='324'
              y2='27'
              stroke='url(#paint1_linear_1562_6682)'
              strokeWidth='2'
              shapeRendering='crispEdges'
            />
          </g>
          <g filter='url(#filter2_d_1562_6682)'>
            <line
              x1='428'
              y1='27'
              x2='498'
              y2='27'
              stroke='url(#paint2_linear_1562_6682)'
              strokeWidth='2'
              shapeRendering='crispEdges'
            />
          </g>
          <defs>
            <filter
              id='filter0_d_1562_6682'
              x='68'
              y='14'
              width='94'
              height='26'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='6' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0' />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1562_6682' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1562_6682' result='shape' />
            </filter>
            <filter
              id='filter1_d_1562_6682'
              x='242'
              y='14'
              width='94'
              height='26'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='6' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0' />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1562_6682' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1562_6682' result='shape' />
            </filter>
            <filter
              id='filter2_d_1562_6682'
              x='416'
              y='14'
              width='94'
              height='26'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='6' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0' />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1562_6682' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1562_6682' result='shape' />
            </filter>
            <linearGradient
              id='paint0_linear_1562_6682'
              x1='150'
              y1='28'
              x2='80'
              y2='28'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' stopOpacity='0' />
              <stop offset='0.523256' stopColor='white' />
              <stop offset='1' stopColor='white' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paint1_linear_1562_6682'
              x1='324'
              y1='28'
              x2='254'
              y2='28'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' stopOpacity='0' />
              <stop offset='0.523256' stopColor='white' />
              <stop offset='1' stopColor='white' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paint2_linear_1562_6682'
              x1='498'
              y1='28'
              x2='428'
              y2='28'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' stopOpacity='0' />
              <stop offset='0.523256' stopColor='white' />
              <stop offset='1' stopColor='white' stopOpacity='0' />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: 'Blockchain',
      text: 'Catena',
      bg: '#FFB84F',
      svg: (
        <svg width='603' height='111' viewBox='0 0 603 111' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g filter='url(#filter0_d_1562_6881)'>
            <path
              d='M590.707 92.2696C591.098 91.8791 591.098 91.2459 590.707 90.8554L584.343 84.4914C583.953 84.1009 583.319 84.1009 582.929 84.4914C582.538 84.882 582.538 85.5151 582.929 85.9056L588.586 91.5625L582.929 97.2194C582.538 97.6099 582.538 98.243 582.929 98.6336C583.319 99.0241 583.953 99.0241 584.343 98.6336L590.707 92.2696ZM12 92.5625L590 92.5625V90.5625L12 90.5625V92.5625Z'
              fill='url(#paint0_linear_1562_6881)'
            />
          </g>
          <rect x='10.5' y='2.0625' width='22' height='22' rx='4.5' stroke='#FF6969' strokeWidth='3' />
          <line x1='21.5' y1='17.5625' x2='21.5' y2='29.5625' stroke='#FF6969' strokeWidth='3' />
          <line x1='31' y1='13.0625' x2='38' y2='13.0625' stroke='#FF6969' strokeWidth='3' />
          <rect
            x='69.5'
            y='61.0625'
            width='22'
            height='22'
            rx='4.5'
            transform='rotate(180 69.5 61.0625)'
            stroke='white'
            strokeWidth='3'
          />
          <line x1='58.5' y1='45.5625' x2='58.5' y2='33.5625' stroke='white' strokeWidth='3' />
          <line x1='49' y1='50.0625' x2='42' y2='50.0625' stroke='white' strokeWidth='3' />
          <rect
            x='1.5'
            y='-1.5'
            width='22'
            height='22'
            rx='4.5'
            transform='matrix(-1 0 0 1 71 3.5625)'
            stroke='white'
            strokeWidth='3'
          />
          <line x1='58.5' y1='22.5625' x2='58.5' y2='29.5625' stroke='white' strokeWidth='3' />
          <line x1='55' y1='13.0625' x2='42' y2='13.0625' stroke='white' strokeWidth='3' />
          <rect
            x='-1.5'
            y='1.5'
            width='22'
            height='22'
            rx='4.5'
            transform='matrix(1 0 0 -1 12 62.5625)'
            stroke='white'
            strokeWidth='3'
          />
          <line x1='21.5' y1='40.5625' x2='21.5' y2='33.5625' stroke='white' strokeWidth='3' />
          <line x1='25' y1='50.0625' x2='38' y2='50.0625' stroke='white' strokeWidth='3' />
          <rect x='184.5' y='2.0625' width='22' height='22' rx='4.5' stroke='white' strokeWidth='3' />
          <line x1='195.5' y1='17.5625' x2='195.5' y2='29.5625' stroke='white' strokeWidth='3' />
          <line x1='205' y1='13.0625' x2='212' y2='13.0625' stroke='white' strokeWidth='3' />
          <rect
            x='243.5'
            y='61.0625'
            width='22'
            height='22'
            rx='4.5'
            transform='rotate(180 243.5 61.0625)'
            stroke='white'
            strokeWidth='3'
          />
          <line x1='232.5' y1='45.5625' x2='232.5' y2='33.5625' stroke='white' strokeWidth='3' />
          <line x1='223' y1='50.0625' x2='216' y2='50.0625' stroke='white' strokeWidth='3' />
          <rect
            x='1.5'
            y='-1.5'
            width='22'
            height='22'
            rx='4.5'
            transform='matrix(-1 0 0 1 245 3.5625)'
            stroke='#FF6969'
            strokeWidth='3'
          />
          <line x1='232.5' y1='22.5625' x2='232.5' y2='29.5625' stroke='#FF6969' strokeWidth='3' />
          <line x1='229' y1='13.0625' x2='216' y2='13.0625' stroke='#FF6969' strokeWidth='3' />
          <rect
            x='-1.5'
            y='1.5'
            width='22'
            height='22'
            rx='4.5'
            transform='matrix(1 0 0 -1 186 62.5625)'
            stroke='white'
            strokeWidth='3'
          />
          <line x1='195.5' y1='40.5625' x2='195.5' y2='33.5625' stroke='white' strokeWidth='3' />
          <line x1='199' y1='50.0625' x2='212' y2='50.0625' stroke='white' strokeWidth='3' />
          <rect x='358.5' y='2.0625' width='22' height='22' rx='4.5' stroke='white' strokeWidth='3' />
          <line x1='369.5' y1='17.5625' x2='369.5' y2='29.5625' stroke='white' strokeWidth='3' />
          <line x1='379' y1='13.0625' x2='386' y2='13.0625' stroke='white' strokeWidth='3' />
          <rect
            x='417.5'
            y='61.0625'
            width='22'
            height='22'
            rx='4.5'
            transform='rotate(180 417.5 61.0625)'
            stroke='white'
            strokeWidth='3'
          />
          <line x1='406.5' y1='45.5625' x2='406.5' y2='33.5625' stroke='white' strokeWidth='3' />
          <line x1='397' y1='50.0625' x2='390' y2='50.0625' stroke='white' strokeWidth='3' />
          <rect
            x='1.5'
            y='-1.5'
            width='22'
            height='22'
            rx='4.5'
            transform='matrix(-1 0 0 1 419 3.5625)'
            stroke='white'
            strokeWidth='3'
          />
          <line x1='406.5' y1='22.5625' x2='406.5' y2='29.5625' stroke='white' strokeWidth='3' />
          <line x1='403' y1='13.0625' x2='390' y2='13.0625' stroke='white' strokeWidth='3' />
          <rect
            x='-1.5'
            y='1.5'
            width='22'
            height='22'
            rx='4.5'
            transform='matrix(1 0 0 -1 360 62.5625)'
            stroke='#FF6969'
            strokeWidth='3'
          />
          <line x1='369.5' y1='40.5625' x2='369.5' y2='33.5625' stroke='#FF6969' strokeWidth='3' />
          <line x1='373' y1='50.0625' x2='386' y2='50.0625' stroke='#FF6969' strokeWidth='3' />
          <rect x='532.5' y='2.0625' width='22' height='22' rx='4.5' stroke='white' strokeWidth='3' />
          <line x1='543.5' y1='17.5625' x2='543.5' y2='29.5625' stroke='white' strokeWidth='3' />
          <line x1='553' y1='13.0625' x2='560' y2='13.0625' stroke='white' strokeWidth='3' />
          <rect
            x='591.5'
            y='61.0625'
            width='22'
            height='22'
            rx='4.5'
            transform='rotate(180 591.5 61.0625)'
            stroke='#FF6969'
            strokeWidth='3'
          />
          <line x1='580.5' y1='45.5625' x2='580.5' y2='33.5625' stroke='#FF6969' strokeWidth='3' />
          <line x1='571' y1='50.0625' x2='564' y2='50.0625' stroke='#FF6969' strokeWidth='3' />
          <rect
            x='1.5'
            y='-1.5'
            width='22'
            height='22'
            rx='4.5'
            transform='matrix(-1 0 0 1 593 3.5625)'
            stroke='white'
            strokeWidth='3'
          />
          <line x1='580.5' y1='22.5625' x2='580.5' y2='29.5625' stroke='white' strokeWidth='3' />
          <line x1='577' y1='13.0625' x2='564' y2='13.0625' stroke='white' strokeWidth='3' />
          <rect
            x='-1.5'
            y='1.5'
            width='22'
            height='22'
            rx='4.5'
            transform='matrix(1 0 0 -1 534 62.5625)'
            stroke='white'
            strokeWidth='3'
          />
          <line x1='543.5' y1='40.5625' x2='543.5' y2='33.5625' stroke='white' strokeWidth='3' />
          <line x1='547' y1='50.0625' x2='560' y2='50.0625' stroke='white' strokeWidth='3' />
          <g filter='url(#filter1_d_1562_6881)'>
            <line
              x1='92'
              y1='32.5625'
              x2='162'
              y2='32.5625'
              stroke='url(#paint1_linear_1562_6881)'
              strokeWidth='2'
              shapeRendering='crispEdges'
            />
          </g>
          <g filter='url(#filter2_d_1562_6881)'>
            <line
              x1='266'
              y1='32.5625'
              x2='336'
              y2='32.5625'
              stroke='url(#paint2_linear_1562_6881)'
              strokeWidth='2'
              shapeRendering='crispEdges'
            />
          </g>
          <g filter='url(#filter3_d_1562_6881)'>
            <line
              x1='440'
              y1='32.5625'
              x2='510'
              y2='32.5625'
              stroke='url(#paint3_linear_1562_6881)'
              strokeWidth='2'
              shapeRendering='crispEdges'
            />
          </g>
          <defs>
            <filter
              id='filter0_d_1562_6881'
              x='0'
              y='72.1987'
              width='603'
              height='38.7275'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='6' />
              <feColorMatrix type='matrix' values='0 0 0 0 0.607843 0 0 0 0 0.6 0 0 0 0 1 0 0 0 0.4 0' />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1562_6881' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1562_6881' result='shape' />
            </filter>
            <filter
              id='filter1_d_1562_6881'
              x='80'
              y='19.5625'
              width='94'
              height='26'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='6' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0' />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1562_6881' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1562_6881' result='shape' />
            </filter>
            <filter
              id='filter2_d_1562_6881'
              x='254'
              y='19.5625'
              width='94'
              height='26'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='6' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0' />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1562_6881' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1562_6881' result='shape' />
            </filter>
            <filter
              id='filter3_d_1562_6881'
              x='428'
              y='19.5625'
              width='94'
              height='26'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='6' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0' />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1562_6881' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1562_6881' result='shape' />
            </filter>
            <linearGradient
              id='paint0_linear_1562_6881'
              x1='590'
              y1='92.5675'
              x2='12'
              y2='92.5675'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' />
              <stop offset='1' stopColor='white' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paint1_linear_1562_6881'
              x1='162'
              y1='33.5625'
              x2='92'
              y2='33.5625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' stopOpacity='0' />
              <stop offset='0.523256' stopColor='white' />
              <stop offset='1' stopColor='white' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paint2_linear_1562_6881'
              x1='336'
              y1='33.5625'
              x2='266'
              y2='33.5625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' stopOpacity='0' />
              <stop offset='0.523256' stopColor='white' />
              <stop offset='1' stopColor='white' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paint3_linear_1562_6881'
              x1='510'
              y1='33.5625'
              x2='440'
              y2='33.5625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' stopOpacity='0' />
              <stop offset='0.523256' stopColor='white' />
              <stop offset='1' stopColor='white' stopOpacity='0' />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: 'Network',
      text: 'Origo',
      bg: '#A6D0DD',
      svg: (
        <svg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='44.6427' cy='91.0714' r='5.07143' stroke='white' strokeWidth='3' />
          <path d='M44.6436 68.75V85.7143' stroke='white' strokeWidth='3' />
          <circle cx='44.6433' cy='10.7141' r='6.85714' stroke='white' strokeWidth='3' />
          <circle cx='89.2859' cy='39.2854' r='6.85714' stroke='white' strokeWidth='3' />
          <circle cx='10.7146' cy='87.4997' r='6.85714' stroke='white' strokeWidth='3' />
          <circle cx='14.2863' cy='35.714' r='5.07143' stroke='white' strokeWidth='3' />
          <path d='M44.6436 18.75V36.6071' stroke='white' strokeWidth='3' />
          <path d='M19.6436 39.2856L31.2507 47.3214' stroke='white' strokeWidth='3' />
          <path d='M83.9289 41.0713L61.6074 48.2141' stroke='white' strokeWidth='3' />
          <path d='M33.9284 63.3926L16.0713 82.1426' stroke='white' strokeWidth='3' />
          <circle cx='45.5364' cy='52.6785' r='14.8929' stroke='#FF6969' strokeWidth='3' />
        </svg>
      ),
    },
    {
      title: 'Hardware',
      text: 'Layer -1',
      bg: '#FFF3E5',
      dark: true,
      svg: (
        <svg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect x='16.3574' y='16.3569' width='67.2857' height='67.2857' rx='4.5' stroke='#162029' strokeWidth='3' />
          <rect x='32.4287' y='32.4287' width='35.1429' height='35.1429' rx='4.5' stroke='#FF6969' strokeWidth='3' />
          <line x1='24.7139' y1='-6.55671e-08' x2='24.7139' y2='17.8571' stroke='#162029' strokeWidth='3' />
          <line y1='27.0713' x2='17.8571' y2='27.0713' stroke='#162029' strokeWidth='3' />
          <line x1='82.1426' y1='27.0713' x2='99.9997' y2='27.0713' stroke='#162029' strokeWidth='3' />
          <line y1='43.1431' x2='17.8571' y2='43.1431' stroke='#162029' strokeWidth='3' />
          <line x1='30.3574' y1='46.7144' x2='48.2146' y2='46.7144' stroke='#FF6969' strokeWidth='3' />
          <line x1='82.1426' y1='43.1431' x2='99.9997' y2='43.1431' stroke='#162029' strokeWidth='3' />
          <line y1='59.2144' x2='17.8571' y2='59.2144' stroke='#162029' strokeWidth='3' />
          <line x1='51.7861' y1='55.6431' x2='69.6433' y2='55.6431' stroke='#FF6969' strokeWidth='3' />
          <line x1='82.1426' y1='59.2144' x2='99.9997' y2='59.2144' stroke='#162029' strokeWidth='3' />
          <line y1='75.2856' x2='17.8571' y2='75.2856' stroke='#162029' strokeWidth='3' />
          <line x1='82.1426' y1='75.2856' x2='99.9997' y2='75.2856' stroke='#162029' strokeWidth='3' />
          <line x1='24.7139' y1='82.1431' x2='24.7139' y2='100' stroke='#162029' strokeWidth='3' />
          <line x1='40.7861' y1='-6.55671e-08' x2='40.7861' y2='17.8571' stroke='#162029' strokeWidth='3' />
          <line x1='40.7861' y1='82.1431' x2='40.7861' y2='100' stroke='#162029' strokeWidth='3' />
          <line x1='56.8574' y1='-6.55671e-08' x2='56.8574' y2='17.8571' stroke='#162029' strokeWidth='3' />
          <line x1='56.8574' y1='82.1431' x2='56.8574' y2='100' stroke='#162029' strokeWidth='3' />
          <line x1='72.9287' y1='-6.55671e-08' x2='72.9287' y2='17.8571' stroke='#162029' strokeWidth='3' />
          <line x1='72.9287' y1='82.1431' x2='72.9287' y2='100' stroke='#162029' strokeWidth='3' />
        </svg>
      ),
    },
  ];

  // let scrollBlocker = true;
  let slideScrollDown = () => {
    if (activeSlide !== 4 && scrollBlocker) {
      setActiveSlide(0);
      dispatch({
        type: 'SET_MICHROSCHEME_ARRAY',
        microschemeArray: microSchemes[activeSlide],
      });
      setScrollBlocker(false);
      setTimeout(() => {
        setActiveSlide(activeSlide + 1);
      }, 100);
      setTimeout(() => {
        setScrollBlocker(true);
      }, 1000);
    }
  };
  let slideScrollUp = () => {
    if (activeSlide !== 1 && scrollBlocker) {
      setActiveSlide(0);
      dispatch({
        type: 'SET_MICHROSCHEME_ARRAY',
        microschemeArray: microSchemes[activeSlide - 2],
      });
      setScrollBlocker(false);
      setTimeout(() => {
        setActiveSlide(activeSlide - 1);
      }, 100);
      setTimeout(() => {
        setScrollBlocker(true);
      }, 1000);
    }
  };
  return (
    <>
      <ReactScrollWheelHandler upHandler={e => slideScrollUp()} downHandler={e => slideScrollDown()}>
        <div className={`${styles.mainSlider}`}>
          <div className={`container ${styles.mainSliderItem} ${activeSlide == 1 ? styles.mainSliderActive : ''}`}>
            <div className={`${styles.mainSliderItemNav}`}>
              <div onClick={() => swiperRefPromo.current?.slidePrev()}>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.08002'
                    stroke='#162029'
                    strokeWidth='2'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <div onClick={() => swiperRefPromo.current?.slideNext()}>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M9.00016 19.92L15.5202 13.4C16.2902 12.63 16.2902 11.37 15.5202 10.6L9.00016 4.08002'
                    stroke='#162029'
                    strokeWidth='2'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
            <div className={`${styles.mainSliderItemDescription} pT-180`}>
              <h1 className='font-90 ttl'>Technology</h1>
              <p className={`font-20 ${styles.mainSliderItemDescriptionTxt}`}>
                CATENA is a multi-chain PoS Network focused on Interoperability, Scalability and Usability. At its
                Catena, it utilizes an AI-enabled Proof of Stake algorithm, multi-layered consensus model and
                voting-based governance.
              </p>
              <div className={`${styles.mainSliderItemSwiper}`}>
                <Swiper
                  spaceBetween={0}
                  slidesPerView={4}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={swiper => console.log(swiper)}
                  modules={[Navigation]}
                  onBeforeInit={swiper => {
                    swiperRefPromo.current = swiper;
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  {technologyPromoSlider.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className={`${styles.mainSliderSwiperItem}`}>
                          <h2 className={`ttl font-40`}>
                            {item.svg ? item.svg : ''}
                            {item.title}
                          </h2>
                          <p>{item.text}</p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className={`${styles.scrollMore}`}>
                <div
                  onClick={() => {
                    slideScrollDown();
                  }}
                >
                  <p>Scroll</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`container ${styles.mainSliderItem} ${styles.mainSliderItemFlex} ${
              activeSlide == 2 ? styles.mainSliderActive : ''
            }`}
          >
            <div className={`${styles.mainSliderItemHalf} pT-180`}>
              <h1 className={`font-90 ttl ${styles.mainSliderSecondTtl}`}>
                Network <br />
                Structure
              </h1>
              <div className={`${styles.mainSliderItemNavOut}`}>
                <div className={`${styles.mainSliderItemNav}`}>
                  <div onClick={() => swiperRefNetwork.current?.slidePrev()}>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.08002'
                        stroke='#162029'
                        strokeWidth='2'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <div onClick={() => swiperRefNetwork.current?.slideNext()}>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M9.00016 19.92L15.5202 13.4C16.2902 12.63 16.2902 11.37 15.5202 10.6L9.00016 4.08002'
                        stroke='#162029'
                        strokeWidth='2'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.mainSliderItemHalf} ${styles.mainSliderItemHalfSliderSec} pT-180`}>
              <div className={`tech-second-slider ${styles.mainSliderItemSwiperSecond}`}>
                <Swiper
                  direction={'vertical'}
                  spaceBetween={0}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={swiper => console.log(swiper)}
                  modules={[Navigation]}
                  onBeforeInit={swiper => {
                    swiperRefNetwork.current = swiper;
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2.5,
                    },
                    1900: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {technologyNetworkSlider.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className={`${styles.mainSliderSwiperSecondItem}`}>
                          {item.svg ? item.svg : ''}
                          <h2 className={`ttl font-20`}>{item.title}</h2>
                          <p>{item.text}</p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
          <div
            className={`container ${styles.mainSliderItem} ${styles.mainSliderItemFlex} ${
              styles.mainSliderItemFlexReverse
            } ${activeSlide == 3 ? styles.mainSliderActive : ''}`}
          >
            <div className={`${styles.mainSliderItemHalf} pT-180`}>
              <h1 className={`font-90 ttl ${styles.mainSliderSecondTtl}`}>
                CATENA <br /> Layer
              </h1>
              <div className={`${styles.mainSliderItemNavOut}`}>
                <div className={`${styles.mainSliderItemNav} ${styles.mainSliderItemNavRotated}`}>
                  <div onClick={() => swiperRefLayers.current?.slidePrev()}>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.08002'
                        stroke='#162029'
                        strokeWidth='2'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <div onClick={() => swiperRefLayers.current?.slideNext()}>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M9.00016 19.92L15.5202 13.4C16.2902 12.63 16.2902 11.37 15.5202 10.6L9.00016 4.08002'
                        stroke='#162029'
                        strokeWidth='2'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.mainSliderItemHalf} ${styles.mainSliderItemHalfSliderCardContainer} ${styles.mainSliderItemHalfSliderSec} pT-180`}
            >
              <div className={`tech-second-slider ${styles.mainSliderItemHalfSliderCards}`}>
                <Swiper
                  direction={'vertical'}
                  spaceBetween={30}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={swiper => console.log(swiper)}
                  modules={[Navigation, FreeMode]}
                  freeMode={true}
                  onBeforeInit={swiper => {
                    swiperRefLayers.current = swiper;
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2.5,
                    },
                    1900: {
                      slidesPerView: 2.5,
                    },
                  }}
                >
                  {technologyLayersSlider.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className={`${styles.mainSliderLayerItem}`}>
                          <i style={{ background: `${item.bg}` }}></i>
                          <h2 className={`ttl font-20`} style={{ color: `${item.dark ? '#162029' : '#fff'}` }}>
                            {item.title}
                          </h2>
                          <p style={{ color: `${item.dark ? '#162029' : '#fff'}` }}>{item.text}</p>
                          {item.svg ? item.svg : ''}
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
          <div
            className={`container ${styles.mainSliderItem} ${styles.mainSliderItemFlex} ${
              activeSlide == 4 ? styles.mainSliderActive : ''
            }`}
          >
            <div className={`${styles.mainSliderItemHalf} pT-180`}>
              <h1 className={`font-90 ttl ${styles.mainSliderSecondTtl}`}>
                Consensus <br />
                Structure
              </h1>
              <div className={`${styles.mainSliderItemNavOut}`}>
                <div className={`${styles.mainSliderItemNav} ${styles.mainSliderItemNavRotated}`}>
                  <div onClick={() => swiperRefConsensus.current?.slidePrev()}>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.08002'
                        stroke='#162029'
                        strokeWidth='2'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <div onClick={() => swiperRefConsensus.current?.slideNext()}>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M9.00016 19.92L15.5202 13.4C16.2902 12.63 16.2902 11.37 15.5202 10.6L9.00016 4.08002'
                        stroke='#162029'
                        strokeWidth='2'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.mainSliderItemHalf} ${styles.mainSliderItemHalfSliderSec} pT-180`}>
              <div className={`tech-second-slider ${styles.mainSliderItemSwiperSecond}`}>
                <Swiper
                  direction={'vertical'}
                  spaceBetween={0}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={swiper => console.log(swiper)}
                  modules={[Navigation]}
                  onBeforeInit={swiper => {
                    swiperRefConsensus.current = swiper;
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2.5,
                    },
                    1900: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {technologyConsensusSlider.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className={`${styles.mainSliderSwiperSecondItem}`}>
                          {item.svg ? item.svg : ''}
                          <h2 className={`ttl font-20`}>{item.title}</h2>
                          <p>{item.text}</p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <Footer active={activeSlide == 4} />
      </ReactScrollWheelHandler>
    </>
  );
};

export default TechnologySlider;
