import React, { Component } from "react";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";
import Question from "../requests/question";

class QuestionIndexScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    Question.all().then(questions => this.setState({ questions: questions }));
  }

  render() {
    const { questions } = this.state;

    return (
      <ScrollView>
        {questions.map(question => (
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("QuestionShow", {
                id: question.id,
                title: question.title
              })
            }
            style={{
              padding: 10
            }}
            key={question.id}
          >
            <Text
              style={{
                fontSize: 20
              }}
              numberOfLines={2}
            >
              {question.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

QuestionIndexScreen.navigationOptions = {
  title: "Questions"
};

export default QuestionIndexScreen;
