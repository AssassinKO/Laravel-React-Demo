import React, { useContext, useEffect } from 'react';
import { Box, withWidth } from '@material-ui/core';
import useStyles from './index.style';
import { useDispatch, useSelector } from 'react-redux';
import { getConversation } from '../../../redux/actions/Chat';
import Conversation from './Conversation';
import ContentHeader from './ContentHeader';
import Typography from '@material-ui/core/Typography';
import CmtImage from '../../../@coremat/CmtImage';
import ChatFooter from './ChatFooter';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { getChatContainerHeight } from '../../../@jumbo/constants/AppConstants';
import AppContext from '../../../@jumbo/components/contextProvider/AppContextProvider/AppContext';

const ChatContainer = ({ width }) => {
  const { showFooter } = useContext(AppContext);
  const classes = useStyles({
    height: getChatContainerHeight(width, showFooter),
  });
  const dispatch = useDispatch();
  let scrollBarRef = null;

  const { currentUser, conversation } = useSelector(({ chat }) => chat);
  useEffect(() => {
    if (currentUser) dispatch(getConversation(currentUser.channelId));
  }, [currentUser, dispatch]);

  useEffect(() => {
    if (scrollBarRef) scrollBarRef._container.scrollTop = 99999;
  }, [conversation, scrollBarRef]);

  const loadPrevious = () => {};

  if (!currentUser) {
    return (
      <Box className={classes.chatBoxRoot}>
        <Box mb={2}>
          <CmtImage src={'/images/chat_bubble.png'} />
        </Box>
        <Typography className={classes.chatBoxTitle}>Welcome to Jumbo Chat App</Typography>
      </Box>
    );
  }
  return (
    <Box className={classes.inBuildAppMainContent}>
      <ContentHeader user={currentUser} />
      <PerfectScrollbar
        onScrollY={container => {
          if (container.scrollTop === 0) {
            loadPrevious();
          }
        }}
        className={classes.perfectScrollbarChatCon}
        ref={ref => {
          scrollBarRef = ref;
        }}>
        <Conversation conversation={conversation} selectedUser={currentUser} />
      </PerfectScrollbar>
      <ChatFooter currentUser={currentUser} />
    </Box>
  );
};

export default withWidth()(ChatContainer);
