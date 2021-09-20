import React from 'react';
import Box from '@material-ui/core/Box';
import CmtImage from '../../../../@coremat/CmtImage';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  coverPicRoot: {
    overflow: 'hidden',
    borderRadius: theme.overrides.MuiCard.root.borderRadius,
    position: 'relative',
  },
  coverPicImg: {
    '& img': {
      width: '100%',
      display: 'block',
    },
  },
  coverPicContent: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundImage: 'linear-gradient(180deg,rgba(0,0,0,.01) 0,rgba(0,0,0,.65))',
    padding: 10,
    [theme.breakpoints.up('xl')]: {
      padding: '18px 20px',
    },
  },
  coverPicAvatar: {
    '@media screen and (min-width: 1280px) and (max-width: 1399px)': {
      '& .Cmt-avatar-size': {
        width: 46,
        height: 46,
      },
    },
  },
  titleRoot: {
    color: theme.palette.common.white,
    marginBottom: 3,
    '& span': {
      fontSize: 12,
      letterSpacing: 0.4,
    },
  },
  subTitleRoot: {
    fontSize: 16,
    color: alpha(theme.palette.common.white, 0.74),
  },
}));

const CoverPic = ({ userDetail }) => {
  const classes = useStyles();
  const { cover_pic, name, profile_pic, location, username } = userDetail;
  return (
    <Box className={classes.coverPicRoot}>
      <Box className={classes.coverPicImg}>
        <CmtImage src={cover_pic} />
      </Box>
      <Box className={classes.coverPicContent}>
        <Box mr={3} className={classes.coverPicAvatar}>
          <CmtAvatar size={56} src={profile_pic} alt={name} />
        </Box>
        <Box flex={1}>
          <Typography className={classes.titleRoot} component="div" variant="h3">
            {name} <Box component="span">@{username}</Box>
          </Typography>
          <Typography className={classes.subTitleRoot}>{location}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CoverPic;

CoverPic.prototype = {
  userDetail: PropTypes.object.isRequired,
};
