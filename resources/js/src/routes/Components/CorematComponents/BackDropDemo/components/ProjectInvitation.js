import React, { useState } from 'react';
import useStyles from './BaseItem.style';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BaseItem from './BaseItem';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Snackbar from '@material-ui/core/Snackbar';

const NotificationSnackBar = props => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      autoHideDuration={5000}
      {...props}
    />
  );
};

const ProjectInvitation = ({ item }) => {
  const classes = useStyles();
  const [openSnackBar, setSnackBarStatus] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');

  const onSnackBarClose = () => {
    setSnackBarStatus(false);
    setSnackBarMessage('');
  };

  const onInvitationAccept = () => {
    setSnackBarStatus(true);
    setSnackBarMessage('Your Request has been accepted Successfully');
  };
  const onInvitationReject = () => {
    setSnackBarStatus(true);
    setSnackBarMessage('Your Request has been rejected Successfully');
  };

  const getTitle = () => {
    return (
      <Typography component="div" variant="h5" className={classes.titleRoot}>
        <Box component="span" color="primary.main">
          {item.metaData.sender.name}
        </Box>
        <Box component="span" ml={1}>
          has sent you an invitation to join project
        </Box>
        <Box component="span" color="primary.main" ml={1}>
          {item.metaData.project.name}
        </Box>
      </Typography>
    );
  };

  return (
    <React.Fragment>
      <BaseItem
        item={item}
        title={getTitle()}
        avatar={item.metaData.sender.profile_pic}
        username={item.metaData.sender.name}>
        <Box mr={2} my={1}>
          <Button
            className={clsx(classes.btnRoot)}
            size="small"
            variant="contained"
            color={'primary'}
            onClick={onInvitationAccept}>
            Accept
          </Button>
        </Box>

        <Box mr={2} my={1}>
          <Button
            className={clsx(classes.btnRoot)}
            size="small"
            variant="contained"
            color={'secondary'}
            onClick={onInvitationReject}>
            Reject
          </Button>
        </Box>
      </BaseItem>
      <NotificationSnackBar message={snackBarMessage} open={openSnackBar} onClose={onSnackBarClose} />
    </React.Fragment>
  );
};

export default ProjectInvitation;
