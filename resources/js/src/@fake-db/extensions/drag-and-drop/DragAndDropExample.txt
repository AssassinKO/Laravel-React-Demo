import React, { useState } from 'react';
import ContactCell from './ContactCell';
import contact from './DataList';
import { arrayMove, SortableContainer } from 'react-sortable-hoc';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *:not(:last-child)': {
      marginBottom: theme.spacing(4),
    },
  },
}));

const Contacts = SortableContainer(({ contacts }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {contacts.map((contact, index) => (
        <ContactCell key={index} index={index} contact={contact} />
      ))}
    </Box>
  );
});

const DragAndDropExample = () => {
  const [contacts, setContacts] = useState(contact);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setContacts(arrayMove(contacts, oldIndex, newIndex));
  };

  return (
    <React.Fragment>
      <Contacts contacts={contacts} onSortEnd={onSortEnd} useDragHandle={true} />
    </React.Fragment>
  );
};

export default DragAndDropExample;
