import React, { useState } from 'react';
import clsx from 'clsx';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import { alpha, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Tooltip } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import InfoIcon from '@material-ui/icons/Info';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import CmtAvatar from '../../../../@coremat/CmtAvatar';
import CmtProgressBar from '../../../../@coremat/CmtProgressBar';
import CmtAvatarGroup from '../../../../@coremat/CmtAvatarGroup';
import CmtDropdownMenu from '../../../../@coremat/CmtDropdownMenu';
import CmtObjectSummary from '../../../../@coremat/CmtObjectSummary';
import CmtList from '../../../../@coremat/CmtList';

import AddProjectPopup from './AddProjectPopup';

import { intranet } from '../../../../@fake-db';

const useStyles = makeStyles(theme => ({
  actionsRoot: {
    transition: 'all 0.3s ease',
    transform: 'translateX(-110%)',
    opacity: 0,
    visibility: 'hidden',
    marginLeft: 10,
  },
  hoverAction: {
    '&:hover $actionsRoot': {
      transform: 'translateX(0%)',
      opacity: 1,
      visibility: 'visible',
    },
  },
  tableRowRoot: {
    position: 'relative',
    transition: 'all .2s',
    borderTop: `solid 1px ${theme.palette.borderColor.main}`,
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      borderTopColor: 'transparent',
      '& $tableCellRoot': {
        color: theme.palette.text.primary,
        '&:last-child': {
          color: theme.palette.error.main,
        },
        '&.success': {
          color: theme.palette.success.main,
        },
      },
    },
    '&:last-child': {
      borderBottom: `solid 1px ${theme.palette.borderColor.main}`,
    },
  },
  tableCellRoot: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 14,
    letterSpacing: 0.25,
    color: theme.palette.text.primary,
    borderBottom: '0 none',
    '&:first-child': {
      paddingLeft: 24,
    },
    '&:last-child': {
      textAlign: 'right',
      paddingRight: 24,
    },
    '& .Cmt-avatar-more': {
      fontSize: 10,
      color: theme.palette.primary.main,
    },
  },
  tableCellSecondaryColor: {
    color: theme.palette.text.secondary,
  },
  blockRoot: {
    display: 'block',
    fontSize: 14,
  },
  tooltip: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    fontSize: 14,
  },
}));

const actions = [
  {
    icon: <AllInclusiveIcon />,
    label: 'More Detail',
  },
  {
    icon: <InfoIcon />,
    label: 'See View',
  },
];

const moreItemsTooltip = data => <CmtList data={data} renderRow={(item, index) => <Box key={index}>{item.name}</Box>} />;

const TableItem = ({ row }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [team, setTeam] = useState(intranet.members.filter(item => row.team.some(id => id === item.id)));

  const handleDialog = event => {
    setAnchorEl(event.currentTarget);
  };

  let progressBarColor = '#3BD27C';
  if (row.progress <= 25) {
    progressBarColor = '#E73145';
  } else if (row.progress > 25 && row.progress <= 50) {
    progressBarColor = '#F39711';
  }

  return (
    <TableRow className={clsx(classes.hoverAction, classes.tableRowRoot)}>
      <TableCell className={classes.tableCellRoot}>
        <div>{row.name}</div>
      </TableCell>
      <TableCell className={clsx(classes.tableCellRoot, classes.tableCellSecondaryColor)}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span className="ml-1" style={{ fontSize: '12px' }}>
            {row.dueDate}
          </span>
          {row.isDelayed ? <Chip label="Delayed" color="secondary" size="small" /> : null}
        </div>
      </TableCell>

      <TableCell className={classes.tableCellRoot} style={{ width: 140 }}>
        <CmtProgressBar hideValue value={row.progress} containedColor={progressBarColor} onlyContained />
      </TableCell>

      <TableCell className={classes.tableCellRoot}>
        <div style={{ display: 'fix', alignItems: 'center' }}>
          <CmtAvatarGroup
            items={team}
            srcKey="profilePic"
            spacing={6}
            max={4}
            avatarSize={24}
            titleKey="name"
            moreVisibleOn="click"
            tooltipProps={{ classes: { tooltip: classes.tooltip } }}
            renderItemSummary={(item, index) => (
              <Box p={1}>
                <CmtObjectSummary
                  key={index}
                  avatar={<CmtAvatar size={30} src={item.profilePic} />}
                  title={item.name}
                  subTitle={`@${item.username}`}
                  align={'horizontal'}
                />
              </Box>
            )}
            renderMore={moreItemsTooltip}
          />
          <div className={classes.actionsRoot}>
            <IconButton size="small" onClick={handleDialog}>
              <PersonAddIcon />
            </IconButton>
          </div>
        </div>
        <AddProjectPopup
          options={intranet.members}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          team={team}
          setTeam={setTeam}
        />
      </TableCell>
      <TableCell className={classes.tableCellRoot}>
        <CmtDropdownMenu
          TriggerComponent={
            <Tooltip title="More">
              <IconButton size="small">
                <MoreVertIcon />
              </IconButton>
            </Tooltip>
          }
          items={actions}
        />
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
