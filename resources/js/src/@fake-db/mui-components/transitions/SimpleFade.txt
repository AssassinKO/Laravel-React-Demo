import React from 'react';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    backgroundColor: lighten(theme.palette.background.paper, 0.1),
    margin: theme.spacing(2),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: lighten(theme.palette.background.paper, 0.1),
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function SimpleFade() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <Box className={classes.root}>
      <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" />
      <div className={classes.container}>
        <Fade in={checked}>
          <Paper elevation={4} className={classes.paper}>
            <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg>
          </Paper>
        </Fade>
      </div>
    </Box>
  );
}
