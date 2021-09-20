import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import ReplyIcon from '@material-ui/icons/Reply';
import { linkify } from '../../../../@jumbo/utils/commonHelper';

const MailReply = ({ classes, reply, getMailDate, onShowAttachments, onClickForwardMail }) => {
  return (
    <Box className={classes.messageItem}>
      <Box className={classes.messageItemInner}>
        <Box className={classes.dateRoot}>{getMailDate(reply.date)}</Box>
        <Box className={classes.replyRoot}>
          <IconButton onClick={() => onClickForwardMail(reply.message)}>
            <ReplyIcon />
          </IconButton>
        </Box>
        {reply.message && (
          <Box
            mb={reply.attachments.length > 0 ? 8 : 0}
            component="p"
            dangerouslySetInnerHTML={{
              __html: linkify(reply.message.replace(/(?:\r\n|\r|\n)/g, '<br />')),
            }}
          />
        )}
        {reply.attachments.length > 0 && onShowAttachments(reply.attachments)}
      </Box>
    </Box>
  );
};

export default MailReply;

MailReply.prototype = {
  replyThread: PropTypes.array.isRequired,
  getMailDate: PropTypes.func,
  onShowAttachments: PropTypes.func,
  onClickForwardMail: PropTypes.func,
};
