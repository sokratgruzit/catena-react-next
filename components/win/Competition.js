import Finished from "./components/Finished";
import Score from "./components/Score";
import Rank from "./components/Rank";
import Prizes from "./components/Prizes";
import Rules from "./components/Rules";
import Marquee from "../UI/marquee/Marquee";
import TradingCompetition from "./components/TradingCompetition";


const Competition = () => {

  return (
    <>
      <TradingCompetition />  
      <Finished />
      {/* <Marquee label={"win"} direction={"forward"}/>
      <Marquee label={"win"} direction={"reverse"}/> */}
      <Score />
      <Rank />
      <Prizes />
      <Rules />
    </>
  );
};

export default Competition;
