import { showLoading, hideLoading } from 'react-redux-loading';
import { populateData } from '../utils/api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return populateData()
            .then(({questions, users}) => {
              dispatch(receiveQuestions(questions));
              dispatch(receiveUsers(users));
              dispatch(hideLoading());
            });
  }
}