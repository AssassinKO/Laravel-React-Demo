import React from 'react';
import Popper from '@material-ui/core/Popper';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  popper: {
    boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)',
    borderRadius: theme.shape.borderRadius,
    width: 300,
    zIndex: 9,
    fontSize: 12,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
  },
  searchIcon: {
    position: 'absolute',
    top: '50%',
    left: 10,
    zIndex: 1,
    transform: 'translateY(-50%)',
    color: theme.palette.text.disabled,
  },
  inputBase: {
    '& input': {
      padding: '12px 10px 10px 36px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      borderBottom: `1px solid ${theme.palette.borderColor.main}`,
      fontSize: 12,
      color: theme.palette.text.disabled,
      '&:focus': {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  paper: {
    boxShadow: 'none',
    margin: 0,
    color: '#586069',
    fontSize: 13,
  },
  option: {
    minHeight: 'auto',
    alignItems: 'flex-start',
    padding: '4px 10px',
    backgroundColor: theme.palette.background.default,
    '&[aria-selected="true"]': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      color: theme.palette.primary.main,
    },
    '&[data-focus="true"]': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      color: theme.palette.primary.main,
    },
  },
  popperDisablePortal: {
    position: 'relative',
  },
  iconSelected: {
    width: 17,
    height: 17,
    marginRight: 5,
    marginLeft: -2,
  },
  text: {
    flexGrow: 1,
  },
  close: {
    opacity: 0.6,
    width: 18,
    height: 18,
  },
}));

const AddProjectPopup = ({ options, anchorEl, setAnchorEl, team, setTeam }) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'toggleInput') {
      return;
    }

    if (anchorEl) {
      anchorEl.focus();
    }

    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'github-label' : undefined;

  return (
    <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom" className={classes.popper}>
      <Autocomplete
        open
        onClose={handleClose}
        multiple
        classes={{
          paper: classes.paper,
          option: classes.option,
          popperDisablePortal: classes.popperDisablePortal,
        }}
        value={team}
        onChange={(event, newValue) => {
          setTeam(newValue);
        }}
        disableCloseOnSelect
        disablePortal
        renderTags={() => null}
        noOptionsText="No Menbers"
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <DoneIcon className={classes.iconSelected} style={{ visibility: selected ? 'visible' : 'hidden' }} />
            <div className={classes.text}>{option.name}</div>
            <CloseIcon className={classes.close} style={{ visibility: selected ? 'visible' : 'hidden' }} />
          </React.Fragment>
        )}
        options={options}
        getOptionLabel={option => option.name}
        renderInput={params => (
          <Box position="relative">
            <SearchIcon fontSize="small" className={classes.searchIcon} />
            <InputBase
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              autoFocus
              fullWidth
              placeholder="Search..."
              className={classes.inputBase}
            />
          </Box>
        )}
      />
    </Popper>
  );
};

export default AddProjectPopup;
