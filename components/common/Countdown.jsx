import React, { Component } from "react";
import { View, Text } from "react-native";

//  Styles
import styles from "../Styles/Stylesheet";

class Countdown extends Component {
  state = { countdown: null, style: null };

  componentDidMount() {
    this.setState({ countdown: this.props.countdown });
  }

  componentDidUpdate() {
    this.state.countdown > 0 &&
      setTimeout(() => {
        this.setState((prevState) => ({ countdown: --prevState.countdown }));
      }, 1000);
    this.state.countdown <= 0 && this.props.endCountdown();
  }

  render() {
    return (
      <View style={styles.countdownContainer}>
        <Text style={styles[this.props.type]}>{this.state.countdown}</Text>
      </View>
    );
  }
}

export default Countdown;
