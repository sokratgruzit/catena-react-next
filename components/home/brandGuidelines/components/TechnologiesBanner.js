import React from 'react';

export default function TechnologiesBanner() {
  const bannerData = [
    {
      aboutCore: "About CORE",
    aboutCoreText: "Our mission, vision & information",
    technologies: "Technologies",
    technologiesText: "Which makes CORE different",
  }
  ];
  return (
    <div>
      {bannerData.map((item, index) => (
        <div key={index}>
          <div data-aos="fade-up" className="guidline__end-container">
            <router-link to="/about" className="guidline__end-half">
              <div className="guidline__end-half-descr">
                <div className="guidline__end-half-descr-title">{item.aboutCore}</div>
                <div className="guidline__end-half-descr-txt">{item.aboutCoreText}</div>
              </div>
            </router-link>
            <router-link to="/technology" className="guidline__end-half">
              <div className="guidline__end-half-descr">
                <div className="guidline__end-half-descr-title">{item.technologies}</div>
                <div className="guidline__end-half-descr-txt">{item.technologiesText}</div>
              </div>
            </router-link>
          </div>
        </div>
      ))}
    </div>
  );
}
