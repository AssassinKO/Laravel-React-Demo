import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  composeMail: {
    position: 'absolute',
    top: 'inherit !important',
    left: 'inherit !important',
    right: '20px !important',
    bottom: '100% !important',
    zIndex: 1,
    width: 340,
    transition: 'all 0.3s ease',
    '& .MuiDialog-paper': {
      boxShadow: 'none',
      backgroundColor: 'transparent',
      overflowY: 'inherit',
    },
    '& .MuiBackdrop-root': {
      display: 'none',
    },
    '&.open': {
      bottom: '0 !important',
    },
    [theme.breakpoints.up('sm')]: {
      width: 480,
      right: '40px !important',
    },
    [theme.breakpoints.up('md')]: {
      width: 500,
      right: '70px !important',
    },
    [theme.breakpoints.up('xl')]: {
      width: 620,
    },
  },
  scrollbarRoot: {
    height: 380,
    marginRight: -24,
    paddingRight: 24,
  },
  composeHeader: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: '9px 24px',
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: alpha(theme.palette.common.black, 0.4),
    },
    '& > *': {
      position: 'relative',
      zIndex: 3,
    },
  },
  composeHeaderBtn: {
    color: theme.palette.common.white,
    marginLeft: 5,
    [theme.breakpoints.down('xs')]: {
      padding: 6,
      '& .MuiSvgIcon-root': {
        fontSize: 18,
      },
    },
  },
  componseCard: {
    transition: 'all 0.3s ease',
    backgroundColor: theme.palette.popupColor.main,
    boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
    '&.card-minimise': {
      transform: 'translateY(calc(100% - 66px))',
    },
    '& .Cmt-card-content': {
      paddingTop: 12,
    },
  },
  cBccField: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.borderColor.main}`,
    '& .to-input-type': {
      marginBottom: -2,
      '& .MuiInput-underline:before': {
        borderBottom: '0 none',
      },
    },
    '& .MuiChip-root': {
      marginRight: 8,
    },
  },
  toTextRoot: {
    marginRight: 5,
  },
  textField: {
    color: theme.palette.text.primary,
    '& .MuiOutlinedInput-root': {
      borderRadius: 0,
    },
    '& .MuiInput-underline:before': {
      borderBottom: `1px solid ${theme.palette.borderColor.main}`,
    },
  },
  btnRoot: {
    '& .MuiSvgIcon-root': {
      marginRight: 6,
    },
  },
  emojiPickerView: {
    '& .emoji-picker': {
      position: 'static',
      '& .emoji-picker-react': {
        top: 0,
        bottom: 48,
      },
    },
  },
  filePickerRoot: {
    '& .dropzone': {
      padding: 0,
      border: '0 none',
      backgroundColor: 'transparent',
    },
  },
}));

export default useStyles;
