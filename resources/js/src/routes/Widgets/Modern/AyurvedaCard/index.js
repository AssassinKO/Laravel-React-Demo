import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import CmtImage from '../../../../@coremat/CmtImage';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  btnRoot: {
    height: 40,
  },
  imgBottom: {
    marginTop: 'auto',
    marginBottom: -4,
    '& img': {
      display: 'block',
      width: '100%',
      objectFit: 'cover',
    },
  },
  linkColorRoot: {
    '& a': {
      color: theme.palette.success.main,
      cursor: 'pointer',
    },
  },
}));

const AyurvedaCard = () => {
  const classes = useStyles();
  return (
    <CmtCard className={classes.cardRoot}>
      <Box px={4} py={5} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Box bgcolor="#8DCD03" height={4} width={30} borderRadius={5} mb={6} />
        <Typography component="div" variant="h2">
          Ayurveda
        </Typography>
      </Box>
      <Box p={3} pb={0} textAlign="center">
        <Box component="p" mb={{ xs: 3, xl: 5 }}>
          Learn from experts this webinar explains right
        </Box>
        <Box className={classes.linkColorRoot}>
          <Link to="#learn-more">LEARN MORE</Link>
        </Box>
      </Box>
      <Box className={classes.imgBottom}>
        <CmtImage alt="ayurveda" src={'/images/dashboard/ayurveda.jpg'} />
      </Box>
    </CmtCard>
  );
};

export default AyurvedaCard;
