import React from 'react';
import moment from 'moment';

// A simple class to capture a one-way value transform function.
const ValueTransformer = (transform) => {
  this.func = (typeof transform === 'function')
  ? transform
  : function (value) { return value.toString ? value.toString() : value; };
};

// Transforms the input value according to the pre-defined transform function
ValueTransformer.prototype.getTransformedValue =  (value) => {
  return this.func.call(null, value);
};

// Define our Clock component
// --------------------------
class Clock extends React.Component {
  getTime() {
    return this.props.dateTransform.getTransformedValue(this.props.date);
  }
  render() {
    return <span>{this.getTime()}</span>;
  }
}

// Initialize the ValueTransformer class
// ---------------------------------
const transform = new ValueTransformer((date) => {
  return moment(date).format('h:mm:ss a');
});

Clock.defaultProps = {
  date: new Date(),
  dateTransform: transform
};

export default Clock;

// Update the clocks as time passes
// --------------------------------
//
// window.setInterval(() => {
//   clocks.map(prop => {
//     return if(clocks.hasOwnProperty(prop)) {
//       var clock = clocks[prop];
//       clock.setProps({
//         date: new Date()
//       });
//     }
//   })
// }, 10);


// Define some value transforms
// ----------------------------

// const timeTransform = new ValueTransformer((date) => {
//   return moment(date).format('h:mm:ss a');
// });
//
// const militaryTimeTransform = new ValueTransformer((date)  => {
//   return moment(date).format('HH:mm:ss');
// });
//
// const microTimeTransform = new ValueTransformer((date) => {
//   return moment(date).format('HH:mm:ss:SSS');
// });
//
// const myCustomTransform = new ValueTransformer((date) => {
//   return <span>
//     <h4>{date.getHours()}</h4>
//     <h3>{date.getMinutes()}</h3>
//     <h2>{date.getSeconds()}</h2>
//     <h1>{date.getMilliseconds()}</h1>
//   </span>;
// });
