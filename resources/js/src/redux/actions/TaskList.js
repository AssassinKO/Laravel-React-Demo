import axios from 'axios';
import { fetchError, fetchStart, fetchSuccess } from './Common';
import {
  ADD_TASK,
  ADD_TASK_LIST,
  DELETE_TASK,
  DELETE_TASK_LIST,
  GET_TASKS_COUNTS,
  SEND_MESSAGE,
  SET_FILTER_DATA,
  SET_TASK_CURRENT_USER,
  SET_TASK_DETAIL,
  SET_TASK_LIST_DATA,
  SET_TASKS_DATA,
  TOGGLE_SIDEBAR_COLLAPSED,
  UPDATE_TASK,
  UPDATE_TASK_LIST,
} from '../../@jumbo/constants/ActionTypes';

export const getTasks = filterData => {
  return dispatch => {
    dispatch(fetchStart());
    axios.get('/tasks', { params: { filterData: filterData } }).then(data => {
      if (data.status === 200) {
        dispatch(fetchSuccess());
        dispatch({
          type: SET_TASKS_DATA,
          payload: data.data,
        });
      } else {
        dispatch(fetchError('Something went wrong'));
      }
    });
  };
};

export const addTask = task => {
  return dispatch => {
    dispatch(fetchStart());
    axios.post('/tasks', { task }).then(data => {
      if (data.status === 200) {
        dispatch(fetchSuccess());
        dispatch({
          type: ADD_TASK,
          payload: data.data,
        });
      } else {
        dispatch(fetchError('Something went wrong'));
      }
    });
  };
};

export const updateTask = task => {
  return dispatch => {
    dispatch(fetchStart());
    axios.put('/tasks', { task }).then(data => {
      if (data.status === 200) {
        dispatch(fetchSuccess());
        dispatch({
          type: UPDATE_TASK,
          payload: task,
        });
      } else {
        dispatch(fetchError('Something went wrong'));
      }
    });
  };
};

export const onTaskSelect = task => {
  return dispatch => {
    dispatch({
      type: SET_TASK_DETAIL,
      payload: task,
    });
  };
};

export const deleteTask = task => {
  return dispatch => {
    dispatch(fetchStart());
    axios.delete('/tasks', { params: { task } }).then(data => {
      if (data.status === 200) {
        dispatch(fetchSuccess());
        dispatch({
          type: DELETE_TASK,
          payload: task,
        });
      } else {
        dispatch(fetchError('Something went wrong'));
      }
    });
  };
};

export const setFilterData = filterData => {
  return dispatch => {
    dispatch({
      type: SET_FILTER_DATA,
      payload: filterData,
    });
  };
};

export const sendMessage = message => {
  return dispatch => {
    dispatch({
      type: SEND_MESSAGE,
      payload: message,
    });
  };
};

export const setCurrentUser = message => {
  return dispatch => {
    dispatch({
      type: SET_TASK_CURRENT_USER,
      payload: message,
    });
  };
};

export const toggleExpandSidebar = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_SIDEBAR_COLLAPSED,
    });
  };
};

export const getTaskList = () => {
  return dispatch => {
    dispatch(fetchStart());
    axios.get('/task_list').then(data => {
      if (data.status === 200) {
        dispatch(fetchSuccess());
        dispatch({
          type: SET_TASK_LIST_DATA,
          payload: data.data.taskList,
        });
      } else {
        dispatch(fetchError('Something went wrong'));
      }
    });
  };
};

export const addTaskList = taskList => {
  return dispatch => {
    dispatch(fetchStart());
    axios.post('/task_list', { taskList }).then(data => {
      if (data.status === 200) {
        dispatch(fetchSuccess());
        dispatch({
          type: ADD_TASK_LIST,
          payload: data.data,
        });
      } else {
        dispatch(fetchError('Something went wrong'));
      }
    });
  };
};

export const updateTaskLIst = taskList => {
  return dispatch => {
    dispatch(fetchStart());
    axios.put('/task_list', { taskList }).then(data => {
      if (data.status === 200) {
        dispatch(fetchSuccess());
        dispatch({
          type: UPDATE_TASK_LIST,
          payload: taskList,
        });
      } else {
        dispatch(fetchError('Something went wrong'));
      }
    });
  };
};

export const deleteTaskLIst = taskList => {
  return dispatch => {
    dispatch(fetchStart());
    axios.delete('/task_list', { params: { taskList } }).then(data => {
      if (data.status === 200) {
        dispatch(fetchSuccess());
        dispatch({
          type: DELETE_TASK_LIST,
          payload: taskList,
        });
      } else {
        dispatch(fetchError('Something went wrong'));
      }
    });
  };
};

export const getTasksCounts = () => {
  return dispatch => {
    axios.get('/tasks/counter').then(data => {
      if (data.status === 200) {
        dispatch({ type: GET_TASKS_COUNTS, payload: data.data });
      } else {
        dispatch(fetchError('Something went wrong'));
      }
    });
  };
};
