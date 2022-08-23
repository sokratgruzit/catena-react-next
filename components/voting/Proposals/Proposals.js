import React from 'react';
import GetSuggestion from '../components/GetSuggestion/GetSuggestion';
import VotingNow from '../components/VotingNow/VotingNow';
import MainContainer from '../components/MainContainer/MainContainer';

const Proposals = () => {
  return (
    <>
      <MainContainer />
      <VotingNow />
      <GetSuggestion />
    </>
  );
};

export default Proposals;