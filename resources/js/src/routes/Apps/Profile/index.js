import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Header from './Header';
import GridContainer from '../../../@jumbo/components/GridContainer';
import Grid from '@material-ui/core/Grid';
import Contact from './Contact';
import Friends from './Friends';
import About from './About';
import Biography from './Biography';
import Events from './Events';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetail } from '../../../redux/actions/ProfileApp';
import makeStyles from '@material-ui/core/styles/makeStyles';
import UserPhotos from '../../Dashboards/Intranet/UserPhotos';

const useStyles = makeStyles(() => ({
  pageFull: {
    width: '100%',
  },
  profileSidebar: {
    '@media screen and (min-width: 1280px) and (max-width: 1499px)': {
      flexBasis: '100%',
      maxWidth: '100%',
    },
  },
  profileMainContent: {
    '@media screen and (min-width: 1280px) and (max-width: 1499px)': {
      flexBasis: '100%',
      maxWidth: '100%',
    },
  },
}));

const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [tabValue, setTabValue] = useState('about');
  const { userDetail } = useSelector(({ profileApp }) => profileApp);

  useEffect(() => {
    dispatch(getUserDetail());
  }, [dispatch]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <React.Fragment>
      {userDetail && (
        <Box className={classes.pageFull}>
          <Header classes={classes} userDetail={userDetail} tabValue={tabValue} handleTabChange={handleTabChange} />
          <GridContainer>
            <Grid item xs={12} lg={4} className={classes.profileSidebar}>
              <Box mb={6}>
                <Contact userDetail={userDetail} />
              </Box>
              <Box mb={6}>
                <Friends friends={userDetail.friends} />
              </Box>
              <Box mb={6}>
                <UserPhotos />
              </Box>
            </Grid>
            <Grid item xs={12} lg={8} className={classes.profileMainContent}>
              <Box mb={6}>
                <About userDetail={userDetail} />
              </Box>
              <Box mb={6}>
                <Biography />
              </Box>
              <Events events={userDetail.events} />
            </Grid>
          </GridContainer>
        </Box>
      )}
    </React.Fragment>
  );
};

export default Profile;
