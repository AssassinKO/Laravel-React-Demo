import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import { eCommerce } from '../../../../@fake-db';
import CmtGridView from '../../../../@coremat/CmtGridView';
import ListItem from '../../Intranet/PopularProducts/ListItem';
import PerfectScrollbar from 'react-perfect-scrollbar';

const PopularProducts = () => {
  const { popularProducts } = eCommerce;
  return (
    <CmtCard>
      <CmtCardHeader title="Popular Products" />
      <CmtCardContent>
        <PerfectScrollbar style={{ height: 266 }}>
          <CmtGridView
            itemPadding={24}
            responsive={{
              xs: 1,
              sm: 1,
              md: 2,
              lg: 2,
              xl: 2,
            }}
            data={popularProducts}
            renderRow={(item, index) => <ListItem key={index} item={item} />}
          />
        </PerfectScrollbar>
      </CmtCardContent>
    </CmtCard>
  );
};

export default PopularProducts;
