import React from 'react';
import CmtList from '../../../../@coremat/CmtList';
import Box from '@material-ui/core/Box';
import AppCheckbox from '../../../../@jumbo/components/Common/formElements/AppCheckBox';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  filterItem: {
    padding: '5px 24px',
    color: theme.palette.common.white,
    '& .MuiCheckbox-root': {
      color: theme.palette.common.white,
      marginRight: 10,
    },
  },
}));

const filterList = [
  { title: 'Invitations', slug: 'INVITATION' },
  { title: 'Messages', slug: 'MESSAGES' },
  { title: 'Feeds', slug: 'FEEDS' },
];

const FilterForm = ({ setListsToShow, listsToShow }) => {
  const classes = useStyles();

  const updatedFilterList = item => event => {
    if (event.target.checked) {
      setListsToShow([...listsToShow, item.slug]);
    } else {
      setListsToShow(listsToShow.filter(slug => slug !== item.slug));
    }
  };

  return (
    <CmtList
      data={filterList}
      renderRow={(item, index) => (
        <Box key={index} className={classes.filterItem}>
          <AppCheckbox label={item.title} checked={listsToShow.includes(item.slug)} onChange={updatedFilterList(item)} />
        </Box>
      )}
    />
  );
};

export default FilterForm;
