import React from 'react';
import CmtList from '../../../../../@coremat/CmtList';
import PropertyItem from './PropertyItem';
import { alpha, makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListEmptyResult from '../../../../../@coremat/CmtList/ListEmptyResult';

const useStyles = makeStyles(theme => ({
  newsListRoot: {
    padding: 24,
    transition: 'all .2s',
    '&:not(:first-child)': {
      borderTop: `solid 1px ${theme.palette.borderColor.main}`,
    },
    '& .fav-btn': {
      opacity: 0,
      visibility: 'hidden',
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      '& .fav-btn': {
        opacity: 1,
        visibility: 'visible',
      },
    },
  },
}));

const PropertiesDataList = ({ data, onPropertyClick }) => {
  const classes = useStyles();
  return (
    <CmtList
      data={data}
      renderRow={(item, index) => (
        <ListItem component="div" className={classes.newsListRoot} key={index}>
          <PropertyItem item={item} onPropertyClick={onPropertyClick} />
        </ListItem>
      )}
      ListEmptyComponent={<ListEmptyResult title="No Result" content="No result found with your search" />}
    />
  );
};

export default PropertiesDataList;
