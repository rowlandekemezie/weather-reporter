import React, { PropTypes } from 'react';
import styles from '../styles';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.originalText = props.text;
    this.state = {
      isLoading: false,
      text: this.originalText
    };
  }
  componentDidMount() {
    const end = this.originalText.concat('...');
    this.interval = setInterval(() => {
      if (this.state.text === end) {
        this.setState({
          text: this.originalText
        });
      } else {
        this.setState({
          text: this.state.text.concat('.')
        });
      }
    }, this.props.speed);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    );
  }
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
};

Loading.PropTypes = {
  text: PropTypes.string,
  speed: PropTypes.number
};

export default Loading;
