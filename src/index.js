import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./App";
import { HomeSection } from "./App";
import { Solution } from "./App";
import { Cont } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <HomeSection />
    <Solution />
    <Cont
      ltr={true}
      text="CHOOSE A VIEW"
      titleInfo="The board is just the beginning"
      titleInfo2="Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more."
      src="https://images.ctfassets.net/rz1oowkt5gyp/4gcdup5C0Z1rQEQDGfeWth/71156837ac2d75293bf0eec8010aeb6e/view.svg"
    />
    <Cont
      ltr={false}
      text="CHOOSE A VIEW"
      titleInfo="The board is just the beginning"
      titleInfo2="Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more."
      src="https://images.ctfassets.net/rz1oowkt5gyp/4B1RPRoUspHQXgYCRAndBX/466053fb07ff2cdc0ae06649d5f30d8f/card-back.svg"
    />
    <Cont
      ltr={true}
      text="CHOOSE A VIEW"
      titleInfo="The board is just the beginning"
      titleInfo2="Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more."
      src="https://images.ctfassets.net/rz1oowkt5gyp/1zR830Rgv5hpZbwuiyAFkq/326d72f720d090342f0744a8deb8b727/automation.png?w=1200&fm=webp"
    />
    <Cont
      ltr={false}
      text="CHOOSE A VIEW"
      titleInfo="The board is just the beginning"
      titleInfo2="Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more."
      src="https://images.ctfassets.net/rz1oowkt5gyp/17AXIwjhGkuPEpvcWzwoIJ/e6e767d503809a89be375846ac81bbef/power-ups.png?w=1200&fm=webp"
    />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
