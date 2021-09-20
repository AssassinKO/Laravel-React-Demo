import moment from 'moment';
import {
  SEND_NEW_CHAT_MESSAGE,
  SEND_NEW_MEDIA_MESSAGE,
  SET_CHAT_USERS,
  SET_CONTACT_USERS,
  SET_CONVERSATION_DATA,
  SET_CURRENT_USER,
  SET_FILTER_DATA,
  TOGGLE_SIDEBAR_COLLAPSED,
} from '../../@jumbo/constants/ActionTypes';

const INIT_STATE = {
  users: [],
  contacts: [],
  conversation: [],
  currentUser: null,
  isSideBarCollapsed: false,
  filterData: {
    search: '',
  },
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_CHAT_USERS: {
      return { ...state, users: action.payload };
    }
    case SET_CONTACT_USERS: {
      return { ...state, contacts: action.payload };
    }
    case SET_CURRENT_USER: {
      return { ...state, currentUser: action.payload };
    }
    case SET_CONVERSATION_DATA: {
      return {
        ...state,
        conversation: action.payload,
      };
    }
    case SEND_NEW_CHAT_MESSAGE: {
      return {
        ...state,
        conversation: state.conversation.concat({
          id: new Date().getTime(),
          user: state.currentUser,
          message: action.payload,
          type: 'sent',
          messageType: 'text',
          sentAt: moment(),
        }),
      };
    }
    case SEND_NEW_MEDIA_MESSAGE: {
      return {
        ...state,
        conversation: state.conversation.concat({
          id: new Date().getTime(),
          user: state.currentUser,
          type: 'sent',
          messageType: 'media',
          message: 'kand',
          media: action.payload,
          sentAt: moment(),
        }),
      };
    }
    case SET_FILTER_DATA: {
      return { ...state, filterData: { ...state.filterData, ...action.payload } };
    }
    case TOGGLE_SIDEBAR_COLLAPSED: {
      return { ...state, isSideBarCollapsed: !state.isSideBarCollapsed };
    }
    default:
      return state;
  }
};
