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

const LogoCard2 = ({ data }) => {
  const classes = useStyles();
  return (
    <CmtCard className={classes.cardRoot} backgroundColor="#0795F4">
      <Box
        px={4}
        pb={{ xs: 2, xl: 4 }}
        pt={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center">
        <Box component="p" color="white" textAlign="right" width={1} mb={2} fontSize={12}>
          {data.distance}
        </Box>
        <Box>
          <CmtImage alt="logo" src={data.image} />
        </Box>
      </Box>
    </CmtCard>
  );
};

export default LogoCard2;
