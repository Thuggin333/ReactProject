import logo from "./logo.svg";
import "./css/style.css";
import React from "react";
import "./App.css";

// Menue Elements
const menuElements = ["FEATURES", "SOLUTIONS", "PLANS", "PRICING", "RESORCES"];

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="logoBlockCont">
          <div className="logoBlock">
            <h1>TRELLO</h1>
            <div className="menuEl">
              {menuElements.map((el, i) => {
                return (
                  <a className="menuElChild" key={i} href="">
                    {el}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="register">
            <p>Log in</p>
            <p>Get Trello for free</p>
          </div>
        </div>
      </header>
    );
  }
}
// Home Section
export class HomeSection extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="homeLeftBlock">
          <div className="homeInfo">
            <h2>Trello helps teams move work forward.</h2>
            <p>
              Collaborate, manage projects, and reach new productivity peaks.
              From high rises to the home office, the way your team works is
              unique—accomplish it all with Trello
            </p>
            <div className="input">
              <input type="email" placeholder="Email" />
              <button>Sign-Up</button>
            </div>
          </div>
        </div>
        <div className="homeRightBlock">
          <img
            src="https://images.ctfassets.net/rz1oowkt5gyp/5QIzYxue6b7raOnVFtMyQs/113acb8633ee8f0c9cb305d3a228823c/hero.png?w=1200&fm=webp"
            alt=""
          />
        </div>
      </div>
    );
  }
}

// Solutions

export class Solution extends React.Component {
  render() {
    return (
      <div className="solution">
        <div className="solutionUpBlock">
          <div className="solutionTitle">
            <h1 className="solutionH1">
              It’s more than work. It’s a way of working together.
            </h1>
            <p className="solutionP1">
              Start with a Trello board, lists, and cards. Customize and expand
              with more features as your teamwork grows. Manage projects,
              organize tasks, and build team spirit—all in one place.
            </p>
            <button className="buttonSolution">Start Doing</button>
          </div>
        </div>
        <div className="solutionDownBlock">
          <img
            src="https://images.ctfassets.net/rz1oowkt5gyp/7pYWhpQ3vnntxoShaImNws/777fabbf069416489167ab92027ce086/board.png?w=1200&fm=webp"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export class Cont extends React.Component {
  render() {
    return (
      <div
        style={{ flexDirection: this.props.ltr ? "row" : "row-reverse" }}
        className="cont"
      >
        <div className="leftBlock">
          <img src={this.props.src} alt="" />
        </div>
        <div className="rightBlock">
          <p>{this.props.text}</p>
          <h1>{this.props.titleInfo}</h1>
          <p className="2">{this.props.titleInfo2}</p>
        </div>
      </div>
    );
  }
}

export default Header;
