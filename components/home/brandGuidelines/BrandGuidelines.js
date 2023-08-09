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

function BrandGuidelines() {
    // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    let microSchemes;
    if(window.innerWidth > 1250){
        microSchemes = [
            [1,2,6,7,8,9,10,11,19,20,21,22,23,24],
            [1,2,7,8,9,10,20,21,22,23,24],
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

    const setScheme = () => {

    }
  return (
    <div>
        <IntroBanner />
        <ClearSpace />
        <ProductLogos />
        <InView as="div" onChange={(inView, entry) => console.log('Inview:', inView)}>
            <LogoVariations />
        </InView>
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
