import React, {Component} from "react";
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
    animated: new Animated.Value(0)
  };

  componentDidMount() {
    this.toggleBar();
  }

  toggleBar() {
    Animated.timing(this.state.animated, {
      toValue: 1,
      duration: 500
    }).start;
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.snack}>
          <Text numberOfLines={1} style={styles.messageText}>
            Message
          </Text>
          <Text style={styles.undoText}>Undo</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  snack: {
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
          outputRange: [0, 1]
        })
      }
    ]
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
