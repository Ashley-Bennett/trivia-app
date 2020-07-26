import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import he from "he";

//  Common Components
import Countdown from "../common/Countdown";
import Spinner from "../common/Spinner";
import styles from "../Styles/Stylesheet";
import AnswerButton from "../common/AnswerButton";

const PointsBuilderQuestions = (props) => {
  let answers = [
    <AnswerButton
      answer={he.decode(props.questions[props.questionNumber].correct_answer)}
      correctAnswer={true}
      key={0}
      onPress={props.onPressAnswerButton}
    />,
    <AnswerButton
      answer={he.decode(
        props.questions[props.questionNumber].incorrect_answers[0]
      )}
      correctAnswer={false}
      key={1}
      onPress={props.onPressAnswerButton}
    />,
    <AnswerButton
      answer={he.decode(
        props.questions[props.questionNumber].incorrect_answers[1]
      )}
      correctAnswer={false}
      key={2}
      onPress={props.onPressAnswerButton}
    />,
    <AnswerButton
      answer={he.decode(
        props.questions[props.questionNumber].incorrect_answers[2]
      )}
      correctAnswer={false}
      key={3}
      onPress={props.onPressAnswerButton}
    />,
  ];

  const shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  shuffle(answers);
  return (
    <View>
      <Text>{he.decode(props.questions[props.questionNumber].question)}</Text>
      {answers.map((answer) => {
        return answer;
      })}
    </View>
  );
};

class PointsBuilder extends Component {
  state = {
    points: 0,
    questionNumber: 0,
    questions: [],
    questionsLoaded: false,
    readyCountdown: true,
  };
  componentDidMount() {
    fetch(`https://opentdb.com/api.php?amount=50&type=multiple`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ questions: data.results, questionsLoaded: true });
      });
  }

  endCountdown = () => {
    this.setState({ readyCountdown: false });
  };

  onPressAnswerButton = (e, correctAnswer) => {
    console.log(correctAnswer);
    if (correctAnswer) {
      this.setState((prevState) => ({
        points: (prevState.points += 1000),
        questionNumber: ++prevState.questionNumber,
      }));
    } else {
      this.setState((prevState) => ({
        questionNumber: ++prevState.questionNumber,
      }));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.points}</Text>
        {this.state.questionsLoaded ? (
          // this.state.readyCountdown ? (
          //   <Countdown
          //     countdown={3}
          //     endCountdown={this.endCountdown}
          //     type={"largeCountdown"}
          //   />
          // ) : (
          <PointsBuilderQuestions
            onPressAnswerButton={this.onPressAnswerButton}
            questions={this.state.questions}
            questionNumber={this.state.questionNumber}
          />
        ) : (
          // )
          <Spinner />
        )}
      </View>
    );
  }
}

export default PointsBuilder;
