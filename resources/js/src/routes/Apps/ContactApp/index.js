import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import useStyles from './index.style';
import AppHeader from './AppHeader';
import clsx from 'clsx';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import ContactsList from './ContactsList';
import ContactDetail from './ContactDetail';
import CreateContact from './CreateContact';
import { setCurrentContact } from '../../../redux/actions/ContactApp';

const ContactApp = () => {
  const classes = useStyles();
  const { isSideBarCollapsed } = useSelector(({ contactApp }) => contactApp);
  const [viewMode, setViewMode] = useState('table');
  const [showContactDetail, setShowContactDetail] = useState(false);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const dispatch = useDispatch();

  const onChangeViewMode = mode => {
    setViewMode(mode);
  };

  const onShowContactDetail = contact => {
    dispatch(setCurrentContact(contact));
    setShowContactDetail(true);
  };

  const onHideContactDetail = () => {
    dispatch(setCurrentContact(null));
    setShowContactDetail(false);
  };

  const onClickCreateContact = () => {
    setOpenCreateDialog(true);
  };

  const onClickEditContact = contact => {
    dispatch(setCurrentContact(contact));
    setOpenCreateDialog(true);
  };

  const onCloseComposeDialog = () => {
    dispatch(setCurrentContact(null));
    setOpenCreateDialog(false);
  };

  return (
    <Box className={classes.inBuildAppCard}>
      <AppHeader onChangeViewMode={onChangeViewMode} viewMode={viewMode} />
      <Box className={clsx(classes.inBuildAppContainer, isSideBarCollapsed ? 'collapsed' : '')}>
        <Sidebar onClickCreateContact={onClickCreateContact} />
        <ContactsList
          viewMode={viewMode}
          onShowContactDetail={onShowContactDetail}
          onClickEditContact={onClickEditContact}
        />
      </Box>
      {showContactDetail && <ContactDetail open={showContactDetail} handleDialog={onHideContactDetail} />}
      {openCreateDialog && <CreateContact open={openCreateDialog} handleDialog={onCloseComposeDialog} />}
    </Box>
  );
};

export default ContactApp;
