import React from 'react';
import Box from '@material-ui/core/Box';
import CmtMediaObject from '../../../../../@coremat/CmtMediaObject';
import LabelIcon from '@material-ui/icons/Label';
import CmtList from '../../../../../@coremat/CmtList';
import { Checkbox, Divider } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import ListItem from '@material-ui/core/ListItem';
import CmtCardMedia from '../../../../../@coremat/CmtCard/CmtCardMedia';

const useStyles = makeStyles(theme => ({
  imageThumbRoot: {
    marginRight: 24,
    borderRadius: theme.shape.borderRadius,
    height: 150,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 200,
    },
  },
  titleRoot: {
    letterSpacing: 0.15,
    fontWeight: theme.typography.fontWeightRegular,
    marginBottom: 5,
  },
  tagListRoot: {
    color: theme.palette.text.disabled,
    padding: '0 3px 0 0',
    letterSpacing: 0.4,
    fontSize: 12,
    width: 'auto',
  },
  blockRoot: {
    display: 'block',
    color: theme.palette.text.disabled,
  },
  favBtn: {
    padding: 0,
    marginTop: -3,
  },
  contentRoot: {
    color: theme.palette.text.secondary,
  },
  badge: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    zIndex: 1,
    fontSize: 12,
    padding: '4px 16px',
    letterSpacing: 0.4,
    borderRadius: 16,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

const NewsItem = ({ item, toggleFavorite }) => {
  const classes = useStyles();
  const getSubTitle = () => (
    <Box display="flex" flexWrap="wrap" alignItems="center" color="text.disabled" fontSize={12} mb={3}>
      <Box component="span" mr={2} color="primary.main">
        {item.author.name}
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box mx={2}>{item.publishDate}</Box>
      <Divider orientation="vertical" flexItem />
      <Box ml={2}>
        <Box component="span" color="text.primary" mr={2}>
          {item.views}
        </Box>
        <Box component="span">Views</Box>
      </Box>
    </Box>
  );

  const onChangeFavoriteStatus = e => {
    e.stopPropagation();
    toggleFavorite(item);
  };

  return (
    <CmtMediaObject
      avatarPos="center"
      avatar={
        <Box position="relative">
          <CmtCardMedia className={classes.imageThumbRoot} image={item.image} title={item.title} />
          {item.isTrading && <Box className={classes.badge}>Trading</Box>}
        </Box>
      }
      title={item.title}
      titleProps={{
        variant: 'h4',
        component: 'div',
        className: classes.titleRoot,
      }}
      content={item.description}
      contentProps={{
        component: 'p',
        style: {
          fontSize: 14,
          letterSpacing: 0.25,
        },
        className: classes.contentRoot,
      }}
      subTitle={getSubTitle()}
      actionsComponent={
        <Tooltip title="Favorite">
          <IconButton className={clsx(classes.favBtn, 'fav-btn')} onClick={onChangeFavoriteStatus}>
            <Checkbox
              checked={item.favorite}
              icon={<FavoriteBorderIcon color="primary" />}
              checkedIcon={<FavoriteOutlinedIcon color="primary" />}
            />
          </IconButton>
        </Tooltip>
      }>
      <Box display="flex" alignItems="center">
        <Box mr={2}>
          <LabelIcon fontSize="small" className={classes.blockRoot} />
        </Box>
        <CmtList
          style={{ display: 'flex', flexWrap: 'wrap' }}
          data={item.tags}
          renderRow={(tag, index) => {
            return (
              <ListItem key={index} component="div" className={classes.tagListRoot}>
                <Box>
                  {tag}
                  {item.tags.length > index + 1 ? ',' : ''}
                </Box>
              </ListItem>
            );
          }}
        />
      </Box>
    </CmtMediaObject>
  );
};

export default NewsItem;
