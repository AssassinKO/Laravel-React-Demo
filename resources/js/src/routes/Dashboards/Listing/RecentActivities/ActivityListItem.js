import React from 'react';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import CmtList from '../../../../@coremat/CmtList';
import CmtImage from '../../../../@coremat/CmtImage';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import { alpha, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  mediaObjectRoot: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    padding: '8px 24px',
    marginLeft: -24,
    marginRight: -24,
    transition: 'all .2s',
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      '& $avatarRoot': {
        boxShadow: '0 4px 8px rgba(0,0,0,.45)',
        transform: 'scale(1.15)',
      },
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: 12,
      paddingBottom: 12,
    },
    '&.Cmt-media-image-list': {
      '& .Cmt-media-image': {
        alignSelf: 'flex-start',
      },
    },
  },
  textBase: {
    fontSize: 14,
  },
  avatarRoot: {
    width: 40,
    height: 40,
    transition: 'all 0.2s',
    transform: 'scale(1)',
    cursor: 'pointer',
  },
  imageListRoot: {
    display: 'flex',
    alignItems: 'center',
    marginRight: -6,
    marginLeft: -6,
    marginBottom: -6,
  },
  imageListItemRoot: {
    paddingRight: 6,
    paddingLeft: 6,
    paddingTop: 0,
  },
  imageRoot: {
    width: 40,
    height: 40,
    borderRadius: 4,
    cursor: 'pointer',
  },
  linkBtn: {
    textTransform: 'uppercase',
    color: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    fontWeight: theme.typography.fontWeightBold,
    cursor: 'pointer',
    fontSize: 14,
    letterSpacing: 1,
    whiteSpace: 'nowrap',
  },
}));

const ActivityListItem = ({ item }) => {
  const classes = useStyles();

  const getTitle = () => (
    <Typography className={classes.textBase}>
      {item.content.map((item, index) => (
        <Box component="span" key={index}>
          {item}
        </Box>
      ))}
    </Typography>
  );

  return (
    <CmtMediaObject
      className={clsx(classes.mediaObjectRoot, item.mediaList.length > 0 ? 'Cmt-media-image-list' : '')}
      avatar={<CmtAvatar className={classes.avatarRoot} src={item.user.profilePic} alt={item.user.name} phCharLength={2} />}
      avatarPos="center"
      title={getTitle()}>
      {item.mediaList.length > 0 && (
        <Box display="flex" alignItems="center" flexWrap="wrap" mt={4}>
          <Box mr={{ xs: 3, xl: 5 }}>
            <CmtList
              className={classes.imageListRoot}
              data={item.mediaList.slice(0, 2)}
              renderRow={(item, index) => {
                return (
                  <ListItem component="div" className={classes.imageListItemRoot} key={index}>
                    <CmtImage src={item.mediaUrl} className={classes.imageRoot} alt={item.name} />
                  </ListItem>
                );
              }}
            />
          </Box>
          {item.mediaList.length > 2 && (
            <Box component="p" className={classes.linkBtn} py={1}>{`+ ${item.mediaList.length - 2} more`}</Box>
          )}
        </Box>
      )}
    </CmtMediaObject>
  );
};

export default ActivityListItem;
