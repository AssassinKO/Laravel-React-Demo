import React from 'react';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import { IconButton, Tooltip } from '@material-ui/core';
import CmtDropdownMenu from '../../../../@coremat/CmtDropdownMenu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Box from '@material-ui/core/Box';
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  newsListRoot: {
    padding: '8px 24px',
    transition: 'all .2s',
    '&:not(:first-child)': {
      borderTop: `solid 1px ${theme.palette.borderColor.main}`,
    },
    '&:last-child': {
      borderBottom: `solid 1px ${theme.palette.borderColor.main}`,
    },
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
    },
    '& .Cmt-media-object': {
      alignItems: 'center',
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
    label: 'View Profile',
  },
  {
    label: 'View Orders',
  },
];

function getBgColor(status) {
  const color = {
    pending: '#FF8C00',
    paid: '#0795F4',
    progress: '#00C4B4',
    completed: '#21823E',
    rejected: '#FF2A00',
  };
  return color[status];
}

const NewOrderItem = ({ item }) => {
  const classes = useStyles();
  return (
    <Box className={classes.newsListRoot}>
      <CmtMediaObject
        avatarPos="center"
        avatar={<CmtAvatar size={56} src={item.profile_pic} alt={item.name} />}
        title={item.name}
        titleProps={{
          variant: 'h4',
          className: classes.titleRoot,
        }}
        subTitle={`${item.email}`}
        subTitleProps={{
          variant: 'body2',
          className: classes.subTitleRoot,
        }}
        actionsComponent={
          <Box display="flex" alignItems="center">
            <Box className={classes.badgeRoot} component="span" bgcolor={getBgColor(item.status)}>
              {item.orders} ORDERS
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

export default NewOrderItem;
