import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import JumboCard from '../../../../@jumbo/components/Common/JumboCard';
import { coremat } from '../../../../@fake-db/coremat-components';
import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CmtAvatarGroup from '../../../../@coremat/CmtAvatarGroup';
import CmtObjectSummary from '../../../../@coremat/CmtObjectSummary';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import CmtList from '../../../../@coremat/CmtList';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
  },
  titleRoot: {
    color: theme.palette.common.white,
    fontSize: 14,
  },
  avatarRoot: {
    marginTop: 2,
    marginBottom: 2,
  },
  avatar: {
    [theme.breakpoints.up('xl')]: {
      width: 56,
      height: 56,
    },
  },
}));

const RenderRow = ({ item, placeholderLength }) => {
  return (
    <React.Fragment>
      <Typography color="inherit">{item.title}</Typography>
      <Box pb={2} component="p">
        {"It's very engaging. Right?"}
      </Box>
      <CmtAvatar src={item.profile_pic} alt={item.title} variant="rounded" size={125} phCharLength={placeholderLength} />
    </React.Fragment>
  );
};

const RenderMOre = ({ items, placeholderLength }) => {
  const classes = useStyles();

  return (
    <CmtList
      data={items}
      renderRow={(item, index) => {
        return (
          <CmtObjectSummary
            key={index}
            avatar={
              <CmtAvatar
                className={classes.avatarRoot}
                color="orange"
                size={40}
                src={item.profile_pic}
                alt={item.title}
                phCharLength={placeholderLength}
              />
            }
            title={item.title}
            titleProps={{ className: classes.titleRoot }}
          />
        );
      }}
    />
  );
};

const AvatarGroupView = () => {
  const classes = useStyles();
  const { expandable, moreVisibleAction, placeholderLength, size } = useContext(CorematContext);
  const theme = useTheme();
  const { avatars } = coremat;
  const handleItemClick = (item, index) => {};

  return (
    <JumboCard>
      <Box className={classes.root}>
        <CmtAvatarGroup
          items={avatars}
          max={6}
          srcKey="profile_pic"
          avatarSize={size}
          spacing={expandable ? 10 : 0}
          expandable={expandable}
          phCharLength={placeholderLength}
          itemStyle={{
            outlineColor: '#fafafa',
            outlineThickness: 3,
          }}
          activeItemStyle={{
            outlineColor: theme.palette.primary.main,
            outlineThickness: 3,
            elevation: 10,
          }}
          moreVisibleOn={moreVisibleAction}
          onItemClick={handleItemClick}
          renderMore={restItems => <RenderMOre items={restItems} placeholderLength={placeholderLength} />}
          renderItemSummary={(item, index) => <RenderRow key={index} item={item} placeholderLength={placeholderLength} />}
        />
      </Box>
    </JumboCard>
  );
};

export default AvatarGroupView;
