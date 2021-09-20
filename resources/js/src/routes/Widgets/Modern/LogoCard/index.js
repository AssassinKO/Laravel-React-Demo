import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtImage from '../../../../@coremat/CmtImage';
import { Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  cardRoot: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const LogoCard = ({ data }) => {
  const classes = useStyles();
  return (
    <CmtCard className={classes.cardRoot}>
      <Box p={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Box mb={1}>
          <CmtImage alt="logo" src={data.logo} />
        </Box>
        <Box color="text.secondary" fontSize={12}>
          {data.name}
        </Box>
      </Box>
    </CmtCard>
  );
};

export default LogoCard;
