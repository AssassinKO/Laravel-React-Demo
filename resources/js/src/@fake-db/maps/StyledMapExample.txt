import React from 'react';
import { GoogleMap, withGoogleMap } from 'react-google-maps';

import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';

import fancyMapStyles from '../data/fancyMapStyles.json';
import { Box } from '@material-ui/core';

const google = window.google;

const StyledMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap defaultZoom={11} defaultCenter={props.center} defaultOptions={{ styles: fancyMapStyles }}>
    <InfoBox defaultPosition={props.center} options={{ closeBoxURL: ``, enableEventPropagation: true }}>
      <Box
        style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `20px` }}
        onClick={props.onClickFromChildrenOfInfoBox}>
        <Box fontSize={16} color="#08233B">
          Taipei
        </Box>
      </Box>
    </InfoBox>
  </GoogleMap>
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const StyledMapExample = () => {
  const handleClickFromChildrenOfInfoBox = e => {
    console.log(e);
  };

  return (
    <StyledMapExampleGoogleMap
      loadingElement={<Box height={1} />}
      containerElement={<Box height={{ xs: 300, sm: 400 }} />}
      mapElement={<Box height={1} />}
      center={new google.maps.LatLng(44.8799929, 21.3190073)}
      onClickFromChildrenOfInfoBox={handleClickFromChildrenOfInfoBox}
    />
  );
};

export default StyledMapExample;
