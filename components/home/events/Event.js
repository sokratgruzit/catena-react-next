import React from "react";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";
import Boxs from "./components/Boxs";
import JoinCommunity from "./components/JoinCommunity";

const Event = () => {
    return (
        <div style={{ paddingTop: '200px', background: "#FFF3E5" }}>
            <Title />
            <Paragraph />
            <Boxs />
            <JoinCommunity />
        </div>
    );
};

export default Event;