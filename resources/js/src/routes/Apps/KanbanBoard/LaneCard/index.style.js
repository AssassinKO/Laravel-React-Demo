import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 12,
    '&:hover $deleteButton': {
      opacity: 1,
    },
  },
  deleteButton: {
    position: 'absolute',
    top: 2,
    right: 2,
    padding: 5,
    width: 30,
    height: 30,
    zIndex: 3,
    opacity: 0,
    transition: 'opacity 85ms ease',
  },
  cardTitle: {
    wordBreak: 'break-all',
  },
  footerRoot: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 14,
    marginTop: 16,
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
  commentCounter: {
    display: 'flex',
    alignItems: 'center',
    '& > span.counter': {
      fontSize: 15,
      marginRight: 2,
    },
  },
}));

export default useStyles;
