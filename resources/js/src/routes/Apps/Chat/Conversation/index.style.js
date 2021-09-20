import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  chatMainContent: {
    position: 'relative',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  chatMsgItem: {
    padding: '14px 20px',
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
  },
  sentMsgItem: {
    justifyContent: 'flex-end',
    '& $chatTime': {
      textAlign: 'right',
    },
  },
  receivedMsgItem: {
    alignItems: 'flex-end',
  },
  receivedMsgType: {
    alignItems: 'center',
    '& $chatAvatar': {
      marginBottom: 0,
    },
    '& $chatMsgContent': {
      marginLeft: 10,
    },
  },
  chatMsgContent: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 24,
  },
  chatAvatar: {
    marginBottom: 24,
  },
  chatBubble: {
    backgroundColor: alpha(theme.palette.common.dark, 0.04),
    color: theme.palette.text.secondary,
    padding: 16,
    borderRadius: '8px 8px 0 8px',
    maxWidth: 600,
    fontSize: 16,
    marginBottom: 8,
  },
  receiveBubble: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: '8px 8px 8px 0',
  },
  chatTime: {
    fontSize: 12,
    color: theme.palette.text.disabled,
    letterSpacing: 0.4,
  },
  chatDateRoot: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: 0,
      zIndex: 1,
      width: '100%',
      height: 1,
      transform: 'translateY(-50%)',
      backgroundColor: alpha(theme.palette.common.dark, 0.12),
    },
    '& span': {
      position: 'relative',
      zIndex: 3,
      display: 'inline-block',
      padding: '4px 10px',
      border: `1px solid ${alpha(theme.palette.common.dark, 0.08)}`,
      borderRadius: 4,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      fontSize: 16,
    },
  },
  chatBubbleImg: {
    margin: -16,
  },
  chatBubbleImgRow: {
    marginLeft: -5,
    marginRight: -5,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.background.paper,
  },
  chatBubbleImgItem: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
  },
  chatBubbleImgItemInner: {
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
    borderRadius: 4,
    cursor: 'pointer',
    overflow: 'hidden',
    width: 100,
    height: 100,
    '& img': {
      objectFit: 'cover',
      display: 'block',
    },
  },
}));
export default useStyles;
