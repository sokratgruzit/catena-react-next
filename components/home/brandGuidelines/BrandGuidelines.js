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

      <ClearSpace />

      <ProductLogos />

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
