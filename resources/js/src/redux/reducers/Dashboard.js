import { SET_DASHBOARD_DATA } from '../../@jumbo/constants/ActionTypes';

const INIT_STATE = {
  dashboardData: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_DASHBOARD_DATA: {
      return { ...state, dashboardData: action.payload };
    }
    default:
      return state;
  }
};
