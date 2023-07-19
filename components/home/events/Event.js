import React from "react";
import Title from "./components/Title"
import Paragrap from "./components/Paragrap";
import Boxs from "./components/Boxs"
import JoinComuniti from "./components/JoinComuniti"

const Event = () => {
    return (
        <div style={{ paddingTop: '200px', background: "#FFF3E5" }}>
            <Title />
            <Paragrap />
            <Boxs />
            <JoinComuniti />
        </div>
    );
};

export default Event;