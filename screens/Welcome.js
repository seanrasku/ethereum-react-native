import { StyleSheet, Text, View, Button } from "react-native";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome Home!</Text>
      <Button
        title="Your Wallet"
        onPress={() => navigation.navigate("Create")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
