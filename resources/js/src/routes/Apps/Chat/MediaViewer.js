import React, { useEffect, useState } from 'react';
import CmtCarousel from '../../../@coremat/CmtCarousel';
import CmtImage from '../../../@coremat/CmtImage';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import useStyles from './MediaViewer.style';

const renderRow = (data, index) => {
  if (data.metaData.type.startsWith('image')) {
    return <CmtImage key={index} src={data.preview} alt={data.name} />;
  } else {
    return (
      <Box className="embed-responsive">
        <iframe key={index} src={data.preview} title={data.name} />
      </Box>
    );
  }
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MediaViewer = ({ position, medias, handleClose }) => {
  const [isOpen, setOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (position > -1) setOpen(true);
    else {
      setOpen(false);
    }
  }, [position]);

  return (
    <Dialog className={classes.dialogRoot} fullScreen open={isOpen} onClose={handleClose} TransitionComponent={Transition}>
      <Box className={classes.mediaViewerRoot}>
        <IconButton className={classes.cancelBtn} onClick={handleClose}>
          <CancelIcon />
        </IconButton>
        {position >= 0 ? (
          <Box className={classes.carouselRoot}>
            <CmtCarousel
              settings={{
                dots: false,
                initialSlide: position,
                arrows: true,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
              }}
              slickGoTo={position}
              style={{ width: '100%' }}
              data={medias}
              renderRow={renderRow}
            />
          </Box>
        ) : null}
      </Box>
    </Dialog>
  );
};

export default MediaViewer;
