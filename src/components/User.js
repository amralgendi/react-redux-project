import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

function User({ dispatch, user }) {
  function setNewAuthedUser(id) {
    dispatch(setAuthedUser(id));
  }
  return <div onClick={() => setNewAuthedUser(user.id)}>{user.name}</div>;
}

function mapStateToProps({ users, authedUser }, { id }) {
  return {
    user: users[id],
    authedUser,
  };
}

export default connect(mapStateToProps)(User);
