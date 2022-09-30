import React from "react";
import "./CardSection.css";

const CardSection = (props) => {
  const { card } = props;
  const { name, url, title, age, timeRequired } = card;

  return (
    <div className="card-div">
      <div className="style-info">
        <div className="card_iamge">
          <img src={url} alt="" />
        </div>
        <h3>{name}</h3>
        <p>{title}</p>
        <h5>For age: {age}</h5>
        <h4>Time required: {timeRequired} Seconds</h4>
      </div>
      <button className="btn-addToList">
        Add to list
      </button>
    </div>
  );
};

export default CardSection;
