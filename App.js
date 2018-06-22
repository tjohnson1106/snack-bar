import * as React from "react";
import { Component } from "react";

import MainScreen from "./src/components/MainScreen";

export default class App extends Component {
  render() {
    return (
      <MainScreen
        message={"Create"}
        actionText={"Delete"}
        onActionChange={() => {
          Alert.alert("Deleted");
        }}
      />
    );
  }
}
