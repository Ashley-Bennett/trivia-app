import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
//  Styles
import styles from "../Styles/Stylesheet";
const Spinner = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" />
  </View>
);

export default Spinner;
