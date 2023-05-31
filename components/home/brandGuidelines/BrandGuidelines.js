import React from 'react';

import ClearSpace from './ClearSpace';
import ColorBanner from './ColorBanner';
import ColorPalette from './ColorPalette';
import Colors from './Colors';
import IntroBanner from './IntroBanner';
import LogosBanner from './LogosBanner';
import LogoUsages from './LogoUsages';
import LogoVariations from './LogoVariations';
import MAinColors from './MainColors';
import Partniership from './Partniership';
import ProductLogos from './ProductLogos';
import TechnologiesBanner from './TechnologiesBanner';
import Typography from './Typography';

function BrandGuidelines() {
  return (
    <div>
      <IntroBanner />
      <MAinColors />
      <Typography />
      <LogosBanner />
      <LogoVariations />
      <ProductLogos />
      <ColorBanner />
      <ClearSpace />
      <LogoUsages />
      <Partniership />
      <Colors />
      <ColorPalette />
      <TechnologiesBanner />
    </div>
  );
}

export default BrandGuidelines;
