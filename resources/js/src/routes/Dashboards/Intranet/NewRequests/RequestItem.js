import React from 'react';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import { IconButton, Tooltip, Typography } from '@material-ui/core';
import CmtDropdownMenu from '../../../../@coremat/CmtDropdownMenu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { getDateText } from '../../../../@jumbo/utils/dateHelper';

const useStyles = makeStyles(theme => ({
  requestDetailRoot: {
    padding: '8px 24px',
    borderTop: `solid 1px ${theme.palette.borderColor.main}`,
    cursor: 'pointer',
    transition: 'all .2s',
    '&:last-child': {
      borderBottom: `1px solid ${alpha(theme.palette.common.dark, 0.035)}`,
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      '& $dateTextRoot': {
        width: 0,
      },
      '& $hideContent': {
        transform: 'translateX(0)',
        width: '100%',
      },
    },
    '& .Cmt-media-object': {
      alignItems: 'center',
    },
  },
  avatarSize: {
    height: 40,
    width: 40,
    [theme.breakpoints.up('sm')]: {
      height: 56,
      width: 56,
    },
  },
  titleRoot: {
    fontSize: 14,
  },
  subTitleRoot: {
    fontSize: 12,
    letterSpacing: 0.4,
    color: theme.palette.text.disabled,
  },
  hideShowContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  dateTextRoot: {
    fontSize: 12,
    letterSpacing: 0.4,
    color: theme.palette.text.disabled,
    transition: 'all 0.4s ease',
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
  },
  hideContent: {
    transition: 'all 0.4s ease',
    transform: 'translateX(110%)',
    overflow: 'hidden',
    '& Button': {
      '&:not(:first-child)': {
        marginLeft: 10,
      },
    },
  },
}));

const actions = [
  {
    label: 'View Profile',
  },
  {
    label: 'Ignore',
  },
];

const RequestItem = ({ item, onAccept, onReject, itemIndex }) => {
  const classes = useStyles();

  return (
    <Box className={classes.requestDetailRoot}>
      <CmtMediaObject
        avatarPos="center"
        avatar={<CmtAvatar className={classes.avatarSize} src={item.user.profile_pic} alt={item.user.name} />}
        title={item.user.name}
        titleProps={{
          variant: 'h4',
          className: classes.titleRoot,
        }}
        subTitle={`@${item.user.username}`}
        subTitleProps={{
          variant: 'body2',
          className: classes.subTitleRoot,
        }}
        actionsComponent={
          <Box display="flex" alignItems="center">
            <Box className={classes.hideShowContent}>
              <Typography className={classes.dateTextRoot} component="span">
                {getDateText(item.created_at)}
              </Typography>
              <Box className={classes.hideContent}>
                <Button size="small" variant="contained" color="primary" onClick={() => onAccept(item, itemIndex)}>
                  Accept
                </Button>
                <Button size="small" color="primary" onClick={() => onReject(item, itemIndex)}>
                  Reject
                </Button>
              </Box>
            </Box>
            <CmtDropdownMenu
              TriggerComponent={
                <Tooltip title="More">
                  <IconButton style={{ marginLeft: 4 }}>
                    <MoreVertIcon />
                  </IconButton>
                </Tooltip>
              }
              items={actions}
              onItemClick={() => {}}
            />
          </Box>
        }
      />
    </Box>
  );
};

export default RequestItem;
