import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import { Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    height: '100%',
    '& .Cmt-card-content': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  titleRoot: {
    marginBottom: 20,
  },
  subTitle: {
    color: theme.palette.text.secondary,
    marginBottom: 25,
  },
  btnRoot: {
    height: 40,
  },
}));

const NewsLatterSubscription = () => {
  const classes = useStyles();
  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardContent>
        <Typography component="div" variant="h4" className={classes.titleRoot}>
          Newsletter Subscription
        </Typography>
        <Typography component="div" variant="h2" className={classes.subTitle}>
          Dont's miss our weekly news and updates
        </Typography>
        <Box mb={4}>
          <TextField fullWidth id="uncontrolled" label="Enter User name" defaultValue="xyz@gmai" variant="outlined" />
        </Box>
        <Box mt="auto">
          <Button className={classes.btnRoot} variant="contained" color="primary" htmltype="submit">
            Subscribe
          </Button>
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default NewsLatterSubscription;
