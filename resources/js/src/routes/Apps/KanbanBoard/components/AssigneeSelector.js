import React from 'react';
import Box from '@material-ui/core/Box';
import CustomScrollbar from '../../../../@jumbo/components/Common/CustomScrollbar';
import { kanbanBoard } from '../../../../@fake-db/apps/kanban-board';
import clsx from 'clsx';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import { Popover } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  memberScrollbar: {
    height: 300,
  },
  memberRoot: {
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: 8,
    width: '100%',
    transition: 'all .2s',
    '&:hover, &.selected': {
      backgroundColor: alpha(theme.palette.primary.main, 0.04),
    },
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
    },
  },
}));

const AssigneeSelector = ({ assignee, anchorEl, onMemberClick, onClose }) => {
  const classes = useStyles();

  return (
    <Popover
      id="assignee-selector-popover"
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}>
      <Box minWidth={220}>
        <CustomScrollbar className={classes.memberScrollbar}>
          <Box padding={2}>
            {kanbanBoard.members.map((member, index) => (
              <Box
                key={index}
                className={clsx(classes.memberRoot, {
                  selected: assignee && member.id === assignee.id,
                })}
                onClick={() => onMemberClick(member)}>
                <CmtAvatar src={member.profilePic} size={30} alt={member.name} />
                <Box mx={2} component="span">
                  {member.name}
                </Box>
              </Box>
            ))}
          </Box>
        </CustomScrollbar>
      </Box>
    </Popover>
  );
};

export default AssigneeSelector;
