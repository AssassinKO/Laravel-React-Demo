import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { Close, Label, Share } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import CmtList from '../../../../../@coremat/CmtList';
import ListItem from '@material-ui/core/ListItem';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import { Checkbox, Divider } from '@material-ui/core';
import CmtCard from '../../../../../@coremat/CmtCard';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CmtCardMedia from '../../../../../@coremat/CmtCard/CmtCardMedia';

const useStyles = makeStyles(theme => ({
  titleRoot: {
    fontSize: 16,
    marginLeft: 12,
    fontWeight: theme.typography.fontWeightBold,
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
  descriptionBlock: {
    '& p': {
      marginBottom: 16,
      fontSize: 14,
      color: theme.palette.text.secondary,
    },
  },
  linkBtn: {
    cursor: 'pointer',
    textTransform: 'uppercase',
  },
  imageRoot: {
    width: '100%',
    height: 250,
  },
  badge: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    zIndex: 1,
    fontSize: 12,
    padding: '4px 16px',
    letterSpacing: 0.4,
    borderRadius: 16,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

const NewsDetail = ({ selectedNews, onBackClick, toggleFavorite }) => {
  const classes = useStyles();
  const [favoriteStatus, setFavoriteStatus] = useState(selectedNews.favorite);

  const onFavoriteClick = () => {
    setFavoriteStatus(!favoriteStatus);
    toggleFavorite(selectedNews);
  };

  const getSubTitle = () => (
    <Box display="flex" flexWrap="wrap" alignItems="center" color="text.disabled" fontSize={12} mb={3}>
      <Box component="span" mr={2} color="primary.main">
        {selectedNews.author.name}
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box mx={2}>{selectedNews.publishDate}</Box>
      <Divider orientation="vertical" flexItem />
      <Box ml={2}>
        <Box component="span" color="text.primary" mr={2}>
          {selectedNews.views}
        </Box>
        <Box component="span">Views</Box>
      </Box>
    </Box>
  );

  return (
    <CmtCard>
      <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems={{ sm: 'center' }} px={6} py={3}>
        <Box display="flex" alignItems="center" mb={{ xs: 2, sm: 0 }}>
          <Tooltip title="close">
            <Box ml={-3} clone>
              <IconButton onClick={onBackClick}>
                <Close />
              </IconButton>
            </Box>
          </Tooltip>
          <Typography component="div" variant="h4" className={classes.titleRoot}>
            {selectedNews.title}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" ml={{ sm: 'auto' }}>
          <Box>
            <Tooltip title="share">
              <IconButton>
                <Share />
              </IconButton>
            </Tooltip>
          </Box>
          <Box ml={1}>
            <Tooltip title="Favorite">
              <Checkbox
                color="primary"
                checked={favoriteStatus}
                onChange={onFavoriteClick}
                icon={<FavoriteBorderIcon />}
                checkedIcon={<FavoriteOutlinedIcon />}
              />
            </Tooltip>
          </Box>
        </Box>
      </Box>
      <Box position="relative">
        <CmtCardMedia className={classes.imageRoot} image={selectedNews.image} title={selectedNews.title} />
        {selectedNews.isTrading && <Box className={classes.badge}>Trading</Box>}
      </Box>
      <Box p={6}>
        {getSubTitle()}
        <Box className={classes.descriptionBlock} dangerouslySetInnerHTML={{ __html: selectedNews.fullDescription }} />
        <Box display="flex" alignItems="center">
          <Box mr={2}>
            <Label className={classes.blockRoot} />
          </Box>
          <CmtList
            style={{ display: 'flex', flexWrap: 'wrap' }}
            data={selectedNews.tags}
            renderRow={(tag, index) => {
              return (
                <ListItem key={index} component="div" className={classes.tagListRoot}>
                  <Box>
                    {tag}
                    {selectedNews.tags.length > index + 1 ? ',' : ''}
                  </Box>
                </ListItem>
              );
            }}
          />
        </Box>
      </Box>
    </CmtCard>
  );
};

export default NewsDetail;
