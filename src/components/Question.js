import { connect } from "react-redux";
import { handleVote } from "../actions/shared";
import { _saveQuestionAnswer } from "../utils/_DATA";
import { AiOutlineHeart } from "react-icons/fa";
import { FaVoteYea } from "react-icons/fa";
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
        <div className="click" onClick={() => vote("optionOne")}>
          <h4>{question.optionOne.text}</h4>
          <h5>
            {question.optionOne.votes.length} {votedOne && <FaVoteYea />}
          </h5>
        </div>
        <div className="click" onClick={() => vote("optionTwo")}>
          <h4>{question.optionTwo.text}</h4>
          <h5>
            {question.optionTwo.votes.length}
            {votedTwo && (
              <FaVoteYea style={{ width: "20px", height: "20px" }} />
            )}
          </h5>
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
