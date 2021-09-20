import React from 'react';
import Box from '@material-ui/core/Box';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CmtMediaObject from '../../../../@coremat/CmtMediaObject';
import CmtImage from '../../../../@coremat/CmtImage';

const useStyles = makeStyles(theme => ({
  root: {
    '@media screen and (max-width: 499px)': {
      flexDirection: 'column',
      '& .Cmt-media-image': {
        alignSelf: 'stretch',
      },
    },
  },
  titleRoot: {
    letterSpacing: 0.15,
    fontSize: 16,
    marginBottom: 12,
    fontWeight: theme.typography.fontWeightRegular,
  },
  avatarProps: {
    '@media screen and (max-width: 499px)': {
      marginRight: 0,
      marginBottom: 16,
      width: '100%',
    },
  },
  badgeRoot: {
    color: theme.palette.text.disabled,
    background: alpha(theme.palette.common.dark, 0.1),
    borderRadius: 4,
    fontSize: 12,
    padding: '2px 10px',
    marginBottom: 16,
    display: 'inline-block',
  },
}));

const ListItem = ({ item }) => {
  const classes = useStyles();
  const getTitle = () => (
    <React.Fragment>
      <Box className={classes.badgeRoot} component="span">
        {item.category}
      </Box>
      <Typography component="div" variant="h4" mb={1} className={classes.titleRoot}>
        {item.title}
      </Typography>
    </React.Fragment>
  );

  const getSubTitle = () => (
    <Box display="flex" flexWrap="wrap">
      <Box mr={1} color="text.disabled">
        {item.date} |
      </Box>
      <Box mr={1} component="p">
        {item.views}
      </Box>
      <Box component="span" color="text.disabled">
        views
      </Box>
    </Box>
  );

  return (
    <CmtMediaObject
      className={classes.root}
      avatar={<CmtImage className={classes.avatarProps} src={item.thumb} alt={item.category} />}
      avatarPos="center"
      title={getTitle()}
      subTitle={getSubTitle()}
    />
  );
};

export default ListItem;
