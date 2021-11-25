import { connect } from "react-redux";
import User from "./User";

function Login({ users, authedUser }) {
  console.log(users);
  return (
    <div>
      <h2>Log in using the following Users</h2>
      <ul>
        {Object.keys(users).map((user) => (
          <li className="click" key={user}>
            <User id={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps({ users, authedUser }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(Login);
