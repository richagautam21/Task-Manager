import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tasks from "./Tasks";
import "../App.css";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handledarkMode } from "../actions/darkModeAction";

const Main = () => {
  // assigning useDispatch hook of redux to a variable
  const dispatch = useDispatch();

  // calling our state from the reduxer using useSelector hook of redux
  const mode = useSelector((state) => state.darkMode);

  // destructuring isdarkMode state from mode variable called using useSelector hook of redux
  const { isdarkMode } = mode;

  // function to be fired on onChange method to switch the mode
  const switchDarkMode = () => {
    isdarkMode
      ? dispatch(handledarkMode(false))
      : dispatch(handledarkMode(true));
  };

  useEffect(() => {
    // changing color of body with dark mode in useEffect
    document.body.style.backgroundColor = isdarkMode ? "#292c35" : "#fff";
  }, [isdarkMode]);

  return (
    <Router>
      <div >
      <div id="navbar">
        <nav className={isdarkMode ? "navbar navbar-dark" : "navbar navbar-light"}>
          <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
              Task Manager
            </Link>
          <div
        id="darkmode"
        // inline styling with darkmode:  comment out to use this for example //
        /* style={{ background: isdarkMode ? "white" : "yellow" }} */
      >
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          // onChange prop to fire our internal function for changing the dark mode value
          onChange={switchDarkMode}
          // checking checked prop with dark mode state
          checked={isdarkMode}
        />
        <label htmlFor="checkbox" className="label">
          <BsMoonStarsFill color="white" />
          <BsFillSunFill color="yellow" />
          <div className="ball"></div>
        </label>
      </div>
          </div>
        </nav>
        </div>
        <Routes>
          <Route exact path="/" element={<Tasks />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
