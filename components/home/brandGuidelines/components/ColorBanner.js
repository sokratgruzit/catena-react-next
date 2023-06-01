import React from 'react';

export default function ColorBanner() {
 
  return (
  <div className="fl-dir-col">
    <div className="pB-160 guidline__colors-container">
        <div className="guidline__colors-inner" style={{background: '#000000'}}>
            <div className="guidline__colors-inner-img"></div>
            <div className="guidline__colors-inner-description">
                <div className="guidline__colors-inner-description-title" style={{color: "#ffffff"}}>On dark</div>
                <div className="guidline__colors-inner-description-floor">
                    <div className="guidline__colors-inner-description-floor-color" style={{background: "#FF7152"}}></div>
                    <div className="guidline__colors-inner-description-floor-descr" style={{marginLeft: "15px", marginRight: "30px"}}><span className="wdth1">FF7152</span></div>
                    <div className="guidline__colors-inner-description-floor-descr" style={{marginRight: "30px"}}><span className="wdth2">R=255</span><span className="wdth2">G=113</span><span className="wdth2">B=82</span></div>
                    <div className="guidline__colors-inner-description-floor-descr"><span className="wdth3">C=1</span><span className="wdth3">M=69</span><span className="wdth3">Y=74</span><span className="wdth3">K=0</span></div>
                </div>
                <div className="guidline__colors-inner-description-floor">
                    <div className="guidline__colors-inner-description-floor-color" style={{background: "#ffffff"}}></div>
                    <div className="guidline__colors-inner-description-floor-descr" style={{marginLeft: "15px", marginRight: "30px"}}><span className="wdth1">FFFFFF</span></div>
                    <div className="guidline__colors-inner-description-floor-descr" style={{marginRight: "30px"}}><span className="wdth2">R=255</span><span className="wdth2">G=255</span><span className="wdth2">B=255</span></div>
                    <div className="guidline__colors-inner-description-floor-descr"><span className="wdth3">C=0</span><span className="wdth3">M=0</span><span className="wdth3">Y=0</span><span className="wdth3">K=0</span></div>
                </div>
            </div>
        </div>
        <div className="guidline__colors-inner guidline__colors-inner-white"  style={{background: "#ffffff"}}>
            <div className="guidline__colors-inner-img"></div>
            <div className="guidline__colors-inner-description">
                <div className="guidline__colors-inner-description-title" style={{color: "#000000"}}>On light</div>
                <div className="guidline__colors-inner-description-floor">
                    <div className="guidline__colors-inner-description-floor-color" style={{background: "#FF7152"}}></div>
                    <div className="guidline__colors-inner-description-floor-descr" style={{marginLeft: "15px", marginRight: "40px"}}><span className="wdth1">FF7152</span></div>
                    <div className="guidline__colors-inner-description-floor-descr" style={{marginRight: "30px"}}><span className="wdth2">R=255</span><span className="wdth2">G=113</span><span className="wdth2">B=82</span></div>
                    <div className="guidline__colors-inner-description-floor-descr"><span className="wdth3">C=1</span><span className="wdth3">M=69</span><span className="wdth3">Y=74</span><span className="wdth3">K=0</span></div>
                </div>
                <div className="guidline__colors-inner-description-floor">
                    <div className="guidline__colors-inner-description-floor-color" style={{background: "#000000"}}></div>
                    <div className="guidline__colors-inner-description-floor-descr" style={{marginLeft: "15px", marginRight: "40px"}}><span className="wdth1">FFFFFF</span></div>
                    <div className="guidline__colors-inner-description-floor-descr" style={{marginRight: "30px"}}><span className="wdth2">R=0</span><span className="wdth2">G=0</span><span className="wdth2">B=0</span></div>
                    <div className="guidline__colors-inner-description-floor-descr"><span className="wdth3">C=58</span><span className="wdth3">M=46</span><span className="wdth3">Y=41</span><span className="wdth3">K=95</span></div>
                </div>
            </div>
        </div>
    </div>
  </div>
  );
}
