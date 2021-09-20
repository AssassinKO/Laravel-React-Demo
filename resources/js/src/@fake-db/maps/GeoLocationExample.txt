import React, { useEffect, useState } from 'react';
import { Circle, GoogleMap, InfoWindow, withGoogleMap } from 'react-google-maps';
import canUseDOM from 'can-use-dom';
import raf from 'raf';
import { Box } from '@material-ui/core';

const geoLocationExample =
  canUseDOM && navigator.geolocation
    ? navigator.geolocation
    : {
        getCurrentPosition(success, failure) {
          failure(`Your browser doesn't support geolocation.`);
        },
      };

const GeolocationExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap defaultZoom={10} center={props.center}>
    {props.center && (
      <InfoWindow position={props.center}>
        <Box>{props.content}</Box>
      </InfoWindow>
    )}
    {props.center && (
      <Circle
        center={props.center}
        radius={props.radius}
        options={{
          fillColor: 'red',
          fillOpacity: 0.2,
          strokeColor: 'red',
          strokeOpacity: 1,
          strokeWeight: 1,
        }}
      />
    )}
  </GoogleMap>
));

/*
 * https://developers.google.com/maps/documentation/javascript/examples/map-geolocation
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const GeoLocationExample = () => {
  const [center, setCenter] = useState(null);
  const [content, setContent] = useState(null);
  const [radius, setRadius] = useState(6000);

  let isUnmounted = false;

  useEffect(() => {
    const tick = () => {
      if (isUnmounted) {
        return;
      }
      setRadius(Math.max(radius - 20, 0));

      if (radius > 200) {
        raf(tick);
      }
    };
    geoLocationExample.getCurrentPosition(
      position => {
        if (isUnmounted) {
          return;
        }
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setContent(`Location found using HTML5.`);
        raf(tick);
      },
      reason => {
        if (isUnmounted) {
          return;
        }

        setCenter({
          lat: 60,
          lng: 105,
        });
        setContent(`Error: The Geolocation service failed (${reason}).`);
      },
    );

    return () => {
      isUnmounted = true;
    };
  }, []);

  return (
    <GeolocationExampleGoogleMap
      loadingElement={<Box height={1} />}
      containerElement={<Box height={{ xs: 300, sm: 400 }} />}
      mapElement={<Box height={1} />}
      center={center}
      content={content}
      radius={radius}
    />
  );
};

export default GeoLocationExample;
