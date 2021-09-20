import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { coremat } from '../../../../@fake-db';
import Box from '@material-ui/core/Box';
import { Button, IconButton } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import CmtAvatarGroup from '../../../../@coremat/CmtAvatarGroup';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import makeStyles from '@material-ui/core/styles/makeStyles';
import JumboCard from '../../../../@jumbo/components/Common/JumboCard';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    color: theme.palette.text.secondary,
    '& .Cmt-media-image': {
      marginTop: 0,
      marginBottom: 0,
    },
    '& .Cmt-avatar': {
      [theme.breakpoints.up('md')]: {
        marginRight: 26,
      },
    },
  },
  titleRoot: {
    fontSize: 16,
    marginBottom: 6,
    color: theme.palette.text.primary,
  },
  badgeRoot: {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    color: theme.palette.primary.main,
    padding: '3px 10px',
    borderRadius: 4,
    marginRight: 10,
  },
  childrenRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    '& .Cmt-avatar-size': {
      fontSize: 14,
    },
  },
}));

const MediaObjectView = () => {
  const { position, showAvatar, showActions, showFooter, showChildren } = useContext(CorematContext);
  const { avatars, mediaObject } = coremat;
  const classes = useStyles();

  return (
    <JumboCard>
      <CmtMediaObject
        className={classes.root}
        avatar={showAvatar ? mediaObject.avatar : ''}
        avatarPos={position}
        title={mediaObject.title}
        titleProps={{ className: classes.titleRoot }}
        subTitle={
          <Box display="flex" alignItems={{ xl: 'center' }} mb={2}>
            <Box mr={1}>
              <Box className={classes.badgeRoot}>Development</Box>
            </Box>
            <Box color="text.disabled" fontSize={12}>
              Start Date: 25 Jan, 2020 Deadline: 15 Mar, 2020
            </Box>
          </Box>
        }
        actionsComponent={
          showActions && (
            <Box display="flex" justifyContent="space-between">
              <IconButton>
                <ShareIcon />
              </IconButton>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </Box>
          )
        }
        content={mediaObject.description}
        footerComponent={
          showFooter && (
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <IconButton>
                <VisibilityIcon />
              </IconButton>
              <IconButton>
                <AddShoppingCartIcon />
              </IconButton>
            </Box>
          )
        }>
        {showChildren && (
          <Box className={classes.childrenRoot}>
            <Box mr={2}>
              <Button color="primary" variant="contained">
                Reports
              </Button>
            </Box>
            <CmtAvatarGroup avatarSize={34} items={avatars} srcKey="profile_pic" max={5} />
          </Box>
        )}
      </CmtMediaObject>
    </JumboCard>
  );
};

export default MediaObjectView;
