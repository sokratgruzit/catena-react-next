import React from "react";
import GetSuggestion from "../components/getSuggestion/GetSuggestion";
import VotingNow from "../components/votingNow/VotingNow";
import MainContainer from "../components/mainContainer/MainContainer";
import { useState } from "react";

const Voting = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <MainContainer
        active={active}
        setActive={() => setActive((prev) => !prev)}
      />
      <VotingNow />
      <GetSuggestion
        active={active}
        setActive={() => setActive((prev) => !prev)}
      />
    </>
  );
};

export default Voting;
