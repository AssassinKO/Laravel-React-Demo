import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector } from 'react-redux';
import useStyles from '../../../index.style';
import AppSelectBox from '../../../../../../@jumbo/components/Common/formElements/AppSelectBox';
import HeaderOptions from './HeaderOptions';
import PropTypes from 'prop-types';

const selectCategories = [
  { id: 12, label: 'None', slug: 'none' },
  { id: 344, label: 'All', slug: 'all' },
  { id: 11, label: 'Starred', slug: 'starred' },
  { id: 1, label: 'Frequent', slug: 'frequent' },
];

const onSelectContacts = (category, contacts) => {
  let selectContacts = [];
  switch (category) {
    case 'all': {
      selectContacts = contacts;
      break;
    }
    case 'starred': {
      selectContacts = contacts.filter(contact => contact.starred);
      break;
    }
    case 'frequent': {
      selectContacts = contacts.filter(contact => contact.frequent);
      break;
    }
    default:
  }

  return selectContacts.map(contact => contact.id);
};

const CheckedListHeader = ({ checkedContacts, handleHeaderCheckBox, updateCheckedContacts }) => {
  const [category, setCategory] = useState(selectCategories[0].slug);
  const classes = useStyles();

  const { contactsList, labelsList } = useSelector(({ contactApp }) => contactApp);

  const handleSelectChange = e => {
    setCategory(e.target.value);
    const selectContacts = onSelectContacts(e.target.value, contactsList);
    updateCheckedContacts(selectContacts);
  };

  return (
    <Box className={classes.appContentHeader}>
      <Checkbox
        color="primary"
        indeterminate={checkedContacts.length > 0 && checkedContacts.length < contactsList.length}
        checked={checkedContacts.length > 0 && checkedContacts.length === contactsList.length}
        onChange={e => handleHeaderCheckBox(e.target.checked, contactsList)}
      />

      <AppSelectBox
        id="contact-app"
        data={selectCategories}
        value={category}
        fullWidth={false}
        onChange={handleSelectChange}
        className={classes.selectBoxRoot}
        renderRow={(item, index) => (
          <MenuItem key={index} value={item.slug}>
            {item.label}
          </MenuItem>
        )}
      />

      <Box ml="auto" display="flex" alignItems="center">
        <HeaderOptions
          checkedContacts={checkedContacts}
          contactsList={contactsList}
          labelsList={labelsList}
          updateCheckedContacts={updateCheckedContacts}
        />
      </Box>
    </Box>
  );
};

export default CheckedListHeader;

CheckedListHeader.prototype = {
  checkedContacts: PropTypes.array.isRequired,
  handleHeaderCheckBox: PropTypes.func,
  updateCheckedContacts: PropTypes.func,
};
