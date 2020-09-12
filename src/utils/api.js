import {
  _saveQuestionAnswer,
  _saveQuestion,
  _getQuestions,
  _getUsers
} from './_DATA';

export function populateData() {
  return Promise.all([_getQuestions(), _getUsers()])
    .then(([questions, users]) => ({
      questions,
      users
    }));
}