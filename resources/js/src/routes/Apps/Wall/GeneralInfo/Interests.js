import React from 'react';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Typography } from '@material-ui/core';
import CmtList from '../../../../@coremat/CmtList';

const useStyles = makeStyles(theme => ({
  titleRoot: {
    borderBottom: `1px solid ${theme.palette.borderColor.main}`,
    paddingBottom: 24,
    marginBottom: 24,
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      zIndex: 1,
      width: 36,
      height: 4,
      backgroundColor: theme.palette.primary.main,
    },
  },
  chipRoot: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
    borderRadius: 4,
    marginRight: 10,
    marginBottom: 12,
    height: 26,
    fontSize: 14,
    color: theme.palette.text.secondary,
    cursor: 'pointer',
  },
}));

const Interests = ({ interests }) => {
  const classes = useStyles();
  return (
    <Box mb={4}>
      <Typography component="div" variant="h3" className={classes.titleRoot}>
        Interests
      </Typography>
      <CmtList
        data={interests}
        renderRow={(item, index) => <Chip className={classes.chipRoot} key={index} label={item} />}
      />
    </Box>
  );
};

export default Interests;

Interests.prototype = {
  interests: PropTypes.array.isRequired,
};
