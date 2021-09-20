import React from 'react';
import Box from '@material-ui/core/Box';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CmtMediaObject from '../../../../../@coremat/CmtMediaObject';
import CmtImage from '../../../../../@coremat/CmtImage';
import { timeFromNow } from '../../../../../@jumbo/utils/dateHelper';
import CmtCarousel from '../../../../../@coremat/CmtCarousel';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  mediaObjectRoot: {
    width: '100%',
    display: 'flex',
    '@media screen and (max-width: 699px)': {
      flexWrap: 'wrap',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
    '& .Cmt-media-image': {
      marginRight: 24,
      '@media screen and (max-width: 699px)': {
        alignSelf: 'unset',
        marginRight: 0,
        marginBottom: 16,
        width: '100%',
      },
    },
  },
  carouselRoot: {
    marginRight: 0,
    '& .bottom-left .slick-dots': {
      left: 10,
    },
    '& .slick-dots': {
      bottom: 15,
      '& li button:before': {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
      },
      '& li.slick-active button:before': {
        backgroundColor: theme.palette.warning.main,
      },
    },
  },
  titleRoot: {
    letterSpacing: 0.15,
    fontSize: 16,
    marginBottom: 12,
    fontWeight: theme.typography.fontWeightRegular,
  },
  badgeRoot: {
    color: theme.palette.common.white,
    borderRadius: 30,
    fontSize: 12,
    padding: '2px 10px',
    marginBottom: 16,
    display: 'inline-block',
  },
  subTitleRoot: {
    fontSize: 12,
    color: theme.palette.text.secondary,
    marginBottom: 8,
  },
  iconRoot: {
    fontSize: 18,
    marginRight: 6,
  },
  linkBtn: {
    fontSize: 14,
    color: theme.palette.primary.main,
    letterSpacing: 1.25,
    fontWeight: theme.typography.fontWeightBold,
    cursor: 'pointer',
    display: 'inline-block',
  },
  priceRoot: {
    fontSize: 16,
    color: theme.palette.primary.main,
    marginBottom: 5,
    fontWeight: theme.typography.fontWeightRegular,
  },
  footerComponentRoot: {
    textAlign: 'right',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginTop: 16,
      textAlign: 'left',
    },
  },
  containerStyle: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 250,
    },
    [theme.breakpoints.up('md')]: {
      width: 315,
    },
    '@media screen and (max-width: 699px)': {
      width: '100%',
    },
    '& .slick-slide img': {
      borderRadius: 4,
      display: 'block !important',
    },
  },
}));

const PropertyItem = ({ item, onPropertyClick }) => {
  const classes = useStyles();
  const getTitle = () => (
    <React.Fragment>
      <Box className={classes.badgeRoot} component="span" bgcolor={item.availability === 'sale' ? '#FF8C00' : '#8DCD03'}>
        {item.availability === 'sale' ? 'For Sale' : 'For Rent'}
      </Box>
      <Typography component="div" variant="h4" mb={1} className={classes.titleRoot}>
        {item.title}
      </Typography>
    </React.Fragment>
  );

  const getContent = () => (
    <Box component="p" display="flex" flexDirection="row" mb={4} fontSize={12}>
      <Box component="span" mr={{ xs: 3, md: 4 }}>
        <Box component="span" color="text.secondary" mr={1}>
          Bedrooms:
        </Box>
        {item.bedrooms}
      </Box>
      <Box component="span" mr={{ xs: 3, md: 4 }}>
        <Box component="span" color="text.secondary" mr={1}>
          Baths:
        </Box>
        {item.bathrooms}
      </Box>
      <Box component="span" mr={{ xs: 3, md: 4 }}>
        <Box component="span" color="text.secondary" mr={1}>
          Area:
        </Box>
        {item.area}
      </Box>
    </Box>
  );

  const getFooter = () => (
    <React.Fragment>
      <Typography component="div" variant="h6" className={classes.priceRoot}>
        {item.price}
      </Typography>
      <Box component="span" fontSize={12} color="text.secondary">
        {item.pricePerSqFt}
      </Box>
    </React.Fragment>
  );

  return (
    <CmtMediaObject
      className={classes.mediaObjectRoot}
      avatar={
        <Box className={classes.carouselRoot}>
          <CmtCarousel
            data={item.images}
            dotPosition="bottom-left"
            className={classes.containerStyle}
            settings={{
              slidesToShow: 1,
              slidesToScroll: 1,
            }}
            renderRow={(item, index) => <CmtImage key={index} src={item.image} alt={item.title} />}
          />
        </Box>
      }
      avatarPos="center"
      title={getTitle()}
      subTitle={item.address}
      subTitleProps={{ className: classes.subTitleRoot }}
      content={getContent()}
      footerComponent={getFooter()}
      footerComponentProps={{ className: classes.footerComponentRoot }}>
      <Box fontSize={12} color="text.disabled" display="flex" flexDirection="row" alignItems="center" mb={4}>
        <Box display="flex" flexDirection="row" alignItems="center" mr={4}>
          <PermIdentityIcon className={classes.iconRoot} /> {item.owner.name}
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center">
          <ScheduleIcon className={classes.iconRoot} /> {timeFromNow(item.publishedDate)}
        </Box>
      </Box>
      <Button color="primary" onClick={() => onPropertyClick(item)}>
        Check In Detail
      </Button>
    </CmtMediaObject>
  );
};

export default PropertyItem;
