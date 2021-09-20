import React from 'react';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import Box from '@material-ui/core/Box';
import { alpha, makeStyles } from '@material-ui/core/styles';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import { timeFromNow } from '../../../../@jumbo/utils/dateHelper';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import { Fab } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  itemRoot: {
    padding: '8px 24px',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.161741)',
    transition: 'all .2s',
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      '& $actionButtons': {
        visibility: 'visible',
        opacity: 1,
      },
    },

    '& .Cmt-media-image': {
      marginTop: 0,
    },
  },
  subTitleRoot: {
    fontSize: 14,
    color: theme.palette.text.disabled,
    marginTop: 4,
  },
  avatarRoot: {
    marginRight: 16,
    [theme.breakpoints.up('lg')]: {
      width: 56,
      height: 56,
    },
  },
  actionButtons: {
    position: 'absolute',
    right: 0,
    zIndex: 2,
    visibility: 'hidden',
    opacity: 0,
    transition: 'all 0.2s',
    '& .btn-white': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    },

    '& .MuiFab-root:not(:last-child)': {
      marginRight: 12,
    },
  },
}));

const CommentItem = ({ item }) => {
  const classes = useStyles();

  const getTitle = () => {
    return (
      <Box color="text.primary">
        <Box component="span" color="primary.main">
          {item.user.name}
        </Box>
        <Box component="span" mx={1}>
          commented on
        </Box>
        <Box component="span" color="primary.main">
          {item.postTitle}
        </Box>
      </Box>
    );
  };

  const getFooter = () => (
    <Box position="relative">
      <Box fontSize={14} color="text.disabled">
        {timeFromNow(item.date)}
      </Box>
      <Box display="flex" alignItems="center" className={classes.actionButtons}>
        <Fab color="primary" size="small">
          <DoneIcon />
        </Fab>
        <Fab size="small" className="btn-white">
          <ClearIcon />
        </Fab>
      </Box>
    </Box>
  );

  return (
    <Box className={classes.itemRoot}>
      <CmtMediaObject
        avatar={<CmtAvatar className={classes.avatarRoot} src={item.user.profile_pic} />}
        title={getTitle()}
        subTitle={item.comment}
        subTitleProps={{
          className: classes.subTitleRoot,
          component: 'div',
          variant: 'inherit',
          gutterBottom: false,
        }}
        footerComponent={getFooter()}
      />
    </Box>
  );
};
export default CommentItem;
