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
import { InView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import {useEffect,useState} from "react";

function BrandGuidelines() {
    const dispatch = useDispatch();
    const [pageReady, setPageReady] = useState(false);
    let microSchemes;
    if(window.innerWidth > 1240){
        microSchemes = [
            [9,10,11,12,13,14,15,22,23,24],
            [1,2,3,11,12,13,14,15,23,24],
            [1,2,3,10,11,12,13,14,15,22,23,24],
            [1,2,9,10,11,12,13,14,21,22,23,24],
        ];
    }

    if(window.innerWidth < 1240){
        microSchemes = [
            [1,2,5,6,7,8,9,10,11,13,14,18,19,20,21,22,23,24],
            [1,2,5,6,7,8,9,10,11,13,14,18,19,20,21,22,23,24],
            [1,2,7,8,9,10,11,12,13,14,23,24],
            [1,2,5,6,7,8,9,10,11,13,19,20,21,22,23,24],
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
    <div>
        <InView as="div" onChange={(inView, entry) => (inView && setScheme(0))}>
            <IntroBanner animate={pageReady}/>
            <ClearSpace animate={pageReady}/>
        </InView>
        <InView as="div" onChange={(inView, entry) => (inView && setScheme(1))}>
            <ProductLogos />
            <LogoVariations />
        </InView>
        <div className='container '>
            <InView as="div" onChange={(inView, entry) => (inView && setScheme(2))}>
                <LogoUsages />
            </InView>
        </div>
        <Partniership />
        <div className='container'>
            <InView as="div" onChange={(inView, entry) => (inView && setScheme(3))}>
                <Typography />
                <Fonts />
            </InView>
        </div>
        <Colors />
        <Banner />
    </div>
  );
}

export default BrandGuidelines;
