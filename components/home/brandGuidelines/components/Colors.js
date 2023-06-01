import React from 'react';

export default function Colors() {
  const colorsList = ["CORE Red", "Blue", "White", "Black"];
  const displayedColors = [];

  return (
    <div>
      {colorsList.map((item, index) => {
        // Check if the color has already been displayed
        if (!displayedColors.includes(item)) {
          displayedColors.push(item); // Add the color to the displayed list

          return (
            <div key={index}>
              <div data-aos="fade-up" className="pT-160 guidline__flex">
                <div className="guidline__bg-outer"></div>
                <div className="guidline__half">
                  <div className="guidline__lrg-ttl font-51">{item}</div>
                </div>
                <div className="guidline__half">
                  <div className="guidline__paragraph paragraphMt">
                    {/* Add your color description here */}
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="guidline__color-scheme">
                <div className="guidline__color-scheme-item" style={{ background: "#FF7152" }}>
                  <div className="guidline__color-scheme-item-ttl">{item}</div>
                  <div className="guidline__colors-inner-description-floor-descr"><span className="wdth1">FF7152</span></div>
                  <div className="guidline__colors-inner-description-floor-descr" style={{ marginRight: "30px" }}><span className="wdth2">R=255</span><span className="wdth2">G=113</span><span className="wdth2">B=82</span></div>
                  <div className="guidline__colors-inner-description-floor-descr"><span className="wdth3">C=1</span><span className="wdth3">M=69</span><span className="wdth3">Y=74</span><span className="wdth3">K=0</span></div>
                </div>
              </div>
            </div>
          );
        } else {
          return null; 
        }
      })}
    </div>
  );
}
