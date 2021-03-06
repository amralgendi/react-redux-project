import { connect } from "react-redux";

function Leaderboard({ usersId, users }) {
  return (
    <div>
      <div>
        <ul>
          {usersId.map((user) => (
            <li key={users[user].id}>
              <div className="question">
                <div>Name: {users[user].name}</div>
                <img
                  src={users[user].avatarURL}
                  style={{ width: "70px", height: "70px", margin: "auto" }}
                  alt={users[user].name}
                />
                <div>
                  Number of Answers: {Object.keys(users[user].answers).length}
                </div>
                <div>Number of Questions: {users[user].questions.length}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function mapStateToProps({ users }) {
  return {
    usersId: Object.keys(users).sort((a, b) => {
      if (
        Object.keys(users[b].answers).length -
          Object.keys(users[a].answers).length ===
        0
      ) {
        return users[b].questions.length - users[a].questions.length;
      } else {
        return (
          Object.keys(users[b].answers).length -
          Object.keys(users[a].answers).length
        );
      }
    }),
    users,
  };
}
export default connect(mapStateToProps)(Leaderboard);
