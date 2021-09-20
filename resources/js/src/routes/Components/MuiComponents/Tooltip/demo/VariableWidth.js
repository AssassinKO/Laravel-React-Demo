import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2),
  },
  customWidth: {
    maxWidth: 500,
  },
  noMaxWidth: {
    maxWidth: 'none',
  },
}));

const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;

export default function VariableWidth() {
  const classes = useStyles();

  return (
    <Box>
      <Tooltip title={longText}>
        <Button className={classes.button}>Default Width [300px]</Button>
      </Tooltip>
      <Tooltip title={longText} classes={{ tooltip: classes.customWidth }}>
        <Button className={classes.button}>Custom Width [500px]</Button>
      </Tooltip>
      <Tooltip title={longText} classes={{ tooltip: classes.noMaxWidth }}>
        <Button className={classes.button}>No wrapping</Button>
      </Tooltip>
    </Box>
  );
}
