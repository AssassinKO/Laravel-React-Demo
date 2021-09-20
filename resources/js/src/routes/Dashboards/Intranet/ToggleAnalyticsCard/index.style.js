import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  toggleCardRoot: {
    position: 'relative',
    '& .Cmt-header-root': {
      paddingTop: 12,
      paddingBottom: 12,
    },
    '& .MuiSvgIcon-root': {
      display: 'block',
    },
    '& .Cmt-card-content': {
      height: 120,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    '&.chart-active': {
      '& $toggleAnalyticsContent': {
        right: 24,
        left: 'auto',
        top: 10,
        transform: 'translate(0, 0)',
      },
      '& $toggleAnalyticsContentInner': {
        alignItems: 'flex-end',
      },
      '& $titleRoot': {
        fontSize: 16,
        marginBottom: 5,
      },
    },
  },
  toggleHoverBtn: {
    padding: '5px 12px',
    borderRadius: 30,
    fontSize: 14,
    letterSpacing: 0.15,
    lineHeight: 1,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  toggleAnalyticsContent: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    zIndex: 1,
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.3s ease',
  },
  toggleAnalyticsContentInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  },
  titleRoot: {
    marginBottom: 10,
    [theme.breakpoints.up('xl')]: {
      fontSize: 24,
    },
  },
  dataChartRoot: {
    marginRight: -24,
    marginLeft: -24,
    marginBottom: -24,
  },
  visitedDoubleToggle: {
    [theme.breakpoints.down('xs')]: {
      '& .Cmt-card-content': {
        height: 160,
      },
    },
  },
  currentMonth: [
    { day: 1, value: 100 },
    { day: 2, value: 120 },
    { day: 3, value: 130 },
    { day: 4, value: 120 },
    { day: 5, value: 110 },
    { day: 6, value: 105 },
    { day: 7, value: 110 },
    { day: 8, value: 120 },
    { day: 9, value: 130 },
    { day: 10, value: 140 },
    { day: 11, value: 145 },
    { day: 12, value: 140 },
    { day: 13, value: 130 },
    { day: 14, value: 125 },
  ],
  pastMonth: [
    { day: 1, value: 100 },
    { day: 2, value: 120 },
    { day: 3, value: 130 },
    { day: 4, value: 120 },
    { day: 5, value: 110 },
    { day: 6, value: 105 },
    { day: 7, value: 110 },
    { day: 8, value: 100 },
    { day: 9, value: 90 },
    { day: 10, value: 95 },
    { day: 11, value: 80 },
    { day: 12, value: 60 },
    { day: 13, value: 65 },
    { day: 14, value: 50 },
  ],
}));

export default useStyles;
