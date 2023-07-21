import ClearSpace from './components/ClearSpace';
import ColorBanner from './components/ColorBanner';
import ColorPalette from './components/ColorPalette';
import Colors from './components/Colors';
import IntroBanner from './components/IntroBanner';
import LogoUsages from './components/LogoUsages';
import LogoVariations from './components/LogoVariations';
import MainColors from './components/MainColors';
import Partniership from './components/Partniership';
import ProductLogos from './components/ProductLogos';
import TechnologiesBanner from './components/TechnologiesBanner';
import Typography from './components/Typography';

function BrandGuidelines() {
  return (
    <div>
      <IntroBanner />
      <div className='container'>
        <ClearSpace />
        <LogoVariations />

        <MainColors />
        <Typography />
        <ProductLogos />
        <ColorBanner />
        <LogoUsages />
        <Partniership />
        <Colors />
        <ColorPalette />
        <TechnologiesBanner />
      </div>
    </div>
  );
}

export default BrandGuidelines;