import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Portal from '@material-ui/core/Portal';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  dropdown: {
    position: 'fixed',
    width: 200,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function PortalClickAway() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box>
        <button type="button" onClick={handleClick}>
          Open menu dropdown
        </button>
        {open ? (
          <Portal>
            <div className={classes.dropdown}>Click me, I will stay visible until you click outside.</div>
          </Portal>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
