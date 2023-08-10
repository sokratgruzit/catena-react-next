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
import {useEffect} from "react";

function BrandGuidelines() {
    // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    const dispatch = useDispatch();

    let microSchemes;
    if(window.innerWidth > 1250){
        microSchemes = [
            [8,9,10,11,12,13,14,15,22,23,24],
            [1,2,3],
            [1,2,3,4,5,10,11,12,13,14,15,16,23,24],
            [1,2,7,8,9,10,20,21,22,23,24],
            [1,2,3,4,5,6,10,11,12,13,14,15,16,17,23,24]
        ];
    }

    if(window.innerWidth < 1250){
        microSchemes = [
            [1,2,5,6,7,8,9,10,11,16,17,18,19,20,21,22,23,24],
            [1,2,5,6,7,8,9,10,11,17,18,19,20,21,22,23,24],
            [1,2,3,6,7,8,9,10,11,12,13,14,23,24],
            [1,2,5,6,7,8,9,10,11,16,17,18,19,20,21,22,23,24],
            [1,2,3,6,7,8,9,10,11,12,13,14,23,24]
        ];
    }

    const setScheme = (num) => {
        console.log(num);
        dispatch({
            type: "SET_MICHROSCHEME_ARRAY",
            microschemeArray: microSchemes[num]
        });
        console.log(microSchemes[num])
    }
    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type: "SET_MICHROSCHEME_ARRAY",
                microschemeArray: microSchemes[0]
            });
        }, 500);
    },[]);
  return (
    <div>
        <InView as="div" onChange={(inView, entry) => (inView && setScheme(0))}>
            <IntroBanner />
            <ClearSpace />
        </InView>
        <InView as="div" onChange={(inView, entry) => (inView && setScheme(1),console.log(entry))}>
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
            <Typography />
            <Fonts />
        </div>
        <Colors />
        <Banner />
    </div>
  );
}

export default BrandGuidelines;
