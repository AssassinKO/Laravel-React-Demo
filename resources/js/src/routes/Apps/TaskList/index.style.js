import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  inBuildAppContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    minWidth: 400,
    flex: '0 1 1440px',
    backgroundColor: theme.palette.background.paper,
    borderRadius: 4,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    position: 'relative',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14)',
    '&.collapsed': {
      '& $inBuildAppSidebar': {
        width: 72,
      },
      '& $inBuildAppMainContent': {
        width: 'calc(100% - 72px)',
      },
      '& .Cmt-user-info, & .Cmt-nav-text, & .Cmt-nav-count, & .Cmt-more-vert-icon': {
        opacity: 0,
        visibility: 'hidden',
      },
      '& $appNavItem': {
        marginLeft: 12,
        marginRight: 11,
        padding: '8px 16px',
        borderRadius: '50%',
        overflow: 'hidden',
        width: 48,
        height: 48,
      },
      '& $appNavHeaderItem': {
        display: 'none',
      },
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 240,
    },
  },
  perfectScrollbarTaskListCon: {
    height: props => `calc(100vh - ${props.height}px)`,
  },
  perfectScrollbarTaskListSidebar: {
    height: props => `calc(100vh - ${props.height}px)`,
  },
  inBuildAppSidebar: {
    width: 256,
    transition: 'all 0.3s ease',
    borderRight: `solid 1px ${theme.palette.borderColor.main}`,
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      width: 72,
      '& .Cmt-user-info, & .Cmt-nav-text, & .Cmt-nav-count, & .Cmt-more-vert-icon': {
        opacity: 0,
        visibility: 'hidden',
      },
    },
  },
  inBuildAppMainContent: {
    width: 'calc(100% - 256px)',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 72px)',
    },
  },
  appNav: {
    padding: 0,
  },
  appNavItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '9px 16px 10px 20px',
    marginRight: 16,
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
    width: 'auto',
    whiteSpace: 'nowrap',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    color: theme.palette.text.secondary,
    transition: 'all 0.3s ease',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 12,
      marginRight: 11,
      padding: '8px 16px',
      borderRadius: '50%',
      overflow: 'hidden',
      width: 48,
      height: 48,
    },
    '& .Cmt-icon-root': {
      minWidth: 10,
    },
    '& .MuiSvgIcon-root': {
      fontSize: 18,
    },
    '& .Cmt-nav-text': {
      marginLeft: 20,
      transition: 'all 0.3s ease',
      opacity: 1,
      visibility: 'visible',
      whiteSpace: 'nowrap',
      '& .MuiTypography-body1': {
        fontSize: 14,
        fontWeight: theme.typography.fontWeightBold,
      },
    },
    '& .Cmt-nav-count': {
      transition: 'all 0.3s ease',
      opacity: 1,
      visibility: 'visible',
    },
    '&:hover, &:focus': {
      color: theme.palette.text.primary,
      backgroundColor: alpha(theme.palette.common.dark, 0.1),
      '& .Cmt-icon-root': {
        color: theme.palette.text.primary,
      },
    },
    '&.active': {
      color: theme.palette.primary.main,
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      '& .Cmt-icon-root': {
        color: theme.palette.primary.main,
      },
      '&:hover, &:focus': {
        '& .Cmt-icon-root': {
          color: theme.palette.primary.main,
        },
      },
    },
  },
  appTaskNavItem: {
    '& .Cmt-more-vert-icon': {
      transition: 'all 0.3s ease',
      display: 'none',
      '& .MuiSvgIcon-root': {
        display: 'block',
      },
    },
    '&:hover, &:focus': {
      '& .Cmt-more-vert-icon': {
        display: 'block',
      },
      '& .Cmt-nav-count': {
        display: 'none',
      },
    },
  },
  appNavHeaderItem: {
    position: 'relative',
    padding: '24px 16px 20px 16px',
    textTransform: 'uppercase',
    fontSize: 10,
    color: theme.palette.text.secondary,
    letterSpacing: 1.5,
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  appContentHeader: {
    padding: '11px 16px 10px 16px',
    borderBottom: `1px solid ${alpha(theme.palette.common.dark, 0.1)}`,
    display: 'flex',
    alignItems: 'center',
    height: 70,
    [theme.breakpoints.down('sm')]: {
      '& .icon-btn': {
        display: 'none',
      },
    },
  },
  taskListSelectorRoot: {
    fontSize: 18,
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,
    },
  },
  taskTitle: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 16,
    color: theme.palette.common.dark,
    cursor: 'pointer',
    '& .MuiSvgIcon-root': {
      marginLeft: 20,
      fontSize: 16,
    },
  },
  searchAction: {
    position: 'relative',
    width: 38,
    height: 38,
    marginRight: 10,
  },
  searchActionBar: {
    position: 'absolute',
    right: 0,
    top: 2,
    zIndex: 1,
    '& .MuiInputBase-root': {
      border: '0 none !important',
    },
    '& .MuiInputBase-input': {
      backgroundColor: theme.palette.background.paper,
    },
  },
}));
export default useStyles;
