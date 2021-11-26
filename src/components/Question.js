import { connect } from "react-redux";
import { handleVote } from "../actions/shared";
import { Link } from "react-router-dom";

function Question({ question, id, authedUser, dispatch, setQuestionType }) {
  const votedOne = question.optionOne.votes.includes(authedUser);
  const votedTwo = question.optionTwo.votes.includes(authedUser);

  console.log(question);

  function vote(answer) {
    if (votedOne || votedTwo) return alert("AlreadyVoted");
    console.log(authedUser, id, answer);
    dispatch(
      handleVote({
        authedUser,
        qid: id,
        answer,
      })
    );
    setQuestionType("answered");
  }
  return (
    <div className="question">
      <Link to={`/questions/${question.id}`} className="question-link">
        More...
      </Link>
      <h2>Would you rather?</h2>
      <h5>by: {question.author === authedUser ? "You" : question.author}</h5>
      <div className="votes">
        <div
          style={{
            backgroundColor: question.optionOne.votes.includes(authedUser)
              ? "lime"
              : "transparent",
          }}
          className="click vote-option"
          onClick={() => vote("optionOne")}
        >
          <h4>{question.optionOne.text}</h4>
          <h5>{question.optionOne.votes.length}</h5>
        </div>
        <div
          style={{
            backgroundColor: question.optionTwo.votes.includes(authedUser)
              ? "lime"
              : "transparent",
          }}
          className="click vote-option"
          onClick={() => vote("optionTwo")}
        >
          <h4>{question.optionTwo.text}</h4>
          <h5>{question.optionTwo.votes.length}</h5>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ questions, authedUser }, { id }) {
  return {
    question: questions[id],
    authedUser,
  };
}

export default connect(mapStateToProps)(Question);
