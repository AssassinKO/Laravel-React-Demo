import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './AddLabel.style';
import { addNewLabel } from '../../../../redux/actions/ContactApp';
import LabelForm from '../../../../@jumbo/components/Common/LabelForm';

const AddLabel = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box className={classes.appNavItem} onClick={handleClick}>
        <Box className="Cmt-icon-root">
          <AddIcon />
        </Box>
        <Box component="span" className="Cmt-nav-text">
          Add Label
        </Box>
      </Box>

      <LabelForm anchorEl={anchorEl} onClose={handleClose} saveLabel={addNewLabel} />
    </React.Fragment>
  );
};

export default AddLabel;
