import React, { Component } from "react";
import { View, Text } from "react-native";
import Question from "../requests/question";

class QuestionShowScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      question: undefined
    };
  }

  componentDidMount() {
    const questionId = this.props.navigation.state.params.id;

    Question.one(questionId).then(question =>
      this.setState({ loading: false, question: question })
    );
  }

  render() {
    const { loading, question } = this.state;

    if (loading) {
      return <View />;
    }

    return (
      <View>
        <Text>{question.body}</Text>
      </View>
    );
  }
}

QuestionShowScreen.navigationOptions = props => ({
  title: props.navigation.state.params.title
});

export default QuestionShowScreen;
