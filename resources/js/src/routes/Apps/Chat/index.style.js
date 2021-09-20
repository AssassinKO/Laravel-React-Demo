import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  inBuildAppContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    borderRadius: 4,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    position: 'relative',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14)',
  },
  inBuildAppSidebar: {
    width: 260,
    transition: 'all 0.3s ease',
    borderRight: `solid 1px ${theme.palette.borderColor.main}`,
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      width: 300,
    },
    [theme.breakpoints.up('xl')]: {
      width: 340,
    },
    '@media screen and (max-width: 767px)': {
      width: '100%',
    },
  },
  inBuildAppMainContent: {
    width: 'calc(100% - 260px)',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up('md')]: {
      width: 'calc(100% - 300px)',
    },
    [theme.breakpoints.up('xl')]: {
      width: 'calc(100% - 340px)',
    },
    '@media screen and (max-width: 767px)': {
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 3,
    },
  },
  appContentHeader: {
    padding: '11px 20px 10px 20px',
    borderBottom: `1px solid ${alpha(theme.palette.common.dark, 0.1)}`,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      padding: '11px 30px 10px 30px',
    },
  },
  backBtn: {
    marginRight: 10,
    marginLeft: -12,
    '@media screen and (min-width: 768px)': {
      display: 'none',
    },
  },
  tabContainer: {
    borderBottom: `1px solid ${theme.palette.borderColor.main}`,
  },
  tabRoot: {
    fontSize: 12,
    letterSpacing: 1.25,
    minWidth: 50,
    width: '50%',
  },
  chatBoxRoot: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: alpha(theme.palette.common.dark, 0.05),
    '@media screen and (max-width: 767px)': {
      display: 'none',
    },
  },
  chatBoxTitle: {
    fontSize: 16,
    color: theme.palette.text.disabled,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,
    },
  },
  statusDot: {
    width: 10,
    height: 10,
    backgroundColor: theme.palette.success.main,
    borderRadius: '50%',
  },
  starIcon: {
    fontSize: 18,
    marginLeft: 8,
    color: theme.palette.text.secondary,
  },
  perfectScrollbarChatCon: {
    height: props => `calc(100vh - ${props.height}px)`,
    display: 'flex',
    flexDirection: 'column',
  },
  titleRoot: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
  },
  starIconRoot: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
    },
  },
}));
export default useStyles;
