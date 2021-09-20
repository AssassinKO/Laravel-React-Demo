import React from 'react';
import CmtList from '../../../../@coremat/CmtList';
import ChatUserCell from './ChatUserCell';
import { Box, withWidth } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { getChatSidebarHeight } from '../../../../@jumbo/constants/AppConstants';
import NoRecordFound from './NoRecordFound';

const useStyles = makeStyles(theme => ({
  chatCellHeader: {
    backgroundColor: alpha(theme.palette.common.dark, 0.04),
    borderBottom: `1px solid ${alpha(theme.palette.common.dark, 0.04)}`,
    padding: 16,
    fontSize: 10,
    textTransform: 'uppercase',
    color: theme.palette.text.secondary,
    letterSpacing: 1.5,
  },
  perfectScrollbarRoot: {
    height: props => `calc(100vh - ${props.height}px)`,
  },
}));

const ChatUserList = ({ users, width, currentUser, onContactSelect }) => {
  const classes = useStyles({ height: getChatSidebarHeight(width) });
  const generateHeaderList = () => {
    if (users.length === 0) {
      return [];
    }
    let userLsit = [];
    let isFavourite = true;
    userLsit = [{ id: 'header-0', header: true, title: 'Favourite' }];

    users.map(user => {
      if (isFavourite !== user.favourite) {
        userLsit = userLsit.concat({
          id: 'header-' + userLsit.length,
          header: true,
          title: 'Contacts',
        });
        isFavourite = false;
      }
      userLsit = userLsit.concat(user);

      return user;
    });
    return userLsit;
  };

  return users.length > 0 ? (
    <PerfectScrollbar className={classes.perfectScrollbarRoot}>
      <CmtList
        data={generateHeaderList()}
        renderRow={data => {
          if (data.header) {
            return (
              <Box key={data.id} className={classes.chatCellHeader}>
                {data.title}
              </Box>
            );
          } else {
            return <ChatUserCell key={data.id} currentUser={currentUser} data={data} onContactSelect={onContactSelect} />;
          }
        }}
      />
    </PerfectScrollbar>
  ) : (
    <NoRecordFound />
  );
};

export default withWidth()(ChatUserList);
