import { useState } from "react";
import { connect } from "react-redux";
import { handleNewPoll } from "../actions/questions";
import { useNavigate } from "react-router-dom";

function NewPoll({ authedUser, dispatch }) {
  const navigate = useNavigate();
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [submit, setSubmit] = useState(null);

  // { optionOneText, optionTwoText, author }

  return (
    <div>
      <h2>Would you Rather?</h2>
      <div style={{ width: "60%", margin: "auto" }} className="options">
        <div>
          <input
            onChange={(e) => {
              setOptionOne(e.target.value);
            }}
            type="text"
            placeholder="First Option"
          />
        </div>
        <div>
          <input
            onChange={(e) => {
              setOptionTwo(e.target.value);
            }}
            type="text"
            placeholder="Second Option"
          />
        </div>
      </div>
      <input
        onClick={() => {
          if (optionOne !== "" && optionTwo !== "") {
            dispatch(handleNewPoll(optionOne, optionTwo, authedUser));
            setSubmit(true);
            setTimeout(() => navigate("/"), 1000);
          } else {
            setSubmit(false);
          }
        }}
        type="submit"
      />
      <div>
        {submit === true && "done"}{" "}
        {submit === false && "Both options must be filled"}
      </div>
    </div>
  );
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(NewPoll);
