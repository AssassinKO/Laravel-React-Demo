import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.disabled,
    border: `1px solid ${theme.palette.borderColor.main}`,
    padding: 16,
    display: 'flex',
    borderRadius: 4,
  },
  alignCenter: {
    alignItems: 'center',
  },
  addTaskText: {
    fontSize: 14,
    letterSpacing: 0.5,
    [theme.breakpoints.up('sm')]: {
      fontSize: 16,
    },
  },
  addTaskView: {
    color: theme.palette.text.disabled,
    border: `1px solid ${theme.palette.borderColor.main}`,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14)',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  textFieldRoot: {
    width: '100%',
    '& .MuiInput-underline': {
      '&:before': {
        display: 'none',
      },
    },
  },
  addTaskFooter: {
    borderTop: `1px solid ${theme.palette.borderColor.main}`,
    padding: '4px 16px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
  },
  chipRoot: {
    border: '0 none',
    borderLeft: `1px solid ${theme.palette.borderColor.main}`,
    paddingLeft: 16,
    borderRadius: 0,
    marginRight: 20,
    height: 26,
  },
  TaskListSelectorView: {
    borderLeft: `1px solid ${theme.palette.borderColor.main}`,
    paddingLeft: 16,
    height: 26,
  },
  btnRoot: {
    color: theme.palette.text.disabled,
  },
}));
export default useStyles;
