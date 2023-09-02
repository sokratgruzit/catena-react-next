import Certik from './components/Certik';
import Distribution from './components/Distribution';
import Download from './components/Download';
import EventDetails from './components/EventDetails';
import Schedule from './components/Schedule';
import TokenomicsHead from './components/tokenomicsHear/TokenomicsHead';
import {useDispatch} from "react-redux";
import { InView } from 'react-intersection-observer';
import {useEffect, useState} from "react";

function Tokenomics() {
    const dispatch = useDispatch();
    const [pageReady, setPageReady] = useState(false);
    let microSchemes;
    if(window.innerWidth > 1240){
        microSchemes = [
            [1,2,7,8,9,10,11,12,13,14,20,21,22,23,24],
            [1,2,10,11,12,13,14,22,23,24],
            [1,2,3,10,11,12,13,14,15,16,20,21,22,23,24]
        ];
    };

    if(window.innerWidth < 1240){
        microSchemes = [
            [1,2,5,6,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24],
            [1,2,6,7,8,9,10,11,12,13,14,19,20,21,22,23,24],
            [1,2,6,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24]
        ];
    };

    const setScheme = (num) => {
        dispatch({
            type: "SET_MICHROSCHEME_ARRAY",
            microschemeArray: microSchemes[num]
        });
    };

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
    <div>
      <div className='container'>
          <InView as="div" onChange={(inView, entry) => (inView && setScheme(0))}>
            <TokenomicsHead animate={pageReady}/>
          </InView>
      </div>
        <InView as="div" onChange={(inView, entry) => (inView && setScheme(0))}>
          <Distribution />
        </InView>
        <InView as="div" onChange={(inView, entry) => (inView && setScheme(1))}>
          <Schedule />
        </InView>
      <div className='container'>
          <InView as="div" onChange={(inView, entry) => (inView && setScheme(1))}>
            {/*<EventDetails />*/}
            <Certik />
          </InView>
          {/*<InView as="div" onChange={(inView, entry) => (inView && setScheme(2))}>*/}
          {/*    <Download />*/}
          {/*</InView>*/}
      </div>
    </div>
  );
}

export default Tokenomics;
