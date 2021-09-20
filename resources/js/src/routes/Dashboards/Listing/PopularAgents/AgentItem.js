import React from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import { Box } from '@material-ui/core';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  agentItemsRoot: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  cardRoot: {
    width: 225,
    margin: 2,
    marginTop: 28,
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14)',
    borderRadius: theme.overrides.MuiCard.root.borderRadius,
    padding: '34px 16px 20px 16px',
    position: 'relative',
  },
  titleRoot: {
    color: theme.palette.common.dark,
    letterSpacing: 0.25,
    marginBottom: 6,
  },
  starIcon: {
    color: theme.palette.warning.main,
    fontSize: 20,
    marginRight: 3,
  },
  avatarView: {
    position: 'absolute',
    left: 16,
    top: -28,
    zIndex: 1,
  },
  avatar: {
    width: 56,
    height: 56,
    border: `solid 2px ${theme.palette.grey[400]}`,
  },
}));

const AgentItem = ({ item }) => {
  const classes = useStyles();
  return (
    <Box className={classes.agentItemsRoot}>
      <Box className={classes.cardRoot}>
        <Box className={classes.avatarView}>
          {item.profilePic ? (
            <CmtAvatar className={classes.avatar} src={item.profilePic} alt={item.name} />
          ) : (
            <CmtAvatar className={classes.avatar} color="primary" alt={item.name}>
              {item.name.charAt(0).toUpperCase()}
            </CmtAvatar>
          )}
        </Box>
        <Typography component="div" variant="h5" className={classes.titleRoot}>
          {item.name}
        </Typography>
        <Box display="flex" alignItems="center">
          <StarRateIcon className={classes.starIcon} />
          <Box component="p" color="text.secondary" fontSize={12}>
            {item.rating} | {`${item.deals} deals`}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AgentItem;
