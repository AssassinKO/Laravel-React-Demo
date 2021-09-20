import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { coremat } from '../../../../@fake-db/coremat-components';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import CmtList from '../../../../@coremat/CmtList';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ListEmptyResult from '../../../../@coremat/CmtList/ListEmptyResult';
import CmtListPagination from '../../../../@coremat/CmtList/CmtListPagination';
import Box from '@material-ui/core/Box';
import { Typography, makeStyles } from '@material-ui/core';
import { JumboCard } from '../../../../@jumbo/components/Common';

const useStyles = makeStyles(theme => ({
  itemRoot: {
    padding: 1,
    '& .Cmt-avatar': {
      height: 56,
      width: 56,
    },
    '& .Cmt-media-header': {
      marginBottom: 8,
    },
    '& .Cmt-media-image': {
      marginRight: 12,
      marginTop: 0,
    },
  },
  titleRoot: {
    fontSize: 16,
  },
  descText: {
    color: theme.palette.text.secondary,
  },
}));

const ListView = () => {
  const classes = useStyles();
  const { showBorder, resultEmpty, initLoader, showFooter, paginationType, position, loadMore } = useContext(CorematContext);
  const { carouselImages } = coremat;

  const getData = () => {
    if (resultEmpty) return [];
    return carouselImages;
  };

  const renderRow = (item, index) => {
    return (
      <Box mb={2} key={index} className={classes.itemRoot}>
        <JumboCard>
          <CmtMediaObject avatar={item.profile_pic} title={item.title} titleProps={{ className: classes.titleRoot }}>
            <Typography className={classes.descText} variant="body2">
              {item.description}
            </Typography>
          </CmtMediaObject>
        </JumboCard>
      </Box>
    );
  };

  const handleEndReached = () => {};

  return (
    <PerfectScrollbar style={{ maxHeight: 350 }}>
      {paginationType === 'pagination' ? (
        <CmtListPagination
          paginationProps={{ page: 1, count: 5 }}
          position={position}
          data={getData()}
          renderRow={renderRow}
          border={showBorder}
          onEndReached={handleEndReached}
          ListEmptyComponent={
            <ListEmptyResult
              loader={initLoader}
              title="No Data Found"
              content="Empty result description"
              actionTitle="Add Content"
            />
          }
        />
      ) : (
        <CmtList
          data={getData()}
          renderRow={renderRow}
          border={showBorder}
          onEndReached={handleEndReached}
          ListEmptyComponent={
            <ListEmptyResult
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

export default ListView;
