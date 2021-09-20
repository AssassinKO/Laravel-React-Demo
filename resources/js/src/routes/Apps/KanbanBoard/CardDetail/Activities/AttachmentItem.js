import React from 'react';
import useStyles from './index.style';
import CmtAvatar from '../../../../../@coremat/CmtAvatar';
import { getTimeDiffString } from '../../../../../@jumbo/utils/dateHelper';
import CmtImage from '../../../../../@coremat/CmtImage';

const AttachmentItem = ({ activity }) => {
  const classes = useStyles();

  const isImage = activity.metaData.type.toLowerCase().includes('image');

  return (
    <div className={classes.activityItemRoot}>
      <div className={classes.avatarWrapper}>
        <CmtAvatar size={32} src={activity.user.profilePic} alt={activity.user.name} />
      </div>

      <div className={classes.activityContentWrapper}>
        <div className={classes.activityContent}>
          <span className={classes.username}>{activity.user.name}</span>
          {` attached `}
          <a href={activity.fullImage}>{activity.name}</a>
          {` to this card `}
          <span className={classes.dateTime}>
            {getTimeDiffString(activity.createdAt, 'MMM DD, YYYY [at] h:ss A', 'ago')}
          </span>
        </div>

        {isImage && (
          <div className={classes.attachmentWrapper}>
            <CmtImage className={classes.attachmentImage} src={activity.fullImage} alt={activity.name} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AttachmentItem;
