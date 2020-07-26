import * as React from "react";
import { render } from "react-dom";
import { View, Text } from "react-native";

//  Styles
import styles from "../Styles/Stylesheet";

const Countdown = (props) => {
  const [counter, setCounter] = React.useState(props.countdown);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    counter <= 0 && props.endCountdown();
  }, [counter]);

  return (
    <View>
      <Text style={styles[props.type]}>{counter}</Text>
    </View>
  );
};

export default Countdown;
