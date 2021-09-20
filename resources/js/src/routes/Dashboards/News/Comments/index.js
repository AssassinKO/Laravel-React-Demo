import React from 'react';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import Chip from '@material-ui/core/Chip';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import PerfectScrollbar from 'react-perfect-scrollbar';
import CmtCard from '../../../../@coremat/CmtCard';
import { alpha, makeStyles } from '@material-ui/core/styles';
import CmtList from '../../../../@coremat/CmtList';
import { news } from '../../../../@fake-db/dashboards/news';
import CommentItem from './CommentItem';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    position: 'relative',
    '& .Cmt-card-content': {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  scrollbarRoot: {
    maxHeight: 400,
  },
  chipRoot: {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    color: theme.palette.primary.main,
    letterSpacing: 0.25,
    fontSize: 14,
  },
}));

const Comments = () => {
  const classes = useStyles();
  const { comments } = news;
  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title="Comments">
        <Chip className={classes.chipRoot} label="8 New Comments" color="primary" size="small" />
      </CmtCardHeader>
      <CmtCardContent>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <CmtList data={comments} renderRow={(item, index) => <CommentItem key={index} item={item} />} />
        </PerfectScrollbar>
      </CmtCardContent>
    </CmtCard>
  );
};

export default Comments;
