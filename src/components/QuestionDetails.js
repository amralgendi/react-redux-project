import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";

const QuestionDetails = ({ questions, authedUser, users }) => {
  const navigate = useNavigate();
  const { questionId } = useParams();
  const question = questions[questionId];

  console.log(question);
  let user = null;
  if (question) {
    user = users[question.author];
    console.log(user);
  }
  useEffect(() => {
    if (!question) navigate("/error");
  }, [question, navigate]);

  return (
    <div className="question">
      <h1>Would You Rather?</h1>
      <img
        src={user && user.avatarURL}
        style={{ width: "70px", height: "70px", margin: "auto" }}
        alt={user && user.name}
      />
      <div>created by: {user && user.name}</div>
      {question && (
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
      )}
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
