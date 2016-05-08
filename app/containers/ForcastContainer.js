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
      .then(data => { console.log(JSON.stringify(data.data.city));
        this.setState({
          isLoading: false
        });
      });
  }
  render() {
    return (
      <Forcast
        isLoading={this.state.isLoading}
      />
    );
  }
}

export default ForcastContainer;
