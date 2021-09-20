import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  productListItems: {
    display: 'flex',
    border: `1px solid ${alpha(theme.palette.common.dark, 0.08)}`,
    borderRadius: 4,
    padding: 17,
    position: 'relative',
    overflow: 'hidden',
    '& .Cmt-media-object': {
      transition: 'all 0.3s ease',
      alignItems: 'center',
      width: '100%',
      '@media screen and (max-width: 420px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
    '& .Cmt-media-image': {
      marginTop: 0,
      marginRight: 4,
      alignSelf: 'center',
      '@media screen and (max-width: 420px)': {
        alignSelf: 'flex-start',
        marginRight: 0,
        marginBottom: 10,
        width: '100%',
        '& img': {
          marginRight: 0,
          width: '100%',
          objectFit: 'cover',
        },
      },
      '& img': {
        borderRadius: 4,
      },
    },
    '& .Cmt-media-body': {
      width: 'calc(100% - 100px)',
      flex: 'inherit',
      '@media screen and (max-width: 420px)': {
        width: '100%',
      },
      '& .Cmt-media-header + div': {
        marginBottom: 0,
      },
    },
    '& .Cmt-media-header-content': {
      width: 'calc(100% - 85px)',
      flex: 'inherit',
    },
    '&:hover': {
      '& .Cmt-media-object': {
        transform: 'translateX(-50px)',
      },
      '& $listItemAction': {
        transform: 'translateX(85%)',
      },
    },
    '&.active-activated': {
      '& $listItemAction': {
        transform: 'translateX(0)',
      },
      '& $listItemActionHover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.75),
        borderRadius: 0,
        width: 120,
        height: '100%',
        marginTop: 0,
        '@media screen and (max-width: 420px)': {
          display: 'none',
        },
        '& .btn': {
          display: 'none',
        },
      },
      '&:hover': {
        '& .Cmt-media-object': {
          transform: 'translateX(0)',
        },
        '& $listItemAction': {
          transform: 'translateX(0)',
        },
      },
    },
  },
  titleRoot: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },
  subTitleRoot: {
    fontWeight: theme.typography.fontWeightRegular,
    marginTop: 4,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
    color: theme.palette.text.secondary,
  },
  dotsRoot: {
    height: 10,
    width: 10,
    borderRadius: '50%',
    [theme.breakpoints.up('lg')]: {
      height: 12,
      width: 12,
    },
    cursor: 'pointer',
  },
  sizeVarRoot: {
    fontSize: 12,
    padding: '3px 6px',
    borderRadius: 4,
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      color: theme.palette.primary.main,
    },
    cursor: 'pointer',
  },
  listItemAction: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '100%',
    top: 0,
    zIndex: 1,
    transition: 'all 0.3s ease',
    transform: 'translateX(105%)',
    display: 'flex',
  },
  listItemActionHover: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 140,
    height: 140,
    borderRadius: '50%',
    padding: 12,
    cursor: 'pointer',
    marginTop: -11,
    '@media screen and (max-width: 420px)': {
      width: 240,
      height: 240,
      paddingLeft: 3,
    },
    '& .btn': {
      color: theme.palette.common.white,
      padding: 6,
      fontSize: 18,
    },
  },
  revealContainer: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
    padding: 9,
  },
}));

export default useStyles;
