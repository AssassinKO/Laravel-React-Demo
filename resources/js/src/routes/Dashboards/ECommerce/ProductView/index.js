import React from 'react';
import Box from '@material-ui/core/Box';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { eCommerce } from '../../../../@fake-db';
import CmtCardMedia from '../../../../@coremat/CmtCard/CmtCardMedia';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    '& .Cmt-card-media': {
      paddingTop: '108%',
      [theme.breakpoints.up('xl')]: {
        paddingTop: '84%',
      },
    },
  },
}));

const ProductView = () => {
  const { productDetails } = eCommerce;
  const classes = useStyles();
  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardMedia
        title="Product View"
        image={productDetails.product_image}
        fabButton={{
          icon: <ShoppingCartIcon />,
          color: 'primary',
          size: 'small',
        }}
      />
      <CmtCardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Box component="p" color="common.dark" fontWeight="fontWeightBold" mb={1}>
              {productDetails.title}
            </Box>
            <Box component="span" color="primary.main">
              {productDetails.productPrice}
            </Box>
          </Box>
          <Box display="flex" alignItems="center" mr={-3}>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </Box>
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default ProductView;
