import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import { makeStyles } from '@material-ui/styles';
import CmtCardMedia from '../../../../@coremat/CmtCard/CmtCardMedia';

const useStyles = makeStyles(theme => ({
  cardMedia: {
    paddingTop: '36%',
    [theme.breakpoints.up('xl')]: {
      paddingTop: '46%',
    },
  },
}));

const ProductImage = () => {
  const classes = useStyles();
  return (
    <CmtCard>
      <CmtCardMedia className={classes.cardMedia} image={'/images/dashboard/image-product.png'} title="img" />
      <CmtCardContent>
        <Box display="flex" alignItems="center" justifyContent="space-around" color="text.hint">
          <IconButton size="small">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton size="small">
            <ShareIcon />
          </IconButton>
          <IconButton size="small">
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default ProductImage;
