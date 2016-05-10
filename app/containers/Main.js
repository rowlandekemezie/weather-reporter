import React from 'react';
import Header from './Header';
// import api from '../helpers/api';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
         {this.props.children}
      </div>
     );
  }
}

// function GetWeatherUpdate() {
//   return api.GetWeatherForcast()
//     .then((data) => console.log(data));
// }
//
// function GetWeatherReport() {
//   return api.GetWeatherDetails()
//     .then((data) => console.log(data));
// }

export default Main;
