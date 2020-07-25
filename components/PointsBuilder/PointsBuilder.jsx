import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import Countdown from "../common/Countdown";

class PointsBuilder extends Component {
  componentDidMount() {
    fetch(`https://opentdb.com/api.php?amount=50&type=multiple`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
  render() {
    return (
      <View>
        <Countdown countdown={10} />
      </View>
    );
  }
}

export default PointsBuilder;
