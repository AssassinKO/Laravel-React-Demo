import React from 'react';
import CmtCard from '../../../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../../../@coremat/CmtCard/CmtCardHeader';
import Box from '@material-ui/core/Box';
import UserInfo from './UserInfo';
import CmtCardContent from '../../../../../../@coremat/CmtCard/CmtCardContent';
import PostStats from './PostStats';
import CmtList from '../../../../../../@coremat/CmtList';
import CommentItem from './CommentItem';
import AddComment from './AddComment';
import Attachments from './Attachments';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({}));

const PostItem = ({ item }) => {
  const classes = useStyles();
  const { owner, date, content, attachments, comments, id } = item;
  return (
    <CmtCard>
      <CmtCardHeader title={<UserInfo user={owner} date={date} />} />
      <CmtCardContent>
        <Box>
          <Box mb={2} component="p">
            {content}
          </Box>
          {attachments.length > 0 && <Attachments attachments={attachments} />}
          <PostStats item={item} />
          {comments.length > 0 && (
            <CmtList
              data={comments}
              renderRow={(item, index) => <CommentItem key={index} item={item} classes={classes} />}
            />
          )}
          <AddComment postId={id} />
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default PostItem;

PostItem.prototype = {
  item: PropTypes.object.isRequired,
};
