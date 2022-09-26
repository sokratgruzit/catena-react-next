import React from 'react';
import GetSuggestion from '../components/getSuggestion/GetSuggestion';
import VotingNow from '../components/votingNow/VotingNow';
import MainContainer from '../components/mainContainer/MainContainer';

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
