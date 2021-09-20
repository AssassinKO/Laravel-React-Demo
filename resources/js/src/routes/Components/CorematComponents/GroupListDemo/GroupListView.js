import React, { useContext } from 'react';
import CorematContext from '../../../../@jumbo/components/contextProvider/CorematContext';
import { coremat } from '../../../../@fake-db/coremat-components';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import CmtGroupList from '../../../../@coremat/CmtGroupList';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Box from '@material-ui/core/Box';
import { Button, makeStyles, Typography } from '@material-ui/core';
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

const GroupListView = () => {
  const classes = useStyles();
  const { isExpandable, isGrid } = useContext(CorematContext);
  const { projects } = coremat;

  const groupIdentifier = dataItem => {
    return {
      id: dataItem.projectName.toLowerCase(),
      groupName: dataItem.projectName,
    };
  };

  const renderItem = (item, index) => {
    return (
      <Box mb={isGrid ? 0 : 2} key={index} className={classes.itemRoot}>
        <JumboCard>
          <CmtMediaObject
            avatar={item.profile_pic}
            title={item.title}
            titleProps={{ className: classes.titleRoot }}
            content={item.description}
            contentProps={{ variant: 'body2', className: classes.descText }}>
            <Button variant="contained" color="primary">
              Buy Now
            </Button>
          </CmtMediaObject>
        </JumboCard>
      </Box>
    );
  };

  const renderHeader = group => {
    return (
      <Typography
        component="div"
        variant="body1"
        style={{
          marginBottom: isExpandable ? 0 : 10,
          marginTop: isExpandable ? 0 : 10,
        }}>
        {group.groupName}
      </Typography>
    );
  };

  return (
    <PerfectScrollbar style={{ maxHeight: 350 }}>
      <CmtGroupList
        data={projects}
        renderItem={renderItem}
        renderHeader={renderHeader}
        groupIdentifier={groupIdentifier}
        isExpandable={isExpandable}
        isGrid={isGrid}
        itemPadding={10}
        column={2}
      />
    </PerfectScrollbar>
  );
};

export default GroupListView;
