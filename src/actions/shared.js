import { _getQuestions, _getUsers } from "../utils/_DATA";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { _saveQuestionAnswer } from "../utils/_DATA";

export function receiveData() {
  return (dispatch) => {
    Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}

export function handleVote(vote) {
  return (dispatch) => {
    _saveQuestionAnswer(vote).then(dispatch(receiveData()));
  };
}
