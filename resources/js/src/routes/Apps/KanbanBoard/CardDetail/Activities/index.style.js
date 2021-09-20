import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: '100%',
  },
  activitiesContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  activityItemRoot: {
    display: 'flex',
    marginBottom: 16,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  activityContentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  activityContent: {
    marginBottom: 5,
    fontSize: 14,
    color: theme.palette.text.secondary,
    '& a': {
      color: theme.palette.text.primary,
    },
  },
  username: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    marginRight: 5,
  },
  dateTime: {
    color: theme.palette.text.disabled,
    padding: '0 3px 0 0',
    letterSpacing: 0.4,
    fontSize: 12,
    width: 'auto',
  },
  avatarWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    marginRight: 8,
  },
  attachmentWrapper: {
    width: '100%',
  },
  attachmentImage: {
    maxHeight: 500,
    maxWidth: '100%',
    borderRadius: 4,
  },
  commentWrapper: {
    padding: '10.5px 12px',
    border: `1px solid ${theme.palette.text.disabled}`,
    borderRadius: 4,
  },
  commentBoxRoot: {
    display: 'flex',
    marginBottom: 16,
  },
  commentFrame: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
  },
  commentBox: {
    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    border: `1px solid ${alpha(theme.palette.common.dark, 0.23)}`,
    borderRadius: 4,
    padding: '10.5px 12px',
    position: 'relative',
    transition: 'padding-bottom 85ms ease',
    '&:hover': {
      borderColor: alpha(theme.palette.common.dark, 0.87),
    },
    '& textarea': {
      color: 'inherit',
      font: 'inherit',
      boxSizing: 'content-box',
      padding: 0,
      minWidth: 0,
      width: '100%',
      background: 'none',
      border: 0,
      display: 'block',
      margin: 0,
      resize: 'none',
      outline: 0,
      animationName: 'mui-auto-fill-cancel',
    },
  },
  commentControls: {
    opacity: 0,
    position: 'absolute',
    bottom: 10.5,
    left: 12,
    transform: 'translateY(48px)',
    transition: 'opacity,transform 85ms ease',
  },
  isFocused: {
    '& $commentBox': {
      paddingBottom: 56,
      borderWidth: 1,
      borderColor: theme.palette.primary.main,
    },
    '& $commentControls': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));

export default useStyles;
