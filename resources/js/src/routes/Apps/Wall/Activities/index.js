import React, { useContext } from 'react';
import Communities from './Communities';
import ActivitiesList from '../../../Dashboards/Listing/RecentActivities/ActivitiesList';
import { recentActivities } from '../../../../@fake-db';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { getDateText } from '../../../../@jumbo/utils/dateHelper';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { getWallHeight } from '../../../../@jumbo/constants/AppConstants';
import AppContext from '../../../../@jumbo/components/contextProvider/AppContextProvider/AppContext';

const useStyles = makeStyles(theme => ({
  perfectScrollbarActives: {
    height: props => `calc(100vh - ${props.height}px)`,
    '& .Cmt-media-object': {
      marginLeft: 0,
      marginRight: 0,
      paddingLeft: 0,
      paddingRight: 0,
      '&:hover': {
        backgroundColor: 'transparent',
        transform: 'none',
        boxShadow: 'none',
        '& .MuiAvatar-root': {
          transform: 'none',
          boxShadow: 'none',
        },
      },
    },
  },
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
}));

const Activities = width => {
  const { showFooter } = useContext(AppContext);
  const classes = useStyles({
    height: getWallHeight(width, showFooter),
  });

  const getActivityListByDate = () => {
    return recentActivities.map(activity => {
      activity.category = getDateText(activity.date);
      return activity;
    });
  };

  const activitiesList = getActivityListByDate();

  return (
    <PerfectScrollbar className={classes.perfectScrollbarActives}>
      <Communities />
      <Typography component="div" variant="h3" className={classes.titleRoot}>
        Activities
      </Typography>
      <ActivitiesList activitiesList={activitiesList} />
    </PerfectScrollbar>
  );
};

export default Activities;
