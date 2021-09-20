import React from 'react';
import Popper from '@material-ui/core/Popper';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import CmtObjectSummary from '../../../../@coremat/CmtObjectSummary';
import CmtCard from '../../../../@coremat/CmtCard';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useDispatch } from 'react-redux';
import { addNewConnection, removeConnection } from '../../../../redux/actions/MailApp';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import DateRangeIcon from '@material-ui/icons/DateRange';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
  popperRoot: {
    backgroundColor: theme.palette.popupColor.main,
    cursor: 'pointer',
    borderRadius: 4,
  },
  cardRoot: {
    backgroundColor: 'transparent',
  },
  blockRoot: {
    display: 'block',
  },
}));

const SenderInfo = props => {
  const { showSenderInfo, onHideSenderInfo, from, onClickSendMail, isConnected } = props;
  const dispatch = useDispatch();
  const classes = useStyles(props);

  const onClickAddContact = () => {
    if (isConnected) {
      dispatch(removeConnection(from));
    } else {
      dispatch(addNewConnection(from));
    }
  };

  return (
    <Popper
      id="mouse-over-popover"
      open={Boolean(showSenderInfo)}
      anchorEl={showSenderInfo}
      placement="top"
      className={classes.popperRoot}
      onClose={onHideSenderInfo}>
      <CmtCard className={classes.cardRoot}>
        <Box p={3}>
          <CmtObjectSummary
            avatar={<CmtAvatar size={40} src={from.profile_pic} alt={from.name} />}
            title={from.name}
            subTitle={from.email}
            showItemBadge={false}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            align={'horizontal'}
          />
        </Box>
        <Divider />

        <Box py={2} px={3} display="flex" alignItems="center">
          <Box component="span" onClick={onClickAddContact} style={{ cursor: 'pointer' }}>
            {isConnected ? 'Remove Contact' : 'Add To Contact'}
          </Box>
          <Box ml="auto">
            <DateRangeIcon className={classes.blockRoot} />
          </Box>
          <Box ml={1}>
            <IconButton
              onClick={() => {
                onClickSendMail({ email: from.email, name: from.name });
              }}>
              <MailIcon className={classes.blockRoot} />
            </IconButton>
          </Box>
        </Box>
      </CmtCard>
    </Popper>
  );
};

export default SenderInfo;

SenderInfo.prototype = {
  from: PropTypes.object.isRequired,
  showSenderInfo: PropTypes.bool.isRequired,
  onHideSenderInfo: PropTypes.func,
  onClickSendMail: PropTypes.func,
};
