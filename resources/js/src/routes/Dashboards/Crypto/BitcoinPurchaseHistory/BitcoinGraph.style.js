import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  tooltip: {
    position: 'relative',
    borderRadius: 6,
    padding: '4px 12px',
    backgroundColor: '#8d46ef',
    color: theme.palette.common.white,
  },
}));

export default useStyles;
