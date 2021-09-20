import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { coremat } from '../../../../@fake-db';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import CmtGridView from '../../../../@coremat/CmtGridView';
import PerfectScrollbar from 'react-perfect-scrollbar';
import GridEmptyResult from '../../../../@coremat/CmtGridView/GridEmptyResult';
import CmtGridPagination from '../../../../@coremat/CmtGridView/CmtGridPagination';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { JumboCard } from '../../../../@jumbo/components/Common';

const useStyles = makeStyles(theme => ({
  itemRoot: {
    padding: 1,
    '& .Cmt-avatar': {
      height: 34,
      width: 34,
      cursor: 'pointer',
    },
    '& .Cmt-media-header': {
      marginBottom: 8,
    },
    '& .Cmt-media-image': {
      marginRight: 4,
      marginTop: 0,
    },
    '& .titleRoot': {
      fontSize: 16,
    },
  },
  badgePrice: {
    cursor: 'pointer',
    fontSize: 14,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    color: theme.palette.primary.main,
    padding: '4px 10px',
    borderRadius: 4,
    display: 'block',
  },
  typoList: {
    marginRight: 15,
  },
}));

const GridView = () => {
  const classes = useStyles();
  const { column, responsive, resultEmpty, initLoader, showFooter, paginationType, position, loadMore } = useContext(
    CorematContext,
  );
  const { productsList } = coremat;

  const getData = () => {
    if (resultEmpty) return [];
    return productsList;
  };

  const renderRow = (item, index) => {
    return (
      <Box key={index} className={classes.itemRoot}>
        <JumboCard>
          <CmtMediaObject
            avatar={item.logo}
            title={item.name}
            titleProps={{ className: 'pointer titleRoot' }}
            actionsComponent={
              <Box className={classes.badgePrice} component="span">
                {item.price}
              </Box>
            }>
            <Box display="flex" alignItems="center">
              <Typography className={classes.typoList} variant="body2">
                {item.sold}
                <Box ml={1} component="span" color="text.secondary">
                  Sold
                </Box>
              </Typography>
            </Box>
          </CmtMediaObject>
        </JumboCard>
      </Box>
    );
  };

  const handleEndReached = () => {
    //todo handle end of the items
  };

  const getColumnsSizes = () => {
    if (responsive) {
      return {
        responsive: {
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 3,
        },
      };
    }

    return { column };
  };

  return (
    <PerfectScrollbar style={{ maxHeight: 350 }}>
      {paginationType === 'pagination' ? (
        <CmtGridPagination
          paginationProps={{ page: 1, count: 5 }}
          position={position}
          data={getData()}
          renderRow={renderRow}
          itemPadding={10}
          {...getColumnsSizes()}
          onEndReached={handleEndReached}
          ListEmptyComponent={
            <GridEmptyResult
              loader={initLoader}
              title="No Data Found"
              content="Empty result description"
              actionTitle="Add Content"
            />
          }
        />
      ) : (
        <CmtGridView
          data={getData()}
          renderRow={renderRow}
          itemPadding={10}
          {...getColumnsSizes()}
          onEndReached={handleEndReached}
          ListEmptyComponent={
            <GridEmptyResult
              loader={initLoader}
              title="No Data Found"
              content="Empty result description"
              actionTitle="Add Content"
            />
          }
          footerProps={
            showFooter
              ? {
                  loading: loadMore,
                  footerText: 'No more content',
                }
              : null
          }
        />
      )}
    </PerfectScrollbar>
  );
};

export default GridView;
