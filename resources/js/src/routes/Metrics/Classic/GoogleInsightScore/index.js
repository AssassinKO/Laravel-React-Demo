import React from 'react';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CmtCard from '../../../../@coremat/CmtCard';
import AutoRenew from '@material-ui/icons/Autorenew';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CmtImage from '../../../../@coremat/CmtImage';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    height: '100%',
    '& .Cmt-card-content': {
      height: '100%',
    },
  },
  googleInScoRoot: {
    display: 'flex',
    height: '100%',
  },
  titleRoot: {
    marginBottom: 5,
  },
  subTitleRoot: {
    fontSize: 12,
    color: theme.palette.text.secondary,
    marginBottom: 20,
  },
  cirProRoot: {
    [theme.breakpoints.down('xs')]: {
      width: '100px !important',
      height: '100px !important',
    },
  },
}));

const GoogleInsightScore = () => {
  const insightScore = 100;
  const classes = useStyles();
  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardContent>
        <Box className={classes.googleInScoRoot}>
          <Box px={{ sm: 5 }}>
            <Box position="relative" display="inline-block">
              <CircularProgress
                className={classes.cirProRoot}
                variant="determinate"
                color="secondary"
                size={120}
                value={insightScore}
                thickness={6}
              />
              <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center">
                <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
                  insightScore,
                )}%`}</Typography>
              </Box>
            </Box>
          </Box>
          <Box alignSelf="center" pl={{ xs: 2, md: 5, lg: 7 }} flex={1}>
            <Typography component="div" variant="h4" className={classes.titleRoot}>
              Google insight score
            </Typography>
            <Typography className={classes.subTitleRoot}>Las calculated 1 month ago</Typography>
            <Button variant="contained" color="primary" className={classes.button} startIcon={<AutoRenew />}>
              REFRESH
            </Button>
          </Box>
          <Box pl={2}>
            <CmtImage src={'/images/icons/icons-google.png'} alt="Google" />
          </Box>
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default GoogleInsightScore;
