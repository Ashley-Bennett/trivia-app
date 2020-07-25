import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Text, View, Button } from "react-native";

// Styling
import styles from "./components/Styles/Stylesheet";

//  Pages
import Homepage from "./components/Homepage/Homepage";
import PointsBuilder from "./components/PointsBuilder/PointsBuilder";

const Stack = createStackNavigator();

const ProfileScreen = () => {
  return <Text>This is Jane's profile</Text>;
};

export default class App extends Component {
  Stack = createStackNavigator();
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Homepage}
            options={{ title: "Home" }}
          />

          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Points Builder" component={PointsBuilder} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    );
  }
}
