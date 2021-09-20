import React, { useState } from 'react';
import clsx from 'clsx';

import { TableRow, TableCell, Box, Button, Collapse } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { ArrowUpward } from '@material-ui/icons';

import CmtObjectSummary from '../../../../@coremat/CmtObjectSummary';
import { timeFromNow } from '../../../../@jumbo/utils/dateHelper';
import CmtAvatar from '../../../../@coremat/CmtAvatar';

const useStyles = makeStyles(theme => ({
  tableRowRoot: {
    position: 'relative',
    transition: 'all .2s',
    borderTop: `solid 1px ${theme.palette.borderColor.main}`,
    '&:hover, &.active': {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
      '& $tableCellRoot, & $titleRoot': {
        color: theme.palette.text.primary,
      },
      '& $showContent': {
        width: 0,
      },
      '& $hideContent': {
        transform: 'translateX(0)',
        width: '100%',
      },
    },
    '&:last-child': {
      borderBottom: `solid 1px ${theme.palette.borderColor.main}`,
    },
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      borderTopColor: 'transparent',
    },
    '&.collapse-table-row': {
      borderTop: '0 none',
      '& $tableCellRoot': {
        padding: 0,
      },
    },
    '&.active': {
      borderTop: '0 none',
      '&:hover': {
        transform: 'none',
        boxShadow: 'none',
      },
    },
  },
  tableCellRoot: {
    padding: 6,
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
      paddingRight: 24,
    },
  },
  tableCellFirst: {
    width: '50%',
  },
  tableCellSecond: {
    width: '25%',
  },
  tableCellHideShow: {
    width: '25%',
  },
  titleRoot: {
    color: theme.palette.text.secondary,
    letterSpacing: 0.25,
  },
  hideShowContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  showContent: {
    transition: 'all 0.3s ease-in-out',
    width: '100%',
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
  },
  hideContent: {
    transition: 'all 0.3s ease-in-out',
    transform: 'translateX(110%)',
    overflow: 'hidden',
  },
  hideShowLink: {
    cursor: 'pointer',
  },
  collapseTable: {
    paddingLeft: 60,
    '& td': {
      color: theme.palette.text.secondary,
      fontSize: 12,
      letterSpacing: 0.4,
      padding: 0,
      borderBottom: '0 none',
    },
  },
  openDataRot: {
    color: theme.palette.text.secondary,
    fontSize: 12,
    letterSpacing: 0.4,
    paddingLeft: 63,
    textAlign: 'left',
    paddingBottom: 10,
    marginTop: -15,
  },
}));

const TableItem = ({ row }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow className={clsx(classes.tableRowRoot, open ? 'active' : '')}>
        <TableCell className={clsx(classes.tableCellRoot, classes.tableCellFirst)}>
          <CmtObjectSummary
            avatar={<CmtAvatar src={row.user.avatar} alt={row.user.name} />}
            title={row.user.name}
            titleProps={{ className: classes.titleRoot }}
            showItemBadge={false}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            align={'horizontal'}
          />
        </TableCell>
        <TableCell className={clsx(classes.tableCellRoot, classes.tableCellSecond)}>
          {timeFromNow(row.lastPaymentDate)}
        </TableCell>
        <TableCell className={clsx(classes.tableCellRoot, classes.tableCellHideShow)} onClick={() => setOpen(!open)}>
          <div className={classes.hideShowContent}>
            <div className={classes.showContent}>${row.pendingAmount}</div>
            <Box
              className={clsx(classes.hideContent, classes.hideShowLink)}
              color="primary.main"
              display="flex"
              alignItems="center"
              justifyContent="flex-end">
              <span style={{ fontWeight: 700 }} className={'mr-2'}>
                {open ? 'HIDE' : 'DETAIL'}
              </span>
              {open ? <ArrowUpward fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
            </Box>
          </div>
        </TableCell>
      </TableRow>

      <TableRow className={clsx(classes.tableRowRoot, open ? 'active' : 'collapse-table-row')}>
        <TableCell className={classes.tableCellRoot} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className={classes.openDataRot}>
              <div>{row.user.position}</div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className={'mr-3'}>
                  Total{' '}
                  <Box component="span" fontWeight="fontWeightRegular" color="text.primary">
                    Hours: {row.rate}
                  </Box>
                </div>

                <div className={'mr-3'}>
                  Rate:{' '}
                  <Box component="span" fontWeight="fontWeightRegular" color="text.primary">
                    {row.rate}
                  </Box>
                </div>

                <div>
                  Pending{' '}
                  <Box component="span" fontWeight="fontWeightRegular" color="text.primary">
                    ${row.pendingAmount}
                  </Box>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <Button size="small" variant="contained" color="primary">
                    Pay Now
                  </Button>
                </div>
              </div>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default TableItem;
