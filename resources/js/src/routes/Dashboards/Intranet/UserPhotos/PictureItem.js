import React, { useEffect, useLayoutEffect, useState } from 'react';

import { alpha, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import CmtImage from '../../../../@coremat/CmtImage';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    borderRadius: 6,
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover': {
      '& $titleBar': {
        bottom: 0,
      },
    },
  },
  titleBar: {
    position: 'absolute',
    color: theme.palette.common.white,
    backgroundColor: alpha(theme.palette.common.black, 0.8),
    bottom: '-100px',
    left: 0,
    right: 0,
    zIndex: 1,
    padding: '10px 16px',
    transition: 'all 0.3s ease',
  },
  titleRoot: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },
  subTitleRoot: {
    fontSize: 12,
    color: alpha(theme.palette.common.white, 0.38),
  },
}));

const boxRef = React.createRef();

const PictureItem = ({ item }) => {
  const classes = useStyles();
  const [boxHeight, setBoxHeight] = useState(0);
  const [dimensions, setDimensions] = React.useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    if (boxRef.current) {
      setBoxHeight(boxRef.current.clientWidth);
    }
  }, [item, dimensions]);

  useLayoutEffect(() => {
    function windowResized() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', windowResized);
    windowResized();
    return () => window.removeEventListener('resize', windowResized);
  }, []);

  return (
    <div className={classes.root} ref={boxRef} style={{ height: boxHeight }}>
      <CmtImage src={item.photo_url} alt={item.caption} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
      <div className={classes.titleBar}>
        <Typography component="div" variant="body1" className={classes.titleRoot}>
          {item.caption}
        </Typography>
        <Typography className={classes.subTitleRoot}>{item.size} Mb</Typography>
      </div>
    </div>
  );
};

export default PictureItem;
