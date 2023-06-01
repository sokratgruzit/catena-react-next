import React from 'react';

export default function ClearSpace() {
  const data = [
   { clearSpace: "Clear Space",
   andPositioning: "& Positioning",
   clearSpaceText: "The logo should always be surrounded by generous white space. The minimum required space around the logo is equivalent to the radius of the symbol.",
   incorrect: "Incorrect",
   usage: "Usage",
   incorrectUsageText: "Listed below are examples of incorrect usage of the <br> CORE Corporate logo.",}
  ];
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <div>   <div data-aos="fade-up" className="guidline__flex">
            <div className="guidline__half">
              <div className="guidline__lrg-ttl font-51">
                <span>{item.clearSpace}</span>
                <span>{item.andPositioning}</span>
              </div>
            </div>
            <div className="guidline__half">
              <div className="guidline__paragraph paragraphMt">
                {item.clearSpaceText}
              </div>
              <div className="guidline__paragraph-half-img pB-160">
                
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="guidline__flex">
            <div className="guidline__half">
              <div className="guidline__lrg-ttl font-51">
                <span>{item.incorrect}</span>
                <span>{item.usage}</span>
              </div>
            </div>
            <div className="guidline__half">
              <div className="guidline__paragraph paragraphMt" v-html="item.incorrectUsageText">
                {item.incorrectUsageText}
              </div>
            </div>
          </div></div>
        </div>
      ))}
    </div>
  );
}
