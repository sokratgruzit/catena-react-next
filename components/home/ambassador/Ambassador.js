import React from 'react';
import Title from './components/Title';
import Introduction from './components/Introduction';
import BecomeAmbassador from './components/BecomeAmbassador';
import CatenaAmbassador from './components/CatenaAmbassador';
import WhatExpected from './components/WhatExpected';
import AmbasdorBtn from './components/AmbasdorBtn';
import JoinCommunity from '../events/components/JoinCommunity';
import { InView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import {useEffect, useState} from "react";

const Ambassador = () => {
    const dispatch = useDispatch();
    const [pageReady, setPageReady] = useState(false);
    let microSchemes;
    if(window.innerWidth > 1250){
        microSchemes = [
            [1,2,8,9,10,11,12,13,14,15,22,23,24],
            [1,2,8,9,10,11,12,13,14,15,22,23,24],
        ];
    }

    if(window.innerWidth < 1250){
        microSchemes = [
            [1,2,5,6,7,8,9,10,11,12,13,14,22,23,24],
            [1,2,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,23,24]
        ];
    }

    const setScheme = (num) => {
        console.log(num);
        dispatch({
            type: "SET_MICHROSCHEME_ARRAY",
            microschemeArray: microSchemes[num]
        });
    }

    useEffect(() => {
        setTimeout(() => {
            setPageReady(true);
            dispatch({
                type: "SET_MICHROSCHEME_ARRAY",
                microschemeArray: microSchemes[0]
            });
        }, 400);
    },[]);
    return (
    <div className='pT-180' style={{ width: '100%' }}>
        <InView as="div" onChange={(inView, entry) => (inView && setScheme(0))}>
          <Title animate={pageReady}/>
          <Introduction animate={pageReady}/>
          <BecomeAmbassador animate={pageReady}/>
        </InView>
        <InView as="div" onChange={(inView, entry) => (inView && setScheme(1))}>
          <CatenaAmbassador />
          <WhatExpected />
          <AmbasdorBtn />
            <JoinCommunity />
        </InView>
    </div>
  );
};

export default Ambassador;
