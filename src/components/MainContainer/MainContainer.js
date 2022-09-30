import "./MainContainer.css";
import React, { useState } from "react";
import LeftSide from "../LeftSide/LeftSide";
import QnA from "../../QnA/QnA";
import Footer from "../Footer/Footer";

const MainContainer = () => {
  return (
    <div>
      <div className="main-container">
        <LeftSide></LeftSide>
      </div>

      <div className="forBonusMark">
        <QnA></QnA>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainContainer;
