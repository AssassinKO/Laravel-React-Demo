import React, { useContext } from 'react';
import CmtList from '../../../../@coremat/CmtList';
import ContactCell from './ContactCell';
import { Box, withWidth } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { getChatSidebarHeight } from '../../../../@jumbo/constants/AppConstants';
import AppContext from '../../../../@jumbo/components/contextProvider/AppContextProvider/AppContext';
import NoRecordFound from './NoRecordFound';

const useStyles = makeStyles(theme => ({
  chatCellHeader: {
    backgroundColor: alpha(theme.palette.common.dark, 0.04),
    padding: 16,
    fontSize: 10,
    textTransform: 'uppercase',
    color: theme.palette.text.secondary,
    letterSpacing: 1.5,
    borderBottom: `1px solid ${alpha(theme.palette.common.dark, 0.04)}`,
  },
  perfectScrollbarRoot: {
    height: props => `calc(100vh - ${props.height}px)`,
  },
}));

const ContactList = ({ contacts, currentUser, width, onContactSelect }) => {
  const { showFooter } = useContext(AppContext);
  const classes = useStyles({ height: getChatSidebarHeight(width, showFooter) });
  const generateHeaderList = () => {
    if (contacts.length === 0) {
      return [];
    }
    let contactList = [];
    let isFavourite = true;
    contactList = [{ id: 'header-0', header: true, title: 'Favourite' }];

    contacts.map(contact => {
      if (isFavourite !== contact.favourite) {
        contactList = contactList.concat({
          id: 'header-' + contactList.length,
          header: true,
          title: 'Contacts',
        });
        isFavourite = false;
      }
      contactList = contactList.concat(contact);

      return contact;
    });
    return contactList;
  };

  return contacts.length > 0 ? (
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
            return <ContactCell key={data.id} data={data} currentUser={currentUser} onContactSelect={onContactSelect} />;
          }
        }}
      />
    </PerfectScrollbar>
  ) : (
    <NoRecordFound />
  );
};

export default withWidth()(ContactList);
