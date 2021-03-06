import "../App.css";
import { connect } from "react-redux";
import { receiveData } from "../actions/shared";
import { useEffect } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";
import QuestionDetails from "./QuestionDetails";
import Error from "./Error";

function App({ authedUser, loggedIn, dispatch }) {
  useEffect(() => {
    dispatch(receiveData());
  }, [dispatch]);

  return (
    <div className="App">
      {loggedIn === null ? (
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
              element={<QuestionDetails />}
            />
            <Route exact path="/error" element={<Error />} />
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
    questions,
  };
}

export default connect(mapStateToProps)(App);
