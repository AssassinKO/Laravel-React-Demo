import React from 'react';
import { GoogleMap, withGoogleMap } from 'react-google-maps';
import { Box } from '@material-ui/core';

/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple 20.7505652,73.730039
 */

const SimpleMapExampleGoogleMap = withGoogleMap(() => (
  <GoogleMap defaultZoom={3} defaultCenter={{ lat: 20.75056525, lng: 73.730039 }} />
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const SimpleMapExample = () => {
  return (
    <SimpleMapExampleGoogleMap
      loadingElement={<Box height={1} />}
      containerElement={<Box height={{ xs: 300, sm: 400 }} />}
      mapElement={<Box height={1} />}
    />
  );
};

export default SimpleMapExample;
