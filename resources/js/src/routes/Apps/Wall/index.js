import React, { useEffect } from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import Grid from '@material-ui/core/Grid';
import GeneralInfo from './GeneralInfo';
import Activities from './Activities';
import NewsFeed from './NewsFeed';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetail } from '../../../redux/actions/WallApp';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  wallLeftSidebar: {
    '@media screen and (min-width: 960px) and (max-width: 1020px)': {
      flexBasis: '40%',
      maxWidth: '40%',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  wallMainContent: {
    '@media screen and (min-width: 960px) and (max-width: 1020px)': {
      flexBasis: '60%',
      maxWidth: '60%',
    },
  },
  wallRightSidebar: {
    '@media screen and (max-width: 1020px)': {
      display: 'none',
    },
  },
}));

const Wall = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { userDetail } = useSelector(({ wallApp }) => wallApp);

  useEffect(() => {
    dispatch(getUserDetail());
  }, [dispatch]);

  return (
    <React.Fragment>
      {userDetail && (
        <GridContainer>
          <Grid item xs={12} sm={5} md={3} className={classes.wallLeftSidebar}>
            <GeneralInfo />
          </Grid>
          <Grid item xs={12} sm={7} md={6} className={classes.wallMainContent}>
            <NewsFeed />
          </Grid>
          <Grid item xs={12} md={3} className={classes.wallRightSidebar}>
            <Activities />
          </Grid>
        </GridContainer>
      )}
    </React.Fragment>
  );
};

export default Wall;
