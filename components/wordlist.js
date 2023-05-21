import React, { useState, forwardRef, useImperativeHandle } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const WordList = forwardRef((props, _ref) => {
  const [wordlist, setWordList] = useState({});
  const handleInput = (e, index) => {
    setWordList((prevState) => ({
      ...prevState,
      [index]: e,
    }));
  };
  useImperativeHandle(_ref, () => ({
    getWordList: () => {
      return Object.keys(wordlist).length == 12 ? wordlist : "Invalid Mnemonic";
    },
  }));
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Enter Your Wallet Mnemonic</Text>
      </View>
      <View style={styles.wordlist}>
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            handleInput(e, 1);
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            handleInput(e, 2);
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            handleInput(e, 3);
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            handleInput(e, 4);
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            handleInput(e, 5);
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            handleInput(e, 6);
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            handleInput(e, 7);
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            handleInput(e, 8);
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            handleInput(e, 9);
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            handleInput(e, 10);
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            handleInput(e, 11);
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            handleInput(e, 12);
          }}
        />
      </View>
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 25,
    textDecorationLine: "underline",
  },
  headerView: {
    marginTop: 20,
    marginBottom: 60,
  },
  wordlist: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 15,
    marginHorizontal: 10,
    width: "25%",
  },
});

export default WordList;
