import React from 'react';
import Box from '@material-ui/core/Box';
import CmtImage from '../../../../@coremat/CmtImage';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  postCellItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 24px',
  },
  textTruncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },
  postCellImg: {
    '& img': {
      display: 'block',
    },
  },
  postCellContent: {
    width: 'calc(100% - 132px)',
    paddingLeft: 24,
  },
}));

const PostCell = ({ item }) => {
  const classes = useStyles();
  return (
    <Box className={classes.postCellItem}>
      <Box className={classes.postCellImg}>
        <CmtImage src={item.image} />
      </Box>
      <Box className={classes.postCellContent}>
        <Typography component="div" variant="h4">
          {item.title}
        </Typography>
        <Box component="p" fontSize={12} my={1} color="text.disabled">
          {item.date}
        </Box>
        <Box component="p" className={classes.textTruncate} color="text.secondary">
          {item.description}
        </Box>
      </Box>
    </Box>
  );
};

export default PostCell;
