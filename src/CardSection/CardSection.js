import { useState } from "react";
import React from "react";
import "./CardSection.css";

const CardSection = (props) => {
  const { card } = props;
  const { name, url, title, age, timeRequired } = card;
  const [disable, setDisable] = useState(false);
  const [buttonText, setButtonText] = useState("Add to list");
  function handleClick() {
    setButtonText("Added");
  }
  return (
    <div className="card-div">
      <div className="style-info">
        <div className="card_image">
          <img src={url} alt="" />
        </div>
        <h3>{name}</h3>
        <p>{title}</p>
        <h5>For age: {age}</h5>
        <h4>Time required: {timeRequired} Seconds</h4>
      </div>
      <button
        disabled={disable}
        onClick={() => {
          props.handleAddToList(props.card);
          setDisable(true);
          handleClick();
        }}
        className="btn-addToList"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CardSection;
