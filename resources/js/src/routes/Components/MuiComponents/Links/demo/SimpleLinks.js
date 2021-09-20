import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(4),
    },
  },
}));

export default function SimpleLinks() {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();

  return (
    <Typography className={classes.root}>
      <Link href="#" onClick={preventDefault}>
        Link
      </Link>
      <Link href="#" onClick={preventDefault} color="inherit">
        {'color="inherit"'}
      </Link>
      <Link href="#" onClick={preventDefault} variant="body2">
        {'variant="body2"'}
      </Link>
    </Typography>
  );
}
