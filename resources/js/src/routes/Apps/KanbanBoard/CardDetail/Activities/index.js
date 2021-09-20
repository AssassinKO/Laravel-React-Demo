import React from 'react';
import useStyles from './index.style';
import { List } from '@material-ui/icons';
import ActivityItem from './ActivityItem';
import AttachmentItem from './AttachmentItem';
import CommentItem from './CommentItem';
import CommentBox from './CommentBox';
import SectionHeading from '../SectionHeading';

const ACTIVITY_COMPONENT = {
  activity: ActivityItem,
  attachment: AttachmentItem,
  comment: CommentItem,
};

const Activities = ({ data, user, onSubmitComment }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SectionHeading iconComponent={<List />} headingComponent="Activity" />

      <CommentBox user={user} onSubmitComment={onSubmitComment} />

      <div className={classes.activitiesContainer}>
        {data.map((activity, index) => {
          const Component = ACTIVITY_COMPONENT[activity.type];
          return <Component key={index} activity={activity} />;
        })}
      </div>
    </div>
  );
};

export default Activities;
