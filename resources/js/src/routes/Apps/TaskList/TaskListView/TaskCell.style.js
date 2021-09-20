import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  badgeRoot: {
    fontSize: 14,
    letterSpacing: 0.5,
    borderRadius: 4,
    marginBottom: 5,
    padding: '4px 12px',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 10,
      marginBottom: 0,
    },
  },
  taskCellItem: {
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    padding: '16px 18px',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all .2s',
    '&:hover, &.selected': {
      backgroundColor: alpha(theme.palette.primary.main, 0.04),
      '& $titleRoot': {
        color: theme.palette.text.primary,
      },
      '& $arrowIconRoot': {
        width: 40,
        opacity: 1,
        visibility: 'visible',
        marginLeft: 4,
      },
    },
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
    },
    '&.completed': {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
      '& $titleRoot': {
        color: theme.palette.text.primary,
      },
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      right: 0,
      left: 70,
      bottom: 0,
      height: 1,
      backgroundColor: alpha(theme.palette.common.dark, 0.08),
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  taskCellContent: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100% - 155px)',
    },
  },
  taskCellContentAction: {
    width: 'calc(100% - 55px)',
  },
  taskCellAction: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginLeft: 54,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 8,
      width: 150,
      justifyContent: 'flex-end',
    },
  },
  titleRoot: {
    marginBottom: 4,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
    display: 'inline-block',
    verticalAlign: 'middle',
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100% - 135px)',
    },
  },
  starIcon: {
    '& .MuiSvgIcon-root': {
      fontSize: 20,
    },
  },
  arrowIconRoot: {
    width: 0,
    opacity: 0,
    marginLeft: 0,
    visibility: 'hidden',
    transition: 'all 0.3s ease',
  },
  arrowIcon: {
    '& .MuiSvgIcon-root': {
      fontSize: 16,
    },
  },
  dots: {
    marginLeft: 8,
    marginRight: 6,
    width: 4,
    height: 4,
    backgroundColor: theme.palette.text.secondary,
    borderRadius: '50%',
    display: 'inline-block',
  },
}));

export default useStyles;
