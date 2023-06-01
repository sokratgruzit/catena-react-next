import { Input, Button } from '@catena-network/catena-ui-module';
import React, { useState } from 'react';

const InfoForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <div className='dao-submit__container'>
      {showForm ? (
        <div className='feedback-form'>
          <div>
            <Input
              type='default'
              icon={false}
              label='EMAIL'
              subLabel=''
              placeholder='Enter'
              customStyles={{ width: '500px' }}
            />
          </div>
          <div>
            <Input
              type='default'
              icon={false}
              label='Name'
              subLabel=''
              placeholder='Enter'
              customStyles={{ width: '500px' }}
            />
          </div>

          <div>
            <Input
              type='textarea'
              label='Make a suggestion'
              name='textarea input'
              rows={10}
              cols={20}
              placeholder='Please describe your feedback in detail with corresponding screenshots'
              resize='both'
            />
            <label>Limit: 1000 characters</label>
          </div>
          <div>
            <Button
              label='submit'
              size='btn-lg'
              type='btn-primary'
              arrow='arrow-right'
              element='button'
              disabled={false}
              onClick={() => console.log('hi')}
            />
          </div>
        </div>
      ) : (
        <Button
          className='apply'
          label='Apply now'
          size='btn-lg'
          type='btn-primary'
          arrow='arrow-right'
          element='button'
          disabled={false}
          onClick={handleClick}
        />
      )}
    </div>
  );
};

export default InfoForm;
