import BugBountyItem from "./components/BugBountyItem";
import BugBountyNumList from "./components/BugBountyNumList";
import BugBountyTitle from "./components/BugBountyTitle";

function BugBounty() {
  return (
    <div className="container">
      <BugBountyTitle />
      <BugBountyItem />
      <BugBountyNumList />
      {/* <BugBountyList /> */}
    </div>
  );
}

export default BugBounty;
