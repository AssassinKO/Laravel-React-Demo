import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  tableRowRoot: {
    transition: 'all .2s',
    borderTop: `solid 1px ${theme.palette.borderColor.main}`,
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.04),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      borderTopColor: 'transparent',
      '& .action-option': {
        opacity: 1,
        visibility: 'visible',
        transform: 'translateX(0)',
      },
      '& .star-view': {
        transform: 'translateX(0)',
      },
    },
    '&.selected': {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
    },
  },
  tableCellRoot: {
    padding: '6px 10px',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    borderBottom: '0 none',
    '&:first-child': {
      paddingLeft: 15,
    },
    '&:last-child': {
      paddingRight: 15,
      [theme.breakpoints.up('lg')]: {
        paddingRight: 35,
      },
    },
  },
  tableCellAction: {
    minWidth: 150,
  },
  gridContactCell: {
    border: `1px solid ${theme.palette.borderColor.main}`,
    borderRadius: 4,
    margin: 6,
    padding: 16,
    color: theme.palette.text.secondary,
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2)',
      '& .action-option': {
        opacity: 1,
        visibility: 'visible',
        transform: 'translateX(0)',
      },
      '& .star-view': {
        transform: 'translateX(0)',
      },
    },
  },
  gridContactCellHeader: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
    '@media screen and (min-width: 1280px) and (max-width: 1399px)': {
      flexDirection: 'column',
    },
  },
  titleRoot: {
    marginBottom: 2,
    fontSize: 14,
    letterSpacing: 0.25,
    color: theme.palette.common.dark,
  },
  subTitleRoot: {
    fontSize: 12,
    letterSpacing: 0.4,
    color: theme.palette.text.secondary,
  },
  textTruncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },
}));

export default useStyles;
