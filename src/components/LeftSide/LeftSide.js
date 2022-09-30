import React, { useEffect, useState } from "react";
import CardSection from "../../CardSection/CardSection";
import RightSide from "../RightSide/RightSide";
import "./LeftSide.css";
import logo from "../../images/logo.png";

const LeftSide = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const [details, setDetails] = useState([]);

  return (
    <div className="left-side">
      <nav className="nav-container">
        <img className="img-nav" src={logo} alt="" />
        <h1 className="txt-nav">ACTIVE-GYM-CLUB</h1>
      </nav>
      <h1 className="txt">Select today’s exercise</h1>
      <div className="card-section">
        {cards.map((card) => (
          <CardSection
            card={card}
            key={card.id}
          ></CardSection>
        ))}
      </div>
      <RightSide parentToChild={details}></RightSide>
    </div>
  );
};

export default LeftSide;
