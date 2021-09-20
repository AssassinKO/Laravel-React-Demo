import React from 'react';
import CmtGroupList from '../../../../@coremat/CmtGroupList';
import ActivityListItem from './ActivityListItem';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  titleRoot: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightRegular,
    letterSpacing: 0.4,
    fontSize: 12,
    textTransform: 'capitalize',
    marginBottom: 11,
    '&:not(:first-child)': {
      marginTop: 10,
      [theme.breakpoints.up('xl')]: {
        marginTop: 24,
      },
    },
  },
}));

const ActivitiesList = ({ activitiesList }) => {
  const classes = useStyles();
  const renderHeader = group => {
    return (
      <Typography component="div" variant="h5" className={classes.titleRoot}>
        {group.label}
      </Typography>
    );
  };

  const groupIdentifier = dataItem => {
    return { id: dataItem.category, label: dataItem.category };
  };

  return (
    <CmtGroupList
      data={activitiesList}
      renderItem={(item, index) => <ActivityListItem key={index} item={item} />}
      renderHeader={renderHeader}
      groupIdentifier={groupIdentifier}
    />
  );
};

export default ActivitiesList;
