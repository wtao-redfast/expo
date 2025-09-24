import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkgrey",
  },
  text: {
    fontSize: 22,
  },
});

export default HomeScreen;
