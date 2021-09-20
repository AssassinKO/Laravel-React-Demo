import React from 'react';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import { IconButton, Tooltip } from '@material-ui/core';
import CmtDropdownMenu from '../../../../@coremat/CmtDropdownMenu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Box from '@material-ui/core/Box';
import { alpha, makeStyles } from '@material-ui/core/styles';

const bgColors = ['#0795F4', '#FF8C00', '#00C4B4'];

const useStyles = makeStyles(theme => ({
  itemRoot: {
    padding: '8px 24px',
    cursor: 'pointer',
    transition: 'all .2s',
    borderTop: `1px solid ${alpha(theme.palette.common.dark, 0.04)}`,
    '&:last-child': {
      borderBottom: `1px solid ${alpha(theme.palette.common.dark, 0.04)}`,
    },
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
  articlesBadge: {
    borderRadius: '16px',
    fontSize: 12,
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

const ItemCell = ({ item }) => {
  const classes = useStyles();
  return (
    <Box className={classes.itemRoot}>
      <CmtMediaObject
        avatarPos="center"
        avatar={<CmtAvatar size={56} src={item.profile_pic} alt={item.name} />}
        title={item.name}
        titleProps={{
          variant: 'h4',
          className: classes.titleRoot,
        }}
        subTitle={`${item.readers} readers`}
        subTitleProps={{
          variant: 'body2',
          className: classes.subTitleRoot,
        }}
        actionsComponent={
          <Box display="flex" alignItems="center">
            <Box
              color="#fff"
              bgcolor={bgColors[Math.floor(Math.random() * 3)]}
              py={1}
              px={2}
              fontSize={12}
              className={classes.articlesBadge}>{`${item.articles} articles`}</Box>
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

export default ItemCell;
