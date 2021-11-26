import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const QuestionDetails = ({ questions, authedUser, users }) => {
  const navigate = useNavigate();
  const { questionId } = useParams();
  const question = questions[questionId];
  const user = users[question.author];

  console.log(user);
  if (!question) {
    window.location.replace("/error");
  }

  return (
    <div className="question">
      <h1>Would You Rather?</h1>
      <img
        src={user.avatarURL}
        style={{ width: "70px", height: "70px", margin: "auto" }}
        alt={user.name}
      />
      <div>created by: {user.name}</div>
      <div className="votes">
        <div
          style={{
            backgroundColor: question.optionOne.votes.includes(authedUser)
              ? "lime"
              : "initial",
          }}
        >
          <h3>{question.optionOne.text}</h3>
          <p>Number of votes: {question.optionOne.votes.length}</p>
          <p>
            {(question.optionOne.votes.length /
              (question.optionTwo.votes.length +
                question.optionOne.votes.length)) *
              100}
            %
          </p>
        </div>
        <div
          style={{
            backgroundColor: question.optionTwo.votes.includes(authedUser)
              ? "lime"
              : "initial",
          }}
        >
          <h3>{question.optionTwo.text}</h3>
          <p>Number of votes: {question.optionTwo.votes.length}</p>
          <p>
            {(question.optionTwo.votes.length /
              (question.optionTwo.votes.length +
                question.optionOne.votes.length)) *
              100}
            %
          </p>
        </div>
      </div>
      <div>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </div>
  );
};

function mapStateToProps({ questions, authedUser, users }) {
  return {
    questions,
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(QuestionDetails);
