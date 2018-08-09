import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Differences in React Native

// - HTML tag components do not exist in React Native.
// - You must any component that your must use.
// - The <View> component is a base that acts like a <div>.
// - You must text inside of a <Text> component.
// - To style components, you must use inline styles.
// - You only get access to a limited subset on CSS properties.
// - All components can only be display "flex".
// - There are only two units: No unit or %.
// - "onClick" is replaced by "onPress".
// - "onPress" is only available on base components
//   that being with "Touchable*". (e.g. TouchableOpacity,
//   TouchableHighlight, etc.)

const Button = props => {
  const { color, title, ...restProps } = props;

  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5
      }}
      {...restProps}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "white"
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const ChronoDisplay = props => {
  const { endTime, startTime } = props;

  const cs = (endTime - startTime)
    .toString()
    .padStart(8, "0")
    .slice(0, -2);

  return (
    <Text
      style={{
        fontSize: 40,
        fontFamily: "Courier New"
      }}
    >
      {cs.slice(0, -1) + "." + cs.slice(-1)}
    </Text>
  );
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startTime: new Date(),
      endTime: new Date()
    };

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  start() {
    if (!this.intervalId) {
      this.setState({
        startTime: new Date(),
        endTime: new Date()
      });

      this.intervalId = setInterval(() => {
        this.setState({
          endTime: new Date()
        });
      }, 100);
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }

  render() {
    const { endTime, startTime } = this.state;

    return (
      <View style={styles.container}>
        <ChronoDisplay startTime={startTime} endTime={endTime} />
        <Button title="Start" color="green" onPress={this.start} />
        <Button title="Stop" color="red" onPress={this.stop} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
