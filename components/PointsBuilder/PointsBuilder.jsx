import React, { Component } from "react";
import { Text, View, Button } from "react-native";

//  Common Components
import Countdown from "../common/Countdown";
import Spinner from "../common/Spinner";
import styles from "../Styles/Stylesheet";

class PointsBuilder extends Component {
  state = { questions: [], questionsLoaded: false };
  componentDidMount() {
    fetch(`https://opentdb.com/api.php?amount=50&type=multiple`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ questions: data.results, questionsLoaded: true });
      });
  }

  countdownComplete = () => {};
  render() {
    return (
      <View style={styles.container}>
        {this.state.questionsLoaded ? (
          <Countdown countdown={3} type={"largeCountdown"} />
        ) : (
          <Spinner />
        )}
      </View>
    );
  }
}

export default PointsBuilder;
