import React from 'react';
import { GoogleMap, TrafficLayer, withGoogleMap } from 'react-google-maps';
import { Box } from '@material-ui/core';

const TrafficLayerExampleGoogleMap = withGoogleMap(() => (
  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 47.646935, lng: -122.303763 }}>
    <TrafficLayer autoUpdate />
  </GoogleMap>
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const TrafficLayerExample = () => {
  return (
    <TrafficLayerExampleGoogleMap
      loadingElement={<Box height={1} />}
      containerElement={<Box height={{ xs: 300, sm: 400 }} />}
      mapElement={<Box height={1} />}
    />
  );
};

export default TrafficLayerExample;
