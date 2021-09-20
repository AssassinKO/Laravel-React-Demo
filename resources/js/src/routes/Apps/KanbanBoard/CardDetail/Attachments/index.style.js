import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: '100%',
  },
  thumbnailRoot: {
    borderRadius: 4,
    minHeight: 80,
    margin: '0 0 8px',
    overflow: 'hidden',
    position: 'relative',
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.04),
    },
  },
  thumbnailPreview: {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    backgroundPosition: '50%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    borderRadius: 4,
    height: 80,
    marginTop: -40,
    position: 'absolute',
    top: '50%',
    left: 0,
    textAlign: 'center',
    textDecoration: 'none',
    zIndex: 1,
    width: 112,
  },
  thumbnailPreviewText: {
    color: theme.palette.text.primary,
    display: 'flex',
    fontSize: 18,
    height: '100%',
    width: '100%',
    lineHeight: '80px',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
  thumbnailDetails: {
    boxSizing: 'border-box',
    cursor: 'pointer',
    fontSize: 14,
    color: theme.palette.text.secondary,
    padding: '8px 8px 8px 128px',
    minHeight: 80,
    margin: 0,
    zIndex: 0,
  },
  thumbnailTitleInfo: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  thumbnailTitle: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
  },
  thumbnailTitleAction: {
    color: theme.palette.text.secondary,
    display: 'flex',
    marginLeft: 8,
    '& .MuiSvgIcon-root': {
      fontSize: 16,
    },
  },
  thumbnailActionOptions: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 8,
    '& > span:not(:first-child)::before': {
      content: '" - "',
      marginLeft: 2,
    },
    '& .options-item': {
      '&.d-flex': {
        display: 'flex',
        alignItems: 'flex-end',
      },
      '& .options-item-icon': {
        color: theme.palette.text.secondary,
        fontSize: 16,
        marginRight: 5,
      },
      '& .options-item-text': {
        color: theme.palette.text.secondary,
        textDecoration: 'underline',
        '&:hover': {
          color: theme.palette.text.primary,
        },
      },
    },
  },
  dateTime: {
    padding: '0 3px',
  },
  buttonMoreLess: {
    color: theme.palette.text.secondary,
    display: 'block',
    padding: '6px 8px',
    borderRadius: 4,
    textDecoration: 'underline',
    transition: 'background-color,border-color,box-shadow 85ms ease',
    '&:hover': {
      color: theme.palette.text.primary,
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
      textDecoration: 'underline',
    },
  },
  uploadButton: {
    textTransform: 'none',
    backgroundColor: alpha(theme.palette.primary.main, 0.04),
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
    },
  },
}));

export default useStyles;
