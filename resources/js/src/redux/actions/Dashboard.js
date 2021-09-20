import axios from 'axios';
import { fetchStart, fetchSuccess } from './Common';
import { SET_DASHBOARD_DATA } from '../../@jumbo/constants/ActionTypes';

export const fetchDashboardData = () => {
  return dispatch => {
    dispatch(fetchStart());
    axios.get('/users', { params: { searchText: 'John' } }).then(({ data }) => {
      dispatch(fetchSuccess());
      dispatch({
        type: SET_DASHBOARD_DATA,
        payload: data.users,
      });
    });
  };
};
