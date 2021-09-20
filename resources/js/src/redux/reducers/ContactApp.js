import {
  ADD_LABEL,
  CREATE_CONTACT,
  DELETE_CONTACT,
  DELETE_LABEL_ITEM,
  GET_CONTACT_COUNTS,
  GET_CONTACTS_LIST,
  GET_LABELS_LIST,
  SET_CURRENT_CONTACT,
  SET_FILTER_TYPE,
  TOGGLE_SIDEBAR_COLLAPSED,
  UPDATE_CONTACT,
  UPDATE_CONTACT_LABEL,
  UPDATE_LABEL_ITEM,
  UPDATE_STARRED_STATUS,
} from '../../@jumbo/constants/ActionTypes';

const INIT_STATE = {
  isSideBarCollapsed: false,
  labelsList: [],
  filterType: {
    selectedFolder: 'contacts',
    selectedLabel: '',
    searchText: '',
  },
  contactsList: [],
  currentContact: null,
  totalContacts: null,
  counter: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR_COLLAPSED: {
      return {
        ...state,
        isSideBarCollapsed: action.payload ? action.payload : !state.isSideBarCollapsed,
      };
    }

    case SET_FILTER_TYPE: {
      return {
        ...state,
        filterType: action.payload,
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

    case GET_CONTACTS_LIST: {
      return {
        ...state,
        contactsList: action.payload.folderContacts,
        totalContacts: action.payload.total,
      };
    }

    case SET_CURRENT_CONTACT: {
      return {
        ...state,
        currentContact: action.payload,
      };
    }

    case CREATE_CONTACT: {
      let updatedList = state.contactsList;
      let updatedCount = state.totalContacts;
      if (state.filterType.selectedFolder === 'contacts') {
        updatedList = [action.payload, ...updatedList];
        updatedCount = updatedCount + 1;
      }
      return {
        ...state,
        contactsList: updatedList,
        totalContacts: updatedCount,
      };
    }

    case UPDATE_CONTACT: {
      return {
        ...state,
        contactsList: state.contactsList.map(item => (item.id === action.payload.id ? action.payload : item)),
      };
    }

    case UPDATE_STARRED_STATUS: {
      const { contactIds, status } = action.payload;
      let updatedList = state.contactsList.map(contact => {
        if (contactIds.includes(contact.id)) {
          contact.starred = status;
          return contact;
        }
        return contact;
      });
      if (!status && state.filterType.selectedFolder === 'starred') {
        updatedList = updatedList.filter(item => !contactIds.includes(item.id));
      }
      return {
        ...state,
        contactsList: updatedList,
      };
    }

    case DELETE_CONTACT: {
      let updatedList = state.contactsList;
      let updatedCount = state.totalContacts;
      if (state.filterType.selectedFolder !== 'trash') {
        updatedList = updatedList.filter(contact => !action.payload.includes(contact.id));
        updatedCount = updatedCount - action.payload.length;
      }
      return {
        ...state,
        contactsList: updatedList,
        totalContacts: updatedCount,
      };
    }

    case UPDATE_CONTACT_LABEL: {
      let contactIds = action.payload.map(contact => contact.id);
      const updatedList = state.contactsList.map(mail => {
        if (contactIds.includes(mail.id)) {
          return action.payload.find(selectedContact => selectedContact.id === mail.id);
        } else {
          return mail;
        }
      });
      return {
        ...state,
        contactsList: updatedList,
      };
    }

    case GET_CONTACT_COUNTS: {
      return {
        ...state,
        counter: action.payload,
      };
    }

    default:
      return state;
  }
};
