import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCarousel from '../../../../@coremat/CmtCarousel';
import { Box } from '@material-ui/core';
import CmtImage from '../../../../@coremat/CmtImage';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { modernWidget } from '../../../../@fake-db/widgets/modern';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& > div': {
      height: '100%',
    },
    '& .slick-slider': {
      height: '100%',
      '&.bottom .slick-dots': {
        bottom: 10,
        width: 'auto',
        marginLeft: 35,
      },
    },
    '& .slick-list, & .slick-track, & .slick-slide > div': {
      height: '100%',
    },
    '& .slick-dots': {
      bottom: 0,
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
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '45%',
    },
    '& img': {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
  },
  sliderContent: {
    width: '100%',
    padding: 20,
    [theme.breakpoints.up('sm')]: {
      width: '55%',
    },
    [theme.breakpoints.up('xl')]: {
      padding: 40,
    },
  },
  titleRoot: {
    [theme.breakpoints.up('xl')]: {
      fontSize: 22,
    },
  },
}));

const UIDesignItem = ({ data }) => {
  const { image, time, title, name, profile_pic, desc } = data;
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} height={1}>
      <Box className={classes.sliderImgLg}>
        <CmtImage alt="detail" src={image} />
      </Box>
      <Box className={classes.sliderContent}>
        <Typography component="div" variant="h2" className={classes.titleRoot}>
          {title}
        </Typography>
        <Box my={4} display="flex" alignItems="center">
          <Box mr={3}>
            <CmtAvatar height={32} alt="user" src={profile_pic} />
          </Box>
          <Box flex={1}>
            <Box component="p">{name}</Box>
            <Box component="p" color="text.secondary" fontSize={12}>
              {time}
            </Box>
          </Box>
        </Box>
        <Box component="p" mb={4} color="text.secondary">
          {desc}
        </Box>
      </Box>
    </Box>
  );
};
const UIDesign = () => {
  const classes = useStyles();
  const { carouselUiDesign } = modernWidget;

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCarousel
        outline
        dotPosition="bottom"
        dotSize={5}
        settings={{
          slidesToShow: 1,
          slidesToScroll: 1,
        }}
        data={carouselUiDesign}
        renderRow={(data, index) => <UIDesignItem key={index} data={data} />}
      />
    </CmtCard>
  );
};

export default UIDesign;
