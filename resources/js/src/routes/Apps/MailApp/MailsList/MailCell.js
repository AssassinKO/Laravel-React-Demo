import React, { useState } from 'react';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { onGetSelectedMail, updateFvrtStatus, updateMailsFolder } from '../../../../redux/actions/MailApp';
import MailLabels from './MailLabels';
import useStyles from './MailCell.style';
import Typography from '@material-ui/core/Typography';
import { getDateinDesiredFormat } from '../../../../@jumbo/utils/dateHelper';
import SenderInfo from './SenderInfo';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import PropTypes from 'prop-types';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import ReplyIcon from '@material-ui/icons/Reply';
import clsx from 'clsx';

const MailCell = ({
  mail,
  labelsList,
  checkedMails,
  onChangeCheckedMails,
  onClickSendMail,
  onClickForwardMail,
  viewMode,
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [showSenderInfo, setShowSenderInfo] = useState(null);

  const onShowSenderInfo = event => {
    setShowSenderInfo(event.currentTarget);
  };

  const onHideSenderInfo = () => {
    setShowSenderInfo(null);
  };

  const onGetMailDetail = () => {
    dispatch(onGetSelectedMail(mail.id));
  };

  const onMoveMail = folder => {
    dispatch(updateMailsFolder([mail.id], folder));
  };

  const onClickFavoriteIcon = status => {
    dispatch(updateFvrtStatus([mail.id], status));
  };

  const { id, from, subject, message, read, labels, date, favorite } = mail;

  return (
    <Box
      className={clsx(classes.mailCellItem, {
        itemRead: read,
        selected: checkedMails.includes(mail.id),
      })}
      onClick={onGetMailDetail}>
      <Box className={classes.mailCellContent}>
        <Box mr={{ xs: 2, md: 4 }} onClick={event => event.stopPropagation()}>
          <Checkbox
            color="primary"
            checked={checkedMails.includes(mail.id)}
            onChange={event => onChangeCheckedMails(event.target.checked, id)}
          />
        </Box>

        <Box className={classes.mailCellContentAction}>
          <Box
            className={classes.avatarRoot}
            mr={{ xs: 4, md: 6 }}
            onMouseEnter={onShowSenderInfo}
            onMouseLeave={onHideSenderInfo}>
            <CmtAvatar size={viewMode === 'detail' ? 56 : 40} src={from.profile_pic} alt={from.name} />
            <Box onClick={event => event.stopPropagation()}>
              <SenderInfo
                showSenderInfo={showSenderInfo}
                from={from}
                onHideSenderInfo={onHideSenderInfo}
                onClickSendMail={onClickSendMail}
              />
            </Box>
          </Box>

          <Box className={classes.mailCellContentRoot}>
            {viewMode === 'detail' && <Typography className={classes.mailSenderName}>{from.name}</Typography>}
            <Typography className={classes.titleRoot} component="div" variant="h4">
              {subject ? subject : 'No subject'}
            </Typography>
            <Typography className={classes.subTitleRoot}>{message}</Typography>
          </Box>
        </Box>
      </Box>

      <Box className={classes.mailCellAction}>
        <Box className={classes.mailCellTimeAction}>
          {labels.length > 0 && labelsList.length > 0 && <MailLabels mailLabels={labels} labelsList={labelsList} />}
          <Box component="span" className={classes.mailTimeRoot}>
            {getDateinDesiredFormat(date, 'MMM DD')}
          </Box>
        </Box>
        <Box className={classes.mailCellBtnAction} onClick={e => e.stopPropagation()}>
          <Tooltip title="Archive">
            <IconButton className="icon-btn" onClick={() => onMoveMail('archived')}>
              <ArchiveIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton className="icon-btn" onClick={() => onMoveMail('trash')}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Forward">
            <IconButton className="icon-btn" onClick={() => onClickForwardMail(message)}>
              <ReplyIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Favorite">
            <IconButton className="icon-btn">
              <Checkbox
                icon={<StarBorderIcon />}
                checkedIcon={<StarIcon style={{ color: '#FF8C00' }} />}
                checked={favorite}
                onChange={e => onClickFavoriteIcon(e.target.checked)}
              />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default MailCell;

MailCell.prototype = {
  mail: PropTypes.object.isRequired,
  labelsList: PropTypes.array.isRequired,
  checkedMails: PropTypes.array.isRequired,
  onChangeCheckedMails: PropTypes.func,
  onClickSendMail: PropTypes.func,
  onClickForwardMail: PropTypes.func,
  viewMode: PropTypes.string,
};

MailCell.defaultProps = {
  viewMode: 'detail',
};
