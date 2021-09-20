import React from 'react';

import { Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CmtObjectSummary from '../../../../@coremat/CmtObjectSummary';
import CmtList from '../../../../@coremat/CmtList';
import CmtAvatarGroup from '../../../../@coremat/CmtAvatarGroup';
import CmtAvatar from '../../../../@coremat/CmtAvatar';

const useStyles = makeStyles(theme => ({
  titleRoot: {
    color: theme.palette.common.white,
    fontSize: 14,
  },
  avatarRoot: {
    marginTop: 2,
    marginBottom: 2,
  },
  avatar: {
    '@media screen and (min-width: 1280px) and (max-width: 1368px)': {
      width: 36,
      height: 36,
    },
    [theme.breakpoints.up('md')]: {
      width: 40,
      height: 40,
    },
    [theme.breakpoints.up('xl')]: {
      width: 56,
      height: 56,
    },
    [theme.breakpoints.down('xs')]: {
      width: 40,
      height: 40,
    },
  },
}));

const CustomersList = ({ data }) => {
  const classes = useStyles();
  const moreItemsTooltip = data => (
    <CmtList
      data={data}
      renderRow={(item, index) => {
        return (
          <CmtObjectSummary
            key={index}
            avatar={<CmtAvatar className={classes.avatarRoot} size={40} src={item.profilePic} alt={item.name} />}
            title={item.name}
            titleProps={{ className: classes.titleRoot }}
          />
        );
      }}
    />
  );

  return (
    <CmtAvatarGroup
      classes={{ avatar: classes.avatar }}
      items={data}
      srcKey="profilePic"
      spacing={1}
      max={6}
      titleKey="name"
      renderItemSummary={item => (
        <React.Fragment>
          <Typography color="inherit">{item.name}</Typography>
          <p className={'pb-2'}>{"It's very engaging. Right?"}</p>
          <CmtAvatar src={item.profilePic} alt={item.name} variant="rounded" size={125} />
        </React.Fragment>
      )}
      renderMore={restItems => moreItemsTooltip(restItems)}
    />
  );
};

export default CustomersList;
