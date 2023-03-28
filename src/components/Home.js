import React from "react";
import Navbar from "./Navbar";
import matchImage from "../assets/matches.png";
import playerImage from "../assets/player.svg";
import recordImage from "../assets/records.svg";
import rankingImage from "../assets/rankings.svg";
import { Link } from "react-router-dom";

const Home = ({ liveScore, submit2, submitrank }) => {
  return (
    <>
      <Navbar liveScore={liveScore} submit2={submit2} submitrank={submitrank} />
      <div className="home-page1">
        <div className="sub-page1">
          <img src={matchImage} alt="image" className="match-img" />
        </div>
        <div className="sub-page2">
          <h1>Bringing the game to you, every ball of the way.</h1>
          <h4>Catch the action live!</h4>
          <Link to="/profile">
            <button className="live-btn" onClick={liveScore}>
              Live Matches
            </button>
          </Link>
        </div>
      </div>
      <div className="home-page2">
        <div className="sub-page2">
          <h1>Uncovering the player behind the statistics</h1>
          <h4>Get to know the ace behind the crease</h4>
          <Link to="/player">
            <button className="live-btn">Player Profile</button>
          </Link>
        </div>
        <div className="sub-page1">
          <img src={playerImage} alt="player" className="player-img" />
        </div>
      </div>
      <div className="home-page1">
        <div className="sub-page1">
          <img src={recordImage} alt="image" className="match-img" />
        </div>
        <div className="sub-page2">
          <h1>Chronicling the milestones of cricket legends</h1>
          <h4>Making history, one record at a time.</h4>
          <Link to="/record">
            <button className="live-btn" onClick={submit2}>
              Records
            </button>
          </Link>
        </div>
      </div>
      <div className="home-page2">
        <div className="sub-page2">
          <h1>
            Elevating the elite: Ranking the top players and teams in the game
          </h1>
          <h4>Ranking the best of the best in cricket</h4>
          <Link to="/ranking">
            <button className="live-btn" onClick={submitrank}>
              Rankings
            </button>
          </Link>
        </div>
        <div className="sub-page1">
          <img src={rankingImage} alt="player" className="player-img" />
        </div>
      </div>
    </>
  );
};

export default Home;
