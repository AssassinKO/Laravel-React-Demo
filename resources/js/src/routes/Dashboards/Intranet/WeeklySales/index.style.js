import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    position: 'relative',
    '& .Cmt-root-avatar-group': {
      position: 'relative',
      marginLeft: -4,
    },
  },
  subTitleRoot: {
    fontSize: 12,
    color: theme.palette.text.disabled,
    marginBottom: 0,
    marginTop: 4,
  },
  productView: {
    backgroundColor: alpha(theme.palette.common.dark, 0.04),
    padding: '8px 24px',
    marginLeft: -24,
    marginRight: -24,
    display: 'flex',
    alignItems: 'center',
    marginTop: -10,
  },
  updateProductListScrollbar: {
    height: 240,
    padding: '8px 24px 8px 8px',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 8,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  listItemTitle: {
    marginLeft: 8,
  },
  collapseRoot: {
    color: theme.palette.text.primary,
    '& g.recharts-layer': {
      fill: theme.palette.text.primary,
    },
  },
}));

export default useStyles;
