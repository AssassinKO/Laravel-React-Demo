import React, { useState } from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { intranet } from '../../../../@fake-db';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import ProductsList from './ProductsList';
import ProductsTable from './ProductsTable';
import IconButton from '@material-ui/core/IconButton';
import ProductsChart from './ProductsChart';
import Box from '@material-ui/core/Box';
import UpdateProductsList from './UpdateProductsList';
import useStyles from './index.style';
import Collapse from '@material-ui/core/Collapse';

const WeeklySales = () => {
  const { productsList } = intranet;
  const classes = useStyles();
  const [selectedProducts, setSelectedProducts] = useState(productsList);
  const [showChart, setShowChart] = useState(false);

  const addProduct = product => {
    const updatedList = selectedProducts.concat(product);
    setSelectedProducts(updatedList);
  };

  const removeProduct = productId => {
    const updatedList = selectedProducts.filter(item => item.id !== productId);
    setSelectedProducts(updatedList);
  };

  const toggleShowChart = () => setShowChart(!showChart);

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title="Weekly Sales" subTitle="12 - 18 June, 2020" subTitleProps={{ className: classes.subTitleRoot }}>
        <IconButton onClick={toggleShowChart} edge="end" style={{ marginTop: -6 }}>
          <ShowChartIcon />
        </IconButton>
      </CmtCardHeader>
      <CmtCardContent>
        <Box className={classes.productView}>
          <ProductsList selectedProducts={selectedProducts} />
          <UpdateProductsList
            selectedProducts={selectedProducts}
            productsList={productsList}
            addProduct={addProduct}
            removeProduct={removeProduct}
          />
        </Box>
        <Collapse className={classes.collapseRoot} in={showChart} timeout="auto" unmountOnExit>
          <ProductsChart data={selectedProducts} />
        </Collapse>

        <Collapse in={!showChart} timeout="auto" unmountOnExit>
          <ProductsTable selectedProducts={selectedProducts} />
        </Collapse>
      </CmtCardContent>
    </CmtCard>
  );
};

export default WeeklySales;
