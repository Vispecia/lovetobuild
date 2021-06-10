import "./App.css";
import "./css/base.css";
import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Intro from "./components/Intro";
import GridList from "./components/GridList";
import { Button } from "@material-ui/core";
import CircularButton from "./components/CircularButton";

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
  });

  const [objective, setObjective] = useState([
    {
      id: 1,
      type: "Objective 1",
      text: "Content here..",
    },
    {
      id: 2,
      type: "Objective 2",
      text: "Content here..",
    },
    {
      id: 3,
      type: "Objective 3",
      text: "Content here..",
    },
  ]);
  const [events, setEvents] = useState([
    {
      id: 1,
      type: "Event 1",
      text: "Content here..",
    },
    {
      id: 2,
      type: "Event 2",
      text: "Content here..",
    },
    {
      id: 3,
      type: "Event 3",
      text: "Content here..",
    },
  ]);
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      type: "Team Member 1",
      text: "Content here..",
    },
    {
      id: 2,
      type: "Team Member 2",
      text: "Content here..",
    },
    {
      id: 3,
      type: "Team Member 3",
      text: "Content here..",
    },
  ]);

  return (
    <div>
      <Navbar />
      <div data-scroll-container>
        <Header />
        <Intro />
        {/* <section data-scroll-section style={{backgroundColor:'#6F4E37'}}>
        <h2 data-scroll data-scroll-speed="1">Waadooo</h2>
        <p data-scroll data-scroll-speed="2">😬</p>
    </section> */}

        <section data-scroll-section id="objectives">
          <h2>Objectives</h2>
          <GridList list={objective} />
        </section>

        <section
          style={{ backgroundColor: "yellow" }}
          data-scroll-section
          id="events"
        >
          <h2>Events</h2>
          <GridList list={events} />
        </section>

        <section data-scroll-section id="team">
          <h2>Team</h2>
          <GridList list={teamMembers} circle />
        </section>

        <section
          data-scroll-section
          id="join"
          style={{ backgroundColor: "#1B98F5" }}
        >
          <h2>Join the community</h2>
          <div
            data-scroll
            data-scroll-speed="2"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <CircularButton text="Mentor" />
            <CircularButton text="Student" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
