import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import useStyles from './index.style';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import AppHeader from './AppHeader';
import Sidebar from './Sidebar';
import MailsList from './MailsList';
import { getConnectionsList, getLabelsList, toggleExpandSidebar } from '../../../redux/actions/MailApp';
import MailDetail from './MailDetail';
import ComposeMail from './ComposeMail';

const MailApp = () => {
  const dispatch = useDispatch();
  const [openComposeDialog, setOpenComposeDialog] = useState(false);
  const { isSideBarCollapsed, selectedMail } = useSelector(({ mailApp }) => mailApp);
  const [mailTo, setMailTo] = useState('');
  const [mailContent, setMailContent] = useState('');
  const [viewMode, setViewMode] = useState('detail');

  const classes = useStyles();

  useEffect(() => {
    dispatch(getLabelsList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getConnectionsList());
  }, [dispatch]);

  const onClickSendMail = to => {
    setMailTo(to);
    onOpenComposeDialog();
  };

  const onClickForwardMail = message => {
    setMailContent(message);
    onOpenComposeDialog();
  };

  const onOpenComposeDialog = () => {
    setOpenComposeDialog(true);
  };

  const onCloseComposeDialog = () => {
    setOpenComposeDialog(false);
    setMailContent('');
    setMailTo('');
  };

  const handleViewModeChange = mode => {
    setViewMode(mode);
    if (mode === 'detail') {
      dispatch(toggleExpandSidebar(false));
    } else {
      dispatch(toggleExpandSidebar(true));
    }
  };

  return (
    <Box className={classes.inBuildAppCard}>
      <AppHeader viewMode={viewMode} handleViewModeChange={handleViewModeChange} />
      <Box className={clsx(classes.inBuildAppContainer, isSideBarCollapsed ? 'collapsed' : '')}>
        <Sidebar onClickSendMail={onClickSendMail} onOpenComposeDialog={onOpenComposeDialog} />
        {selectedMail ? (
          <MailDetail onClickForwardMail={onClickForwardMail} />
        ) : (
          <MailsList onClickSendMail={onClickSendMail} onClickForwardMail={onClickForwardMail} viewMode={viewMode} />
        )}
        {openComposeDialog && (
          <ComposeMail
            openDialog={openComposeDialog}
            onCloseComposeDialog={onCloseComposeDialog}
            mailTo={mailTo}
            mailContent={mailContent}
          />
        )}
      </Box>
    </Box>
  );
};

export default MailApp;
