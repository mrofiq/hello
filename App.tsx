import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello</Text>
        <Text style={styles.gaess}>Gaess</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
  gaess: {
    fontSize: 50,
    fontWeight: "bold",
    color: "cyan"
  },
  hello: {
    fontSize: 50,
    fontWeight: "bold",
    color: "rgb(50,150,80)"
  }
});
