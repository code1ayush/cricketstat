import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import noMatch from "../assets/nomatch.svg";
import "../css/player.css";

const Matches = ({ live, liveScore }) => {
  console.log(live);
  return (
    <>
      <Navbar />
      <div className="main-container">
        {live.Stages ? (
          <div className="live-container1">
            <div className="live-navbar">
              <h2 className="live-heading">Live Matches</h2>
              <div className="under-line">
                <Link to="/">
                  <AiOutlineHome className="live-nav" />
                </Link>
              </div>
            </div>
            {live.Stages.map((match) => {
              return (
                <>
                  <article className="live-container2">
                    <div className="mini-container">
                      <div className="mini-container1">{match.Cnm}</div>
                      <div className="mini-container2"> {match.Scd}</div>
                    </div>
                    {match.Events.map((result) => {
                      return (
                        <>
                          <div className="mini2">
                            <div className="f3">{result.ErnInf}</div>

                            <div className="team1">
                              <div>
                                {result.T1.map((team) => {
                                  return <>{team.Abr}</>;
                                })}
                              </div>

                              <div className="f4">
                                {result.Tr1C1}/{result.Tr1CW1} ({result.Tr1CO1}){" "}
                                <span>
                                  {result.Tr1C2
                                    ? ` &  ${result.Tr1C2}/${result.Tr1CW2} (${result.Tr1CO2}) `
                                    : []}
                                </span>{" "}
                              </div>
                            </div>

                            <div className="team1">
                              <div>
                                {result.T2.map((team) => {
                                  return <>{team.Abr}</>;
                                })}
                              </div>

                              {result.Tr2C1 ? (
                                <div className="f5">
                                  {result.Tr2C1}/{result.Tr2CW1} (
                                  {result.Tr2CO1}){" "}
                                  <span>
                                    {result.Tr2C2
                                      ? `& ${result.Tr2C2}/${result.Tr2CW2} (${result.Tr2CO2}) `
                                      : []}
                                  </span>{" "}
                                </div>
                              ) : (
                                []
                              )}
                            </div>

                            <div className="f1"> {result.ECo}</div>
                            <div className="f2"> {result.EpsL}</div>
                          </div>
                        </>
                      );
                    })}
                  </article>
                </>
              );
            })}
          </div>
        ) : (
          <div className="no-match1">
            <img src={noMatch} alt="" className="no-match" />
            <p>Currently no live matches present....</p>
            <p>
              Back <Link to="/">Home</Link>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Matches;
