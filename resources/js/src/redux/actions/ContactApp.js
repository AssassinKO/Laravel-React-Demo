//For expanding sidebar
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
import { fetchError, fetchStart, fetchSuccess } from './Common';
import axios from 'axios';

//For expanding sidebar
export const toggleExpandSidebar = value => {
  return dispatch => {
    dispatch({
      type: TOGGLE_SIDEBAR_COLLAPSED,
      payload: value,
    });
  };
};

//For setting Filtertype
export const setFilterType = filterType => {
  return {
    type: SET_FILTER_TYPE,
    payload: filterType,
  };
};

//for getting labels list
export const getLabelsList = () => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .get('/contact/labels')
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_LABELS_LIST, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for adding new label
export const addNewLabel = label => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .post('/contact/labels', { label })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: ADD_LABEL, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//For Deleting Label
export const deleteLabel = labelId => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .put('/contact/labels/delete', { labelId })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: DELETE_LABEL_ITEM, payload: labelId });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//For Editing Label
export const updateLabel = label => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .put('/contact/labels', { label })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: UPDATE_LABEL_ITEM, payload: label });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for getting contacts list
export const getContactsList = params => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .get('/contact', { params })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_CONTACTS_LIST, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

export const setCurrentContact = contact => {
  return dispatch => {
    dispatch({
      type: SET_CURRENT_CONTACT,
      payload: contact,
    });
  };
};

//for creating new contact
export const createContact = contact => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .post('/contact', { contact })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: CREATE_CONTACT, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for updating contact through detail page
export const onUpdateContact = contact => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .put('/contact', { contact })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: UPDATE_CONTACT, payload: contact });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for updating contacts starred status(through listing)
export const updateStarredStatus = (contactIds, status) => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .put('/contact/update-starred', { contactIds, status })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({
            type: UPDATE_STARRED_STATUS,
            payload: { contactIds, status },
          });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for updating mails folder(through listing)
export const deleteContact = contactIds => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .put('/contact/delete', { contactIds })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: DELETE_CONTACT, payload: contactIds });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for updating contacts label(through listing)
export const updateContactsLabel = (contactIds, label) => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .put('/contact/update-label', { contactIds, label })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: UPDATE_CONTACT_LABEL, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for getting contact categories(in sidebar) count
export const getContactCounts = () => {
  return dispatch => {
    axios
      .get('/contact/counter')
      .then(data => {
        if (data.status === 200) {
          dispatch({ type: GET_CONTACT_COUNTS, payload: data.data });
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};
