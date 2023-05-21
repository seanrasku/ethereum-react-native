import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React, { useState, useRef, useEffect, useContext } from "react";
import WordList from "../components/wordlist";
import "react-native-get-random-values";
import "@ethersproject/shims";
import { ethers } from "ethers";
import { MNEMONIC } from "@env";
import { WalletContext } from "../App";
export default function Wallet({ navigation }) {
  const { wallet, setWallet } = useContext(WalletContext);
  const childRef = useRef();
  async function createWallet() {
    try {
      const list = childRef.current.getWordList();
      const mnemonic =
        list[1] +
        " " +
        list[2] +
        " " +
        list[3] +
        " " +
        list[4] +
        " " +
        list[5] +
        " " +
        list[6] +
        " " +
        list[7] +
        " " +
        list[8] +
        " " +
        list[9] +
        " " +
        list[10] +
        " " +
        list[11] +
        " " +
        list[12];
      const path = `m/44'/60'/0'/0/0`;
      const w = ethers.Wallet.fromMnemonic(
        MNEMONIC === undefined ? mnemonic : MNEMONIC,
        path
      );
      setWallet(w);
      navigation.navigate("HomePage");
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <View style={styles.container}>
      <WordList style={{ backgroundColor: "yellow" }} ref={childRef} />
      <TouchableHighlight
        style={styles.buttonView}
        onPress={() => createWallet()}
      >
        <View style={styles.button}>
          <Text>Submit</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

    justifyContent: "space-between",
  },
  header: {
    flex: 0.5,
    backgroundColor: "rgb(0, 50, 100)",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 6,
  },
  title: {
    fontSize: 25,
    color: "white",
  },
  text: {
    fontSize: 18,
  },
  bottom: {
    backgroundColor: "rgb(0, 120, 150)",
    flex: 0.35,
    width: "100%",
    alignItems: "center",
  },
  buttonView: {
    flex: 1,
    justifyContent: "flex-start",
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
});
