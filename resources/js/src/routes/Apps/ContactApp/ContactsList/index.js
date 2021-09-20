import React, { useContext, useEffect, useState } from 'react';
import ListTableView from './ListTableView';
import ListGridView from './ListGridView';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsList } from '../../../../redux/actions/ContactApp';
import PropTypes from 'prop-types';
import DuplicateContactsMsg from './DuplicateContactsMsg';
import { Box } from '@material-ui/core';
import useStyles from '../index.style';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { getContactContainerHeight } from '../../../../@jumbo/constants/AppConstants';
import AppContext from '../../../../@jumbo/components/contextProvider/AppContextProvider/AppContext';
import EmptyContactResult from './EmptyContactResult';

const ContactsList = ({ width, viewMode, onShowContactDetail, onClickEditContact }) => {
  const { showFooter } = useContext(AppContext);
  const dispatch = useDispatch();
  const { filterType, contactsList } = useSelector(({ contactApp }) => contactApp);
  const [checkedContacts, setCheckedContacts] = useState([]);
  const [showDuplicateMsg, setShowDuplicateMsg] = useState(true);

  useEffect(() => {
    dispatch(getContactsList(filterType));
  }, [filterType, dispatch]);

  const handleCellCheckBox = (isChecked, id) => {
    if (isChecked) {
      setCheckedContacts(checkedContacts.concat(id));
    } else {
      setCheckedContacts(checkedContacts.filter(contactId => contactId !== id));
    }
  };

  const toggleDuplicateMsgShow = () => {
    setShowDuplicateMsg(!showDuplicateMsg);
  };

  const handleHeaderCheckBox = isChecked => {
    if (isChecked) {
      const ids = contactsList.map(contact => contact.id);
      updateCheckedContacts(ids);
    } else {
      updateCheckedContacts([]);
    }
  };

  const updateCheckedContacts = contactIds => {
    setCheckedContacts(contactIds);
  };

  const classes = useStyles({
    height: getContactContainerHeight(width, showFooter),
  });

  return contactsList.length > 0 ? (
    <Box className={classes.inBuildAppMainContent}>
      <PerfectScrollbar className={classes.perfectScrollbarContactCon}>
        {showDuplicateMsg && (
          <DuplicateContactsMsg contactsList={contactsList} toggleDuplicateMsgShow={toggleDuplicateMsgShow} />
        )}
        {viewMode === 'table' ? (
          <ListTableView
            checkedContacts={checkedContacts}
            handleCellCheckBox={handleCellCheckBox}
            handleHeaderCheckBox={handleHeaderCheckBox}
            updateCheckedContacts={updateCheckedContacts}
            onShowContactDetail={onShowContactDetail}
            onClickEditContact={onClickEditContact}
          />
        ) : (
          <ListGridView onShowContactDetail={onShowContactDetail} onClickEditContact={onClickEditContact} />
        )}
      </PerfectScrollbar>
    </Box>
  ) : (
    <Box className={classes.inBuildAppMainContent}>
      <EmptyContactResult />
    </Box>
  );
};

export default ContactsList;

ContactsList.prototype = {
  viewMode: PropTypes.string,
  onShowContactDetail: PropTypes.func,
  onClickEditContact: PropTypes.func,
};

ContactsList.defaultProps = {
  viewMode: 'table',
};
