import React from 'react';
import { useSelector } from 'react-redux';
import CmtGridView from '../../../../../@coremat/CmtGridView';
import ContactCell from './ContactCell';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

const ListGridView = ({ onShowContactDetail, onClickEditContact }) => {
  const { contactsList } = useSelector(({ contactApp }) => contactApp);

  return (
    <Box px={6} py={{ xs: 8, xl: 10 }}>
      <CmtGridView
        border={true}
        itemPadding={18}
        responsive={{
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
        }}
        data={contactsList}
        renderRow={(item, index) => (
          <ContactCell
            key={index}
            contact={item}
            onShowContactDetail={onShowContactDetail}
            onClickEditContact={onClickEditContact}
          />
        )}
      />
    </Box>
  );
};

export default ListGridView;

ListGridView.prototype = {
  onShowContactDetail: PropTypes.func,
  onClickEditContact: PropTypes.func,
};
