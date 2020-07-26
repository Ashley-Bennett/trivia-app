import React, { Component } from "react";
import { Button, Text } from "react-native";

class AnswerButton extends Component {
  render() {
    return (
      <Button
        onPress={(e, correctAnswer) => {
          this.props.onPress(e, this.props.correctAnswer);
        }}
        title={this.props.answer}
        correctAnswer={this.props.correctAnswer}
      />
    );
  }
}

export default AnswerButton;
