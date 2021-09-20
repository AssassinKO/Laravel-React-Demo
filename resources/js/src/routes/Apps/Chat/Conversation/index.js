import React from 'react';
import moment from 'moment';
import ReceivedMessageCell from './ReceivedMessageCell';
import SentMessageCell from './SentMessageCell';
import CmtList from '../../../../@coremat/CmtList';
import { Box } from '@material-ui/core';
import useStyles from './index.style';
import TypingMessage from './ReceivedMessageCell/TypingMessage';

const getDate = date => {
  return moment(date).format('DD MMM');
};

const Conversation = ({ conversation, selectedUser }) => {
  const generateHeaderList = () => {
    if (conversation.length === 0) {
      return [];
    }
    let conversationList = [];
    let lastDate = getDate(conversation[0].sentAt);
    conversationList = [{ id: 'header-0', header: true, title: lastDate }];

    conversation.map(message => {
      const currentDate = getDate(message.sentAt);
      if (lastDate !== currentDate) {
        conversationList = conversationList.concat({
          id: 'header-' + conversationList.length,
          header: true,
          title: currentDate,
        });
      }
      lastDate = currentDate;
      conversationList = conversationList.concat(message);

      return message;
    });
    return conversationList;
  };

  const classes = useStyles();
  return (
    <Box className={classes.chatMainContent}>
      <CmtList
        data={generateHeaderList()}
        renderRow={(conversation, index) => {
          if (conversation.header) {
            return (
              <Box key={index} className={classes.chatDateRoot}>
                <Box component="span">{conversation.title}</Box>
              </Box>
            );
          } else {
            return (
              <React.Fragment key={index}>
                {conversation.type === 'sent' ? (
                  <SentMessageCell key={index} conversation={conversation} />
                ) : (
                  <ReceivedMessageCell key={index} conversation={conversation} user={selectedUser} />
                )}
              </React.Fragment>
            );
          }
        }}
      />
      <TypingMessage currentUser={selectedUser} />
    </Box>
  );
};

export default Conversation;
