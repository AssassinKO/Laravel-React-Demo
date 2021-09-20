import React from 'react';
import { Box } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCarousel from '../../../../@coremat/CmtCarousel';
import CmtImage from '../../../../@coremat/CmtImage';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const datas = [
  {
    id: 1,
    productName: 'Google Pixel 4',
    price: '$255.00',
    companyLogo: '/images/dashboard/icon-google.png',
    image: '/images/dashboard/google-pixel.png',
  },
  {
    id: 2,
    productName: 'Google Nest',
    price: '$255.00',
    companyLogo: '/images/dashboard/icon-google.png',
    image: '/images/dashboard/google-pixel.png',
  },
  {
    id: 3,
    productName: 'Google Nest',
    price: '$255.00',
    companyLogo: '/images/dashboard/icon-google.png',
    image: '/images/dashboard/google-pixel.png',
  },
];

const useStyles = makeStyles(theme => ({
  cardRoot: {
    height: '100%',
    '& .Cmt-card-content': {
      paddingTop: 16,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      '& .slick-slider': {
        height: '100%',
        '&.bottom .slick-dots': {
          bottom: -30,
        },
      },
      '& .slick-slider .slick-list, & .slick-track, & .slick-slide > div': {
        height: '100%',
      },
      '& .slick-dots li': {
        marginLeft: 2,
        marginRight: 2,
        '& button, & button:before': {
          padding: 0,
        },
      },
    },
  },
  iconShop: {
    display: 'block',
    fontSize: 18,
    color: theme.palette.text.secondary,
  },
  iconBtn: {
    color: theme.palette.text.disabled,
    fontSize: 18,
  },
  carouselItemTitle: {
    marginBottom: 6,
    color: theme.palette.text.primary,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
    textAlign: 'center',
  },
  footerRoot: {
    borderTop: `1px solid ${theme.palette.borderColor.main}`,
    margin: '0 -24px -24px',
    padding: '5px 10px',
  },
}));

const CarouselItem = ({ data }) => {
  const classes = useStyles();
  return (
    <Box height={1} display="flex" flexDirection="column" alignItems="center">
      <Box mb={4}>
        <CmtImage src={data.companyLogo} alt={data.title} />
      </Box>
      <Typography component="div" variant="h2" className={classes.carouselItemTitle}>
        {data.productName}
      </Typography>
      <Box mb={5} component="p" color="text.secondary" fontWeight="fontWeightBold" fontSize={16}>
        {data.price}
      </Box>
      <Box mt="auto">
        <CmtImage src={data.image} alt={data.title} />
      </Box>
    </Box>
  );
};

const GooglePixel = () => {
  const classes = useStyles();
  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardContent>
        <Box flex={1}>
          <CmtCarousel
            style={{ height: '100%' }}
            outline={true}
            dotSize={5}
            settings={{
              slidesToShow: 1,
              slidesToScroll: 1,
            }}
            data={datas}
            renderRow={data => <CarouselItem key={data.id} data={data} />}
          />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between" mt="auto" className={classes.footerRoot}>
          <AddShoppingCartIcon className={classes.iconShop} />
          <IconButton className={classes.iconBtn} size="small">
            <MoreVertIcon />
          </IconButton>
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default GooglePixel;
