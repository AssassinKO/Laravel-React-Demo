import React from 'react';
import Moment from 'moment';

const DayWeather = ({ data }) => {
  const temp = data.main.temp;
  const day = data.dt_txt;
  const iconId = data.weather[0].id;
  Moment.locale('en');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 16,
      }}
      className={'mb-5'}>
      <div>{Moment(day).format('ddd d MMM')}</div>
      <div>{temp.toFixed(1)} °C</div>
      <div>
        <i className={'wi wi-owm-' + iconId} />
      </div>
    </div>
  );
};

export default DayWeather;
