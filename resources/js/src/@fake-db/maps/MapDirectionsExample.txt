import React, { useEffect, useState } from 'react';
import { DirectionsRenderer, GoogleMap, withGoogleMap } from 'react-google-maps';
import { Box } from '@material-ui/core';

const google = window.google;

const DirectionsExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap defaultZoom={7} defaultCenter={props.center}>
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const MapDirectionsExample = () => {
  const origin = new google.maps.LatLng(41.85073, -87.65126);
  const destination = new google.maps.LatLng(41.85258, -87.65141);
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      },
    );
  }, [destination, origin]);

  return (
    <DirectionsExampleGoogleMap
      loadingElement={<Box height={1} />}
      containerElement={<Box height={{ xs: 300, sm: 400 }} />}
      mapElement={<Box height={1} />}
      center={origin}
      directions={directions}
    />
  );
};

export default MapDirectionsExample;
