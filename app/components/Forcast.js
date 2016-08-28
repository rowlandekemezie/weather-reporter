import React, { PropTypes } from 'react';
// import Time from 'react-time';
import Loading from './Loading';
import dateFormatter from '../helpers/dateFormatter';

const Forcast = (props) => {
  // let data = WeatherReport(props.weatherInfo);
  const data = props.weatherInfo;
  return props.isLoading === true ? <Loading speed={800} text="Wait for a moment" />
    : <div className="jumbotrun col-sm-12 text-center">
      <div>
        <h1>{props.city}</h1>
        <h1>select a day</h1>
      </div>
      <div>
        <h1><dateFormatter date={data[0].substring(1, 10)} /></h1>
        <h1>{(data[0].substring(13, 16)).concat('.jpg')}</h1>
        <h1>{data[0].substring(19, data[0].length - 2)}</h1>
        <h1>{data[1].substring(1, 10)}</h1>
        <h1>{(data[1].substring(13, 16)).concat('.jpg')}</h1>
        <h1>{data[1].substring(19, data[2].length - 2)}</h1>
        <h1>{data[2].substring(1, 10)}</h1>
        <h1>{(data[2].substring(13, 16)).concat('.jpg')}</h1>
        <h1>{data[2].substring(19, data[2].length - 2)}</h1>
        <h1>{data[3].substring(1, 10)}</h1>
        <h1>{(data[3].substring(13, 16)).concat('.jpg')}</h1>
        <h1>{data[3].substring(19, data[3].length - 2)}</h1>
        <h1>{data[4].substring(1, 10)}</h1>
        <h1>{(data[4].substring(13, 16)).concat('.jpg')}</h1>
        <h1>{data[4].substring(19, data[4].length - 2)}</h1>
        <h1>{data[5].substring(1, 10)}</h1>
        <h1>{(data[5].substring(13, 16)).concat('.jpg')}</h1>
        <h1>{data[5].substring(19, data[5].length - 2)}</h1>
      </div>
      <div>
      </div>
    </div>;
};

Forcast.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  weatherInfo: PropTypes.object
};

export default Forcast;
