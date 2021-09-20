import React from 'react';
import { Box } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCarousel from '../../../../@coremat/CmtCarousel';
import CmtImage from '../../../../@coremat/CmtImage';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import IconButton from '@material-ui/core/IconButton';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const datas = [
  {
    id: 1,
    title: 'Google Nest',
    desc: 'Get a powerful speaker and voice assistant',
    icon: '/images/dashboard/google-nest.png',
  },
  {
    id: 2,
    title: 'Google Nest',
    desc: 'Some description about the card. This widget could be used',
    icon: '/images/dashboard/google-nest.png',
  },
  {
    id: 3,
    title: 'Google Nest',
    desc: 'Now kick start with your next design. Subscribe today',
    icon: '/images/dashboard/google-nest.png',
  },
];

const useStyles = makeStyles(theme => ({
  cardRoot: {
    height: '100%',
    '& .Cmt-header-root': {
      padding: '5px 10px',
      color: alpha(theme.palette.common.white, 0.74),
    },
    '& .Cmt-card-content': {
      '& .slick-slider.bottom .slick-dots': {
        bottom: -10,
        [theme.breakpoints.up('xl')]: {
          bottom: -25,
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
  },
  iconShop: {
    display: 'block',
    fontSize: 18,
  },
  iconBtn: {
    color: alpha(theme.palette.common.white, 0.74),
    fontSize: 18,
  },
  titleRoot: {
    textAlign: 'center',
    fontSize: 16,
  },
  carouselItemTitle: {
    marginBottom: 16,
    color: theme.palette.common.white,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
    textAlign: 'center',
  },
}));

const CarouselItem = ({ data }) => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" color="rgba(255,255,255,0.74)" alignItems="center" justifyContent="center">
      <Typography component="div" variant="h2" className={classes.carouselItemTitle}>
        {data.title}
      </Typography>
      <Box mb={4} component="p" textAlign="center">
        {data.desc}
      </Box>
      <Box>
        <CmtImage src={data.icon} alt={data.title} />
      </Box>
    </Box>
  );
};

const GoogleNest = () => {
  const classes = useStyles();
  return (
    <CmtCard className={classes.cardRoot} backgroundColor="#E00930">
      <CmtCardHeader
        separator={{
          color: 'rgba(0, 0, 0, 0.2)',
        }}
        avatar={<AddShoppingCartIcon className={classes.iconShop} />}
        title="$255.00"
        titleProps={{ className: classes.titleRoot }}>
        <IconButton className={classes.iconBtn} size="small">
          <MoreVertIcon />
        </IconButton>
      </CmtCardHeader>
      <CmtCardContent>
        <CmtCarousel
          pb={1}
          outline={true}
          activeColor="rgba(0, 0, 0, 0.38)"
          color="rgba(0, 0, 0, 0.7)"
          dotSize={5}
          settings={{
            slidesToShow: 1,
            slidesToScroll: 1,
          }}
          data={datas}
          renderRow={data => <CarouselItem key={data.id} data={data} />}
        />
      </CmtCardContent>
    </CmtCard>
  );
};

export default GoogleNest;
