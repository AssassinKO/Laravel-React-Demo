import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginBottom: theme.spacing(3),
      '&:not(:last-child)': {
        marginRight: theme.spacing(3),
      },
    },
  },
}));

const MySwal = withReactContent(Swal);

const AlertsType = () => {
  const classes = useStyles();
  const sweetAlerts = variant => {
    MySwal.fire({
      icon: variant,
      title: variant,
      text: 'You clicked the button!',
    });
  };
  return (
    <Box className={classes.root}>
      <Button variant="outlined" onClick={() => sweetAlerts('success')}>
        Success
      </Button>
      <Button variant="outlined" onClick={() => sweetAlerts('error')}>
        Error
      </Button>
      <Button variant="outlined" onClick={() => sweetAlerts('warning')}>
        Warning
      </Button>
      <Button variant="outlined" onClick={() => sweetAlerts('info')}>
        Information
      </Button>
      <Button variant="outlined" onClick={() => sweetAlerts('question')}>
        Question
      </Button>
    </Box>
  );
};

export default AlertsType;
