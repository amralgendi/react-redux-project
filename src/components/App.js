import "../App.css";
import { connect } from "react-redux";
import { receiveData } from "../actions/shared";
import { useEffect, useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";

function App(props) {
  useEffect(() => {
    props.dispatch(receiveData());
  }, []);

  console.log(props);
  return (
    <div className="App">
      {props.loggedIn === null ? (
        <Login />
      ) : (
        <>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/add" element={<NewPoll />} />
            <Route exact path="/leaderboard" element={<Leaderboard />} />
            <Route
              exact
              path="/questions/:questionId"
              element={<div>sup</div>}
            />
          </Routes>
        </>
      )}
    </div>
  );
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    loggedIn: authedUser,
    users,
  };
}

export default connect(mapStateToProps)(App);
