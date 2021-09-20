import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import PerfectScrollbar from 'react-perfect-scrollbar';
import CmtList from '../../../../@coremat/CmtList';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { latestPostList } from '../../../../@fake-db/dashboards/widgets';
import PostCell from './PostCell';

const useStyles = makeStyles(() => ({
  cardRoot: {
    position: 'relative',
    '& .Cmt-card-content': {
      padding: 0,
      paddingBottom: 24,
    },
  },
  scrollbarRoot: {
    height: 358,
  },
}));

const LatestPosts = () => {
  const classes = useStyles();
  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title="Latest Posts" subTitle="Lorem ipsum is dummy content dollar sit is...">
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </CmtCardHeader>
      <CmtCardContent>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <CmtList
            data={latestPostList}
            renderRow={(item, index) => {
              return <PostCell key={index} item={item} />;
            }}
          />
        </PerfectScrollbar>
      </CmtCardContent>
    </CmtCard>
  );
};

export default LatestPosts;
