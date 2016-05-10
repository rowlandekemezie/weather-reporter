import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../styles';
import api from '../helpers/api';

class Home extends React.Component {
  constructor(context) {
    super(context);
    context.router;
    this.state = {
      city: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }
  handleCityChange(e) {
    this.setState({
      city: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const city = this.state.city.trim();
    if (!city) {
      return;
    }
    api.GetWeatherDetails(city)
      .then((data) => console.log(data.data.weather[0]));
    api.GetWeatherForcast(city)
      .then((data) => console.log(data.data.city));
  }
  render() {
    return (
      <div className="text-center" style={styles.homepage}>
        <div style={styles.search}>
          <h1 style={styles.heardertext}> Enter Location and city </h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group" >
              <input
                className="form-control col-sm-3 text-center"
                type="text"
                value={this.state.city}
                placeholder="Enter city "
                onChange={this.handleCityChange}
              />
            </div>
            <div>
              <Link to={`/forcast/${this.state.city}`}>
                <button type="submit" className="btn btn-success" style={styles.space}>Get Weather</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Home;
