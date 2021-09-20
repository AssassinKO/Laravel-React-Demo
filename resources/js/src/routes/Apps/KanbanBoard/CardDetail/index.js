import React, { useCallback, useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import { useDropzone } from 'react-dropzone';

import { kanbanBoard } from '../../../../@fake-db/apps/kanban-board';
import AppDatePicker from '../../../../@jumbo/components/Common/formElements/AppDatePicker';
import AppTextInput from '../../../../@jumbo/components/Common/formElements/AppTextInput';
import { getFormattedDate } from '../../../../@jumbo/utils/dateHelper';
import { idGenerator } from '../../../../@jumbo/utils/commonHelper';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import { IconButton } from '@material-ui/core';
import useStyles from './index.style';
import { AttachFile, CalendarToday, Cancel, Close, DoneOutline } from '@material-ui/icons';
import Activities from './Activities';
import Attachments from './Attachments';
import CmtAvatarGroup from '../../../../@coremat/CmtAvatarGroup';
import CmtObjectSummary from '../../../../@coremat/CmtObjectSummary';
import MemberSelector from '../components/MemberSelector';

const user = kanbanBoard.members[0];

const CardDetail = ({ open, handleClose, selectedCard, onCardUpdate, selectedLaneId }) => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(null);
  const [memberIds, setMemberIds] = useState([]);
  const [members, setMembers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [attachments, setAttachments] = useState([]);
  const [showDateInput, setDateInputStatus] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: true,
    onDrop: acceptedFiles => {
      let newCoverImage;
      const files = acceptedFiles.map(file => {
        const isImage = file.type.toLowerCase().includes('image');

        const newAttachment = {
          id: idGenerator(),
          file: file,
          metaData: { type: file.type, size: file.size },
          name: file.name,
          thumbnail: URL.createObjectURL(file),
          fullImage: URL.createObjectURL(file),
          isCover: isImage,
          user,
          type: 'attachment',
          createdAt: new Date(),
        };

        if (isImage) newCoverImage = newAttachment;

        return newAttachment;
      });

      setActivities(prevState => {
        const newState = [...files, ...prevState];

        if (newCoverImage) {
          return newState.map(item => (item.id === newCoverImage.id ? item : { ...item, isCover: false }));
        }

        return newState;
      });
    },
  });

  useEffect(() => {
    setTitle(selectedCard.title);
    setDescription(selectedCard.description);
    setDueDate(selectedCard.dueDate);
    setMemberIds(selectedCard.memberIds);
    setActivities(selectedCard.activities);
  }, [selectedCard]);

  useEffect(() => {
    setMembers(memberIds.map(id => kanbanBoard.members.find(member => member.id === id)));
  }, [memberIds]);

  useEffect(() => {
    setAttachments(activities.filter(activity => activity.type === 'attachment'));
  }, [activities]);

  useEffect(() => {
    updateCardDetails();
  }, [dueDate, activities, members, title, description]);

  const onMembersClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const onMemberClick = member => {
    if (memberIds.includes(member.id)) {
      setMemberIds(prevState => prevState.filter(id => id !== member.id));
    } else {
      setMemberIds(prevState => [...prevState, member.id]);
    }
  };

  const handleMemberSelectorClose = () => {
    setAnchorEl(null);
  };

  const updateCardDetails = () => {
    onCardUpdate({ ...selectedCard, title, description, dueDate, memberIds, activities }, selectedLaneId);
  };

  const updateAttachment = useCallback(
    (attachment, seCover) => {
      if (seCover) {
        setActivities(
          activities.map(activity => {
            if (activity.type === 'attachment') {
              if (activity.id === attachment.id) {
                return attachment;
              }

              return { ...activity, isCover: false };
            }

            return activity;
          }),
        );
      } else {
        setActivities(prevState => {
          return prevState.map(activity => (activity.id === attachment.id ? attachment : activity));
        });
      }
    },
    [activities],
  );

  const onSubmitComment = newComment => {
    setActivities(prevState => [newComment, ...prevState]);
  };

  const coverImage = activities.find(activity => activity.type === 'attachment' && activity.isCover);

  return (
    <Dialog onClose={handleClose} open={open} scroll="body" maxWidth="md">
      <IconButton className={classes.closeButton} onClick={handleClose}>
        <Close />
      </IconButton>

      {coverImage && <div className={classes.cardCover} style={{ backgroundImage: `url(${coverImage.fullImage})` }} />}

      <div className={classes.root}>
        <div className={classes.cardSection}>
          <AppTextInput
            placeholder="Title"
            multiline
            fullWidth
            value={title}
            onChange={e => setTitle(e.target.value)}
            variant="outlined"
            onMouseLeave={updateCardDetails}
          />
          <Box {...getRootProps()} className="ml-2">
            <input {...getInputProps()} />

            <IconButton edge="end" style={{ height: 40, width: 40 }}>
              <AttachFile />
            </IconButton>
          </Box>
        </div>

        <div className={classes.cardSection}>
          <div className={classes.rowLabelContainer}>
            <label className={classes.rowLabel}>Members</label>
          </div>

          <div className={classes.rowContent}>
            <Box display="flex" alignItems="center" className="pointer" onClick={onMembersClick}>
              {members.length > 0 ? (
                <CmtAvatarGroup
                  items={members}
                  srcKey="profilePic"
                  titleKey="name"
                  avatarSize={34}
                  tooltipProps={{ classes: { tooltip: classes.hoverMemberInfo } }}
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
              ) : (
                <React.Fragment>
                  <CmtAvatar src={null} size={30} alt="Member" />
                  <Box mx={2} component="span">
                    No Member
                  </Box>
                </React.Fragment>
              )}
            </Box>
          </div>
        </div>

        <div className={classes.cardSection}>
          <div className={classes.rowLabelContainer}>
            <label className={classes.rowLabel}>Due Date</label>
          </div>

          {showDateInput ? (
            <div className={classes.rowContent}>
              <AppDatePicker
                autoOk
                format="MMM DD, YYYY"
                placeholder="Date"
                name="date"
                value={dueDate}
                onChange={value => setDueDate(value)}
                variant="outlined"
                inputVariant="outlined"
              />

              <IconButton edge="end" className="ml-2" onClick={() => setDateInputStatus(false)}>
                <DoneOutline fontSize="small" />
              </IconButton>
            </div>
          ) : (
            <div className={classes.rowContent}>
              <CalendarToday />
              <Box mx={2} component="span" title="Click to edit" onClick={() => setDateInputStatus(true)}>
                {dueDate ? getFormattedDate(dueDate, 'MMM DD, YYYY') : 'No Due Date'}
              </Box>

              {dueDate && (
                <IconButton edge="end" className="clear-button" title="Click to clear" onClick={() => setDueDate(null)}>
                  <Cancel fontSize="small" />
                </IconButton>
              )}
            </div>
          )}
        </div>

        <div className={classes.cardSection}>
          <div className={classes.rowLabelContainer}>
            <label className={classes.rowLabel}>Description</label>
          </div>

          <div className={classes.rowContent}>
            <AppTextInput
              placeholder="Description"
              multiline
              fullWidth
              value={description}
              onChange={e => setDescription(e.target.value)}
              variant="outlined"
            />
          </div>
        </div>

        {!!attachments.length && (
          <div className={classes.cardSection}>
            <Attachments
              uploadRootProps={getRootProps}
              uploadInputProps={getInputProps}
              updateAttachment={updateAttachment}
              attachments={attachments}
            />
          </div>
        )}
        <div className={classes.cardSection}>
          <Activities data={activities} user={user} onSubmitComment={onSubmitComment} />
        </div>

        <MemberSelector
          anchorEl={anchorEl}
          memberIds={memberIds}
          onMemberClick={onMemberClick}
          onClose={handleMemberSelectorClose}
        />
      </div>
    </Dialog>
  );
};

export default React.memo(CardDetail);
