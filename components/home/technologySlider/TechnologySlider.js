import { React, useState, useEffect, useRef } from 'react';

import Footer from '../../layout/Footer';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import Microscheme from '../../UI/microscheme/Microscheme';

import styles from './TechnologySlider.module.css';

const TechnologySlider = () => {
    const [levels, setLevels] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);
    const swiperRef = useRef();
    useEffect(() => {
        setLevels([4,5,6,9,10,11,12]);
        // setLevels([7]);
        setActiveSlide(2)
    },[])
    let setLvl = array => {
        console.log(levels);
        if (levels.length > 0) {
            setLevels([]);
        } else {
            setLevels(array);
        }
    };
    let microSchemes = [
        [4,5,6,9,10,11,12],
        [5,6,11,12],
        [1,2,7,8],
        [4,5,6,11,12],
        [1,2,3,7,8],
        [1,2,3,7,8]
    ];
    const technologyPromoSlider = [
        {
            title: 'Catena',
            text: 'Catena is a combination of all the latest frameworks and advanced programming languages into one cutting-edge solution. ',
            svg: <svg width="45" height="30" viewBox="0 0 45 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M29.9995 29.9628C32.741 29.963 35.4301 29.2127 37.7747 27.7935C40.1192 26.3743 42.0295 24.3403 43.2979 21.9128C44.5663 19.4852 45.1443 16.7568 44.9692 14.0242C44.794 11.2915 43.8723 8.65903 42.3043 6.41285C40.7363 4.16667 38.582 2.39268 36.0754 1.28368C33.5688 0.174671 30.8058 -0.226941 28.0867 0.122485C25.3676 0.471911 22.7964 1.55901 20.6525 3.26565C18.5086 4.97228 16.874 7.23318 15.9263 9.80264C16.795 10.0582 17.5848 10.529 18.2224 11.1713C20.2964 12.318 23.4814 13.1688 26.5553 11.3933C27.1551 10.7193 27.9143 10.2061 28.7637 9.90041C29.6131 9.59476 30.5255 9.50639 31.4179 9.64338C32.3102 9.78037 33.154 10.1384 33.8723 10.6847C34.5906 11.231 35.1604 11.9483 35.5299 12.771C35.8994 13.5938 36.0568 14.4959 35.9877 15.395C35.9185 16.2941 35.6251 17.1616 35.1341 17.9184C34.6431 18.6751 33.9703 19.2971 33.1769 19.7274C32.3835 20.1578 31.4949 20.3828 30.592 20.3821C29.4196 20.377 28.2788 20.0015 27.333 19.3093C25.222 18.2736 21.4445 17.3118 17.741 19.2354C17.2021 19.6587 16.5857 19.9728 15.9263 20.1601C16.9868 23.0355 18.9046 25.517 21.421 27.2698C23.9375 29.0226 26.9316 29.9625 29.9995 29.9628Z" fill="#FF6969"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M29.0735 9.83986C27.8563 6.53954 25.5153 3.77218 22.4606 2.02252C19.406 0.272855 15.8324 -0.347566 12.3658 0.269927C8.89914 0.887421 5.76056 2.70346 3.49973 5.39995C1.23891 8.09644 0 11.5015 0 15.0186C0 18.5358 1.23891 21.9408 3.49973 24.6373C5.76056 27.3338 8.89914 29.1498 12.3658 29.7673C15.8324 30.3848 19.406 29.7644 22.4606 28.0147C25.5153 26.265 27.8563 23.4977 29.0735 20.1974C28.4422 20.0143 27.8515 19.713 27.3329 19.3096C25.2219 18.2738 21.4444 17.3121 17.7409 19.2356C16.7944 19.9884 15.6176 20.3933 14.4078 20.3823C13.6977 20.3823 12.9946 20.2426 12.3386 19.9712C11.6825 19.6998 11.0865 19.302 10.5844 18.8005C10.0823 18.299 9.68399 17.7036 9.41226 17.0484C9.14053 16.3931 9.00067 15.6909 9.00067 14.9816C9.00067 14.2724 9.14053 13.5701 9.41226 12.9149C9.68399 12.2596 10.0823 11.6643 10.5844 11.1628C11.0865 10.6613 11.6825 10.2634 12.3386 9.99203C12.9946 9.72062 13.6977 9.58093 14.4078 9.58093C15.118 9.57644 15.8218 9.71498 16.4772 9.98827C17.1326 10.2616 17.7261 10.664 18.2223 11.1715C20.2963 12.3183 23.4813 13.1691 26.5552 11.3935C27.2351 10.6535 28.1067 10.1158 29.0735 9.83986Z" fill="#A6D0DD"/>
                  </svg>
        },
        {
            title: 'Apeirogon',
            text: 'It is built on top of our in-house Apeirogon blockchain framework - a next-generation framework for enterprise-grade blockchain innovation that is highly compatible with Solidity, Simplicity, and CX. Apeirogon allows any development team to easily build a custom blockchain for their own use case with custom parameter settings such as token supply and token name. It also allows you to add customised protocols to your blockchain and can communicate with both public and private blockchains through its built-in public bridges. ',
            svg: <svg width="50" height="43" viewBox="0 0 50 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M49.4486 43L24.6664 0L0 42.8265C3.44116 41.4095 11.2488 39.5588 24.6664 39.5588C38.6335 39.5299 46.3544 41.5541 49.4486 43Z" fill="url(#paint0_linear_1420_728)"/>
                <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M49.3653 42.971L24.6699 9.62943L0.119141 42.7686C3.61813 41.3517 11.4258 39.5299 24.641 39.5299C38.4924 39.5299 46.2133 41.5252 49.3653 42.971Z" fill="url(#paint1_linear_1420_728)"/>
                <path opacity="0.7" fillRule="evenodd" clipRule="evenodd" d="M49.1322 42.8556L24.6682 19.2591L0.435547 42.6532C4.07912 41.2652 11.8 39.5302 24.6682 39.5302C38.1726 39.5302 45.8646 41.4387 49.1322 42.8556Z" fill="url(#paint2_linear_1420_728)"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M48.0321 42.4215L24.667 28.8882L1.67773 42.1902C5.69724 40.8889 13.1001 39.5009 24.667 39.5009C36.8412 39.5298 44.3018 41.0913 48.0321 42.4215Z" fill="url(#paint3_linear_1420_728)"/>
                <defs>
                    <linearGradient id="paint0_linear_1420_728" x1="24.7243" y1="0.00106994" x2="24.7243" y2="42.9989" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6AF6FF"/>
                        <stop offset="0.4844" stopColor="#5200FF"/>
                        <stop offset="1" stopColor="#220069" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_1420_728" x1="24.7463" y1="9.63671" x2="24.7463" y2="42.9572" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6AF6FF"/>
                        <stop offset="0.4844" stopColor="#5200FF"/>
                        <stop offset="1" stopColor="#220069" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_1420_728" x1="24.7822" y1="19.2727" x2="24.7822" y2="42.8579" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6AF6FF"/>
                        <stop offset="0.4844" stopColor="#5200FF"/>
                        <stop offset="1" stopColor="#220069" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_1420_728" x1="24.8594" y1="28.9081" x2="24.8594" y2="42.4278" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6AF6FF"/>
                        <stop offset="0.4844" stopColor="#5200FF"/>
                        <stop offset="1" stopColor="#220069" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>

        },
        {
            title: 'WebAssembly',
            text: 'Apeirogon is compiled to WebAssembly which is a super performant virtual environment that provides a way to run code written in multiple languages on the web at near native speed. WebAssembly is a fast, efficient, and safe binary instruction format for a stack-based virtual machine. It is a popular choice for the major web browser providers such as Google, Apple, Microsoft, and Mozilla, who all implement it in their web browsers.',
            svg: <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.8041 0C25.8041 0.0741498 25.8041 0.1483 25.8041 0.226352C25.8041 1.50359 25.2967 2.72852 24.3936 3.63166C23.4905 4.5348 22.2655 5.04219 20.9883 5.04219C19.7111 5.04219 18.4861 4.5348 17.583 3.63166C16.6798 2.72852 16.1725 1.50359 16.1725 0.226352C16.1725 0.1483 16.1725 0.0741498 16.1725 0H0V42H42V0H25.8041ZM20.0439 37.5042L17.9989 27.3847H17.9638L15.751 37.5042H12.9333L9.74094 22.6352H12.5235L14.428 32.7547H14.4631L16.7579 22.6352H19.3609L21.4215 32.8796H21.4566L23.6304 22.6352H26.3622L22.8147 37.5042H20.0439ZM35.3655 37.5042L34.4172 34.1948H29.4101L28.6804 37.5042H25.8978L29.496 22.6352H33.8864L38.2613 37.5042H35.3655Z" fill="#654FF0"></path>
                    <path d="M31.1688 26.2998L29.9551 31.7557H33.7328L32.3396 26.2998H31.1688Z" fill="#654FF0"></path>
                </svg>
        }
    ]
    const technologySecondSlider = [
        {
            title: 'Validators',
            text: 'Validators are nodes on the CATENA blockchain that validate, process, and attest transactions on the blockchain. Through its democratic consensus mechanism, validators are voted for by community members that have voting rights.',
            svg: <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="42.0002" cy="42" r="35.6071" stroke="#162029" stroke-opacity="0.3" stroke-width="2"/>
                    <circle cx="41.9999" cy="42" r="22.4286" stroke="#162029" stroke-opacity="0.3" stroke-width="2"/>
                    <circle cx="16.375" cy="15.6428" r="4.125" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <circle cx="16.375" cy="68.3572" r="4.125" fill="#FFF3E5" stroke="#FF6969" stroke-width="2"/>
                    <circle cx="67.625" cy="15.6428" r="4.125" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <circle cx="67.625" cy="68.3572" r="4.125" fill="#FFF3E5" stroke="#FF6969" stroke-width="2"/>
                    <circle cx="6.125" cy="42" r="4.125" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <circle cx="77.875" cy="42" r="4.125" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <circle cx="42" cy="6.125" r="4.125" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <circle cx="42" cy="77.875" r="4.125" fill="#FFF3E5" stroke="#FF6969" stroke-width="2"/>
                    <path d="M25.6985 30.8753C26.5519 32.9876 25.5314 35.3918 23.4191 36.2452C21.3068 37.0986 18.9026 36.0781 18.0492 33.9658C17.1958 31.8535 18.2163 29.4494 20.3286 28.5959C22.4409 27.7425 24.845 28.763 25.6985 30.8753Z" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <path d="M36.5197 61.2603C37.3732 63.3726 36.3527 65.7768 34.2404 66.6302C32.1281 67.4836 29.7239 66.4631 28.8705 64.3508C28.0171 62.2386 29.0376 59.8344 31.1499 58.981C33.2621 58.1275 35.6663 59.1481 36.5197 61.2603Z" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <path d="M55.1301 19.6491C55.9835 21.7614 54.963 24.1656 52.8507 25.019C50.7384 25.8724 48.3343 24.8519 47.4808 22.7396C46.6274 20.6274 47.6479 18.2232 49.7602 17.3698C51.8725 16.5163 54.2767 17.5368 55.1301 19.6491Z" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <circle cx="62.806" cy="51.3052" r="4.125" transform="rotate(-22 62.806 51.3052)" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M45.9996 48.9826C47.279 48.9827 48.5339 48.6326 49.6281 47.9703C50.7222 47.308 51.6136 46.3588 52.2056 45.226C52.7975 44.0931 53.0672 42.8199 52.9855 41.5446C52.9037 40.2694 52.4736 39.0409 51.7419 37.9927C51.0102 36.9444 50.0048 36.1166 48.835 35.599C47.6653 35.0815 46.3759 34.8941 45.107 35.0572C43.8381 35.2202 42.6382 35.7275 41.6377 36.524C40.6372 37.3204 39.8744 38.3755 39.4321 39.5746C39.8375 39.6938 40.2061 39.9135 40.5037 40.2133C41.4715 40.7484 42.9578 41.1455 44.3923 40.3169C44.6722 40.0023 45.0265 39.7628 45.4229 39.6202C45.8193 39.4776 46.2451 39.4363 46.6615 39.5002C47.078 39.5642 47.4717 39.7312 47.8069 39.9862C48.1421 40.2411 48.4081 40.5759 48.5805 40.9598C48.7529 41.3438 48.8264 41.7648 48.7941 42.1843C48.7618 42.6039 48.6249 43.0088 48.3958 43.3619C48.1667 43.7151 47.8527 44.0053 47.4824 44.2061C47.1122 44.407 46.6975 44.512 46.2762 44.5116C45.729 44.5093 45.1966 44.334 44.7553 44.011C43.7701 43.5277 42.0073 43.0789 40.279 43.9765C40.0275 44.174 39.7398 44.3206 39.4321 44.4081C39.927 45.7499 40.822 46.9079 41.9964 47.7259C43.1707 48.5439 44.5679 48.9825 45.9996 48.9826Z" fill="#FF6969"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M45.5676 39.5919C44.9996 38.0518 43.9071 36.7603 42.4816 35.9438C41.0561 35.1273 39.3884 34.8378 37.7707 35.1259C36.1529 35.4141 34.6883 36.2616 33.6332 37.52C32.5782 38.7783 32 40.3673 32 42.0087C32 43.65 32.5782 45.239 33.6332 46.4974C34.6883 47.7557 36.1529 48.6032 37.7707 48.8914C39.3884 49.1795 41.0561 48.89 42.4816 48.0735C43.9071 47.257 44.9996 45.9656 45.5676 44.4254C45.273 44.34 44.9974 44.1994 44.7554 44.0111C43.7702 43.5278 42.0074 43.0789 40.2791 43.9766C39.8374 44.3279 39.2882 44.5168 38.7236 44.5117C38.3923 44.5117 38.0641 44.4465 37.758 44.3199C37.4518 44.1932 37.1737 44.0076 36.9394 43.7735C36.7051 43.5395 36.5192 43.2617 36.3924 42.9559C36.2656 42.6501 36.2003 42.3224 36.2003 41.9914C36.2003 41.6604 36.2656 41.3327 36.3924 41.0269C36.5192 40.7211 36.7051 40.4433 36.9394 40.2093C37.1737 39.9752 37.4518 39.7896 37.758 39.6629C38.0641 39.5363 38.3923 39.4711 38.7236 39.4711C39.0551 39.469 39.3835 39.5336 39.6894 39.6612C39.9952 39.7887 40.2722 39.9765 40.5038 40.2134C41.4716 40.7485 42.9579 41.1455 44.3924 40.3169C44.7097 39.9716 45.1165 39.7207 45.5676 39.5919Z" fill="#A6D0DD"/>
                </svg>

        },

        {
            title: 'Observer',
            text: 'Observers add to the decentralization and validation of the chain and are either invited by other members in the chain or are members that believe in the project and want to earn rewards in the native token.',
            svg: <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="51" y1="42" x2="78" y2="42" stroke="#FF6969" stroke-width="2"/>
                    <line x1="6" y1="42" x2="32" y2="42" stroke="#FF6969" stroke-width="2"/>
                    <line x1="46.7071" y1="46.2929" x2="68.1627" y2="67.7488" stroke="#FF6969" stroke-width="2"/>
                    <line x1="17.251" y1="16.8371" x2="36.7071" y2="36.2929" stroke="#FF6969" stroke-width="2"/>
                    <line x1="15.8539" y1="67.7322" x2="37.31" y2="47.2762" stroke="#FF6969" stroke-width="2"/>
                    <line x1="48.2929" y1="35.2929" x2="66.7485" y2="16.8371" stroke="#FF6969" stroke-width="2"/>
                    <circle cx="42.0002" cy="42" r="35.6071" stroke="#162029" stroke-opacity="0.3" stroke-width="2"/>
                    <circle cx="41.9999" cy="42" r="22.4286" stroke="#162029" stroke-opacity="0.3" stroke-width="2"/>
                    <circle cx="16.375" cy="15.6428" r="4.125" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <circle cx="16.375" cy="68.3572" r="4.125" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <circle cx="67.625" cy="15.6428" r="4.125" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <circle cx="67.625" cy="68.3572" r="4.125" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <circle cx="6.125" cy="42" r="4.125" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <circle cx="77.875" cy="42" r="4.125" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <circle cx="42" cy="6.125" r="4.125" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <circle cx="42" cy="77.875" r="4.125" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <path d="M25.6985 30.8753C26.5519 32.9876 25.5314 35.3918 23.4191 36.2452C21.3068 37.0986 18.9026 36.0781 18.0492 33.9658C17.1958 31.8535 18.2163 29.4494 20.3286 28.5959C22.4409 27.7425 24.845 28.763 25.6985 30.8753Z" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <path d="M36.5197 61.2603C37.3732 63.3726 36.3527 65.7768 34.2404 66.6302C32.1281 67.4836 29.7239 66.4631 28.8705 64.3508C28.0171 62.2386 29.0376 59.8344 31.1499 58.981C33.2621 58.1275 35.6663 59.1481 36.5197 61.2603Z" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <path d="M55.1301 19.6491C55.9835 21.7614 54.963 24.1656 52.8507 25.019C50.7384 25.8724 48.3343 24.8519 47.4808 22.7396C46.6274 20.6274 47.6479 18.2232 49.7602 17.3698C51.8725 16.5163 54.2767 17.5368 55.1301 19.6491Z" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <circle cx="62.806" cy="51.3052" r="4.125" transform="rotate(-22 62.806 51.3052)" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M44.9996 47.9826C46.279 47.9827 47.5339 47.6326 48.6281 46.9703C49.7222 46.308 50.6136 45.3588 51.2056 44.226C51.7975 43.0931 52.0672 41.8199 51.9855 40.5446C51.9037 39.2694 51.4736 38.0409 50.7419 36.9927C50.0102 35.9444 49.0048 35.1166 47.835 34.599C46.6653 34.0815 45.3759 33.8941 44.107 34.0572C42.8381 34.2202 41.6382 34.7275 40.6377 35.524C39.6372 36.3204 38.8744 37.3755 38.4321 38.5746C38.8375 38.6938 39.2061 38.9135 39.5037 39.2133C40.4715 39.7484 41.9578 40.1455 43.3923 39.3169C43.6722 39.0023 44.0265 38.7628 44.4229 38.6202C44.8193 38.4776 45.2451 38.4363 45.6615 38.5002C46.078 38.5642 46.4717 38.7312 46.8069 38.9862C47.1421 39.2411 47.4081 39.5759 47.5805 39.9598C47.7529 40.3438 47.8264 40.7648 47.7941 41.1843C47.7618 41.6039 47.6249 42.0088 47.3958 42.3619C47.1667 42.7151 46.8527 43.0053 46.4824 43.2061C46.1122 43.407 45.6975 43.512 45.2762 43.5116C44.729 43.5093 44.1966 43.334 43.7553 43.011C42.7701 42.5277 41.0073 42.0789 39.279 42.9765C39.0275 43.174 38.7398 43.3206 38.4321 43.4081C38.927 44.7499 39.822 45.9079 40.9964 46.7259C42.1707 47.5439 43.5679 47.9825 44.9996 47.9826Z" fill="#FF6969"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M44.5676 38.5919C43.9996 37.0518 42.9071 35.7603 41.4816 34.9438C40.0561 34.1273 38.3884 33.8378 36.7707 34.1259C35.1529 34.4141 33.6883 35.2616 32.6332 36.52C31.5782 37.7783 31 39.3673 31 41.0087C31 42.65 31.5782 44.239 32.6332 45.4974C33.6883 46.7557 35.1529 47.6032 36.7707 47.8914C38.3884 48.1795 40.0561 47.89 41.4816 47.0735C42.9071 46.257 43.9996 44.9656 44.5676 43.4254C44.273 43.34 43.9974 43.1994 43.7554 43.0111C42.7702 42.5278 41.0074 42.0789 39.2791 42.9766C38.8374 43.3279 38.2882 43.5168 37.7236 43.5117C37.3923 43.5117 37.0641 43.4465 36.758 43.3199C36.4518 43.1932 36.1737 43.0076 35.9394 42.7735C35.7051 42.5395 35.5192 42.2617 35.3924 41.9559C35.2656 41.6501 35.2003 41.3224 35.2003 40.9914C35.2003 40.6604 35.2656 40.3327 35.3924 40.0269C35.5192 39.7211 35.7051 39.4433 35.9394 39.2093C36.1737 38.9752 36.4518 38.7896 36.758 38.6629C37.0641 38.5363 37.3923 38.4711 37.7236 38.4711C38.0551 38.469 38.3835 38.5336 38.6894 38.6612C38.9952 38.7887 39.2722 38.9765 39.5038 39.2134C40.4716 39.7485 41.9579 40.1455 43.3924 39.3169C43.7097 38.9716 44.1165 38.7207 44.5676 38.5919Z" fill="#A6D0DD"/>
                </svg>


        },
        {
            title: 'Defenders',
            text: 'A node type that attests to the validity of blocks as they are formed and before they are submitted to the chains. A Defender fishes out for any illegal blocks formed by malicious actors on the network, and are rewarded for their work.',
            svg: <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1424_5910)">
                    <path d="M41.7875 0.970459C50.9646 9.67151 61.7848 13.6919 75.6886 13.8216C75.6966 15.8919 75.7372 18.0294 75.7787 20.2158C75.9719 30.3845 76.1847 41.6115 73.2139 52.059C69.572 64.8639 61.1361 76.4843 41.7875 83.2589C22.44 76.4848 14.005 64.8643 10.3637 52.059C7.39308 41.6118 7.60616 30.385 7.79913 20.2165C7.84066 18.0298 7.88121 15.8921 7.88901 13.8216C21.792 13.6919 32.6114 9.67146 41.7875 0.970459Z" stroke="#A6D0DD" stroke-width="2"/>
                    <path d="M41.7272 62.2999C52.9386 62.2999 62.0272 53.2113 62.0272 42C62.0272 30.7886 52.9386 21.7 41.7272 21.7C30.5159 21.7 21.4272 30.7886 21.4272 42C21.4272 53.2113 30.5159 62.2999 41.7272 62.2999Z" stroke="#FF6969" stroke-width="2"/>
                    <path d="M32.0001 41.7279L39.0712 48.799L51.7991 36.0711" stroke="#A6D0DD" stroke-width="2" stroke-linecap="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_1424_5910">
                        <rect width="84" height="84" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        },
        {
            title: 'Nominators',
            text: 'Members who hold tokens on the chain that nominate staking members as validators for transactions. Nominators receive a part of the reward that their nominated validators receive for their work in successfully nominating validators.',
            svg: <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16L15 43.5L26.5 9.5" stroke="#162029" stroke-opacity="0.3" stroke-width="2"/>
                    <path d="M40 16L54 45.5L75 10" stroke="#162029" stroke-opacity="0.3" stroke-width="2"/>
                    <path d="M26 10L31.5 45L59 10" stroke="#162029" stroke-opacity="0.3" stroke-width="2"/>
                    <circle cx="9" cy="52" r="2" fill="#162029"/>
                    <circle cx="9" cy="46" r="2" fill="#162029"/>
                    <circle cx="9" cy="58" r="2" fill="#162029"/>
                    <circle cx="9" cy="64" r="2" fill="#162029"/>
                    <circle cx="9" cy="70" r="2" fill="#162029"/>
                    <circle cx="9" cy="76" r="2" fill="#162029"/>
                    <circle cx="9" cy="82" r="2" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 17 54)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 23 54)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 17 48)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 23 48)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 17 60)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 23 60)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 17 66)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 23 66)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 17 72)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 23 72)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 17 78)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 23 78)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 17 84)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 23 84)" fill="#162029"/>
                    <circle cx="3" cy="52" r="2" transform="rotate(-90 3 52)" fill="#162029"/>
                    <circle cx="3" cy="46" r="2" transform="rotate(-90 3 46)" fill="#162029"/>
                    <circle cx="3" cy="58" r="2" transform="rotate(-90 3 58)" fill="#162029"/>
                    <circle cx="3" cy="64" r="2" transform="rotate(-90 3 64)" fill="#162029"/>
                    <circle cx="3" cy="70" r="2" transform="rotate(-90 3 70)" fill="#162029"/>
                    <circle cx="3" cy="76" r="2" transform="rotate(-90 3 76)" fill="#162029"/>
                    <circle cx="3" cy="82" r="2" transform="rotate(-90 3 82)" fill="#162029"/>
                    <circle cx="54" cy="52" r="2" fill="#162029"/>
                    <circle cx="54" cy="46" r="2" fill="#162029"/>
                    <circle cx="54" cy="58" r="2" fill="#162029"/>
                    <circle cx="54" cy="64" r="2" fill="#162029"/>
                    <circle cx="54" cy="70" r="2" fill="#162029"/>
                    <circle cx="54" cy="76" r="2" fill="#162029"/>
                    <circle cx="54" cy="82" r="2" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 62 54)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 68 54)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 62 48)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 68 48)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 62 60)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 68 60)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 62 66)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 68 66)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 62 72)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 68 72)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 62 78)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 68 78)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 62 84)" fill="#162029"/>
                    <circle cx="2" cy="2" r="2" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 68 84)" fill="#162029"/>
                    <circle cx="48" cy="52" r="2" transform="rotate(-90 48 52)" fill="#162029"/>
                    <circle cx="48" cy="46" r="2" transform="rotate(-90 48 46)" fill="#162029"/>
                    <circle cx="48" cy="58" r="2" transform="rotate(-90 48 58)" fill="#162029"/>
                    <circle cx="48" cy="64" r="2" transform="rotate(-90 48 64)" fill="#162029"/>
                    <circle cx="48" cy="70" r="2" transform="rotate(-90 48 70)" fill="#162029"/>
                    <circle cx="48" cy="76" r="2" transform="rotate(-90 48 76)" fill="#162029"/>
                    <circle cx="48" cy="82" r="2" transform="rotate(-90 48 82)" fill="#162029"/>
                    <circle cx="37" cy="52" r="2" fill="#FF7152"/>
                    <circle cx="37" cy="46" r="2" fill="#FF7152"/>
                    <circle cx="37" cy="58" r="2" fill="#FF7152"/>
                    <circle cx="37" cy="64" r="2" fill="#FF7152"/>
                    <circle cx="37" cy="70" r="2" fill="#FF7152"/>
                    <circle cx="37" cy="76" r="2" fill="#FF7152"/>
                    <circle cx="37" cy="82" r="2" fill="#FF7152"/>
                    <circle cx="31" cy="52" r="2" transform="rotate(-90 31 52)" fill="#FF7152"/>
                    <circle cx="31" cy="46" r="2" transform="rotate(-90 31 46)" fill="#FF7152"/>
                    <circle cx="31" cy="58" r="2" transform="rotate(-90 31 58)" fill="#FF7152"/>
                    <circle cx="31" cy="64" r="2" transform="rotate(-90 31 64)" fill="#FF7152"/>
                    <circle cx="31" cy="70" r="2" transform="rotate(-90 31 70)" fill="#FF7152"/>
                    <circle cx="31" cy="76" r="2" transform="rotate(-90 31 76)" fill="#FF7152"/>
                    <circle cx="31" cy="82" r="2" transform="rotate(-90 31 82)" fill="#FF7152"/>
                    <circle cx="82" cy="52" r="2" fill="#FF7152"/>
                    <circle cx="82" cy="46" r="2" fill="#FF7152"/>
                    <circle cx="82" cy="58" r="2" fill="#FF7152"/>
                    <circle cx="82" cy="64" r="2" fill="#FF7152"/>
                    <circle cx="82" cy="70" r="2" fill="#FF7152"/>
                    <circle cx="82" cy="76" r="2" fill="#FF7152"/>
                    <circle cx="82" cy="82" r="2" fill="#FF7152"/>
                    <circle cx="76" cy="52" r="2" transform="rotate(-90 76 52)" fill="#FF7152"/>
                    <circle cx="76" cy="46" r="2" transform="rotate(-90 76 46)" fill="#FF7152"/>
                    <circle cx="76" cy="58" r="2" transform="rotate(-90 76 58)" fill="#FF7152"/>
                    <circle cx="76" cy="64" r="2" transform="rotate(-90 76 64)" fill="#FF7152"/>
                    <circle cx="76" cy="70" r="2" transform="rotate(-90 76 70)" fill="#FF7152"/>
                    <circle cx="76" cy="76" r="2" transform="rotate(-90 76 76)" fill="#FF7152"/>
                    <circle cx="76" cy="82" r="2" transform="rotate(-90 76 82)" fill="#FF7152"/>
                    <circle cx="10" cy="10" r="8" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <circle cx="42" cy="10" r="8" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <circle cx="58" cy="10" r="4" fill="#FFF3E5" stroke="#FF7152" stroke-width="2"/>
                    <circle cx="26" cy="10" r="4" fill="#FFF3E5" stroke="#FF7152" stroke-width="2"/>
                    <circle cx="74" cy="10" r="8" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                </svg>

        },
        {
            title: 'Collators',
            text: 'Collators each supervise a shard of the main chain. They are responsible for the integrity and validity of their shard, and communicate the state of their shard to the main chain.',
            svg: <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="42.0002" cy="42" r="35.6071" stroke="#162029" stroke-opacity="0.3" stroke-width="2"/>
                    <circle cx="41.9999" cy="42" r="22.4286" stroke="#162029" stroke-opacity="0.3" stroke-width="2"/>
                    <circle cx="16.375" cy="15.6428" r="4.125" fill="#FFF3E5" stroke="#FF6969" stroke-width="2"/>
                    <circle cx="16.375" cy="68.3572" r="4.125" fill="#FFF3E5" stroke="#FF6969" stroke-width="2"/>
                    <circle cx="67.625" cy="15.6428" r="4.125" fill="#FFF3E5" stroke="#FF6969" stroke-width="2"/>
                    <circle cx="67.625" cy="68.3572" r="4.125" fill="#FFF3E5" stroke="#FF6969" stroke-width="2"/>
                    <circle cx="6.125" cy="42" r="4.125" fill="#FFF3E5" stroke="#FF6969" stroke-width="2"/>
                    <circle cx="77.875" cy="42" r="4.125" fill="#FFF3E5" stroke="#FF6969" stroke-width="2"/>
                    <circle cx="42" cy="6.125" r="4.125" fill="#FFF3E5" stroke="#FF6969" stroke-width="2"/>
                    <circle cx="42" cy="77.875" r="4.125" fill="#FFF3E5" stroke="#FF6969" stroke-width="2"/>
                    <path d="M25.6985 30.8753C26.5519 32.9876 25.5314 35.3918 23.4191 36.2452C21.3068 37.0986 18.9026 36.0781 18.0492 33.9658C17.1958 31.8535 18.2163 29.4494 20.3286 28.5959C22.4409 27.7425 24.845 28.763 25.6985 30.8753Z" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <path d="M36.5197 61.2603C37.3732 63.3726 36.3527 65.7768 34.2404 66.6302C32.1281 67.4836 29.7239 66.4631 28.8705 64.3508C28.0171 62.2386 29.0376 59.8344 31.1499 58.981C33.2621 58.1275 35.6663 59.1481 36.5197 61.2603Z" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <path d="M55.1301 19.6491C55.9835 21.7614 54.963 24.1656 52.8507 25.019C50.7384 25.8724 48.3343 24.8519 47.4808 22.7396C46.6274 20.6274 47.6479 18.2232 49.7602 17.3698C51.8725 16.5163 54.2767 17.5368 55.1301 19.6491Z" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <circle cx="62.806" cy="51.3052" r="4.125" transform="rotate(-22 62.806 51.3052)" fill="#FFF3E5" stroke="#A6D0DD" stroke-width="2"/>
                    <g clip-path="url(#clip0_1488_9861)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M45.9996 48.9826C47.279 48.9827 48.5339 48.6326 49.6281 47.9703C50.7222 47.308 51.6136 46.3588 52.2056 45.226C52.7975 44.0931 53.0672 42.8199 52.9855 41.5446C52.9037 40.2694 52.4736 39.0409 51.7419 37.9927C51.0102 36.9444 50.0048 36.1166 48.835 35.599C47.6653 35.0815 46.3759 34.8941 45.107 35.0572C43.8381 35.2202 42.6382 35.7275 41.6377 36.524C40.6372 37.3204 39.8744 38.3755 39.4321 39.5746C39.8375 39.6938 40.2061 39.9135 40.5037 40.2133C41.4715 40.7484 42.9578 41.1455 44.3923 40.3169C44.6722 40.0023 45.0265 39.7628 45.4229 39.6202C45.8193 39.4776 46.2451 39.4363 46.6615 39.5002C47.078 39.5642 47.4717 39.7312 47.8069 39.9862C48.1421 40.2411 48.4081 40.5759 48.5805 40.9598C48.7529 41.3438 48.8264 41.7648 48.7941 42.1843C48.7618 42.6039 48.6249 43.0088 48.3958 43.3619C48.1667 43.7151 47.8527 44.0053 47.4824 44.2061C47.1122 44.407 46.6975 44.512 46.2762 44.5116C45.729 44.5093 45.1966 44.334 44.7553 44.011C43.7701 43.5277 42.0073 43.0789 40.279 43.9765C40.0275 44.174 39.7398 44.3206 39.4321 44.4081C39.927 45.7499 40.822 46.9079 41.9964 47.7259C43.1707 48.5439 44.5679 48.9825 45.9996 48.9826Z" fill="#FF6969"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M45.5676 39.5919C44.9996 38.0518 43.9071 36.7603 42.4816 35.9438C41.0561 35.1273 39.3884 34.8378 37.7707 35.1259C36.1529 35.4141 34.6883 36.2616 33.6332 37.52C32.5782 38.7783 32 40.3673 32 42.0087C32 43.65 32.5782 45.239 33.6332 46.4974C34.6883 47.7557 36.1529 48.6032 37.7707 48.8914C39.3884 49.1795 41.0561 48.89 42.4816 48.0735C43.9071 47.257 44.9996 45.9656 45.5676 44.4254C45.273 44.34 44.9974 44.1994 44.7554 44.0111C43.7702 43.5278 42.0074 43.0789 40.2791 43.9766C39.8374 44.3279 39.2882 44.5168 38.7236 44.5117C38.3923 44.5117 38.0641 44.4465 37.758 44.3199C37.4518 44.1932 37.1737 44.0076 36.9394 43.7735C36.7051 43.5395 36.5192 43.2617 36.3924 42.9559C36.2656 42.6501 36.2003 42.3224 36.2003 41.9914C36.2003 41.6604 36.2656 41.3327 36.3924 41.0269C36.5192 40.7211 36.7051 40.4433 36.9394 40.2093C37.1737 39.9752 37.4518 39.7896 37.758 39.6629C38.0641 39.5363 38.3923 39.4711 38.7236 39.4711C39.0551 39.469 39.3835 39.5336 39.6894 39.6612C39.9952 39.7887 40.2722 39.9765 40.5038 40.2134C41.4716 40.7485 42.9579 41.1455 44.3924 40.3169C44.7097 39.9716 45.1165 39.7207 45.5676 39.5919Z" fill="#A6D0DD"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1488_9861">
                            <rect width="23.4286" height="23.4286" fill="white" transform="translate(30.2856 30.2858)"/>
                        </clipPath>
                    </defs>
                </svg>

        }
    ]

    let scrollBlocker = true;
    let slideScrollDown = () => {
        if(activeSlide !== 2 && scrollBlocker) {
            setActiveSlide(0);
            setLevels(microSchemes[activeSlide])
            scrollBlocker = false;
            setTimeout(() => {
                setActiveSlide(activeSlide + 1);
                scrollBlocker = true;
            },300);
        }
    }
    let slideScrollUp = () => {
        if(activeSlide !== 1 && scrollBlocker) {
            setActiveSlide(0);
            setLevels(microSchemes[activeSlide - 2])
            scrollBlocker = false;
            setTimeout(() => {
                setActiveSlide(activeSlide - 1);
                scrollBlocker = true;
            },300);
        }
    }
    return (
        <>
            {true && <Microscheme lvl={levels} />}
            {/*${styles.mainSliderActive}*/}
            <ReactScrollWheelHandler
                upHandler={(e) => slideScrollUp()}
                downHandler={(e) => slideScrollDown()}
            >
                <div className={`${styles.mainSlider}`}>
                    <div className={`container ${styles.mainSliderItem} ${activeSlide == 1 ? styles.mainSliderActive : ''}`}>
                        <div className={`${styles.mainSliderItemNav}`}>
                            <div onClick={() => swiperRef.current?.slidePrev()}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.08002" stroke="#162029" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div onClick={() => swiperRef.current?.slideNext()}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.00016 19.92L15.5202 13.4C16.2902 12.63 16.2902 11.37 15.5202 10.6L9.00016 4.08002" stroke="#162029" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className={`${styles.mainSliderItemDescription} pT-180`}>
                            <h1 className='font-90 ttl'>
                                Technology
                            </h1>
                            <p className={`font-20 ${styles.mainSliderItemDescriptionTxt}`}>CATENA is a multi-chain PoS Network focused on Interoperability, Scalability and Usability. At its Catena, it utilizes an AI-enabled Proof of Stake algorithm, multi-layered consensus model and voting-based governance.</p>
                            <div className={`${styles.mainSliderItemSwiper}`}>
                                <Swiper
                                    spaceBetween={0}
                                    slidesPerView={4}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    modules={[Navigation]}
                                    onBeforeInit={(swiper) => {
                                        swiperRef.current = swiper;
                                    }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        }
                                    }}
                                >
                                    {technologyPromoSlider.map((item,index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className={`${styles.mainSliderSwiperItem}`}>
                                                    <h2 className={`ttl font-40`}>{item.svg ? item.svg : ''}{item.title}</h2>
                                                    <p>{item.text}</p>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}

                                </Swiper>
                            </div>
                            <div className={`${styles.scrollMore}`}>
                                <div onClick={() => {slideScrollDown()}}>
                                    <p>Scroll</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`container ${styles.mainSliderItem} ${styles.mainSliderItemFlex} ${activeSlide == 2? styles.mainSliderActive : ''}`}>
                        <div className={`${styles.mainSliderItemHalf} pT-180`}>
                            <h1 className={`font-90 ttl ${styles.mainSliderSecondTtl}`}>
                                Consensus <br/>
                                Structure
                            </h1>
                        </div>
                        <div className={`${styles.mainSliderItemHalf} ${styles.mainSliderItemHalfSliderSec} pT-180`}>
                            <div className={`tech-second-slider ${styles.mainSliderItemSwiperSecond}`}>
                                <div className={`${styles.mainSliderItemNav} ${styles.mainSliderItemNavRotated}`}>
                                    <div onClick={() => swiperRef.current?.slidePrev()}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.9998 19.92L8.47984 13.4C7.70984 12.63 7.70984 11.37 8.47984 10.6L14.9998 4.08002" stroke="#162029" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div onClick={() => swiperRef.current?.slideNext()}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.00016 19.92L15.5202 13.4C16.2902 12.63 16.2902 11.37 15.5202 10.6L9.00016 4.08002" stroke="#162029" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                <Swiper
                                    direction={'vertical'}
                                    spaceBetween={0}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    modules={[Navigation]}
                                    onBeforeInit={(swiper) => {
                                        swiperRef.current = swiper;
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
                                        }
                                    }}
                                >
                                    {technologySecondSlider.map((item,index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className={`${styles.mainSliderSwiperSecondItem}`}>
                                                    {item.svg ? item.svg : ''}
                                                    <h2 className={`ttl font-20`}>{item.title}</h2>
                                                    <p>{item.text}</p>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer
                    active={activeSlide == 2}
                />
            </ReactScrollWheelHandler>
        </>
    );
};

export default TechnologySlider;
