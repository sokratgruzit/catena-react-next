import Market from "./components/Market";
import CollectionsPromo from "./components/CollectionsPromo";
import Arrivals from "./components/Arrivals";

const  Overview = (props) => {
    return (
        <div>
            <Market />
            <CollectionsPromo />
            <Arrivals { ...props } />
        </div>
    );
};

export default Overview;
