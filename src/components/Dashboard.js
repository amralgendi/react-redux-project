import { connect } from "react-redux";
import Question from "./Question";
import { useEffect, useState } from "react";

function Dashboard({ users, answered, unanswered }) {
  const [questionType, setQuestionType] = useState("unanswered");

  return (
    <div className="dashboard">
      <div className="question-type">
        <div className="click" onClick={() => setQuestionType("unanswered")}>
          Unanswered
        </div>
        <div className="click" onClick={() => setQuestionType("answered")}>
          Answered
        </div>
      </div>
      <ul>
        {questionType === "unanswered"
          ? unanswered.map((id) => (
              <li key={id}>
                <Question setQuestionType={setQuestionType} id={id} />
              </li>
            ))
          : answered.map((id) => (
              <li key={id}>
                <Question setQuestionType={setQuestionType} id={id} />
              </li>
            ))}
      </ul>
    </div>
  );
}

function mapStateToProps({ questions, authedUser, users }, { id }) {
  const questionids = Object.keys(questions);
  const answered = questionids
    .filter(
      (id) =>
        questions[id].optionOne.votes.includes(authedUser) ||
        questions[id].optionTwo.votes.includes(authedUser)
    )
    .sort((a, b) => (questions[b].timestamp = questions[a].timestamp));
  const unanswered = questionids
    .filter(
      (id) =>
        !questions[id].optionOne.votes.includes(authedUser) &&
        !questions[id].optionTwo.votes.includes(authedUser)
    )
    .sort((a, b) => (questions[b].timestamp = questions[a].timestamp));

  return {
    authedUser,
    users,
    answered,
    unanswered,
  };
}

export default connect(mapStateToProps)(Dashboard);
