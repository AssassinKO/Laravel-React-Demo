import React from 'react';

import { Box, Typography } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import CmtAvatar from '../../../../@coremat/CmtAvatar';

const useStyles = makeStyles(theme => ({
  ticketsItemRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px 24px',
    transition: 'all .2s',
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      '& $dots': {
        height: 'auto',
        width: 50,
        borderRadius: 4,
        padding: '3px 10px',
        fontSize: 12,
      },
    },
  },
  dots: {
    height: 8,
    width: 8,
    borderRadius: '50%',
    padding: 0,
    fontSize: 0,
    color: theme.palette.common.white,
    transition: 'all 0.2s',
  },
  titleRoot: {
    fontSize: 16,
    fontWeight: theme.typography.fontWeightRegular,
  },
  subTitleRoot: {
    fontSize: 12,
    color: theme.palette.text.disabled,
    marginTop: 4,
  },
  avatarRoot: {
    [theme.breakpoints.up('lg')]: {
      width: 56,
      height: 56,
      marginRight: 16,
    },
  },
}));

const TicketsItem = ({ item }) => {
  const classes = useStyles();
  return (
    <CmtMediaObject
      className={classes.ticketsItemRoot}
      avatar={<CmtAvatar className={classes.avatarRoot} src={item.user.profilePic} />}
      avatarPos="center"
      title={item.title}
      titleProps={{ className: classes.titleRoot }}
      subTitle={
        <Typography className={classes.subTitleRoot}>
          <Box component="span" color="primary.main">
            {item.user.name}
          </Box>
          {` created ticket ${item.createdDate}`}
        </Typography>
      }
      footerComponent={
        <span
          className={classes.dots}
          style={{
            backgroundColor: item.priority.color,
          }}>
          {item.priority.label}
        </span>
      }
      subTitleProps={{ marginBottom: 12 }}
    />
  );
};
export default TicketsItem;
