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

//for getting unread mail counts
export const getMailCounts = () => {
  return dispatch => {
    axios
      .get('/counter')
      .then(data => {
        if (data.status === 200) {
          dispatch({ type: GET_MAIL_COUNTS, payload: data.data });
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for getting labels list
export const getLabelsList = () => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .get('/labels')
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
      .post('/labels', { label })
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
      .put('/labels/delete', { labelId })
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
      .put('/labels', { label })
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

//for getting connections list
export const getConnectionsList = () => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .get('/connections')
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_CONNECTIONS_LIST, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

export const addNewConnection = connection => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .post('/connections', { connection })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: ADD_CONNECTION, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

export const removeConnection = connection => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .delete('/connections', { params: { connection } })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: REMOVE_CONNECTION, payload: connection });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for getting mails list
export const getMailsList = params => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .get('/mails', { params })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_MAILS_LIST, payload: data.data });
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
export const updateMailsFolder = (mailIds, folder) => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .put('/mailApp/update-folder', { mailIds, folder })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: UPDATE_MAIL_FOLDER, payload: mailIds });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for updating mails label(through listing)
export const updateMailsLabel = (mailIds, label) => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .put('/mailApp/update-label', { mailIds, label })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: UPDATE_MAIL_LABEL, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for updating mails favorite status(through listing)
export const updateFvrtStatus = (mailIds, status) => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .put('/mailApp/update-favorite', { mailIds, status })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: UPDATE_FAVORITE_STATUS, payload: { mailIds, status } });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for updating mails read status(through listing)
export const updateReadStatus = (mailIds, status) => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .put('/mailApp/update-read', { mailIds, status })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: UPDATE_READ_STATUS, payload: { mailIds, status } });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for updating mails Important status(through listing)
export const updateImprtntStatus = (mailIds, status) => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .put('/mailApp/update-important', { mailIds, status })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: UPDATE_IMPORTANT_STATUS, payload: { mailIds, status } });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for Composing mail
export const composeMail = mail => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .post('/mail', { mail })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: COMPOSE_MAIL, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for getting  mail detail
export const onGetSelectedMail = mailId => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .get('/mail', { params: { mailId } })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_SELECTED_MAIL, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for updating mail through detail page
export const onUpdateMail = mail => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .put('/mail', { mail })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: UPDATE_SELECTED_MAIL, payload: mail });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for replying to mail
export const onReplyToMail = (id, mail) => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .put(`/mail/reply`, { id, mail })
      .then(data => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: UPDATE_SELECTED_MAIL, payload: data.data });
        } else {
          dispatch(fetchError('Something went wrong'));
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for nullifying mail details and showing mail list
export const onNullifyMail = () => {
  return {
    type: NULLIFY_SELECTED_MAIL,
  };
};
