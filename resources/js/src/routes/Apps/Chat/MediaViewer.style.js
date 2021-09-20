import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  dialogRoot: {
    position: 'relative',
    '& .MuiDialog-paperFullScreen': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  mediaViewerRoot: {
    position: 'relative',
    backgroundColor: theme.palette.common.black,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  cancelBtn: {
    color: theme.palette.common.white,
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 1,
  },
  carouselRoot: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& .slick-slide': {
      textAlign: 'center',
      position: 'relative',
      '& img': {
        width: 'auto !important',
        maxHeight: '96vh',
      },
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        left: 0,
        width: '100%',
        height: 30,
        zIndex: 1,
      },
      '&:before': {
        top: 0,
        background: 'linear-gradient(top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.1))',
      },
      '&:after': {
        bottom: 0,
        background: 'linear-gradient(top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.95))',
      },
      '& > *': {
        positin: 'relative',
        zIndex: 9,
      },
    },
    '& .slick-dots': {
      bottom: 10,
    },
    '& .slick-dots li button:before, & .slick-dots li.slick-active button:before': {
      backgroundColor: theme.palette.background.paper,
    },
    '& .embed-responsive': {
      position: 'relative',
      display: 'block',
      width: '100%',
      padding: 0,
      overflow: 'hidden',
      '&:before': {
        content: '""',
        display: 'block',
        paddingTop: '30%',
      },
      '& embed, & iframe, & object, & video': {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 0,
      },
    },
  },
}));

export default useStyles;
