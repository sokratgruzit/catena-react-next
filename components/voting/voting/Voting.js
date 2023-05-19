import React, { useState } from 'react';

import GetSuggestion from '../components/getSuggestion/GetSuggestion';
import MainContainer from '../components/mainContainer/MainContainer';
import VotingNow from '../components/votingNow/VotingNow';

const Voting = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <MainContainer active={active} setActive={() => setActive(prev => !prev)} />
      <VotingNow />
      <GetSuggestion active={active} setActive={() => setActive(prev => !prev)} />
    </>
  );
};

export default Voting;
