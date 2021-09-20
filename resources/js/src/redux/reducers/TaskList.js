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
import { users } from '../../@fake-db/apps/todo';

const INIT_STATE = {
  currentUser: null,
  tasks: [],
  taskLists: [],
  currentTask: null,
  isSideBarCollapsed: false,
  filterData: {
    filterType: 1,
    taskList: 0,
  },
  counter: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_TASK_CURRENT_USER: {
      return { ...state, currentUser: action.payload };
    }
    case SET_TASKS_DATA: {
      return { ...state, tasks: action.payload };
    }
    case SET_TASK_LIST_DATA: {
      return { ...state, taskLists: action.payload };
    }
    case SET_TASK_DETAIL: {
      return {
        ...state,
        currentTask: action.payload,
        isSideBarCollapsed: true,
      };
    }
    case SEND_MESSAGE: {
      return {
        ...state,
        currentTask: {
          ...state.currentTask,
          comments: state.currentTask.comments.concat({
            id: new Date().getTime(),
            user: users[0],
            message: action.payload,
            createdAt: '',
          }),
        },
      };
    }
    case SET_FILTER_DATA: {
      return { ...state, filterData: { ...state.filterData, ...action.payload } };
    }
    case DELETE_TASK_LIST: {
      return {
        ...state,
        taskLists: state.taskLists.filter(item => item.id !== action.payload.id),
      };
    }
    case ADD_TASK_LIST: {
      return { ...state, taskLists: state.taskLists.concat(action.payload) };
    }
    case ADD_TASK: {
      return { ...state, tasks: state.tasks.concat(action.payload) };
    }
    case UPDATE_TASK: {
      return {
        ...state,
        tasks: state.tasks.map(item => (item.id === action.payload.id ? action.payload : item)),
      };
    }
    case DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter(item => item.id !== action.payload.id),
        currentTask: null,
        isSideBarCollapsed: false,
      };
    }
    case UPDATE_TASK_LIST: {
      return {
        ...state,
        taskLists: state.taskLists.map(item => (item.id === action.payload.id ? action.payload : item)),
      };
    }
    case TOGGLE_SIDEBAR_COLLAPSED: {
      return { ...state, isSideBarCollapsed: !state.isSideBarCollapsed };
    }

    case GET_TASKS_COUNTS: {
      return {
        ...state,
        counter: action.payload,
      };
    }
    default:
      return state;
  }
};
