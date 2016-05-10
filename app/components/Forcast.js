import React, { PropTypes } from 'react';
import Loading from './Loading';

const Forcast = (props) => {
  return props.isLoading === true ? <Loading speed={800} text="Wait for a moment" />
    : <div className="jumbotrun col-sm-12 col-sm-offset-3 text-center">
      <h1> The forcast route</h1>
      <h1>{props.isLoading}</h1>
    </div>;
};

Forcast.PropTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default Forcast;
