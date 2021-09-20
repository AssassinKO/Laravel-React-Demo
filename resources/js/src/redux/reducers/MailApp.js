import {
  ADD_CONNECTION,
  ADD_LABEL,
  COMPOSE_MAIL,
  DELETE_LABEL_ITEM,
  GET_CONNECTIONS_LIST,
  GET_LABELS_LIST,
  GET_MAIL_COUNTS,
  GET_MAILS_LIST,
  GET_SELECTED_MAIL,
  NULLIFY_SELECTED_MAIL,
  REMOVE_CONNECTION,
  REPLY_TO_MAIL,
  SET_FILTER_TYPE,
  TOGGLE_SIDEBAR_COLLAPSED,
  UPDATE_FAVORITE_STATUS,
  UPDATE_IMPORTANT_STATUS,
  UPDATE_LABEL_ITEM,
  UPDATE_MAIL_FOLDER,
  UPDATE_MAIL_LABEL,
  UPDATE_READ_STATUS,
  UPDATE_SELECTED_MAIL,
} from '../../@jumbo/constants/ActionTypes';

const INIT_STATE = {
  isSideBarCollapsed: false,
  labelsList: [],
  connectionsList: [],
  mailsList: [],
  filterType: {
    selectedFolder: 'inbox',
    selectedFilter: '',
    selectedLabel: '',
    searchText: '',
    page: 0,
  },
  selectedMail: null,
  counter: null,
  totalMailCount: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR_COLLAPSED: {
      return {
        ...state,
        isSideBarCollapsed: action.payload ? action.payload : !state.isSideBarCollapsed,
      };
    }

    case GET_MAIL_COUNTS: {
      return {
        ...state,
        counter: action.payload,
      };
    }

    case SET_FILTER_TYPE: {
      return {
        ...state,
        filterType: action.payload,
        selectedMail: null,
      };
    }

    case GET_LABELS_LIST: {
      return { ...state, labelsList: action.payload };
    }

    case ADD_LABEL: {
      return {
        ...state,
        labelsList: state.labelsList.concat(action.payload),
      };
    }

    case UPDATE_LABEL_ITEM: {
      return {
        ...state,
        labelsList: state.labelsList.map(item => (item.id === action.payload.id ? action.payload : item)),
      };
    }

    case DELETE_LABEL_ITEM: {
      return {
        ...state,
        labelsList: state.labelsList.filter(item => item.id !== action.payload),
      };
    }

    case GET_CONNECTIONS_LIST: {
      return { ...state, connectionsList: action.payload };
    }

    case ADD_CONNECTION: {
      return {
        ...state,
        connectionsList: state.connectionsList.concat(action.payload),
      };
    }

    case REMOVE_CONNECTION: {
      return {
        ...state,
        connectionsList: state.connectionsList.filter(connection => connection.email !== action.payload.email),
      };
    }

    case GET_MAILS_LIST: {
      return {
        ...state,
        mailsList: action.payload.list,
        totalMailCount: action.payload.total,
        selectedMail: null,
      };
    }

    case UPDATE_MAIL_FOLDER: {
      const updatedList = state.mailsList.filter(mail => !action.payload.includes(mail.id));
      return {
        ...state,
        mailsList: updatedList,
        totalMailCount: state.totalMailCount - action.payload.length,
      };
    }

    case UPDATE_MAIL_LABEL: {
      let mailIds = action.payload.map(mail => mail.id);
      const updatedList = state.mailsList.map(mail => {
        if (mailIds.includes(mail.id)) {
          return action.payload.find(selectedMail => selectedMail.id === mail.id);
        } else {
          return mail;
        }
      });
      return {
        ...state,
        mailsList: updatedList,
      };
    }

    case UPDATE_FAVORITE_STATUS: {
      const { mailIds, status } = action.payload;
      const updatedList = state.mailsList.map(mail => {
        if (mailIds.includes(mail.id)) {
          mail.favorite = status;
          return mail;
        }
        return mail;
      });
      return {
        ...state,
        mailsList: updatedList,
      };
    }

    case UPDATE_READ_STATUS: {
      const { mailIds, status } = action.payload;
      const updatedList = state.mailsList.map(mail => {
        if (mailIds.includes(mail.id)) {
          mail.read = status;
          return mail;
        }
        return mail;
      });
      return {
        ...state,
        mailsList: updatedList,
      };
    }

    case UPDATE_IMPORTANT_STATUS: {
      const { mailIds, status } = action.payload;
      const updatedList = state.mailsList.map(mail => {
        if (mailIds.includes(mail.id)) {
          mail.important = status;
          return mail;
        }
        return mail;
      });
      return {
        ...state,
        mailsList: updatedList,
      };
    }

    case COMPOSE_MAIL: {
      let updatedList = state.mailsList;
      let updatedCount = state.totalMailCount;
      if (state.filterType.selectedFolder === 'sent') {
        updatedList = [action.payload, ...updatedList];
        updatedCount = updatedCount + 1;
      }
      return {
        ...state,
        mailsList: updatedList,
        totalMailCount: updatedCount,
      };
    }

    case GET_SELECTED_MAIL: {
      return {
        ...state,
        selectedMail: action.payload,
        mailsList: [],
      };
    }

    case NULLIFY_SELECTED_MAIL: {
      return {
        ...state,
        selectedMail: null,
      };
    }

    case UPDATE_SELECTED_MAIL: {
      let updatedMail = state.selectedMail.folder === action.payload.folder ? action.payload : null;
      return {
        ...state,
        selectedMail: updatedMail,
      };
    }

    case REPLY_TO_MAIL: {
      return {
        ...state,
        selectedMail: action.payload,
      };
    }

    default:
      return state;
  }
};
