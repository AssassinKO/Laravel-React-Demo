import React from 'react';
import useStyles from './index.style';
import CmtCard from '../../../../@coremat/CmtCard';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Box } from '@material-ui/core';
import { getDateText, getFormattedDate } from '../../../../@jumbo/utils/dateHelper';
import { ChatBubbleOutline } from '@material-ui/icons';
import CmtCardMedia from '../../../../@coremat/CmtCard/CmtCardMedia';
import DeleteConfirmation from '../components/DeleteConfirmation';
import CmtAvatarGroup from '../../../../@coremat/CmtAvatarGroup';
import CmtObjectSummary from '../../../../@coremat/CmtObjectSummary';
import { kanbanBoard } from '../../../../@fake-db/apps/kanban-board';
import clsx from 'clsx';

const LaneCard = ({ onClick, showDeleteButton, onDelete, title, memberIds, dueDate, activities }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const attachment = activities.find(activity => activity.type === 'attachment' && activity.isCover);
  const totalActivities = activities.length;
  const members = memberIds.map(id => kanbanBoard.members.find(member => member.id === id));

  const onCardDelete = event => {
    event.stopPropagation();
    onDelete();
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <CmtCard className={classes.root}>
      {showDeleteButton && (
        <IconButton className={classes.deleteButton} onClick={handleClick} size="small">
          <DeleteIcon fontSize="small" />
        </IconButton>
      )}

      {attachment && <CmtCardMedia className="pointer" image={attachment.fullImage} title={title} onClick={onClick} />}

      <Box p={4}>
        {title && (
          <p onClick={onClick} className={clsx(classes.cardTitle, 'pointer')}>
            {title}
          </p>
        )}

        {(dueDate || !!totalActivities || !!members.length) && (
          <div className={classes.footerRoot}>
            {!!members.length && (
              <CmtAvatarGroup
                items={members}
                srcKey="profilePic"
                titleKey="name"
                avatarSize={30}
                max={3}
                tooltipProps={{ classes: { tooltip: classes.hoverMemberInfo } }}
                onMoreClick={onClick}
                renderItemSummary={member => (
                  <CmtObjectSummary
                    key={member.id}
                    avatar={member.profilePic}
                    title={member.name}
                    subTitle={member.email}
                    avatarProps={{ variant: 'rounded', size: 80 }}
                    align="horizontal"
                  />
                )}
              />
            )}

            {dueDate && <span className="card-date">{getDateText(getFormattedDate(dueDate, 'MMM DD, YYYY'))}</span>}

            {!!totalActivities && (
              <div className={classes.commentCounter}>
                <span className="counter">{totalActivities}</span>
                <ChatBubbleOutline fontSize="small" />
              </div>
            )}
          </div>
        )}
      </Box>

      <DeleteConfirmation anchorEl={anchorEl} onClose={handleClose} onConfirm={onCardDelete} />
    </CmtCard>
  );
};

export default LaneCard;
