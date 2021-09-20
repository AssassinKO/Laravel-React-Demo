import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    '& .Cmt-card-content': {
      paddingTop: 16,
    },
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    paddingTop: 36,
  },
  iconBtn: {
    color: theme.palette.common.white,
  },
  scrollbarRoot: {
    height: 186,
    marginRight: -24,
    marginLeft: -24,
    marginTop: -10,
    paddingTop: 10,
  },
  eventItemRoot: {
    position: 'relative',
    padding: '10px 24px',
    transition: 'all .2s',
    '& .Cmt-media-image': {
      alignSelf: 'flex-start',
    },
    '&:hover, &.checked': {
      '& $titleRoot, & $subTitleRoot': {
        color: theme.palette.text.disabled,
      },
    },
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
    },
  },
  titleRoot: {
    fontWeight: theme.typography.fontWeightRegular,
    marginBottom: 4,
  },
  subTitleRoot: {
    fontSize: 12,
    letterSpacing: 0.4,
  },
  eventTitle: {
    color: theme.palette.text.disabled,
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  btnRoot: {
    textTransform: 'capitalize',
    fontWeight: theme.typography.fontWeightRegular,
    [theme.breakpoints.up('sm')]: {
      fontSize: 16,
    },
  },
}));

export default useStyles;
