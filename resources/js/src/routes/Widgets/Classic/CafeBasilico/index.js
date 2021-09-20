import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardMedia from '../../../../@coremat/CmtCard/CmtCardMedia';
import { classicWidget } from '../../../../@fake-db';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import { Box, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Collapse from '@material-ui/core/Collapse';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  scrollbarRoot: {
    height: 132,
  },
  titleRoot: {
    marginBottom: 16,
  },
}));

const CafeBasilico = () => {
  const classes = useStyles();
  const { simpleCard } = classicWidget;
  const [showAvailability, setAvailabilityVisibility] = useState(false);
  const [reserveTime, setReserveTime] = useState('');

  return (
    <CmtCard>
      <CmtCardMedia title={simpleCard.title} image={simpleCard.media} />
      <CmtCardContent>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <Typography component="div" variant="h1" className={classes.titleRoot}>
            {simpleCard.title}
          </Typography>
          <Box display="flex" alignItems="center" mb={3}>
            <Box>
              <Rating name="simple-controlled" value={simpleCard.rating} precision={0.5} />
            </Box>
            <Box fontSize={12} color="text.disabled">
              {simpleCard.rating} ({simpleCard.reviews})
            </Box>
          </Box>
          <Box fontSize={16} mb={2}>
            {simpleCard.subTitle}
          </Box>
          <Box display="flex" className="pointer" mb={2} onClick={() => setAvailabilityVisibility(!showAvailability)}>
            Tonight’s Availability
            {showAvailability ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Box>
          <Collapse in={showAvailability}>
            <Box display="flex" mb={2} alignItems="center">
              <Box display="flex">
                <AccessTimeIcon fontSize="small" />
                <Box ml={1}>Time</Box>
              </Box>
              {simpleCard.availabilities.map((option, index) => (
                <Box key={index} ml={2}>
                  <Chip
                    label={option}
                    color={reserveTime === option ? 'primary' : 'default'}
                    onClick={() => setReserveTime(option)}
                  />
                </Box>
              ))}
            </Box>
            <Box>
              <Button color="primary">Reserve</Button>
            </Box>
          </Collapse>
        </PerfectScrollbar>
      </CmtCardContent>
    </CmtCard>
  );
};

export default CafeBasilico;
