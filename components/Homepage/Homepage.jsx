import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// Styling
import styles from "../Styles/Stylesheet";

class Homepage extends Component {
  onPressButton = () => {
    alert("You tapped the button!");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> Multiple Choice Trivia App </Text>
        <View style={styles.buttonContainer}>
          <Button onPress={this.onPressButton} title="Press Me" />
          <Button
            title="Start"
            onPress={() =>
              this.props.navigation.navigate("Points Builder", { name: "Jane" })
            }
          />
          <Button
            title="Go to Jane's profile"
            onPress={() =>
              this.props.navigation.navigate("Profile", { name: "Jane" })
            }
          />
        </View>
      </View>
    );
  }
}

export default Homepage;
