import React, { useState } from 'react';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import Box from '@material-ui/core/Box';
import CmtSearch from '../../../../@coremat/CmtSearch';
import CmtCard from '../../../../@coremat/CmtCard';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { news } from '../../../../@fake-db/dashboards/news';
import PerfectScrollbar from 'react-perfect-scrollbar';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import CmtGridView from '../../../../@coremat/CmtGridView';
import ListItem from './ListItem';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  scrollbarRoot: {
    maxHeight: 350,
  },
  searchAction: {
    position: 'relative',
    width: 38,
    height: 38,
  },
  searchActionBar: {
    position: 'absolute',
    right: 0,
    top: 2,
    zIndex: 1,
  },
}));

const actions = [
  {
    label: 'More Detail',
  },
  {
    label: 'Close',
  },
];

const PopularArticles = () => {
  const { popularArticles } = news;
  const [searchText, setSearchText] = useState('');
  const classes = useStyles();

  const handleSearchText = e => {
    setSearchText(e.target.value);
  };

  const getFilteredData = () => {
    if (searchText.trim()) {
      return popularArticles.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
    } else return popularArticles;
  };

  const articlesList = getFilteredData();

  return (
    <CmtCard>
      <CmtCardHeader
        className={clsx(classes.headerRoot, 'pt-4')}
        title={'Popular Articles'}
        actionsPos="top-corner"
        actions={actions}>
        <Box className={classes.searchAction}>
          <Box className={classes.searchActionBar}>
            <CmtSearch onlyIcon value={searchText} onChange={handleSearchText} border={false} />
          </Box>
        </Box>
      </CmtCardHeader>
      <CmtCardContent>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <CmtGridView
            itemPadding={24}
            responsive={{
              xs: 1,
              sm: 1,
              md: 1,
              lg: 1,
              xl: 2,
            }}
            data={articlesList}
            renderRow={(item, index) => <ListItem key={index} item={item} />}
          />
        </PerfectScrollbar>
      </CmtCardContent>
    </CmtCard>
  );
};

export default PopularArticles;
