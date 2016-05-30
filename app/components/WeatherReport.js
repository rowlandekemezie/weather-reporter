import React, { PropTypes } from 'react';

const WeatherReport = (props) => {
  console.log('Here man for conversion stuff', props.data);
  const data = props.data;
  data.map(i => {
    return (
      `<div>
        <h1>${i.substring(1, 10)}</h1>
        <h1>${(i.substring(13, 16)).concat('.jpg')}</h1>
        <h1>${i.substring(19, data[0].length - 2)}</h1>
      </div>`
    );
  });
};

export default WeatherReport;
