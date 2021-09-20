import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterType, updateMailsFolder, updateMailsLabel } from '../../../../../redux/actions/MailApp';
import MoreOptions from './MoreOptions';
import HeaderOptions from './HeaderOptions';
import useStyles from '../../index.style';
import AppSelectBox from '../../../../../@jumbo/components/Common/formElements/AppSelectBox';
import TablePagination from '@material-ui/core/TablePagination';
import PropTypes from 'prop-types';

const selectCategories = [
  { id: 12, label: 'None', slug: 'none' },
  { id: 11, label: 'All', slug: 'all' },
  { id: 1, label: 'Important', slug: 'important' },
  { id: 2, label: 'Read', slug: 'read' },
  { id: 3, label: 'Unread', slug: 'unread' },
  { id: 4, label: 'Favorite', slug: 'favorite' },
];

const onSelectMails = (category, mails) => {
  let selectedMails = [];
  switch (category) {
    case 'all': {
      selectedMails = mails;
      break;
    }
    case 'important': {
      selectedMails = mails.filter(mail => mail.important);
      break;
    }
    case 'read': {
      selectedMails = mails.filter(mail => mail.read);
      break;
    }
    case 'unread': {
      selectedMails = mails.filter(mail => !mail.read);
      break;
    }
    case 'favorite': {
      selectedMails = mails.filter(mail => mail.favorite);
      break;
    }
    default:
  }
  return selectedMails.map(mail => mail.id);
};

const ListHeader = ({ checkedMails, setCheckedMails }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(selectCategories[0].slug);
  const classes = useStyles();

  const { mailsList, labelsList, filterType, totalMailCount } = useSelector(({ mailApp }) => mailApp);

  useEffect(() => {
    const selectedMails = onSelectMails(category, mailsList);
    setCheckedMails(selectedMails);
  }, [category, dispatch, setCheckedMails, mailsList]);

  const handleCheckBox = event => {
    if (event.target.checked) {
      const mailIds = mailsList.map(mail => mail.id);
      setCheckedMails(mailIds);
    } else {
      setCheckedMails([]);
      setCategory('none');
    }
  };

  const onChangeMailFolder = folder => {
    dispatch(updateMailsFolder(checkedMails, folder));
    setCheckedMails([]);
  };

  const onSelectLabel = label => {
    dispatch(updateMailsLabel(checkedMails, label));
    setCheckedMails([]);
  };

  const onPageChange = (event, value) => {
    dispatch(
      setFilterType({
        ...filterType,
        page: value,
      }),
    );
  };

  return (
    <Box className={classes.appContentHeader}>
      <Checkbox
        color="primary"
        indeterminate={checkedMails.length > 0 && checkedMails.length < mailsList.length}
        checked={checkedMails.length > 0 && checkedMails.length === mailsList.length}
        onChange={handleCheckBox}
      />

      <AppSelectBox
        id="mail-app"
        data={selectCategories}
        value={category}
        fullWidth={false}
        onChange={e => setCategory(e.target.value)}
        className={classes.selectBoxRoot}
        renderRow={(item, index) => (
          <MenuItem key={index} value={item.slug}>
            {item.label}
          </MenuItem>
        )}
      />

      {checkedMails.length > 0 ? (
        <Box ml="auto" display="flex" alignItems="center">
          <HeaderOptions onChangeMailFolder={onChangeMailFolder} onSelectLabel={onSelectLabel} labelsList={labelsList} />
          <MoreOptions checkedMails={checkedMails} setCheckedMails={setCheckedMails} mailsList={mailsList} />
        </Box>
      ) : (
        <Box ml="auto" display="flex" alignItems="center">
          {totalMailCount ? (
            <TablePagination
              component="div"
              count={totalMailCount}
              rowsPerPage={10}
              page={filterType.page}
              backIconButtonProps={{ 'aria-label': 'Previous Page' }}
              nextIconButtonProps={{ 'aria-label': 'Next Page' }}
              onChangePage={onPageChange}
              rowsPerPageOptions={[]}
            />
          ) : null}
        </Box>
      )}
    </Box>
  );
};

export default ListHeader;

ListHeader.prototype = {
  checkedMails: PropTypes.array.isRequired,
  setCheckedMails: PropTypes.func,
};
