import React from "react";
import { StyleSheet, View } from "react-native";

const App = () => (
  <View style={styles.container}>
    Hello World!
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
