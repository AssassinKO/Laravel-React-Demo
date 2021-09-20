import { lighten, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    marginBottom: theme.spacing(4),
    backgroundColor: lighten(theme.palette.background.paper, 0.1),
    '& .smooth-dnd-container input': {
      boxSizing: 'content-box',
    },
  },
}));

export default useStyles;
