import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  taskItemRoot: {
    padding: '10px 16px 10px 24px',
    position: 'relative',
    transition: 'all .2s',
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      '& $iconBtn': {
        display: 'block',
      },
      '& $badgeRoot': {
        display: 'none',
      },
    },
    '& .Cmt-media-image': {
      alignSelf: 'flex-start',
      marginTop: -6,
      marginLeft: -12,
      width: 54,
    },
    '& .Cmt-media-body': {
      width: 'calc(100% - 54px)',
      flex: 'inherit',
    },
    '& .Cmt-media-header-content': {
      width: 'calc(100% - 52px)',
      flex: 'inherit',
    },
  },
  titleRoot: {
    fontWeight: theme.typography.fontWeightRegular,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  subTitleRoot: {
    letterSpacing: 0.4,
    fontSize: 12,
    color: theme.palette.text.disabled,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  actionRoot: {
    display: 'flex',
    alignItems: 'center',
    width: 50,
  },
  iconBtn: {
    color: theme.palette.primary.main,
    display: 'none',
    padding: 10,
  },
  badgeRoot: {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    color: theme.palette.primary.main,
    padding: 2,
    fontSize: 14,
    borderRadius: '50%',
    width: 22,
    height: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 18,
    top: '50%',
    zIndex: 1,
    transform: 'translateY(-50%)',
  },
}));

export default useStyles;
