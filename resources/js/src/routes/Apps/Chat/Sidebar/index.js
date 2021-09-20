import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import useStyles from '../index.style';
import { useDispatch, useSelector } from 'react-redux';
import SidebarHeader from './SidebarHeader';
import { getChatUsers, getContactUsers, onUserSelect } from '../../../../redux/actions/Chat';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ContactList from './ContactList';
import ChatUserList from './ChatUserList';

const Sidebar = () => {
  const { users, currentUser, contacts, isSideBarCollapsed } = useSelector(({ chat }) => chat);
  const [value, setValue] = useState(1);
  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();

  const onContactSelect = contact => {
    dispatch(onUserSelect(contact));
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (value === 1) {
      dispatch(getChatUsers({ search: searchText }));
    } else {
      dispatch(getContactUsers({ search: searchText }));
    }
  }, [dispatch, searchText, value]);

  const classes = useStyles({ isCollapsed: isSideBarCollapsed });
  return (
    <Box className={classes.inBuildAppSidebar}>
      <SidebarHeader searchText={searchText} setSearchText={setSearchText} />
      <Tabs
        className={classes.tabContainer}
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}>
        <Tab className={classes.tabRoot} label="Chat" value={1} />
        <Tab className={classes.tabRoot} label="Contact" value={2} />
      </Tabs>
      {value === 1 ? (
        <ChatUserList
          currentUser={currentUser}
          users={users.sort(function(x, y) {
            return y.favourite - x.favourite;
          })}
          onContactSelect={onContactSelect}
        />
      ) : (
        <ContactList
          currentUser={currentUser}
          contacts={contacts.sort(function(x, y) {
            return y.favourite - x.favourite;
          })}
          onContactSelect={onContactSelect}
        />
      )}
    </Box>
  );
};

export default Sidebar;
