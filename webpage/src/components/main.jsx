import React, { Component } from "react";
import "./main.css";
import image1 from "./../assests/bg.jpg";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src={image1}
          alt="background-image-of-connecting globe"
          className="responsive"
        />
        <div className="image-center">
          <span className="image-title">
            Connecting the World with <span className="five-g-text">5G</span>
            <br />
          </span>
          <span className="image-body">
            The new technology for faster and grater India.
          </span>
        </div>
        <Question />
      </div>
    );
  }
}
const Question = () => {
  return (
    <div className="container">
      <div className="q-title">Q: What is 5G?</div>
      <div className="q-answer">
        A: 5G is the 5th generation mobile network. It is a new global wireless
        standard after 1G, 2G, 3G, and 4G networks. 5G enables a new kind of
        network that is designed to connect virtually everyone and everything
        together including machines, objects, and devices. 5G wireless
        technology is meant to deliver higher multi-Gbps peak data speeds, ultra
        low latency, more reliability, massive network capacity, increased
        availability, and a more uniform user experience to more users. Higher
        performance and improved efficiency empower new user experiences and
        connects new industries.
      </div>
    </div>
  );
};
export default Main;
