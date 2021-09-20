import React from 'react';
import { GoogleMap, withGoogleMap } from 'react-google-maps';
import { Box } from '@material-ui/core';
import CmtCard from '../../../../@coremat/CmtCard';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  cardRoot: {
    height: '100%',
    minHeight: 350,
  },
}));

/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple 20.7505652,73.730039
 */

const GoogleMapBox = withGoogleMap(() => <GoogleMap defaultZoom={4} defaultCenter={{ lat: 20.75056525, lng: 73.730039 }} />);

const MapWidget = () => {
  const classes = useStyles();
  return (
    <CmtCard className={classes.cardRoot}>
      <Box p={2} height={1}>
        <GoogleMapBox
          loadingElement={<Box height={1} />}
          containerElement={<Box height={1} />}
          mapElement={<Box height={1} />}
        />
      </Box>
    </CmtCard>
  );
};

export default MapWidget;
