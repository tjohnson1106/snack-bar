import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated
} from "react-native";

const width = Dimensions.get("window").width;

class MainScreen extends Component {
  state = {
    show: false,
    animated: new Animated.Value(0)
  };

  componentDidMount() {
    this.toggleBar();
  }

  toggleBar() {
    const newState = !this.state.show;
    this.setState({ show: newState });
    Animated.timing(this.state.animated, {
      toValue: newState ? 1 : 0,
      duration: 500
    }).start(newState ? this.hideBar() : null);
  }

  hideBar() {
    setTimeout(() => {
      this.toggleBar();
    }, 4000);
  }

  render() {
    const { message, actionText, onActionPress } = this.props;

    return (
      <View style={styles.root}>
        <Animated.View
          style={{
            backgroundColor: "black",
            flex: 1,
            flexDirection: "row",
            position: "absolute",
            bottom: 0,
            paddingHorizontal: 24,
            paddingVertical: 14,
            transform: [
              {
                translateY: this.state.animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, 1]
                })
              }
            ]
          }}
        >
          <Text numberOfLines={1} style={styles.messageText}>
            {message}
          </Text>
          <Text
            onPress={() => {
              onActionPress && onActionPress();
            }}
            style={styles.undoText}
          >
            {actionText.toUpperCase()}
          </Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "dodgerblue"
  },
  messageText: {
    flex: 1,
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  undoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 24
  }
});

export default MainScreen;
