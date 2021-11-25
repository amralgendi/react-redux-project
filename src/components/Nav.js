import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Link } from "react-router-dom";

function Nav({ dispatch, user }) {
  console.log(user);
  function logout() {
    dispatch(setAuthedUser(null));
  }
  return (
    <nav>
      <div>{user.name}</div>
      <div className="options">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/leaderboard">Leaderboard</Link>
        </div>
        <div>
          <Link to="/add">New Poll</Link>
        </div>

        <div className="click" onClick={logout}>
          Log Out
        </div>
      </div>
    </nav>
  );
}

function mapStateToProps({ authedUser, users }) {
  return {
    user: users[authedUser],
  };
}

export default connect(mapStateToProps)(Nav);
