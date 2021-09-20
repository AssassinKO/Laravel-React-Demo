import React from 'react';
import { GoogleMap, KmlLayer, withGoogleMap } from 'react-google-maps';
import { Box } from '@material-ui/core';

const KmlLayerExampleGoogleMap = withGoogleMap(() => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 41.876, lng: -87.624 }}>
    <KmlLayer url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml" options={{ preserveViewport: true }} />
  </GoogleMap>
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const MapKmLayerExample = () => {
  return (
    <KmlLayerExampleGoogleMap
      loadingElement={<Box height={1} />}
      containerElement={<Box height={{ xs: 300, sm: 400 }} />}
      mapElement={<Box height={1} />}
    />
  );
};

export default MapKmLayerExample;
