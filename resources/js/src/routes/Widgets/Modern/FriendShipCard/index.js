import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtImage from '../../../../@coremat/CmtImage';
import { Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { modernWidget } from '../../../../@fake-db/widgets/modern';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  cardImgLg: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '45%',
    },
    '& img': {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
  },
  cardContent: {
    width: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      width: '55%',
    },
    [theme.breakpoints.up('xl')]: {
      padding: 40,
    },
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
  titleRoot: {
    marginBottom: 16,
    [theme.breakpoints.up('xl')]: {
      fontSize: 22,
    },
  },
  galleryImg: {
    '& img': {
      display: 'block',
      borderRadius: 4,
    },
  },
}));

const FriendshipCard = () => {
  const classes = useStyles();
  const { friendship } = modernWidget;

  return (
    <CmtCard className={classes.cardRoot}>
      <Box className={classes.cardImgLg}>
        <CmtImage alt="Media" src={friendship.mainMedia} />
      </Box>
      <Box className={classes.cardContent}>
        <Box component="p" color="text.secondary" mb={4} className={classes.textUppercase} letterSpacing={1.5} fontSize={12}>
          {friendship.title}
        </Box>
        <Typography className={classes.titleRoot} component="div" variant="h2">
          {friendship.subTitle}
        </Typography>
        <Box component="p" color="text.secondary" mb={4}>
          {friendship.description}
        </Box>
        <Box display="flex" mx={-2} mt="auto">
          {friendship.media.map((media, index) => (
            <Box key={index} px={2} mb={2} className={classes.galleryImg}>
              <CmtImage alt="img" src={media} />
            </Box>
          ))}
        </Box>
      </Box>
    </CmtCard>
  );
};

export default FriendshipCard;
