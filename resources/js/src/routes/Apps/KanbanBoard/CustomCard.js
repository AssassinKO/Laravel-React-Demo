import React from 'react';
import { Box } from '@material-ui/core';
import { getDateText } from '../../../@jumbo/utils/dateHelper';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import CmtCard from '../../../@coremat/CmtCard';
import CmtCardHeader from '../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../@coremat/CmtCard/CmtCardContent';
import CmtMediaObject from '../../../@coremat/CmtMediaObject';
import CmtAvatar from '../../../@coremat/CmtAvatar';

const CustomCard = ({ onClick, showDeleteButton, onDelete, title, desc, assignee, dueDate, comments }) => {
  const clickDelete = e => {
    onDelete();
    e.stopPropagation();
  };

  return (
    <Box mt={3} onClick={onClick}>
      <CmtCard>
        <CmtCardHeader title={title}>
          {showDeleteButton && (
            <IconButton onClick={clickDelete} size="small">
              <DeleteIcon />
            </IconButton>
          )}
        </CmtCardHeader>
        <CmtCardContent>
          <Box display="flex" alignItems="center">
            {assignee ? (
              <CmtMediaObject
                avatar={<CmtAvatar size={30} src={assignee.profilePic} alt={assignee.name} />}
                avatarPos="center"
                title={getDateText(dueDate)}
                titleProps={{ style: { fontSize: 12 } }}
              />
            ) : (
              'Unassigned'
            )}
            {comments.length > 0 && (
              <Box display="flex" alignItems="center" ml="auto">
                {comments.length} <ChatBubbleOutlineIcon />
              </Box>
            )}
          </Box>
          <Box mt={3}>{desc}</Box>
        </CmtCardContent>
      </CmtCard>
    </Box>
  );
};

export default CustomCard;
