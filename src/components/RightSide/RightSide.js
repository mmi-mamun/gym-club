import React from "react";
import "./RightSide.css";
import { useState } from "react";
import imgProfile from "../../images/profile.jpg";

const RightSide = ({ parentToChild }) => {
  const total = parentToChild.reduce(
    (total, currentItem) => (total = total + currentItem.timeRequired),
    0
  );

  const [selectedNumber, setSelectedNumber] = useState(0);

  const selectNumber = (e) => {
    localStorage.setSelectedNumber("Break time", e.target.value);
  };


  return (
    <div className="right-side">
      <div className="container-rightSide">
        <div className="profile">
          <div className="about-profile">
            <img src={imgProfile} alt="" />
          </div>
          <div>
            <h1 className="about-profile">M MI Musafir</h1>
            <p>Location: Dhaka</p>
          </div>
        </div>

        <div className="details">
          <div className="attributes">
            <h3>
              75 <small>KG</small>
            </h3>
            <h4>Weight</h4>
          </div>
          <div className="attributes">
            <h3>6.5</h3>
            <h4>Height</h4>
          </div>
          <div className="attributes">
            <h3>
              25 <small>Years</small>
            </h3>
            <h4>Age</h4>
          </div>
        </div>

        <div className="break-section">
          <h3>Add a break</h3>
          <div className="break-option">
            <button
              onClick={(e) => {
                setSelectedNumber(e.target.value);
                localStorage.setItem("BreakTime", e.target.value);
              }}
              value="10 Seconds"
              className="break-btn"
            >
              10s
            </button>
            <button
              onClick={(e) => {
                setSelectedNumber(e.target.value);
                localStorage.setItem("BreakTime", e.target.value);
              }}
              value="20 Seconds"
              className="break-btn"
            >
              20s
            </button>
            <button
              onClick={(e) => {
                setSelectedNumber(e.target.value);
                localStorage.setItem("BreakTime", e.target.value);
              }}
              value="30 Seconds"
              className="break-btn"
            >
              30s
            </button>
            <button
              onClick={(e) => {
                setSelectedNumber(e.target.value);
                localStorage.setItem("BreakTime", e.target.value);
              }}
              value="40 Seconds"
              className="break-btn"
            >
              40s
            </button>
            <button
              onClick={(e) => {
                setSelectedNumber(e.target.value);
                localStorage.setItem("BreakTime", e.target.value);
              }}
              value="50 Seconds"
              className="break-btn"
            >
              50s
            </button>
          </div>
        </div>

        <div className="exercise-details">
          <h2>Exercise Details</h2>
          <div className="exercise-info">
            <h3>
              Exercise time: <span>{total} Seconds</span>
            </h3>
            <h3>
              Break time:
              {localStorage.getItem("BreakTime") && (
                <span>{localStorage.getItem("BreakTime")}</span>
              )}
            </h3>
          </div>
          <button className="btn-complete">
            Activity Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
