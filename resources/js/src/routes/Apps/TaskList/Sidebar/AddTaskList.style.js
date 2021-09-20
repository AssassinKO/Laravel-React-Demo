import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
    cursor: 'pointer',
    '& .Cmt-icon-root': {
      minWidth: 18,
    },
    '& .MuiSvgIcon-root': {
      fontSize: 18,
      display: 'block',
    },
    '& .Cmt-nav-text': {
      marginTop: 4,
      marginBottom: 4,
      marginLeft: 20,
      transition: 'all 0.3s ease',
      opacity: 1,
      visibility: 'visible',
      fontSize: 14,
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: 1.5,
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
    '.collapsed &': {
      padding: '8px 16px',
      marginLeft: 12,
      marginRight: 11,
      borderRadius: '50%',
      overflow: 'hidden',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '8px 16px',
      marginLeft: 12,
      marginRight: 11,
      borderRadius: '50%',
      overflow: 'hidden',
    },
  },
}));

export default useStyles;
