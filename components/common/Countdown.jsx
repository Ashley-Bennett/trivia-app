import React, { Component } from "react";
import { View, Text } from "react-native";

class Countdown extends Component {
  state = { countdown: null };

  componentDidMount() {
    this.setState({ countdown: this.props.countdown });
  }

  componentDidUpdate() {
    this.state.countdown > 0 &&
      setTimeout(() => {
        this.setState((prevState) => ({ countdown: --prevState.countdown }));
      }, 1000);
  }

  render() {
    return (
      <View>
        <Text>{this.state.countdown}</Text>
      </View>
    );
  }
}

export default Countdown;
