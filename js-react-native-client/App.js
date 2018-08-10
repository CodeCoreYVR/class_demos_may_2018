import React from "react";
import { StyleSheet, Text, View } from "react-native";
import QuestionIndexScreen from "./src/components/QuestionIndexScreen";
import QuestionShowScreen from "./src/components/QuestionShowScreen";
import { createStackNavigator } from "react-navigation";

const MainStack = createStackNavigator({
  QuestionIndex: {
    screen: QuestionIndexScreen
  },
  QuestionShow: {
    screen: QuestionShowScreen
  }
});

export default class App extends React.Component {
  render() {
    return <MainStack />;
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
