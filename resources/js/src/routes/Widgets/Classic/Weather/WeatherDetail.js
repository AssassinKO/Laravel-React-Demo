import React from 'react';
import { weatherData } from './weatherData';
import Button from '@material-ui/core/Button';
import CmtCard from '../../../../@coremat/CmtCard';
import { Box } from '@material-ui/core';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import CmtImage from '../../../../@coremat/CmtImage';
import CmtList from '../../../../@coremat/CmtList';
import DayWeather from './DayWeather';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  imgView: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
    filter: 'blur(3px)',
    '& img': {
      display: 'block',
    },
  },
  imgContent: {
    padding: 24,
    minHeight: 216,
    position: 'relative',
    zIndex: 3,
    backgroundColor: 'rgba(35, 3, 106, 0.6)',
    color: theme.palette.common.white,
  },
  titleRoot: {
    marginBottom: 8,
  },
  subTitleRoot: {
    fontSize: 16,
    color: alpha(theme.palette.common.white, 0.74),
    marginBottom: 20,
  },
}));

const WeatherDetail = () => {
  const { city, list } = weatherData;
  const classes = useStyles();
  if (!city) {
    return <div>Loading...</div>;
  }

  return (
    <CmtCard>
      <Box position="relative">
        <Box className={classes.imgView}>
          <CmtImage src={'/images/dashboard/img-weather-bg.png'} title="Contemplative Reptile" />
        </Box>
        <Box
          className={classes.imgContent}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center">
          <Typography component="div" variant="h2" className={classes.titleRoot}>
            {city.name}
          </Typography>
          <Box component="p" className={classes.subTitleRoot}>
            {city.dateTime}
          </Box>

          <Box display="flex" alignItems="center">
            <Box component="h2" fontSize={{ sm: 30, md: 36, lg: 48 }}>
              {list[0].main.temp.toFixed(1)}
              <Box component="span" fontSize={16} ml={2}>
                ° C
              </Box>
            </Box>
            <Box ml={4} fontSize={28}>
              <i className={'wi wi-owm-' + list[0].weather[0].id} />
            </Box>
          </Box>
        </Box>
      </Box>
      <CmtCardContent>
        <CmtList data={list} renderRow={(data, index) => <DayWeather key={index} data={data} />} />
        <Box pt={3}>
          <Button variant="contained" color="primary" size="small">
            full report
          </Button>
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default WeatherDetail;
