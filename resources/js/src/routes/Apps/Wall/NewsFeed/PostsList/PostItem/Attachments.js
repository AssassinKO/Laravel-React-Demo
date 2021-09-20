import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import CmtGridView from '../../../../../../@coremat/CmtGridView';
import CmtImage from '../../../../../../@coremat/CmtImage';
import { alpha, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MediaViewer from '../../../../Chat/MediaViewer';

const useStyles = makeStyles(theme => ({
  imgView: {
    cursor: 'pointer',
    borderRadius: 4,
    overflow: 'hidden',
    position: 'relative',
    maxHeight: 240,
    height: '100%',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
  },
  imgCount: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: alpha(theme.palette.common.black, 0.5),
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
  },
}));

const Attachments = ({ attachments }) => {
  const classes = useStyles();
  const [position, setPosition] = useState(-1);

  const handleClose = () => {
    setPosition(-1);
  };

  return (
    <Box mb={5}>
      <CmtGridView
        itemPadding={24}
        data={attachments.length > 4 ? attachments.slice(0, 4) : attachments}
        column={attachments.length > 3 ? 2 : attachments.length}
        renderRow={(item, index) => (
          <Box key={index} className={classes.imgView} onClick={() => setPosition(index)}>
            <CmtImage src={item.preview} alt="attachment" />
            {attachments.length > 4 && index === 3 && <Box className={classes.imgCount}>+ {attachments.length - 3}</Box>}
          </Box>
        )}
      />
      <MediaViewer position={position} medias={attachments} handleClose={handleClose} />
    </Box>
  );
};

export default Attachments;

Attachments.prototype = {
  attachments: PropTypes.array.isRequired,
};
