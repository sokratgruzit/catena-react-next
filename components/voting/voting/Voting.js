import React from 'react';
import GetSuggestion from '../components/getSuggestion/GetSuggestion';
import VotingNow from '../components/VotingNow/VotingNow';
import MainContainer from '../components/MainContainer/MainContainer';

const Voting = () => {
  return (
    <>
      <MainContainer />
      <VotingNow />
      <GetSuggestion />
    </>
  );
};

export default Voting;
