import React from 'react';
import useStyles from './index.style';
import CmtAvatar from '../../../../../@coremat/CmtAvatar';
import { getTimeDiffString } from '../../../../../@jumbo/utils/dateHelper';

const ActivityItem = ({ activity }) => {
  const classes = useStyles();

  return (
    <div className={classes.activityItemRoot}>
      <div className={classes.avatarWrapper}>
        <CmtAvatar size={32} src={activity.user.profilePic} alt={activity.user.name} />
      </div>

      <div className={classes.activityContentWrapper}>
        <div className={classes.activityContent}>
          <span className={classes.username}>{activity.user.name}</span>
          {activity.content}
        </div>

        <span className={classes.dateTime}>{getTimeDiffString(activity.createdAt, 'MMM DD, YYYY [at] h:ss A', 'ago')}</span>
      </div>
    </div>
  );
};

export default ActivityItem;
