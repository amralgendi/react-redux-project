const { _saveQuestionAnswer } = require("./src/utils/_DATA");

_saveQuestionAnswer("johndoe", "loxhs1bqm25b708cmbf3g", "optionOne").then(
  (res) => console.log(res)
);
