import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  inBuildAppCard: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 4,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14)',
    position: 'relative',
    overflow: 'hidden',
  },
  inBuildAppHeader: {
    borderBottom: `1px solid ${alpha(theme.palette.common.dark, 0.1)}`,
    display: 'flex',
    alignItems: 'center',
  },
  perfectScrollbarContactCon: {
    height: props => `calc(100vh - ${props.height}px)`,
  },
  perfectScrollbarContactSidebar: {
    height: props => `calc(100vh - ${props.height}px)`,
  },
  inBuildAppHeaderSidebar: {
    display: 'flex',
    alignItems: 'center',
    padding: '11px 16px 10px 16px',
    [theme.breakpoints.up('md')]: {
      width: 256,
    },
  },
  inBuildAppHeaderTitle: {
    marginLeft: 8,
    color: theme.palette.common.dark,
    cursor: 'pointer',
  },
  inBuildAppHeaderContent: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '11px 16px 10px 16px',
    [theme.breakpoints.up('md')]: {
      width: 'calc(100% - 256px)',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      '& .CmtSearch-input': {
        width: '100%',
      },
      '& .icon-btn': {
        padding: 6,
        '& .MuiSvgIcon-root': {
          fontSize: 18,
        },
      },
    },
  },
  inBuildAppContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    position: 'relative',
    '&.collapsed': {
      '& $inBuildAppSidebar': {
        width: 72,
      },
      '& $inBuildAppMainContent': {
        width: 'calc(100% - 72px)',
      },
      '& .Cmt-user-info, & .Cmt-nav-text, & .Cmt-nav-count, & .Cmt-more-vert-icon, & .Cmt-media-header .title-root, & .Cmt-media-header .sub-title-text': {
        opacity: 0,
        visibility: 'hidden',
      },
      '& .connection-cell-item': {
        paddingLeft: 15,
        paddingRight: 13,
        overflow: 'hidden',
      },
      '& .Cmt-media-header .dot-status': {
        marginLeft: -24,
        position: 'relative',
        zIndex: 1,
        border: `solid 2px ${theme.palette.common.white}`,
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
        borderTopColor: alpha(theme.palette.common.dark, 0.12),
      },
      '& $appNavHeaderItemText': {
        display: 'none',
      },
      '& $inBuildAppSidebarHeader': {
        paddingLeft: 15,
        paddingRight: 15,
      },
      '& $addTaskBtn': {
        borderRadius: '50%',
        minWidth: 10,
        padding: 8,
      },
      '& .add-task-btn-text': {
        opacity: 0,
        visibility: 'hidden',
        width: 0,
        marginLeft: 0,
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& $inBuildAppSidebar': {
        width: 72,
      },
      '& $inBuildAppMainContent': {
        width: 'calc(100% - 72px)',
      },
      '& .Cmt-user-info, & .Cmt-nav-text, & .Cmt-nav-count, & .Cmt-more-vert-icon, & .Cmt-media-header .title-root, & .Cmt-media-header .sub-title-text': {
        opacity: '0 !important',
        visibility: 'hidden !important',
      },
      '& .connection-cell-item': {
        paddingLeft: 15,
        paddingRight: 13,
        overflow: 'hidden',
      },
      '& .Cmt-media-header .dot-status': {
        marginLeft: -24,
        position: 'relative',
        zIndex: 1,
        border: `solid 2px ${theme.palette.common.white}`,
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
        borderTopColor: alpha(theme.palette.common.dark, 0.12),
      },
      '& $appNavHeaderItemText': {
        display: 'none',
      },
      '& $inBuildAppSidebarHeader': {
        paddingLeft: 15,
        paddingRight: 15,
      },
      '& $addTaskBtn': {
        borderRadius: '50%',
        minWidth: 10,
        padding: 8,
      },
    },
  },
  inBuildAppSidebar: {
    width: 256,
    transition: 'all 0.3s ease',
    borderRight: `solid 1px ${theme.palette.borderColor.main}`,
    overflow: 'hidden',
  },
  inBuildAppMainContent: {
    width: 'calc(100% - 256px)',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
  },
  inBuildAppSidebarHeader: {
    padding: 24,
    paddingBottom: 20,
    transition: 'all 0.3s ease',
  },
  addTaskBtn: {
    width: '100%',
    padding: '8px 16px',
    overflow: 'hidden',
    '& .add-task-btn-text': {
      marginLeft: 10,
      transition: 'all 0.3s ease',
      opacity: 1,
      visibility: 'visible',
      whiteSpace: 'nowrap',
      [theme.breakpoints.down('sm')]: {
        opacity: 0,
        visibility: 'hidden',
        width: 0,
        marginLeft: 0,
      },
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
    marginTop: 12,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 0,
    borderTop: 'solid 1px transparent',
  },
  appNavHeaderItemText: {
    paddingTop: 8,
    paddingBottom: 20,
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
    fontSize: 10,
    color: theme.palette.text.secondary,
    letterSpacing: 1.5,
  },
  appContentHeader: {
    padding: '6px 16px',
    borderBottom: `1px solid ${theme.palette.borderColor.main}`,
    display: 'flex',
    alignItems: 'center',
  },
  selectBoxRoot: {
    fontSize: 14,
    letterSpacing: 0.25,
    color: theme.palette.text.disabled,
    marginLeft: 10,
    '&:before, &:after': {
      display: 'none',
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
  },
  appHeaderTitle: {
    marginLeft: 12,
    color: theme.palette.common.dark,
    cursor: 'pointer',
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
  detailHeader: {
    padding: '20px 24px 16px 30px',
    borderBottom: `solid 1px ${theme.palette.borderColor.main}`,
  },
  detailHeaderSub: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
  },
  subjectTitle: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
    color: theme.palette.common.dark,
  },
  messageDetail: {
    position: 'relative',
  },
  messageItem: {
    padding: '30px 24px 16px 30px',
    position: 'relative',
    '&:not(:first-child)': {
      borderTop: `solid 1px ${theme.palette.borderColor.main}`,
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.dark, 0.04),
      '& $replyRoot': {
        opacity: 1,
        visibility: 'visible',
      },
    },
  },
  replyRoot: {
    position: 'absolute',
    right: 10,
    top: 0,
    zIndex: 1,
    opacity: 0,
    visibility: 'hidden',
  },
  messageItemInner: {
    paddingTop: 10,
    paddingBottom: 20,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 15,
      paddingBottom: 40,
    },
    [theme.breakpoints.up('xl')]: {
      width: '80%',
      margin: '0 auto',
      paddingTop: 25,
      paddingBottom: 50,
    },
  },
  dateRoot: {
    border: `solid 1px ${theme.palette.borderColor.main}`,
    padding: '5px 12px',
    borderRadius: 4,
    position: 'absolute',
    left: '50%',
    top: -17,
    zIndex: 1,
    transform: 'translateX(-50%)',
    backgroundColor: theme.palette.background.paper,
  },
  radioGroupRoot: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  formControlLable: {
    padding: '0 11px',
    marginLeft: 0,
    marginRight: 0,
    '& .MuiFormControlLabel-label': {
      fontSize: 14,
      paddingLeft: 7,
    },
  },
  borderLeft: {
    width: 1,
    height: 36,
    backgroundColor: alpha(theme.palette.common.dark, 0.12),
    marginLeft: 4,
  },
}));
export default useStyles;
