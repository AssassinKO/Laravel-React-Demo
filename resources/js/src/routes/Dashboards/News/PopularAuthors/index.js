import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import CmtList from '../../../../@coremat/CmtList';
import { news } from '../../../../@fake-db/dashboards/news';
import ItemCell from './ItemCell';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  cardContent: {
    paddingLeft: 0,
    paddingRight: 0,
  },
});

const PopularAuthors = () => {
  const classes = useStyles();
  const { popularAuthors } = news;
  return (
    <CmtCard>
      <CmtCardHeader title="Popular Authors" subTitle="Authors with 500k+ avg. view" />
      <CmtCardContent className={classes.cardContent}>
        <PerfectScrollbar style={{ maxHeight: 326 }}>
          <CmtList data={popularAuthors} renderRow={(item, index) => <ItemCell key={index} item={item} />} />
        </PerfectScrollbar>
      </CmtCardContent>
    </CmtCard>
  );
};

export default PopularAuthors;
