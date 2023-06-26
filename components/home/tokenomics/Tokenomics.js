import Certik from "./components/Certik";
import Distribution from "./components/Distribution";
import Download from "./components/Download";
import Schedule from "./components/Schedule";
import Title from "./components/Title";
import TokenomicsHead from "./components/TokenomicsHead";

function Tokenomics() {
  return (
    <div className="container">
      <Title />
      <TokenomicsHead />
      <Distribution />
      <Schedule />
      <Certik />
      <Download />
    </div>
  );
}

export default Tokenomics;
