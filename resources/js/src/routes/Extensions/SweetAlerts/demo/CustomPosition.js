import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Button } from '@material-ui/core';

const MySwal = withReactContent(Swal);

const CustomPosition = () => {
  const sweetAlerts = () => {
    MySwal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      timer: 1500,
    });
  };
  return (
    <Button variant="outlined" color="primary" onClick={sweetAlerts}>
      Click me
    </Button>
  );
};

export default CustomPosition;
