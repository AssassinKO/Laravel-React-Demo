import React, { useState } from 'react';
import { Avatar, Box, Button, Grid, Hidden, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  dragButton: {
    minWidth: 'auto',
    '&:hover': {
      cursor: 'grab',
    },
    '&:focus, &:active, &:focus-within': {
      cursor: 'grabbing',
    },
  },
});

const DragHandle = SortableHandle(() => <DragIndicatorIcon />);

const ContactCell = props => {
  const classes = useStyles();
  const { contact } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuState, setMenuState] = useState(false);
  const [starred, setStarred] = useState(contact.starred);

  const onContactOptionSelect = event => {
    setMenuState(true);
    setAnchorEl(event.currentTarget);
  };
  const handleRequestClose = () => {
    setMenuState(false);
  };

  const { name, thumb, email, phone, designation } = contact;
  const options = ['Edit', 'Delete'];

  return (
    <Box>
      <GridContainer wrap="nowrap" alignItems="center">
        <Grid item>
          <Button size="small" className={classes.dragButton}>
            <DragHandle />
          </Button>
        </Grid>
        <Grid item>
          {thumb === null || thumb === '' ? (
            <Avatar>{name.charAt(0).toUpperCase()}</Avatar>
          ) : (
            <Avatar alt={name} src={thumb} />
          )}
        </Grid>
        <Grid item xs lg={3} zeroMinWidth>
          <Typography noWrap>{name}</Typography>
        </Grid>
        <Hidden mdDown>
          <Grid item xs lg={3} zeroMinWidth>
            <Typography noWrap>{email}</Typography>
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid item xs lg={2} zeroMinWidth>
            <Typography noWrap>{phone}</Typography>
          </Grid>
        </Hidden>
        <Hidden lgDown>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{designation}</Typography>
          </Grid>
        </Hidden>
        <Grid item xs zeroMinWidth>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={() => setStarred(!starred)}>{starred ? <StarIcon /> : <StarBorderIcon />}</IconButton>

            <IconButton onClick={onContactOptionSelect}>
              <MoreVertIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={menuState}
              onClose={handleRequestClose}
              MenuListProps={{
                style: {
                  width: 100,
                },
              }}>
              {options.map(option => (
                <MenuItem
                  key={option}
                  onClick={() => {
                    handleRequestClose();
                  }}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Grid>
      </GridContainer>
    </Box>
  );
};

export default SortableElement(ContactCell);
