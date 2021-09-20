import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(4),
    },
  },
}));

const defaultProps = {
  color: 'secondary',
  children: <MailIcon />,
};

export default function BadgeMax() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Badge badgeContent={99} {...defaultProps} />
      <Badge badgeContent={100} {...defaultProps} />
      <Badge badgeContent={1000} max={999} {...defaultProps} />
    </Box>
  );
}
