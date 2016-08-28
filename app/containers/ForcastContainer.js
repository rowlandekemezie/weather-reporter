import React from 'react';
import Forcast from '../components/Forcast';
import api from '../helpers/api';

class ForcastContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    console.log('Mounted');
    api.GetWeatherForcast(this.props.routeParams.city)
      .then(data => { data.data.list.map(day => {
        return this.props.weatherInfo.push(JSON.stringify([day.dt, day.weather[0].icon, day.weather[0].description]));
      });
        this.setState({
          isLoading: false,
        });
      });
  }
  render() {
    return (
      <Forcast
        isLoading={this.state.isLoading}
        weatherInfo={this.props.weatherInfo}
        city={this.props.routeParams.city}
      />
    );
  }
}

ForcastContainer.defaultProps = {
  weatherInfo: []
};

export default ForcastContainer;
