import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Voting from '../../../components/voting/voting/Voting';

const index = () => {
  return (
    <Router>
      <Voting />
    </Router>
  );
};

export default index;
