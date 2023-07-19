import ClearSpace from './components/ClearSpace';
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
      <div className='container'>
        <ClearSpace />
        <ProductLogos />
      </div>
      <LogoVariations />
      <div className='container'>
        <LogoUsages />
      </div>
      <Partniership />
      <div className='container'>
        <Typography />
        <Fonts />
      </div>

      {/* <Colors /> */}
      {/*
        <ColorPalette />
        <TechnologiesBanner /> */}
    </div>
  );
}

export default BrandGuidelines;
