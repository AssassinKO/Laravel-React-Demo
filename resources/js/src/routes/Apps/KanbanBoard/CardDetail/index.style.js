import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 24,
    minHeight: 600,
    maxWidth: 750,
  },
  closeButton: {
    position: 'absolute',
    top: 2,
    right: 2,
    padding: 5,
    zIndex: 2,
  },
  cardCover: {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',
    padding: 0,
    position: 'relative',
    height: 160,
    transition: 'opacity 85ms',
    width: '100%',
    '&:hover': {
      opacity: 0.9,
    },
  },
  cardSection: {
    display: 'flex',
    marginBottom: 20,
    width: '100%',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  rowLabelContainer: {
    display: 'flex',
    alignItems: 'center',
    height: 40,
  },
  rowLabel: {
    width: 100,
  },
  rowContent: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    '& .clear-button': {
      opacity: 0,
    },
    '&:hover .clear-button': {
      opacity: 1,
    },
  },
  hoverMemberInfo: {
    boxShadow: theme.shadows[4],
    padding: 5,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: theme.palette.background.paper,
    '& .horizontal .Cmt-user-info': {
      marginRight: 15,
    },
    '& .Cmt-title': {
      marginBottom: 5,
    },
  },
}));

export default useStyles;
