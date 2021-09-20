import React from 'react';
import Box from '@material-ui/core/Box';
import CustomScrollbar from '../../../../@jumbo/components/Common/CustomScrollbar';
import { kanbanBoard } from '../../../../@fake-db/apps/kanban-board';
import clsx from 'clsx';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import { IconButton, Popover, Typography } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Check, Close } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  memberHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 16px',
    borderBottom: `1px solid ${theme.palette.borderColor.main}`,
  },
  memberScrollbar: {
    minHeight: 250,
    maxHeight: 300,
    overflowY: 'scroll',
    overflowX: 'hidden',
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
  memberFooter: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: 8,
    borderTop: `1px solid ${theme.palette.borderColor.main}`,
  },
}));

const MemberSelector = ({ memberIds, anchorEl, onMemberClick, onClose }) => {
  const classes = useStyles();

  return (
    <Popover
      id="member-selector-popover"
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}>
      <Box minWidth={220}>
        <div className={classes.memberHeader}>
          <Typography variant="h4" component="h4">
            Select Member
          </Typography>

          <IconButton size="small" onClick={onClose} edge="end">
            <Close fontSize="small" />
          </IconButton>
        </div>
        <CustomScrollbar className={classes.memberScrollbar}>
          <Box padding={2}>
            {kanbanBoard.members.map((member, index) => (
              <Box
                key={index}
                className={clsx(classes.memberRoot, {
                  selected: memberIds.includes(member.id),
                })}
                onClick={() => onMemberClick(member)}>
                <CmtAvatar src={member.profilePic} size={30} alt={member.name} />
                <Box mx={2} component="span" flex={1}>
                  {member.name}
                </Box>
                {memberIds.includes(member.id) && <Check fontSize="small" />}
              </Box>
            ))}
          </Box>
        </CustomScrollbar>
      </Box>
    </Popover>
  );
};

export default MemberSelector;
