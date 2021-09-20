import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    marginBottom: 10,
  },
  sectionAvatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    marginRight: 8,
  },
  sectionHeading: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const SectionHeading = ({ iconComponent, headingComponent }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.sectionAvatar}>{iconComponent}</div>
      <div className={classes.sectionHeading}>
        <Box variant="h3" component="h3">
          {headingComponent}
        </Box>
      </div>
    </div>
  );
};

export default SectionHeading;
