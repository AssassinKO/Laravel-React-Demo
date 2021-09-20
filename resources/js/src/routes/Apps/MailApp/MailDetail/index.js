import React, { useContext, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { useDispatch, useSelector } from 'react-redux';
import { onReplyToMail, onUpdateMail } from '../../../../redux/actions/MailApp';
import MailLabels from '../MailsList/MailLabels';
import CmtObjectSummary from '../../../../@coremat/CmtObjectSummary';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import { getDateinDesiredFormat, isToday } from '../../../../@jumbo/utils/dateHelper';
import useStyles from '../index.style';
import Typography from '@material-ui/core/Typography';
import ReplyMailForm from './ReplyMailForm';
import DetailHeader from './DetailHeader';
import MailReply from './MailReply';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { getMailContainerHeight } from '../../../../@jumbo/constants/AppConstants';
import { withWidth } from '@material-ui/core';
import ReplyIcon from '@material-ui/icons/Reply';
import Chip from '@material-ui/core/Chip';
import PhotoIcon from '@material-ui/icons/Photo';
import GetAppIcon from '@material-ui/icons/GetApp';
import AppContext from '../../../../@jumbo/components/contextProvider/AppContextProvider/AppContext';
import { linkify } from '../../../../@jumbo/utils/commonHelper';

const MailDetail = ({ width, onClickForwardMail }) => {
  const { showFooter } = useContext(AppContext);
  const dispatch = useDispatch();
  const { selectedMail, labelsList } = useSelector(({ mailApp }) => mailApp);
  const classes = useStyles({
    height: getMailContainerHeight(width, showFooter),
  });

  useEffect(() => {
    const mail = selectedMail;
    mail.read = true;
    dispatch(onUpdateMail(mail));
  }, [dispatch, selectedMail]);

  const getSenderInfo = () => (
    <Box component="span" display="flex" alignItems="center">
      <Box component="span" fontSize={16}>
        {selectedMail.from.name}
      </Box>
      <Box component="span" fontSize={12} ml={2} color="text.secondary">{`<${selectedMail.from.email}>`}</Box>
    </Box>
  );

  const onClickReplyMail = mail => {
    dispatch(onReplyToMail(selectedMail.id, mail));
  };

  const getMailDate = date => {
    return isToday(date) ? 'Today' : getDateinDesiredFormat(date, 'MMM DD');
  };

  const downloadAttachment = () => {};

  const onShowAttachments = attachments => {
    return (
      <Box className={classes.attachRoot}>
        {attachments.map((item, index) => (
          <Chip
            label={item.file.name}
            key={index}
            icon={<PhotoIcon />}
            deleteIcon={<GetAppIcon />}
            onDelete={downloadAttachment}
          />
        ))}
      </Box>
    );
  };

  const { subject, labels, from, to, date, message, replyThread, attachments } = selectedMail;

  return (
    <Box className={classes.inBuildAppMainContent}>
      <DetailHeader classes={classes} selectedMail={selectedMail} labelsList={labelsList} />

      <PerfectScrollbar className={classes.perfectScrollbarMailCon}>
        <Box flex={1} display="flex" flexDirection="column">
          <Box className={classes.detailHeader}>
            <Box className={classes.detailHeaderSub}>
              <Typography component="div" variant="h1" className={classes.subjectTitle}>
                {subject}
              </Typography>
              <Box ml={{ xs: -1, sm: 'auto' }}>
                {labels.length > 0 && labelsList.length > 0 && <MailLabels mailLabels={labels} labelsList={labelsList} />}
              </Box>
            </Box>

            <CmtObjectSummary
              avatar={<CmtAvatar size={40} src={from.profile_pic} alt={from.name} />}
              title={getSenderInfo()}
              subTitle={`to ${to[0].name}`}
              showItemBadge={false}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              align={'horizontal'}
            />
          </Box>

          <Box className={classes.messageDetail}>
            <Box className={classes.messageItem}>
              <Box className={classes.messageItemInner}>
                <Box className={classes.dateRoot}>{getMailDate(date)}</Box>
                <Box className={classes.replyRoot}>
                  <IconButton onClick={() => onClickForwardMail(message)}>
                    <ReplyIcon />
                  </IconButton>
                </Box>
                <Box
                  mb={attachments.length > 0 ? 8 : 0}
                  component="p"
                  dangerouslySetInnerHTML={{
                    __html: linkify(message.replace(/(?:\r\n|\r|\n)/g, '<br />')),
                  }}
                />

                {attachments.length > 0 && onShowAttachments(attachments)}
              </Box>
            </Box>

            {replyThread.map((reply, index) => (
              <MailReply
                key={index}
                classes={classes}
                reply={reply}
                getMailDate={getMailDate}
                onShowAttachments={onShowAttachments}
                onClickForwardMail={onClickForwardMail}
              />
            ))}
          </Box>

          <ReplyMailForm onClickReplyMail={onClickReplyMail} />
        </Box>
      </PerfectScrollbar>
    </Box>
  );
};

export default withWidth()(MailDetail);

MailDetail.prototype = {
  onClickForwardMail: PropTypes.func,
};
