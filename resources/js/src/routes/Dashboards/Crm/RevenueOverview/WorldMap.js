import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const markers = [
  { markerOffset: 25, name: 'Montevideo', coordinates: [-56.1645, -34.9011] },
  { markerOffset: -15, name: 'Caracas', coordinates: [-66.9036, 10.4806] },
  { markerOffset: -15, name: 'Lima', coordinates: [-77.0428, -12.0464] },
];
const WorldMap = () => {
  return (
    <ComposableMap data-tip="" projectionConfig={{ scale: 150 }} height={460}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} fill="#EAEAEC" stroke="#D6D6DA" />)
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={20} fill="#F00" stroke="#fff" strokeWidth={2} opacity={0.4} />
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default WorldMap;
