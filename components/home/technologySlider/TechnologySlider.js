import { React, useState, useEffect } from 'react';

import Footer from '../../layout/Footer';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Microscheme from '../../UI/microscheme/Microscheme';

import styles from './TechnologySlider.module.css';

const TechnologySlider = () => {
    const [levels, setLevels] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);
    useEffect(() => {
        setLevels([4,5,6,9,10,11,12]);
        // setLevels([7]);
        setActiveSlide(1)
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
            svg: `<svg width="45" height="30" viewBox="0 0 45 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M29.9995 29.9628C32.741 29.963 35.4301 29.2127 37.7747 27.7935C40.1192 26.3743 42.0295 24.3403 43.2979 21.9128C44.5663 19.4852 45.1443 16.7568 44.9692 14.0242C44.794 11.2915 43.8723 8.65903 42.3043 6.41285C40.7363 4.16667 38.582 2.39268 36.0754 1.28368C33.5688 0.174671 30.8058 -0.226941 28.0867 0.122485C25.3676 0.471911 22.7964 1.55901 20.6525 3.26565C18.5086 4.97228 16.874 7.23318 15.9263 9.80264C16.795 10.0582 17.5848 10.529 18.2224 11.1713C20.2964 12.318 23.4814 13.1688 26.5553 11.3933C27.1551 10.7193 27.9143 10.2061 28.7637 9.90041C29.6131 9.59476 30.5255 9.50639 31.4179 9.64338C32.3102 9.78037 33.154 10.1384 33.8723 10.6847C34.5906 11.231 35.1604 11.9483 35.5299 12.771C35.8994 13.5938 36.0568 14.4959 35.9877 15.395C35.9185 16.2941 35.6251 17.1616 35.1341 17.9184C34.6431 18.6751 33.9703 19.2971 33.1769 19.7274C32.3835 20.1578 31.4949 20.3828 30.592 20.3821C29.4196 20.377 28.2788 20.0015 27.333 19.3093C25.222 18.2736 21.4445 17.3118 17.741 19.2354C17.2021 19.6587 16.5857 19.9728 15.9263 20.1601C16.9868 23.0355 18.9046 25.517 21.421 27.2698C23.9375 29.0226 26.9316 29.9625 29.9995 29.9628Z" fill="#FF6969"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M29.0735 9.83986C27.8563 6.53954 25.5153 3.77218 22.4606 2.02252C19.406 0.272855 15.8324 -0.347566 12.3658 0.269927C8.89914 0.887421 5.76056 2.70346 3.49973 5.39995C1.23891 8.09644 0 11.5015 0 15.0186C0 18.5358 1.23891 21.9408 3.49973 24.6373C5.76056 27.3338 8.89914 29.1498 12.3658 29.7673C15.8324 30.3848 19.406 29.7644 22.4606 28.0147C25.5153 26.265 27.8563 23.4977 29.0735 20.1974C28.4422 20.0143 27.8515 19.713 27.3329 19.3096C25.2219 18.2738 21.4444 17.3121 17.7409 19.2356C16.7944 19.9884 15.6176 20.3933 14.4078 20.3823C13.6977 20.3823 12.9946 20.2426 12.3386 19.9712C11.6825 19.6998 11.0865 19.302 10.5844 18.8005C10.0823 18.299 9.68399 17.7036 9.41226 17.0484C9.14053 16.3931 9.00067 15.6909 9.00067 14.9816C9.00067 14.2724 9.14053 13.5701 9.41226 12.9149C9.68399 12.2596 10.0823 11.6643 10.5844 11.1628C11.0865 10.6613 11.6825 10.2634 12.3386 9.99203C12.9946 9.72062 13.6977 9.58093 14.4078 9.58093C15.118 9.57644 15.8218 9.71498 16.4772 9.98827C17.1326 10.2616 17.7261 10.664 18.2223 11.1715C20.2963 12.3183 23.4813 13.1691 26.5552 11.3935C27.2351 10.6535 28.1067 10.1158 29.0735 9.83986Z" fill="#A6D0DD"/>
                  </svg>`
        },
        {
            title: 'Apeirogon',
            text: 'It is built on top of our in-house Apeirogon blockchain framework - a next-generation framework for enterprise-grade blockchain innovation that is highly compatible with Solidity, Simplicity, and CX. Apeirogon allows any development team to easily build a custom blockchain for their own use case with custom parameter settings such as token supply and token name. It also allows you to add customised protocols to your blockchain and can communicate with both public and private blockchains through its built-in public bridges. ',
            svg: `<svg width="45" height="30" viewBox="0 0 45 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M29.9995 29.9628C32.741 29.963 35.4301 29.2127 37.7747 27.7935C40.1192 26.3743 42.0295 24.3403 43.2979 21.9128C44.5663 19.4852 45.1443 16.7568 44.9692 14.0242C44.794 11.2915 43.8723 8.65903 42.3043 6.41285C40.7363 4.16667 38.582 2.39268 36.0754 1.28368C33.5688 0.174671 30.8058 -0.226941 28.0867 0.122485C25.3676 0.471911 22.7964 1.55901 20.6525 3.26565C18.5086 4.97228 16.874 7.23318 15.9263 9.80264C16.795 10.0582 17.5848 10.529 18.2224 11.1713C20.2964 12.318 23.4814 13.1688 26.5553 11.3933C27.1551 10.7193 27.9143 10.2061 28.7637 9.90041C29.6131 9.59476 30.5255 9.50639 31.4179 9.64338C32.3102 9.78037 33.154 10.1384 33.8723 10.6847C34.5906 11.231 35.1604 11.9483 35.5299 12.771C35.8994 13.5938 36.0568 14.4959 35.9877 15.395C35.9185 16.2941 35.6251 17.1616 35.1341 17.9184C34.6431 18.6751 33.9703 19.2971 33.1769 19.7274C32.3835 20.1578 31.4949 20.3828 30.592 20.3821C29.4196 20.377 28.2788 20.0015 27.333 19.3093C25.222 18.2736 21.4445 17.3118 17.741 19.2354C17.2021 19.6587 16.5857 19.9728 15.9263 20.1601C16.9868 23.0355 18.9046 25.517 21.421 27.2698C23.9375 29.0226 26.9316 29.9625 29.9995 29.9628Z" fill="#FF6969"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M29.0735 9.83986C27.8563 6.53954 25.5153 3.77218 22.4606 2.02252C19.406 0.272855 15.8324 -0.347566 12.3658 0.269927C8.89914 0.887421 5.76056 2.70346 3.49973 5.39995C1.23891 8.09644 0 11.5015 0 15.0186C0 18.5358 1.23891 21.9408 3.49973 24.6373C5.76056 27.3338 8.89914 29.1498 12.3658 29.7673C15.8324 30.3848 19.406 29.7644 22.4606 28.0147C25.5153 26.265 27.8563 23.4977 29.0735 20.1974C28.4422 20.0143 27.8515 19.713 27.3329 19.3096C25.2219 18.2738 21.4444 17.3121 17.7409 19.2356C16.7944 19.9884 15.6176 20.3933 14.4078 20.3823C13.6977 20.3823 12.9946 20.2426 12.3386 19.9712C11.6825 19.6998 11.0865 19.302 10.5844 18.8005C10.0823 18.299 9.68399 17.7036 9.41226 17.0484C9.14053 16.3931 9.00067 15.6909 9.00067 14.9816C9.00067 14.2724 9.14053 13.5701 9.41226 12.9149C9.68399 12.2596 10.0823 11.6643 10.5844 11.1628C11.0865 10.6613 11.6825 10.2634 12.3386 9.99203C12.9946 9.72062 13.6977 9.58093 14.4078 9.58093C15.118 9.57644 15.8218 9.71498 16.4772 9.98827C17.1326 10.2616 17.7261 10.664 18.2223 11.1715C20.2963 12.3183 23.4813 13.1691 26.5552 11.3935C27.2351 10.6535 28.1067 10.1158 29.0735 9.83986Z" fill="#A6D0DD"/>
                  </svg>`
        },
        {
            title: 'Apeirogon',
            text: 'It is built on top of our in-house Apeirogon blockchain framework - a next-generation framework for enterprise-grade blockchain innovation that is highly compatible with Solidity, Simplicity, and CX. Apeirogon allows any development team to easily build a custom blockchain for their own use case with custom parameter settings such as token supply and token name. It also allows you to add customised protocols to your blockchain and can communicate with both public and private blockchains through its built-in public bridges. ',
            svg: `<svg width="45" height="30" viewBox="0 0 45 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M29.9995 29.9628C32.741 29.963 35.4301 29.2127 37.7747 27.7935C40.1192 26.3743 42.0295 24.3403 43.2979 21.9128C44.5663 19.4852 45.1443 16.7568 44.9692 14.0242C44.794 11.2915 43.8723 8.65903 42.3043 6.41285C40.7363 4.16667 38.582 2.39268 36.0754 1.28368C33.5688 0.174671 30.8058 -0.226941 28.0867 0.122485C25.3676 0.471911 22.7964 1.55901 20.6525 3.26565C18.5086 4.97228 16.874 7.23318 15.9263 9.80264C16.795 10.0582 17.5848 10.529 18.2224 11.1713C20.2964 12.318 23.4814 13.1688 26.5553 11.3933C27.1551 10.7193 27.9143 10.2061 28.7637 9.90041C29.6131 9.59476 30.5255 9.50639 31.4179 9.64338C32.3102 9.78037 33.154 10.1384 33.8723 10.6847C34.5906 11.231 35.1604 11.9483 35.5299 12.771C35.8994 13.5938 36.0568 14.4959 35.9877 15.395C35.9185 16.2941 35.6251 17.1616 35.1341 17.9184C34.6431 18.6751 33.9703 19.2971 33.1769 19.7274C32.3835 20.1578 31.4949 20.3828 30.592 20.3821C29.4196 20.377 28.2788 20.0015 27.333 19.3093C25.222 18.2736 21.4445 17.3118 17.741 19.2354C17.2021 19.6587 16.5857 19.9728 15.9263 20.1601C16.9868 23.0355 18.9046 25.517 21.421 27.2698C23.9375 29.0226 26.9316 29.9625 29.9995 29.9628Z" fill="#FF6969"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M29.0735 9.83986C27.8563 6.53954 25.5153 3.77218 22.4606 2.02252C19.406 0.272855 15.8324 -0.347566 12.3658 0.269927C8.89914 0.887421 5.76056 2.70346 3.49973 5.39995C1.23891 8.09644 0 11.5015 0 15.0186C0 18.5358 1.23891 21.9408 3.49973 24.6373C5.76056 27.3338 8.89914 29.1498 12.3658 29.7673C15.8324 30.3848 19.406 29.7644 22.4606 28.0147C25.5153 26.265 27.8563 23.4977 29.0735 20.1974C28.4422 20.0143 27.8515 19.713 27.3329 19.3096C25.2219 18.2738 21.4444 17.3121 17.7409 19.2356C16.7944 19.9884 15.6176 20.3933 14.4078 20.3823C13.6977 20.3823 12.9946 20.2426 12.3386 19.9712C11.6825 19.6998 11.0865 19.302 10.5844 18.8005C10.0823 18.299 9.68399 17.7036 9.41226 17.0484C9.14053 16.3931 9.00067 15.6909 9.00067 14.9816C9.00067 14.2724 9.14053 13.5701 9.41226 12.9149C9.68399 12.2596 10.0823 11.6643 10.5844 11.1628C11.0865 10.6613 11.6825 10.2634 12.3386 9.99203C12.9946 9.72062 13.6977 9.58093 14.4078 9.58093C15.118 9.57644 15.8218 9.71498 16.4772 9.98827C17.1326 10.2616 17.7261 10.664 18.2223 11.1715C20.2963 12.3183 23.4813 13.1691 26.5552 11.3935C27.2351 10.6535 28.1067 10.1158 29.0735 9.83986Z" fill="#A6D0DD"/>
                  </svg>`
        }
    ]
    let scrollBlocker = true;
    let slideScrollDown = () => {
        if(activeSlide !== 5 && scrollBlocker) {
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
                        <div className={styles.mainSliderItemDescription}>
                            <h1 className='font-90 ttl'>
                                Technology
                            </h1>
                            <p className={`font-20 ${styles.mainSliderItemDescriptionTxt}`}>CATENA is a multi-chain PoS Network focused on Interoperability, Scalability and Usability. At its Catena, it utilizes an AI-enabled Proof of Stake algorithm, multi-layered consensus model and voting-based governance.</p>
                            <div className={`${styles.mainSliderItemSwiper}`}>
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={2.5}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>Slide 1</SwiperSlide>
                                    <SwiperSlide>Slide 2</SwiperSlide>
                                    <SwiperSlide>Slide 3</SwiperSlide>
                                    <SwiperSlide>Slide 4</SwiperSlide>
                                </Swiper>
                            </div>
                            <div className={`${styles.scrollMore}`}>
                                <div onClick={() => {slideScrollDown()}}>
                                    <p>Scroll</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`container ${styles.mainSliderItem} ${activeSlide == 2 ? styles.mainSliderActive : ''}`}>
                        <div className={styles.mainSliderItemHalf}>
                            <div className={styles.mainSliderItemTask}>
                                <div className={styles.mainSliderItemTaskTxt}>Task 1</div>
                                <svg width="67" height="37" viewBox="0 0 67 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 36.5V29.5H10.5V36.5H7.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M15.5 36.5V29.5H18.5V36.5H15.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M23.5 36.5V29.5H26.5V36.5H23.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M31.5 36.5V29.5H34.5V36.5H31.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M39.5 36.5V29.5H42.5V36.5H39.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M47.5 36.5V29.5H50.5V36.5H47.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M55.5 36.5V29.5H58.5V36.5H55.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M7.5 7.5V0.5H10.5V7.5H7.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M15.5 7.5V0.5H18.5V7.5H15.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M23.5 7.5V0.5H26.5V7.5H23.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M31.5 7.5V0.5H34.5V7.5H31.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M39.5 7.5V0.5H42.5V7.5H39.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M47.5 7.5V0.5H50.5V7.5H47.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M55.5 7.5V0.5H58.5V7.5H55.5Z" fill="#162029" stroke="#162029"/>
                                    <rect x="0.5" y="7.5" width="66" height="22" rx="3.5" fill="#162029"/>
                                    <rect x="0.5" y="7.5" width="66" height="22" rx="3.5" stroke="#162029"/>
                                </svg>
                            </div>
                            <h2 className={`font-90 ttl`}>Scalability</h2>
                            <p className={`${styles.mainSliderItemHalfDesc1}`}>This is one of the main reasons that blockchain technology cannot be used on a mass-adoption scale yet. Low throughput and its environmental impact are the biggest obstacles that blockchain has to overcome in order to scale.</p>
                            <div className={styles.mainSliderItemSolution}>
                                <div className={styles.mainSliderItemSolutionTxt}>Solution</div>
                                <svg width="111" height="43" viewBox="0 0 111 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 42.5V35.5H8.5V42.5H5.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M13.5 42.5V35.5H16.5V42.5H13.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M21.5 42.5V35.5H24.5V42.5H21.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M29.5 42.5V35.5H32.5V42.5H29.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M37.5 42.5V35.5H40.5V42.5H37.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M45.5 42.5V35.5H48.5V42.5H45.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M53.5 42.5V35.5H56.5V42.5H53.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M61.5 42.5V35.5H64.5V42.5H61.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M69.5 42.5V35.5H72.5V42.5H69.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M77.5 42.5V35.5H80.5V42.5H77.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M85.5 42.5V35.5H88.5V42.5H85.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M93.5 42.5V35.5H96.5V42.5H93.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M101.5 42.5V35.5H104.5V42.5H101.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M5.5 7.5V0.5H8.5V7.5H5.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M13.5 7.5V0.5H16.5V7.5H13.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M21.5 7.5V0.5H24.5V7.5H21.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M29.5 7.5V0.5H32.5V7.5H29.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M37.5 7.5V0.5H40.5V7.5H37.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M45.5 7.5V0.5H48.5V7.5H45.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M53.5 7.5V0.5H56.5V7.5H53.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M61.5 7.5V0.5H64.5V7.5H61.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M69.5 7.5V0.5H72.5V7.5H69.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M77.5 7.5V0.5H80.5V7.5H77.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M85.5 7.5V0.5H88.5V7.5H85.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M93.5 7.5V0.5H96.5V7.5H93.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M101.5 7.5V0.5H104.5V7.5H101.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <rect x="0.5" y="7.5" width="110" height="28" rx="3.5" fill="#A6D0DD"/>
                                    <rect x="0.5" y="7.5" width="110" height="28" rx="3.5" stroke="#162029"/>
                                </svg>
                            </div>
                            <p className={`font-20 ${styles.mainSliderItemHalfDesc2}`}>
                                We combine the use of AI based PoS consensus, a scalable and secure parallel protocol for distributed ledger via sharding, side chains, and off-chain processing. These techniques allow for acceleration of block broadcasting in blockchain networks and scaling out through asynchronous consensus zones.
                            </p>
                        </div>
                    </div>
                    <div className={`container ${styles.mainSliderItem} ${styles.mainSliderItemReverse} ${activeSlide == 3 ? styles.mainSliderActive : ''}`}>
                        <div className={styles.mainSliderItemHalf}>
                            <div className={styles.mainSliderItemTask}>
                                <div className={styles.mainSliderItemTaskTxt}>Task 2</div>
                                <svg width="67" height="37" viewBox="0 0 67 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 36.5V29.5H10.5V36.5H7.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M15.5 36.5V29.5H18.5V36.5H15.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M23.5 36.5V29.5H26.5V36.5H23.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M31.5 36.5V29.5H34.5V36.5H31.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M39.5 36.5V29.5H42.5V36.5H39.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M47.5 36.5V29.5H50.5V36.5H47.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M55.5 36.5V29.5H58.5V36.5H55.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M7.5 7.5V0.5H10.5V7.5H7.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M15.5 7.5V0.5H18.5V7.5H15.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M23.5 7.5V0.5H26.5V7.5H23.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M31.5 7.5V0.5H34.5V7.5H31.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M39.5 7.5V0.5H42.5V7.5H39.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M47.5 7.5V0.5H50.5V7.5H47.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M55.5 7.5V0.5H58.5V7.5H55.5Z" fill="#162029" stroke="#162029"/>
                                    <rect x="0.5" y="7.5" width="66" height="22" rx="3.5" fill="#162029"/>
                                    <rect x="0.5" y="7.5" width="66" height="22" rx="3.5" stroke="#162029"/>
                                </svg>
                            </div>
                            <h2 className={`font-90 ttl`}>Usability</h2>
                            <p className={`${styles.mainSliderItemHalfDesc1}`}>Rapid innovation is taking place in the blockchain sector. However, this innovation is taking place in the backend of blockchains and not in the ease of use for the client when using the front end. Complex technology needs to be easy to use for the ordinary individual, which blockchain is not yet.</p>
                            <div className={styles.mainSliderItemSolution}>
                                <div className={styles.mainSliderItemSolutionTxt}>Solution</div>
                                <svg width="111" height="43" viewBox="0 0 111 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 42.5V35.5H8.5V42.5H5.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M13.5 42.5V35.5H16.5V42.5H13.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M21.5 42.5V35.5H24.5V42.5H21.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M29.5 42.5V35.5H32.5V42.5H29.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M37.5 42.5V35.5H40.5V42.5H37.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M45.5 42.5V35.5H48.5V42.5H45.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M53.5 42.5V35.5H56.5V42.5H53.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M61.5 42.5V35.5H64.5V42.5H61.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M69.5 42.5V35.5H72.5V42.5H69.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M77.5 42.5V35.5H80.5V42.5H77.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M85.5 42.5V35.5H88.5V42.5H85.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M93.5 42.5V35.5H96.5V42.5H93.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M101.5 42.5V35.5H104.5V42.5H101.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M5.5 7.5V0.5H8.5V7.5H5.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M13.5 7.5V0.5H16.5V7.5H13.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M21.5 7.5V0.5H24.5V7.5H21.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M29.5 7.5V0.5H32.5V7.5H29.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M37.5 7.5V0.5H40.5V7.5H37.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M45.5 7.5V0.5H48.5V7.5H45.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M53.5 7.5V0.5H56.5V7.5H53.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M61.5 7.5V0.5H64.5V7.5H61.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M69.5 7.5V0.5H72.5V7.5H69.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M77.5 7.5V0.5H80.5V7.5H77.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M85.5 7.5V0.5H88.5V7.5H85.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M93.5 7.5V0.5H96.5V7.5H93.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M101.5 7.5V0.5H104.5V7.5H101.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <rect x="0.5" y="7.5" width="110" height="28" rx="3.5" fill="#A6D0DD"/>
                                    <rect x="0.5" y="7.5" width="110" height="28" rx="3.5" stroke="#162029"/>
                                </svg>
                            </div>
                            <p className={`font-20 ${styles.mainSliderItemHalfDesc2}`}>
                                We are developing an easy to use ecosystem. This will include a wallet and simplified payment gateways, giving you ease of use and access to our sophisticated solution. A hassle-free user experience, all while maintaining your privacy.
                            </p>
                        </div>
                    </div>
                    <div className={`container ${styles.mainSliderItem} ${activeSlide == 4 ? styles.mainSliderActive : ''}`}>
                        <div className={styles.mainSliderItemHalf}>
                            <div className={styles.mainSliderItemTask}>
                                <div className={styles.mainSliderItemTaskTxt}>Task 3</div>
                                <svg width="67" height="37" viewBox="0 0 67 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 36.5V29.5H10.5V36.5H7.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M15.5 36.5V29.5H18.5V36.5H15.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M23.5 36.5V29.5H26.5V36.5H23.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M31.5 36.5V29.5H34.5V36.5H31.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M39.5 36.5V29.5H42.5V36.5H39.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M47.5 36.5V29.5H50.5V36.5H47.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M55.5 36.5V29.5H58.5V36.5H55.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M7.5 7.5V0.5H10.5V7.5H7.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M15.5 7.5V0.5H18.5V7.5H15.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M23.5 7.5V0.5H26.5V7.5H23.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M31.5 7.5V0.5H34.5V7.5H31.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M39.5 7.5V0.5H42.5V7.5H39.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M47.5 7.5V0.5H50.5V7.5H47.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M55.5 7.5V0.5H58.5V7.5H55.5Z" fill="#162029" stroke="#162029"/>
                                    <rect x="0.5" y="7.5" width="66" height="22" rx="3.5" fill="#162029"/>
                                    <rect x="0.5" y="7.5" width="66" height="22" rx="3.5" stroke="#162029"/>
                                </svg>
                            </div>
                            <h2 className={`font-90 ttl`}>Interoperability</h2>
                            <p className={`${styles.mainSliderItemHalfDesc1}`}>This refers to the communication between chains. Currently, there are no solutions available for true cross-chain communication without the need for a 3rd party, like a centralised exchange.</p>
                            <div className={styles.mainSliderItemSolution}>
                                <div className={styles.mainSliderItemSolutionTxt}>Solution</div>
                                <svg width="111" height="43" viewBox="0 0 111 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 42.5V35.5H8.5V42.5H5.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M13.5 42.5V35.5H16.5V42.5H13.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M21.5 42.5V35.5H24.5V42.5H21.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M29.5 42.5V35.5H32.5V42.5H29.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M37.5 42.5V35.5H40.5V42.5H37.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M45.5 42.5V35.5H48.5V42.5H45.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M53.5 42.5V35.5H56.5V42.5H53.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M61.5 42.5V35.5H64.5V42.5H61.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M69.5 42.5V35.5H72.5V42.5H69.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M77.5 42.5V35.5H80.5V42.5H77.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M85.5 42.5V35.5H88.5V42.5H85.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M93.5 42.5V35.5H96.5V42.5H93.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M101.5 42.5V35.5H104.5V42.5H101.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M5.5 7.5V0.5H8.5V7.5H5.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M13.5 7.5V0.5H16.5V7.5H13.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M21.5 7.5V0.5H24.5V7.5H21.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M29.5 7.5V0.5H32.5V7.5H29.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M37.5 7.5V0.5H40.5V7.5H37.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M45.5 7.5V0.5H48.5V7.5H45.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M53.5 7.5V0.5H56.5V7.5H53.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M61.5 7.5V0.5H64.5V7.5H61.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M69.5 7.5V0.5H72.5V7.5H69.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M77.5 7.5V0.5H80.5V7.5H77.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M85.5 7.5V0.5H88.5V7.5H85.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M93.5 7.5V0.5H96.5V7.5H93.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M101.5 7.5V0.5H104.5V7.5H101.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <rect x="0.5" y="7.5" width="110" height="28" rx="3.5" fill="#A6D0DD"/>
                                    <rect x="0.5" y="7.5" width="110" height="28" rx="3.5" stroke="#162029"/>
                                </svg>
                            </div>
                            <p className={`font-20 ${styles.mainSliderItemHalfDesc2}`}>
                                We address blockchain interoperability by improving the efficiency of cross-chain transactional logic via trusted relays, hash-locking , notary schemes, Blockchain Migrators and bridges, as well as side chains.
                            </p>
                        </div>
                    </div>
                    <div className={`container ${styles.mainSliderItem} ${styles.mainSliderItemReverse} ${activeSlide == 5 ? styles.mainSliderActive : ''}`}>
                        <div className={styles.mainSliderItemHalf}>
                            <div className={styles.mainSliderItemTask}>
                                <div className={styles.mainSliderItemTaskTxt}>Task 4</div>
                                <svg width="67" height="37" viewBox="0 0 67 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 36.5V29.5H10.5V36.5H7.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M15.5 36.5V29.5H18.5V36.5H15.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M23.5 36.5V29.5H26.5V36.5H23.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M31.5 36.5V29.5H34.5V36.5H31.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M39.5 36.5V29.5H42.5V36.5H39.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M47.5 36.5V29.5H50.5V36.5H47.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M55.5 36.5V29.5H58.5V36.5H55.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M7.5 7.5V0.5H10.5V7.5H7.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M15.5 7.5V0.5H18.5V7.5H15.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M23.5 7.5V0.5H26.5V7.5H23.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M31.5 7.5V0.5H34.5V7.5H31.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M39.5 7.5V0.5H42.5V7.5H39.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M47.5 7.5V0.5H50.5V7.5H47.5Z" fill="#162029" stroke="#162029"/>
                                    <path d="M55.5 7.5V0.5H58.5V7.5H55.5Z" fill="#162029" stroke="#162029"/>
                                    <rect x="0.5" y="7.5" width="66" height="22" rx="3.5" fill="#162029"/>
                                    <rect x="0.5" y="7.5" width="66" height="22" rx="3.5" stroke="#162029"/>
                                </svg>
                            </div>
                            <h2 className={`font-90 ttl`}>Security</h2>
                            <p className={`${styles.mainSliderItemHalfDesc1}`}>Although blockchain is regarded as more secure because of its decentralised nature. However, some blockchains can fall victim to either a 51% attack, endpoint vulnerabilities, vendor exploits, or faulty source code. This can be accomplished on both a proof of stake chain and a proof of work chain.</p>
                            <div className={styles.mainSliderItemSolution}>
                                <div className={styles.mainSliderItemSolutionTxt}>Solution</div>
                                <svg width="111" height="43" viewBox="0 0 111 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 42.5V35.5H8.5V42.5H5.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M13.5 42.5V35.5H16.5V42.5H13.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M21.5 42.5V35.5H24.5V42.5H21.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M29.5 42.5V35.5H32.5V42.5H29.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M37.5 42.5V35.5H40.5V42.5H37.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M45.5 42.5V35.5H48.5V42.5H45.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M53.5 42.5V35.5H56.5V42.5H53.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M61.5 42.5V35.5H64.5V42.5H61.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M69.5 42.5V35.5H72.5V42.5H69.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M77.5 42.5V35.5H80.5V42.5H77.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M85.5 42.5V35.5H88.5V42.5H85.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M93.5 42.5V35.5H96.5V42.5H93.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M101.5 42.5V35.5H104.5V42.5H101.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M5.5 7.5V0.5H8.5V7.5H5.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M13.5 7.5V0.5H16.5V7.5H13.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M21.5 7.5V0.5H24.5V7.5H21.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M29.5 7.5V0.5H32.5V7.5H29.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M37.5 7.5V0.5H40.5V7.5H37.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M45.5 7.5V0.5H48.5V7.5H45.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M53.5 7.5V0.5H56.5V7.5H53.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M61.5 7.5V0.5H64.5V7.5H61.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M69.5 7.5V0.5H72.5V7.5H69.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M77.5 7.5V0.5H80.5V7.5H77.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M85.5 7.5V0.5H88.5V7.5H85.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M93.5 7.5V0.5H96.5V7.5H93.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <path d="M101.5 7.5V0.5H104.5V7.5H101.5Z" fill="#A6D0DD" stroke="#162029"/>
                                    <rect x="0.5" y="7.5" width="110" height="28" rx="3.5" fill="#A6D0DD"/>
                                    <rect x="0.5" y="7.5" width="110" height="28" rx="3.5" stroke="#162029"/>
                                </svg>
                            </div>
                            <p className={`font-20 ${styles.mainSliderItemHalfDesc2}`}>
                                Security is guaranteed in our ecosystem thanks to secure multi-party computation, committee reconfiguration, distributed random generation, attribute-based encryption and zero-knowledge proof that we have implemented into our solution which allows you to transact securely and privately in our ecosystem.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer
                    active={activeSlide == 5}
                />
            </ReactScrollWheelHandler>
        </>
    );
};

export default TechnologySlider;
