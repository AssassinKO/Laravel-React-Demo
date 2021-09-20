import React, { useState } from 'react';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtSearch from '../../../../@coremat/CmtSearch';
import CmtCard from '../../../../@coremat/CmtCard';
import { intranet } from '../../../../@fake-db';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import PerfectScrollbar from 'react-perfect-scrollbar';
import CmtGridView from '../../../../@coremat/CmtGridView';
import PictureItem from './PictureItem';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  scrollBar: {
    height: 300,
  },
}));

const UserPhotos = () => {
  const { userPhotos } = intranet;
  const [searchText, setSearchText] = useState('');

  const onSearchText = e => {
    setSearchText(e.target.value);
  };

  const getPhotos = () => {
    if (searchText) {
      return userPhotos.filter(item => item.caption.toLowerCase().includes(searchText.toLowerCase()));
    } else return userPhotos;
  };

  const photos = getPhotos();
  const classes = useStyles();

  return (
    <CmtCard>
      <CmtCardHeader title="Pictures" className="pt-4">
        <CmtSearch onlyIcon value={searchText} onChange={onSearchText} border={false} />
      </CmtCardHeader>
      <CmtCardContent>
        <PerfectScrollbar className={classes.scrollBar}>
          <CmtGridView
            data={photos}
            itemPadding={24}
            responsive={{
              xs: 1,
              sm: 3,
              md: 3,
              lg: 3,
              xl: 3,
            }}
            renderRow={(item, index) => <PictureItem key={index} item={item} />}
          />
        </PerfectScrollbar>
      </CmtCardContent>
    </CmtCard>
  );
};

export default UserPhotos;
