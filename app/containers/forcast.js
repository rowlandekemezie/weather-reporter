import React, { PropTypes } from 'react';

class Forcast extends React.Component {
  // console.log(this);
  render() {
    return (
      <div className="jumbotrun col-sm-12 col-sm-offset-3 text-center">
        <h1> The forcast route</h1>
      </div>
    );
  }
}
Forcast.PropTypes = {
  header: PropTypes.string.isRequired
};
export default Forcast;
