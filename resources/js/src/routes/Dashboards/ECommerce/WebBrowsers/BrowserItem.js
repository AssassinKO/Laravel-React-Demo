import React from 'react';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import BrowsersGraph from './BrowsersGraph';
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'relative',
    padding: '8px 24px',
    cursor: 'pointer',
    overflow: 'hidden',
    '& .Cmt-media-object': {
      flex: '1 1 0%',
      transition: 'all 0.2s ease-in-out',
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      '& .Cmt-media-object': {
        transform: 'translateX(-60px)',
      },
      '& $chartContainer': {
        right: 24,
      },
      '& $titleRoot': {
        color: theme.palette.primary.main,
      },
    },
  },
  titleRoot: {
    fontSize: 14,
  },
  chartContainer: {
    position: 'absolute',
    right: '-110%',
    width: 100,
    transition: 'all 0.2s ease-in-out',
  },
  subTitleRoot: {
    fontSize: 12,
    color: theme.palette.text.secondary,
    marginTop: 2,
  },
  avatarRoot: {
    marginRight: 16,
    backgroundColor: 'transparent',
  },
}));

const BrowserItem = ({ item }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CmtMediaObject
        avatar={<CmtAvatar className={classes.avatarRoot} src={item.image} />}
        avatarPos="center"
        title={
          <Box fontWeight={700} className={classes.titleRoot}>
            {item.browserName}
          </Box>
        }
        subTitle={
          <Typography className={classes.subTitleRoot}>
            <Box component="span">{item.user} user</Box>
          </Typography>
        }
      />
      <Box className={classes.chartContainer}>
        <BrowsersGraph browserData={item.browserData} color={item.color} />
      </Box>
    </Box>
  );
};
export default BrowserItem;
