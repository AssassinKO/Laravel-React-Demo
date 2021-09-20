import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  feedItemRoot: {
    padding: '10px 24px',
    position: 'relative',
    transition: 'all .2s',
    '&:not(:first-child)': {
      borderTop: `1px solid ${alpha(theme.palette.common.dark, 0.035)}`,
    },
    '&:last-child': {
      borderBottom: `1px solid ${alpha(theme.palette.common.dark, 0.035)}`,
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      '& $btnActions': {
        display: 'flex',
      },
    },
    '& .Cmt-media-object': {
      alignItems: 'center',
    },
    '& .Cmt-media-image': {
      alignSelf: 'flex-start',
      width: 72,
    },
    '& .Cmt-media-body': {
      width: 'calc(100% - 72px)',
      flex: 'inherit',
    },
    '& .Cmt-media-header-content': {
      width: 'calc(100% - 92px)',
      flex: 'inherit',
    },
  },
  actionDateRoot: {
    textAlign: 'center',
    width: 80,
    fontSize: 12,
    color: theme.palette.text.disabled,
  },

  titleRoot: {
    letterSpacing: 0.25,
    marginBottom: 4,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  subTitleRoot: {
    letterSpacing: 0.4,
    fontSize: 12,
    color: theme.palette.text.disabled,
    marginBottom: 0,
  },

  blockRoot: {
    display: 'block',
  },

  btnRoot: {
    '&.btn-white': {
      backgroundColor: theme.palette.common.white,
      color: alpha(theme.palette.common.black, 0.38),
    },
  },
  btnActions: {
    display: 'none',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}));

export default useStyles;
