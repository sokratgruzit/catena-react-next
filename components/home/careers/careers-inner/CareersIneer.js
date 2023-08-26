import React, { useState } from 'react';
import { Button } from '@catena-network/catena-ui-module';

import AboutYou from './components/aboutYou/AboutYou';
import SeniorDesigner from './components/seniorDesigner/SeniorDesigner';
import SubmitAplication from './components/submitAplication/SubmitAplication';
import { StringToHtml } from '../../../UI/StringToHtml/StringToHtml';

const CareersIneer = ({ item }) => {
  const [showSubmit, setShowSubmit] = useState(false);
  const [submitHeight, setSubmitHeight] = useState('0px');

  const handleButtonClick = () => {
    if (showSubmit) {
      setSubmitHeight('0px');
    } else {
      setSubmitHeight('2500px');
    }

    setShowSubmit(!showSubmit);
  };
  console.log(item.responsibilities['en']['openPosition.responsibilities']);


  return (
    <div className='pT-180'>
      <div className='container' style={{ display: 'flex', flexDirection: 'column', gap: '50px', width: "90%"}}>
        <h1 style={{ color: '#162029' }} className={` font-90 ttl`}>{item.title['en']['openPosition.title']}</h1>
        <StringToHtml data={item.summary['en']['openPosition.summary']} />
        <div style={{ display: 'flex', width: "100%", justifyContent: 'space-between' }}>
          <div className='custum-text'>
            <h3 style={{color:"#162029"}}>Reference</h3>
            <p>{item.reference}</p>
          </div>
          <div className='custum-text'>
            <h3 style={{color:"#162029"}}>Job Type</h3>
            <p>{item.type}</p>
          </div>
          <div className='custum-text'>
            <h3 style={{color:"#162029"}}>Remote</h3>
            <p>{item.remote}</p>
          </div>
        </div>
        <div className='custum-text'>
          <h2 style={{color:"#162029"}}>Department</h2>
          <p>{item.department}</p>
        </div>
        <StringToHtml data={item.responsibilities['en']['openPosition.responsibilities']} />
        <StringToHtml data={item.requirements['en']['openPosition.requirements']} />
        <StringToHtml data={item.benefits['en']['openPosition.benefits']} />
        <StringToHtml data={item.worcking_at_catena['en']['openPosition.worcking_at_catena']} />
        <StringToHtml data={item.how_we_work['en']['openPosition.how_we_work']} />
        <StringToHtml data={item.about_catena['en']['openPosition.about_catena']} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: "100%", justifyContent: 'space-around' }}>
          <div className='custum-text'>
            <h3 style={{color:"#162029"}} className='ttl'>Job Level</h3>
            <p>{item.job_level}</p>
          </div>
          <div className='custum-text'>
            <h3 style={{color:"#162029"}} className='ttl'>Languages</h3>
            <p>{item.languages}</p>
          </div>
          <div className='custum-text'>
            <h3 style={{color:"#162029"}} className='ttl'>Featured</h3>
            <p>{item.featured}</p>
          </div>
        </div>

        <div className='container' style={{ margin: '50px 0' }}>
          {!showSubmit && <Button
            onClick={handleButtonClick}
            label={'Apply this job now'}
            size={'btn-lg'}
            type={'btn-primary'}
            arrow={'arrow-right'}
            element={'button'}
          />}
        </div>
        <div style={{ maxHeight: submitHeight, transition: '0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99)', overflow: 'hidden', marginBottom: '50px' }}>
          {showSubmit && <SubmitAplication title='Submit Your Application' />}
        </div>
      </div>
    </div>
  );
};

export default CareersIneer;
