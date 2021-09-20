import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import IconButton from '@material-ui/core/IconButton';
import { alpha, Tooltip } from '@material-ui/core';
import CmtProgressBar from '../../../../@coremat/CmtProgressBar';
import CmtDropdownMenu from '../../../../@coremat/CmtDropdownMenu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import { Close, Info } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
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
    whiteSpace: 'nowrap',
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
}));

const actions = [
  {
    icon: <Info />,
    label: 'More Detail',
  },
  {
    icon: <Close />,
    label: 'Close',
  },
];

const TableItem = ({ row }) => {
  const classes = useStyles();

  const getProgressBarColor = value => {
    if (value <= 25) {
      return '#E73145';
    } else if (value > 25 && value <= 50) {
      return '#F39711';
    } else return '#3BD27C';
  };

  return (
    <TableRow className={clsx(classes.tableRowRoot)}>
      <TableCell className={classes.tableCellRoot}>
        <Box>{row.name}</Box>
      </TableCell>
      <TableCell className={clsx(classes.tableCellRoot, classes.tableCellSecondaryColor)}>
        <Box display="flex" alignItems="center">
          <Box component="span" mr={1}>
            {row.dueDate}
          </Box>
        </Box>
      </TableCell>

      <TableCell className={classes.tableCellRoot} style={{ width: 100 }}>
        <CmtProgressBar hideValue value={row.progress} containedColor={getProgressBarColor(row.progress)} onlyContained />
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
          onItemClick={() => {}}
        />
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
