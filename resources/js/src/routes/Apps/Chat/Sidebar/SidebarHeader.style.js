import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  sidebarHeaderRoot: {
    padding: '15px 16px 5px',
  },
  userRoot: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarRoot: {
    cursor: 'pointer',
    position: 'relative',
  },
  statusDot: {
    width: 16,
    height: 16,
    backgroundColor: props => props.statusColor,
    borderRadius: '50%',
    border: `solid 1px ${theme.palette.common.white}`,
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 1,
    '&:before': {
      content: '""',
      position: 'absolute',
      left: '50%',
      top: '50%',
      zIndex: 1,
      transform: 'translate(-50%, -50%)',
      width: 0,
      height: 0,
      borderLeft: '4px solid transparent',
      borderRight: '4px solid transparent',
      borderTop: `4px solid ${theme.palette.common.white}`,
      marginTop: 1,
    },
  },
  userInfo: {
    marginLeft: 16,
    transition: 'all 0.3s ease',
    opacity: 1,
    visibility: 'visible',
  },
  userTitle: {
    color: theme.palette.text.primary,
    marginBottom: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    '& .MuiSvgIcon-root': {
      marginLeft: 16,
    },
  },
  userSubTitle: {
    fontSize: 11,
    color: theme.palette.text.secondary,
    letterSpacing: 0.4,
    [theme.breakpoints.up('md')]: {
      fontSize: 12,
    },
  },
  searchRoot: {
    position: 'relative',
    width: '100%',
    '& .MuiSvgIcon-root': {
      position: 'absolute',
      left: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1,
      color: theme.palette.text.secondary,
      fontSize: 20,
    },
    '& .MuiInputBase-root': {
      width: '100%',
    },
    '& .MuiInputBase-input': {
      height: 36,
      borderRadius: 4,
      border: `1px solid ${theme.palette.borderColor.main}`,
      color: theme.palette.text.disabled,
      boxSizing: 'border-box',
      padding: '5px 15px 5px 35px',
      transition: 'all 0.3s ease',
      fontSize: 12,
      '&:focus': {
        borderColor: theme.palette.primary.main,
      },
    },
  },
}));

export default useStyles;
