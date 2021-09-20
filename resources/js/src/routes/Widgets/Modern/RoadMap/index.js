import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCarousel from '../../../../@coremat/CmtCarousel';
import { Box } from '@material-ui/core';
import CmtImage from '../../../../@coremat/CmtImage';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

export const datas = [
  {
    id: 1,
    image: '/images/dashboard/icon-road-map.png',
    icon: 'https://via.placeholder.com/150',
    title: 'Welcome to roadmap',
    desc: 'Crypto Expert',
  },
  {
    id: 2,
    image: '/images/dashboard/icon-road-map.png',
    icon: 'https://via.placeholder.com/150',
    title: 'Welcome to roadmap',
    desc: 'Crypto Expert',
  },
  {
    id: 3,
    image: '/images/dashboard/icon-road-map.png',
    icon: 'https://via.placeholder.com/150',
    title: 'Welcome to roadmap new',
    desc: 'Crypto Expert',
  },
];

const useStyles = makeStyles(() => ({
  cardRoot: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& .slick-slider': {
      height: '100%',
      '&.bottom-left .slick-dots': {
        left: 24,
      },
    },
    '& .slick-dots li': {
      marginLeft: 2,
      marginRight: 2,
      '& button, & button:before': {
        padding: 0,
      },
    },
  },
  sliderImgLg: {
    '& img': {
      maxHeight: 205,
      width: '100%',
      objectFit: 'cover',
    },
  },
  sliderImgSm: {
    '& img': {
      borderRadius: 4,
    },
  },
}));

const RoadMapItem = ({ data }) => {
  const { image, icon, title, desc } = data;
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column">
      <Box className={classes.sliderImgLg}>
        <CmtImage alt="detail" src={image} />
      </Box>
      <Box px={6} pb={6}>
        <Box mt={-12} mb={5} className={classes.sliderImgSm}>
          <CmtImage height={80} width={80} alt="user" src={icon} />
        </Box>
        <Typography component="div" variant="h2">
          {title}
        </Typography>
        <Box component="p" mt={3} mb={4} color="text.secondary">
          {desc}
        </Box>
      </Box>
    </Box>
  );
};
const RoadMap = () => {
  const classes = useStyles();
  return (
    <CmtCard className={classes.cardRoot}>
      <Box pb={10}>
        <CmtCarousel
          outline
          dotPosition="bottom-left"
          dotSize={5}
          settings={{
            slidesToShow: 1,
            slidesToScroll: 1,
          }}
          data={datas}
          renderRow={(data, index) => <RoadMapItem key={index} data={data} />}
        />
      </Box>
    </CmtCard>
  );
};

export default RoadMap;
