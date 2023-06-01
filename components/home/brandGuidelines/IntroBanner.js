import { Button } from '@catena-network/catena-ui-module';
import React from 'react';

export default function IntroBanner() {
  return (
    <div>
      Brand Guidelines
      <div>
        <Button
          label={'Download All Logos'}
          size={'btn-lg'}
          type={'btn-primary'}
          arrow={'arrow-none'}
          element={'button'}
          disabled={false}
          onClick={() => console.log('hi')}
        />
        as PDF, EPS & SVG
      </div>
    </div>
  );
}
