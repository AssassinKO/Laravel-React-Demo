import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import GridContainer from '../../../../../@jumbo/components/GridContainer';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.default,
  },
  chip: {
    margin: theme.spacing(1),
  },
  section1: {
    margin: theme.spacing(6, 4),
  },
  section2: {
    margin: theme.spacing(4),
  },
  section3: {
    margin: theme.spacing(6, 2, 2),
  },
}));

export default function MiddleDividers() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.section1}>
        <GridContainer alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              Toothbrush
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              $4.50
            </Typography>
          </Grid>
        </GridContainer>
        <Typography color="textSecondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box className={classes.section2}>
        <Typography gutterBottom variant="body1">
          Select type
        </Typography>
        <div>
          <Chip className={classes.chip} label="Extra Soft" />
          <Chip className={classes.chip} color="primary" label="Soft" />
          <Chip className={classes.chip} label="Medium" />
          <Chip className={classes.chip} label="Hard" />
        </div>
      </Box>
      <Box className={classes.section3}>
        <Button color="primary">Add to cart</Button>
      </Box>
    </Box>
  );
}
