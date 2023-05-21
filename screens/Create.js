import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
} from "react-native";
import { useState } from "react";
export default function Create({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  //For when add in server, will handle in a later project
  async function handleSubmit() {
    // console.log("clicked!");
    // try {
    //   if (password === confirm) {
    //     const user = {
    //       username: username,
    //       password: password,
    //     };
    //     const response = await register(user);
    //     console.log(response.data);
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
    navigation.navigate("Wallet");
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Create a Profile</Text>
        </View>
        <View style={styles.fieldContainer}>
          <View style={styles.field}>
            <Text style={styles.fieldText}>Enter a Username: </Text>
            <Text style={styles.fieldText}>Enter a Password: </Text>
            <Text style={styles.fieldText}>Confirm Password: </Text>
          </View>
          <View style={styles.field}>
            <TextInput
              style={styles.input}
              placeholder="Set Username"
              onChangeText={(u) => setUsername(u)}
            />
            <TextInput
              style={styles.input}
              placeholder="Set Password"
              onChangeText={(p) => setPassword(p)}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              onChangeText={(c) => setConfirm(c)}
            />
          </View>
        </View>
        <View style={styles.submit}>
          <TouchableHighlight
            onPress={() => handleSubmit()}
            // disabled={
            //   username === "" || password !== confirm || password === ""
            // }
          >
            <View style={styles.button}>
              <Text style={styles.text}>Submit</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.text}>By TruthLedgers</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(180, 200, 200)",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "1px solid black",
  },
  field: {
    flexDirection: "column",
  },
  fieldContainer: {
    backgroundColor: "rgb(180, 200, 200)",
    width: "100%",
    flex: 4,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
  },

  input: {
    fontSize: 18,
    paddingRight: 10,
    paddingBottom: 10,
  },
  fieldText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    fontSize: 18,
  },
  title: {
    fontSize: 35,
    fontFamily: "Bodoni 72",
    color: "white",
  },
  titleContainer: {
    backgroundColor: "rgb(0,50,100)",
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  submit: {
    justifyContent: "flex-start",
    flex: 4,
    width: "50%",
  },
  button: {
    backgroundColor: "rgb(0,180,200)",
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "black",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    alignItems: "center",
  },
  bottom: {
    backgroundColor: "rgb(0, 120, 150)",
    flex: 0.5,
    width: "100%",
    alignItems: "center",
  },
});
