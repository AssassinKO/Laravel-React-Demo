import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  cardHeader: {
    paddingBottom: 10,
    color: theme.palette.text.disabled,
  },
}));

const StoryOfTheDay = () => {
  const classes = useStyles();
  return (
    <CmtCard>
      <CmtCardHeader
        className={clsx(classes.cardHeader, 'pt-4')}
        title="Story of the day"
        titleProps={{
          style: { fontSize: 10, textTransform: 'uppercase' },
        }}>
        <Box display="flex" alignItems="center">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <IconButton size="small">
            <ShareIcon />
          </IconButton>
        </Box>
      </CmtCardHeader>
      <CmtCardContent>
        <Box fontSize={22} color="text.primary" mb={2}>
          How could people together can help bringing peace in the world
        </Box>
        <Box fontSize={12} color="text.disabled" mb={4}>
          25th August 2020
        </Box>
        <Box mb={3} fontSize={{ xs: 14, sm: 16 }} color="text.secondary">
          <Box component="p" mb={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </Box>
          <Box component="p">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas similique sunt in culpa qui officia animi.
          </Box>
        </Box>
        <Box textAlign="right">
          <Button color="primary" href="#learn-more">
            Learn More
          </Button>
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

export default StoryOfTheDay;
