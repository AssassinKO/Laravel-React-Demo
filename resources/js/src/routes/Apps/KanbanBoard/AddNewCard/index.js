import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

import AppTextInput from '../../../../@jumbo/components/Common/formElements/AppTextInput';
import { idGenerator } from '../../../../@jumbo/utils/commonHelper';
import { kanbanBoard } from '../../../../@fake-db/apps/kanban-board';
import CmtCard from '../../../../@coremat/CmtCard';
import useStyles from './index.style';

const user = kanbanBoard.members[0];

const AddNewCard = ({ onAdd, onCancel }) => {
  const classes = useStyles();
  const [title, setTitle] = useState('');

  const onCardSave = () => {
    if (title.trim()) {
      const card = {
        id: idGenerator(),
        title,
        description: '',
        dueDate: null,
        memberIds: [],
        activities: [
          {
            id: idGenerator(),
            user,
            content: 'added this card to Tasks.',
            type: 'activity',
            createdAt: new Date(),
          },
        ],
      };
      onAdd(card);
    }
  };

  return (
    <CmtCard className={classes.root}>
      <Box p={4}>
        <Box mb={4}>
          <AppTextInput
            placeholder="Enter a title..."
            fullWidth
            multiline
            value={title}
            onChange={e => setTitle(e.target.value)}
            variant="outlined"
          />
        </Box>
        <Box display="flex" alignItems="center">
          <Button variant="contained" color="primary" size="small" onClick={onCardSave}>
            Add Card
          </Button>
          <Box ml={1}>
            <IconButton size="small" onClick={onCancel}>
              <Close fontSize="medium" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </CmtCard>
  );
};

export default AddNewCard;
