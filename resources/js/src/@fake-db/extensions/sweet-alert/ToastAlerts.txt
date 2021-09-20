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

const ToastAlerts = () => {
  const classes = useStyles();
  const sweetAlerts = variant => {
    const Toast = MySwal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: toast => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: variant,
      title: 'You clicked the button!',
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

export default ToastAlerts;
