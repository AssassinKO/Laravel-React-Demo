import React from 'react';
import { GoogleMap, withGoogleMap } from 'react-google-maps';
import DrawingManager from 'react-google-maps/lib/components/drawing/DrawingManager';
import { Box } from '@material-ui/core';

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */

/*
 * https://developers.google.com/maps/documentation/javascript/examples/drawing-tools
 *
 * Note: requires the Google Maps drawing API library in your script src
 *
 * Credits: thanks @idolize for the contribution!
 */

const google = window.google;

const DrawingExampleGoogleMap = withGoogleMap(() => (
  <GoogleMap defaultZoom={15} defaultCenter={new google.maps.LatLng(47.646935, -122.303763)}>
    <DrawingManager
      defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.CIRCLE,
            google.maps.drawing.OverlayType.POLYGON,
            google.maps.drawing.OverlayType.POLYLINE,
            google.maps.drawing.OverlayType.RECTANGLE,
          ],
        },
        circleOptions: {
          fillColor: '#ff0000',
          fillOpacity: 0.2,
          strokeWeight: 3,
          clickable: false,
          editable: true,
          zIndex: 1,
        },
        rectangleOptions: {
          fillColor: '#ff0000',
          fillOpacity: 0.2,
          strokeWeight: 3,
          clickable: false,
          editable: true,
          zIndex: 1,
        },
      }}
    />
  </GoogleMap>
));

const DrawingViewExample = () => {
  return (
    <DrawingExampleGoogleMap
      loadingElement={<Box height={1} />}
      containerElement={<Box height={{ xs: 300, sm: 400 }} />}
      mapElement={<Box height={1} />}
    />
  );
};

export default DrawingViewExample;
