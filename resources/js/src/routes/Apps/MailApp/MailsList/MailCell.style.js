import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mailCellItem: {
    transition: 'all .2s',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    padding: '16px 24px 16px 18px',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:not(:first-child)': {
      borderTop: `1px solid ${theme.palette.borderColor.main}`,
    },
    '&:hover': {
      transform: 'translateY(-4px)',
      backgroundColor: alpha(theme.palette.primary.main, 0.04),
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      '& $titleRoot': {
        color: theme.palette.text.secondary,
      },
      '& $mailCellTimeAction': {
        opacity: 0,
        visibility: 'hidden',
      },
      '& $mailCellBtnAction': {
        opacity: 1,
        visibility: 'visible',
        width: '100%',
      },
    },
    '&.itemRead': {
      backgroundColor: alpha(theme.palette.primary.main, 0.04),
      '& $titleRoot': {
        color: theme.palette.text.secondary,
      },
    },
    '&.selected': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      '& $titleRoot': {
        color: theme.palette.text.secondary,
      },
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 6,
    },
  },
  mailCellContent: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100% - 170px)',
    },
    [theme.breakpoints.up('xl')]: {
      width: 'calc(100% - 260px)',
    },
  },
  mailCellContentAction: {
    width: 'calc(100% - 46px)',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      width: 'calc(100% - 58px)',
    },
  },
  avatarRoot: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    '& .Cmt-avatar-size': {
      [theme.breakpoints.down('sm')]: {
        width: 40,
        height: 40,
      },
    },
  },
  mailCellContentRoot: {
    width: 'calc(100% - 80px)',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 64px)',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  mailCellAction: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 8,
      width: 160,
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.up('xl')]: {
      width: 250,
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end',
    },
  },
  mailCellTimeAction: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  },
  mailCellBtnAction: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    transition: 'all 0.5s ease',
    opacity: 0,
    visibility: 'hidden',
    width: 0,
    overflow: 'hidden',
    '& .icon-btn': {
      padding: 6,
      marginLeft: 4,
      '& .MuiCheckbox-root': {
        padding: 0,
      },
    },
  },
  mailSenderName: {
    color: theme.palette.text.primary,
    fontSize: 12,
  },
  titleRoot: {
    marginBottom: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
    color: theme.palette.text.primary,
  },
  subTitleRoot: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
  },
  mailTimeRoot: {
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'capitalize',
    marginLeft: 10,
  },
  badgeRoot: {
    fontSize: 14,
    letterSpacing: 0.5,
    borderRadius: 4,
    padding: '4px 12px',
    marginLeft: 6,
    width: 85,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}));

export default useStyles;
