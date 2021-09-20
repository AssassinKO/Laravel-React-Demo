import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import clsx from 'clsx';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { IconButton, Tooltip } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CmtDropdownMenu from '../../../../@coremat/CmtDropdownMenu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';

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
    padding: 16,
    fontSize: 14,
    letterSpacing: 0.25,
    color: theme.palette.text.secondary,
    borderBottom: '0 none',
    position: 'relative',
    '&:first-child': {
      paddingLeft: 24,
    },
    '&:last-child': {
      textAlign: 'right',
      color: theme.palette.error.main,
      paddingRight: 24,
    },
    '&.success': {
      color: theme.palette.success.main,
    },
    '& .Cmt-media-object': {
      alignItems: 'center',
    },
  },
  badgeRoot: {
    color: theme.palette.common.white,
    borderRadius: 30,
    fontSize: 12,
    padding: '2px 10px',
    display: 'inline-block',
  },
}));

const actions = [
  {
    label: 'View Order',
  },
  {
    label: 'More',
  },
];

function getBgColor(status) {
  const color = {
    cancelled: '#E00930',
    completed: '#0795F4',
    delayed: '#03DAC5',
    onHold: '#FF8C00',
  };
  return color[status];
}

const TableItem = ({ row }) => {
  const classes = useStyles();

  return (
    <TableRow className={classes.tableRowRoot}>
      <TableCell className={classes.tableCellRoot}>{row.orderId}</TableCell>
      <TableCell className={classes.tableCellRoot}>
        <CmtMediaObject
          avatarPos="center"
          avatar={<CmtAvatar size={35} src={row.customer.profile_pic} alt={row.customer.name} />}
          title={row.customer.name}
          titleProps={{
            variant: 'h5',
            className: classes.titleRoot,
          }}
        />
      </TableCell>
      <TableCell className={classes.tableCellRoot}>{row.orderDate}</TableCell>
      <TableCell className={classes.tableCellRoot}>{row.deliveryDate}</TableCell>
      <TableCell className={clsx(classes.tableCellRoot, 'success')}>
        <Box className={classes.badgeRoot} component="span" bgcolor={getBgColor(row.status)}>
          {row.status.toUpperCase()}
        </Box>
      </TableCell>
      <TableCell className={classes.tableCellRoot}>
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          <CmtDropdownMenu
            TriggerComponent={
              <Tooltip title="More">
                <IconButton size="small" style={{ marginLeft: 10 }}>
                  <MoreVertIcon />
                </IconButton>
              </Tooltip>
            }
            items={actions}
            onItemClick={() => {}}
          />
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
