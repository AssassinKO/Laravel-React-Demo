import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Box from '@material-ui/core/Box';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';

import CmtSearch from '../../../../../@coremat/CmtSearch';
import CmtCard from '../../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../../@coremat/CmtCard/CmtCardContent';
import ListEmptyResult from '../../../../../@coremat/CmtList/ListEmptyResult';
import CmtList from '../../../../../@coremat/CmtList';

import NewsItem from './NewsItem';
import NewsTabs from './NewsTabs';

const useStyles = makeStyles(theme => ({
  headerRoot: {
    paddingBottom: 0,
    paddingTop: 0,
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      '&.Cmt-header-root': {
        flexDirection: 'column',
      },
      '& .Cmt-action-default-menu': {
        position: 'absolute',
        right: 24,
        top: 5,
      },
    },
  },
  cardContentRoot: {
    padding: '0 !important',
    borderTop: `solid 1px ${theme.palette.borderColor.main}`,
    marginTop: -1,
  },
  scrollbarRoot: {
    height: 590,
    '& .CmtList-EmptyResult': {
      backgroundColor: 'transparent',
      border: '0 none',
    },
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
  newsListRoot: {
    padding: 24,
    cursor: 'pointer',
    transition: 'all .2s',
    '&:not(:first-child)': {
      borderTop: `solid 1px ${theme.palette.borderColor.main}`,
    },
    '& .Cmt-media-object': {
      width: '100%',
    },
    '& .fav-btn': {
      transform: 'scale(0)',
      transition: 'all .2s',
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      '& .fav-btn': {
        transform: 'scale(1)',
      },
    },
    [theme.breakpoints.down('xs')]: {
      '& .Cmt-media-object': {
        flexDirection: 'column',
      },
      '& .Cmt-media-image': {
        width: '100%',
        alignSelf: 'normal',
        marginBottom: 10,
        '& img': {
          marginRight: 0,
          width: '100%',
        },
      },
    },
  },
  titleRoot: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 16,
    },
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

const NewsList = ({
  currentTab,
  setCurrentTab,
  onNewsClick,
  data,
  searchText,
  onSearchText,
  toggleFavorite,
  newsCategories,
}) => {
  const classes = useStyles();
  return (
    <CmtCard>
      <CmtCardHeader
        className={classes.headerRoot}
        title={
          <Box display="flex" alignItems={{ md: 'center' }} flexDirection={{ xs: 'column', md: 'row' }}>
            <Typography component="div" variant="h4" className={classes.titleRoot}>
              Crypto News
            </Typography>
            <NewsTabs newsCategories={newsCategories} currentTab={currentTab} setCurrentTab={setCurrentTab} />
          </Box>
        }
        actionsPos="top-corner"
        actions={actions}>
        <div className={classes.searchAction}>
          <div className={classes.searchActionBar}>
            <CmtSearch onlyIcon border={false} value={searchText} onChange={onSearchText} />
          </div>
        </div>
      </CmtCardHeader>
      <CmtCardContent className={classes.cardContentRoot}>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <CmtList
            data={data}
            renderRow={(item, index) => {
              return (
                <ListItem component="div" className={classes.newsListRoot} key={index} onClick={() => onNewsClick(item)}>
                  <NewsItem item={item} toggleFavorite={toggleFavorite} />
                </ListItem>
              );
            }}
            ListEmptyComponent={<ListEmptyResult title="No Result" content="No result found with your search" />}
          />
        </PerfectScrollbar>
      </CmtCardContent>
    </CmtCard>
  );
};

export default NewsList;
