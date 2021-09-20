import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import CmtImage from '../../../../@coremat/CmtImage';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import { IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddToCart from './AddToCart';
import clsx from 'clsx';
import ActionSnackBar from './ActionSnackBar';
import useStyles from './ListItem.style';

const VariantColor = ({ variant, onVariantClick }) => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" color="text.secondary">
      <Box fontSize={12} component="span" mt={1}>
        {variant.label}:
      </Box>
      <Box display="flex" alignItems="center" ml={2} mt={1}>
        {variant.options.map((option, index) => (
          <Box
            key={index}
            className={classes.dotsRoot}
            style={{
              backgroundColor: option.value,
            }}
            mr={2}
            onClick={() => onVariantClick(variant.label, option.value)}
          />
        ))}
      </Box>
    </Box>
  );
};

const VariantSize = ({ variant, onVariantClick }) => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" color="text.secondary">
      <Box fontSize={12} mt={1} component="span">
        {variant.label}:
      </Box>
      <Box display="flex" alignItems="center" ml={2} mt={1}>
        {variant.options.map((option, index) => (
          <Box
            key={index}
            component="span"
            ml={1}
            className={classes.sizeVarRoot}
            onClick={() => onVariantClick(variant.label, option.value)}>
            {option.value}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const productVariants = {
  color: React.memo(VariantColor),
  size: React.memo(VariantSize),
};

const ListItem = ({ item }) => {
  const classes = useStyles();
  const [revealed, setRevealed] = useState(false);
  const [openSnackBar, setSnackBarStatus] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');

  const getVariants = () => {
    return item.variants
      ? item.variants.map((variant, index) => {
          const VariantOption = productVariants[variant.type];
          return VariantOption ? <VariantOption key={index} variant={variant} onVariantClick={onVariantClick} /> : null;
        })
      : null;
  };

  const getActionComponent = () => (
    <Box>
      <Box component="span" mr={1} color="primary.main">
        ${item.sale_price}
      </Box>
      <Box component="span" color="text.disabled" style={{ textDecoration: 'line-through' }}>
        ${item.price}
      </Box>
    </Box>
  );

  const handleCheckout = React.useCallback(() => {
    setSnackBarMessage('You have submitted for Checkout');
    setSnackBarStatus(true);
  }, []);

  const onVariantClick = React.useCallback((label, value) => {
    setSnackBarMessage(`You choose ${label} ${value}`);
    setSnackBarStatus(true);
  }, []);

  const handleCloseSnackBar = React.useCallback(() => {
    setSnackBarStatus(false);
    setSnackBarMessage('');
  }, []);

  return (
    <React.Fragment>
      <Box
        className={clsx(classes.productListItems, {
          'active-activated': revealed,
        })}>
        <CmtMediaObject
          avatar={<CmtImage src={item.featured_image} height={80} width={80} alt={item.name} />}
          title={item.name}
          titleProps={{
            variant: 'h4',
            component: 'div',
            className: classes.titleRoot,
          }}
          subTitle={item.description}
          subTitleProps={{
            variant: 'subtitle2',
            component: 'p',
            className: classes.subTitleRoot,
          }}
          actionsComponent={getActionComponent()}
          content={item.inStock ? getVariants() : <Box color="text.secondary">Out of Stock</Box>}
        />
        <Box className={classes.listItemAction}>
          <Box className={classes.listItemActionHover}>
            <IconButton className="btn" onClick={() => setRevealed(true)}>
              <AddShoppingCartIcon />
            </IconButton>
          </Box>
          <AddToCart className={classes.revealContainer} item={item} setRevealed={setRevealed} onCheckout={handleCheckout} />
        </Box>
      </Box>

      <ActionSnackBar message={snackBarMessage} open={openSnackBar} onClose={handleCloseSnackBar} />
    </React.Fragment>
  );
};

export default ListItem;
