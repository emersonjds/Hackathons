import React, { Fragment } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
// import styles from "./styles";
import { ScaledSheet } from "react-native-size-matters";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Teste</Text>
      <View style={styles.secondContainer}>
        <TouchableOpacity style={styles.boxGraph} />
        <TouchableOpacity style={styles.boxGraph_1} />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cecece',
  },
  secondContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: '100%',
    height: "50%",
  },
  boxGraph: {
    height: "30%",
    width: "40%",
    backgroundColor: "blue",
  },
  boxGraph_1: {
    height: "30%",
    width: "40%",
    backgroundColor: "pink",
  },
});

export default App;
