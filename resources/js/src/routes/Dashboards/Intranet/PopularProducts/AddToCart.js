import React, { useState } from 'react';
import AppTextInput from '../../../../@jumbo/components/Common/formElements/AppTextInput';
import { Box, Button, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  btnRoot: {
    whiteSpace: 'nowrap',
  },
  textBtn: {
    color: theme.palette.text.disabled,
  },
  textSuccess: {
    whiteSpace: 'nowrap',
    fontSize: 14,
    [theme.breakpoints.up('xl')]: {
      fontSize: 16,
    },
  },
  iconView: {
    '& .MuiSvgIcon-root': {
      color: theme.palette.success.main,
      display: 'block',
    },
  },
}));

const AddToCart = ({ item, setRevealed, onCheckout, ...rest }) => {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, updateCart] = useState(false);
  const classes = useStyles();

  const addToCart = () => {
    if (quantity) updateCart(true);
  };

  const checkoutOrder = () => {
    onCheckout();
  };

  const backToInfo = () => {
    setRevealed(false);
  };

  return addedToCart ? (
    <Box {...rest}>
      <Box display="flex" alignItems="center" mb={3}>
        <Box mr={2} className={classes.iconView}>
          <CheckCircleIcon />
        </Box>
        <Typography className={classes.textSuccess}>Added to cart Successfully</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Box mr={2}>
          <Button variant="contained" color="primary" onClick={checkoutOrder}>
            Checkout
          </Button>
        </Box>
        <Button className={classes.textBtn} onClick={backToInfo}>
          Later
        </Button>
      </Box>
    </Box>
  ) : (
    <Box {...rest}>
      <Box display="flex" alignItems="center" mb={3}>
        <AppTextInput
          type="number"
          label="Qty"
          value={quantity}
          variant="outlined"
          onChange={event => setQuantity(event.target.value)}
        />
        <Box ml={3}>
          <Button className={classes.btnRoot} variant="contained" color="primary" size="small" onClick={addToCart}>
            Add To Cart
          </Button>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Box component="span" fontSize={{ xl: 16 }}>
          Total: ${item.sale_price * quantity}{' '}
        </Box>
        <Box ml="auto">
          <Button className={classes.textBtn} onClick={backToInfo}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default React.memo(AddToCart);
