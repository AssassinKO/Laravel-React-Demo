import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  feedItemRoot: {
    position: 'relative',
    padding: '8px 24px',
    transition: 'all .2s',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.161741)',
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      '& $btnActions': {
        display: 'flex',
      },
    },
    '& .Cmt-media-object': {
      alignItems: 'center',
      overflow: 'hidden',
    },
    '& .Cmt-media-image': {
      alignSelf: 'flex-start',
      width: 72,
    },
    '& .Cmt-media-body': {
      width: 'calc(100% - 72px)',
      flex: 'inherit',
    },
    '& .Cmt-media-header-content': {
      width: '100%',
      flex: 'inherit',
    },
    '& .Cmt-media-actions': {
      position: 'absolute',
      right: '-110%',
      left: 'auto',
      top: 'auto',
      bottom: 'auto',
      zIndex: 2,
      transition: 'all 0.2s',
    },
    '&:hover .Cmt-media-actions': {
      right: 5,
    },
  },
  actionButtons: {
    '& .btn-white': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    },
    '& .MuiFab-root:not(:last-child)': {
      marginRight: 12,
    },
  },
  titleRoot: {
    letterSpacing: 0.25,
    marginBottom: 4,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: theme.palette.text.primary,
  },
  subTitleRoot: {
    letterSpacing: 0.4,
    fontSize: 12,
    color: theme.palette.text.disabled,
  },
  groupImages: {
    display: 'flex',
    '& > .MuiAvatar-root:not(:last-child)': {
      cursor: 'pointer',
      marginRight: 6,
    },
  },
}));

export default useStyles;
