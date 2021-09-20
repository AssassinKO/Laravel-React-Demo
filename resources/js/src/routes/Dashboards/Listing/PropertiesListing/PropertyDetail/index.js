import React from 'react';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import CmtCarousel from '../../../../../@coremat/CmtCarousel';
import { Close } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import CmtCard from '../../../../../@coremat/CmtCard';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CmtCardMedia from '../../../../../@coremat/CmtCard/CmtCardMedia';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { timeFromNow } from '../../../../../@jumbo/utils/dateHelper';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  titleRoot: {
    fontSize: 16,
    marginLeft: 12,
    fontWeight: theme.typography.fontWeightBold,
  },
  imageRoot: {
    width: '100%',
    height: 250,
  },
  iconRoot: {
    fontSize: 18,
    marginRight: 6,
  },
  linkBtn: {
    cursor: 'pointer',
    textTransform: 'uppercase',
  },
  priceWrapper: {
    textAlign: 'right',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginTop: 16,
      textAlign: 'left',
    },
  },
  priceRoot: {
    fontSize: 16,
    color: theme.palette.primary.main,
    marginBottom: 5,
    fontWeight: theme.typography.fontWeightRegular,
  },
  badge: {
    color: theme.palette.common.white,
    fontSize: 12,
    height: 24,
  },
  carouselRoot: {
    marginRight: 0,
    '& .bottom-left .slick-dots': {
      left: 24,
    },
    '& .slick-dots': {
      bottom: 24,
      '& li button:before': {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
      },
      '& li.slick-active button:before': {
        backgroundColor: theme.palette.warning.main,
      },
    },
  },
}));

const PropertyDetail = ({ selectedProperty, showPropertyList }) => {
  const classes = useStyles();
  return (
    <CmtCard>
      <Box display="flex" flexDirection="row" alignItems={{ sm: 'center' }} px={6} py={3}>
        <Box display="flex" alignItems="center" mb={{ xs: 2, sm: 0 }}>
          <Tooltip title="close">
            <Box ml={-3} clone>
              <IconButton onClick={showPropertyList}>
                <Close />
              </IconButton>
            </Box>
          </Tooltip>
          <Typography component="div" variant="h4" className={classes.titleRoot}>
            {selectedProperty.title}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" ml="auto">
          <Chip
            className={classes.badge}
            style={{
              backgroundColor: selectedProperty.availability === 'sale' ? '#FF8C00' : '#8DCD03',
            }}
            label={selectedProperty.availability === 'sale' ? 'For Sale' : 'For Rent'}
          />
        </Box>
      </Box>
      <Box className={classes.carouselRoot}>
        <CmtCarousel
          data={selectedProperty.images}
          dotPosition="bottom-left"
          settings={{
            slidesToShow: 1,
            slidesToScroll: 1,
          }}
          renderRow={(item, index) => (
            <CmtCardMedia className={classes.imageRoot} key={index} image={item.image} title={item.title} />
          )}
        />
      </Box>
      <Box p={6}>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Box fontSize={12} color="text.disabled" display="flex" flexDirection="row" alignItems="center" mb={2}>
              <Box display="flex" flexDirection="row" alignItems="center" mr={4}>
                <PermIdentityIcon className={classes.iconRoot} /> {selectedProperty.owner.name}
              </Box>
              <Box display="flex" flexDirection="row" alignItems="center">
                <ScheduleIcon className={classes.iconRoot} /> {timeFromNow(selectedProperty.publishedDate)}
              </Box>
            </Box>

            <Box component="p" display="flex" flexDirection="row" mb={2} fontSize={12}>
              <Box component="span" mr={{ xs: 3, md: 4 }}>
                <Box component="span" color="text.secondary" mr={1}>
                  Bedrooms:
                </Box>
                {selectedProperty.bedrooms}
              </Box>
              <Box component="span" mr={{ xs: 3, md: 4 }}>
                <Box component="span" color="text.secondary" mr={1}>
                  Baths:
                </Box>
                {selectedProperty.bathrooms}
              </Box>
              <Box component="span" mr={{ xs: 3, md: 4 }}>
                <Box component="span" color="text.secondary" mr={1}>
                  Area:
                </Box>
                {selectedProperty.area}
              </Box>
            </Box>

            <Box color="text.disabled">{selectedProperty.address}</Box>
          </Box>

          <Box className={classes.priceWrapper}>
            <Typography component="div" variant="h6" className={classes.priceRoot}>
              {selectedProperty.price}
            </Typography>
            <Box component="span" fontSize={12} color="text.secondary">
              {selectedProperty.pricePerSqFt}
            </Box>
          </Box>
        </Box>
      </Box>
    </CmtCard>
  );
};

export default PropertyDetail;
