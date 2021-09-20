import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Button } from '@material-ui/core';

const MySwal = withReactContent(Swal);

const TitleWithText = () => {
  const sweetAlerts = () => {
    MySwal.fire({
      title: 'Good job!',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
    });
  };
  return (
    <Button variant="outlined" color="primary" onClick={sweetAlerts}>
      Click me
    </Button>
  );
};

export default TitleWithText;
