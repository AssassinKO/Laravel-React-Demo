import React, { useContext } from 'react';

import Button from '@material-ui/core/Button';
import { Box, makeStyles } from '@material-ui/core';

import CmtCardHeader from '../../../../../@coremat/CmtCard/CmtCardHeader';
import CmtAdvCardContent from '../../../../../@coremat/CmtAdvCard/CmtAdvCardContent';
import CmtCard from '../../../../../@coremat/CmtCard';
import AppSlider from '../../../Common/formElements/AppSlider';
import AppContext from '../../../contextProvider/AppContextProvider/AppContext';

const useStyles = makeStyles(() => ({
  root: {
    width: 250,
  },
  cardRoot: {
    '& .Cmt-header-root': {
      padding: '4px 16px',
    },
    '& .Cmt-card-content': {
      padding: 16,
    },
  },
}));

const CardRadius = () => {
  const classes = useStyles();
  const { cardRadius, setCardRadius } = useContext(AppContext);

  const handleChange = (event, newValue) => {
    setCardRadius(newValue);
  };

  const resetRadius = () => {
    setCardRadius(4);
  };

  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title="Card Radius">
        <Button onClick={resetRadius}>RESET</Button>
      </CmtCardHeader>
      <CmtAdvCardContent>
        <Box display="flex" alignItems="center" justifyContent="center" mb={6}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            border={1}
            borderColor="grey.300"
            borderRadius={cardRadius}
            bgcolor="background.paper"
            p={2}
            height={63}
            width={154}>
            Preview
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <div className="mr-6">4px</div>
          <AppSlider
            valueLabelDisplay="auto"
            aria-label="card radius"
            defaultValue={4}
            max={16}
            min={4}
            onChange={handleChange}
            value={cardRadius}
          />
          <div className="ml-6">16px</div>
        </Box>
      </CmtAdvCardContent>
    </CmtCard>
  );
};

export default CardRadius;
